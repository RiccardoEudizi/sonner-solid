import './styles.css';
import { getAsset, Loader } from './assets';
import type { HeightT, ToastT, ToastToDismiss, ExternalToast, ToasterProps, ToastProps } from './types';
import { ToastState, toast } from './state';
import {
  createEffect,
  createMemo,
  createSignal,
  onMount,
  type JSX,
  on,
  splitProps,
  onCleanup,
  For,
  Show,
  Suspense,
} from 'solid-js';

// Visible toasts amount
const VISIBLE_TOASTS_AMOUNT = 3;

// Viewport padding
const VIEWPORT_OFFSET = '32px';

// Default lifetime of a toasts (in ms)
const TOAST_LIFETIME = 4000;

// Default toast width
const TOAST_WIDTH = 356;

// Default gap between toasts
const GAP = 14;

const SWIPE_THRESHOLD = 20;

const TIME_BEFORE_UNMOUNT = 200;

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const Toast = (props: ToastProps) => {
  const [mounted, setMounted] = createSignal(false);
  const [removed, setRemoved] = createSignal(false);
  const [swiping, setSwiping] = createSignal(false);
  const [swipeOut, setSwipeOut] = createSignal(false);
  const [offsetBeforeRemove, setOffsetBeforeRemove] = createSignal(0);
  const [initialHeight, setInitialHeight] = createSignal(0);
  let dragStartTime = null;
  let toastRef: HTMLLIElement | null = null;
  const isFront = () => props.index === 0;
  const isVisible = () => props.index + 1 <= props.visibleToasts;
  const toastType = () => props.toast.type;
  const dismissible = () => props.toast.dismissible !== false;
  const toastclass = () => props.toast.className ?? '';
  const toastDescriptionclass = () => props.toast.descriptionClassName ?? '';
  const gap = () => props.gap || GAP;
  // Height index is used to calculate the offset as it gets updated before the toast array, which means we can calculate the new layout faster.
  const heightIndex = () => props.heights.findIndex((height) => height.toastId === props.toast.id) || 0;

  const duration = () => props.toast.duration || props.duration || TOAST_LIFETIME;

  let closeTimerStartTimeRef = 0;

  let lastCloseTimerStartTimeRef = 0;
  let pointerStartRef = null;
  const [y, x] = props.position.split('-');
  const toastsHeightBefore = () => {
    return props.heights.reduce((prev, curr, reducerIndex) => {
      // Calculate offset up until current  toast
      if (reducerIndex >= heightIndex()) {
        return prev;
      }

      return prev + curr.height;
    }, 0);
  };

  const invert = props.toast.invert || props.invert;
  const disabled = () => toastType() === 'loading';

  const offset = () => heightIndex() * gap() + toastsHeightBefore();

  createEffect(() => {
    console.log(offset(), removed(), heightIndex(), gap(), toastsHeightBefore(), props.heights);
  });
  onMount(() => {
    // Trigger enter animation without using CSS animation
    setMounted(true);
  });

  createEffect(
   
      () => {
        if (!mounted()) return;
        const toastNode = toastRef;
        const originalHeight = toastNode.style.height;
        toastNode.style.height = 'auto';
        const newHeight = toastNode.getBoundingClientRect().height;
        toastNode.style.height = originalHeight;

        setInitialHeight(newHeight);

        props.setHeights((heights) => {
          const alreadyExists = heights.find((height) => height.toastId === props.toast.id);
          if (!alreadyExists) {
          console.log("ENTERED",[{ toastId: props.toast.id, height: newHeight }, ...heights]);
          
            return [{ toastId: props.toast.id, height: newHeight }, ...heights];
          } else {
          
            return heights.map((height) => (height.toastId === props.toast.id ? { ...height, height: newHeight } : height));
          }
        });
      },
    
  );

  const deleteToast = () => {
    // Save the offset for the exit swipe animation
    setRemoved(true);
    setOffsetBeforeRemove(offset());
    props.setHeights((h) => h.filter((height) => height.toastId !== props.toast.id));

    setTimeout(() => {
      props.removeToast(props.toast);
    }, TIME_BEFORE_UNMOUNT);
  };

  createEffect(
    on(
      () =>
        [
          props.expanded,
          props.interacting,
          props.expandByDefault,
          props.toast,
          duration(),
          props.toast.promise,
          toastType(),
        ] as const,
      ([expanded, interacting, expandByDefault, toast, duration, promise, toastType]) => {
        if ((promise && toastType === 'loading') || duration === Infinity) return;
        let timeoutId: NodeJS.Timeout;
        let remainingTime = duration;
        // Pause the timer on each hover
        const pauseTimer = () => {
          if (lastCloseTimerStartTimeRef < closeTimerStartTimeRef) {
            // Get the elapsed time since the timer started
            const elapsedTime = new Date().getTime() - closeTimerStartTimeRef;

            remainingTime = remainingTime - elapsedTime;
          }

          lastCloseTimerStartTimeRef = new Date().getTime();
        };

        const startTimer = () => {
          closeTimerStartTimeRef = new Date().getTime();

          // Let the toast know it has started
          timeoutId = setTimeout(() => {
            toast.onAutoClose?.(toast);
            deleteToast();
          }, remainingTime);
        };

        if (expanded || interacting) {
          pauseTimer();
        } else {
          startTimer();
        }

        return () => clearTimeout(timeoutId);
      },
    ),
  );

  createEffect(
    on(
      () => props.toast.id,
      (id) => {
        const toastNode = toastRef;

        if (toastNode) {
          const height = toastNode.getBoundingClientRect().height;


          // Add toast height to heights array after the toast is mounted
          setInitialHeight(height);
         

          
        }
      },
    ),
  );

   onCleanup(() => props.setHeights((h) => h.filter((height) => height.toastId !== props.toast.id)))

  createEffect(
    on(
      () => props.toast.delete,
      (d) => {
        if (d) {
          deleteToast();
        }
      },
    ),
  );

  function getLoadingIcon() {
    if (props.loadingIcon) {
      return (
        <div class="loader" data-visible={toastType() === 'loading'}>
          {props.loadingIcon}
        </div>
      );
    }
    return <Loader visible={toastType() === 'loading'} />;
  }

  return (
    <li
      aria-live={props.toast.important ? 'assertive' : 'polite'}
      aria-atomic="true"
      role="status"
      tabIndex={0}
      ref={toastRef}
      class={cn(
        props.className,
        toastclass(),
        props.classNames?.toast,
        props.toast?.classNames?.toast,
        props.classNames?.[toastType()],
        props.toast?.classNames?.[toastType()],
      )}
      data-sonner-toast=""
      data-styled={!Boolean(props.toast.jsx || props.toast.unstyled || props.unstyled)}
      data-mounted={mounted()}
      data-promise={Boolean(props.toast.promise)}
      data-removed={removed()}
      data-visible={isVisible()}
      data-y-position={y}
      data-x-position={x}
      data-index={props.index}
      data-front={isFront()}
      data-swiping={swiping()}
      data-dismissible={dismissible()}
      data-type={toastType()}
      data-invert={invert}
      data-swipe-out={swipeOut()}
      data-expanded={Boolean(props.expanded || (props.expandByDefault && mounted()))}
      style={{
        '--index': props.index,
        '--toasts-before': props.index,
        '--z-index': props.toasts.length - props.index,
        '--offset': `${removed() ? offsetBeforeRemove() : offset()}px`,
        '--initial-height': props.expandByDefault ? 'auto' : `${initialHeight()}px`,
        ...props.style,
        ...props.toast.style,
      }}
      onPointerDown={(event) => {
        if (disabled() || !dismissible()) return;
        dragStartTime = new Date();
        setOffsetBeforeRemove(offset());
        // Ensure we maintain correct pointer capture even when going outside of the toast (e.g. when swiping)
        (event.target as HTMLElement).setPointerCapture(event.pointerId);
        if ((event.target as HTMLElement).tagName === 'BUTTON') return;
        setSwiping(true);
        pointerStartRef = { x: event.clientX, y: event.clientY };
      }}
      onPointerUp={(event) => {
        if (swipeOut() || !dismissible()) return;

        pointerStartRef = null;

        const swipeAmount = Number(
          (event.target as HTMLLIElement)?.style.getPropertyValue('--swipe-amount').replace('px', '') || 0,
        );
        const timeTaken = new Date().getTime() - dragStartTime?.getTime();
        const velocity = Math.abs(swipeAmount) / timeTaken;

        // Remove only if threshold is met
        if (Math.abs(swipeAmount) >= SWIPE_THRESHOLD || velocity > 0.11) {
          setOffsetBeforeRemove(offset());
          props.toast.onDismiss?.(props.toast);
          deleteToast();
          setSwipeOut(true);
          return;
        }

        (event.target as HTMLLIElement)?.style.setProperty('--swipe-amount', '0px');
        setSwiping(false);
      }}
      onPointerMove={(event) => {
        if (!pointerStartRef || !dismissible()) return;

        const yPosition = event.clientY - pointerStartRef.y;
        const xPosition = event.clientX - pointerStartRef.x;

        const clamp = y === 'top' ? Math.min : Math.max;
        const clampedY = clamp(0, yPosition);
        const swipeStartThreshold = event.pointerType === 'touch' ? 10 : 2;
        const isAllowedToSwipe = Math.abs(clampedY) > swipeStartThreshold;

        if (isAllowedToSwipe) {
          (event.target as HTMLLIElement)?.style.setProperty('--swipe-amount', `${yPosition}px`);
        } else if (Math.abs(xPosition) > swipeStartThreshold) {
          // User is swiping in wrong direction so we disable swipe gesture
          // for the current pointer down interaction
          pointerStartRef = null;
        }
      }}
    >
      {props.closeButton && !props.toast.jsx ? (
        <button
          aria-label={props.closeButtonAriaLabel}
          data-disabled={disabled()}
          data-close-button
          onClick={
            disabled() || !dismissible()
              ? () => {}
              : () => {
                  deleteToast();
                  props.toast.onDismiss?.(props.toast);
                }
          }
          class={cn(props.classNames?.closeButton, props.toast?.classNames?.closeButton)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      ) : null}
      {props.toast.jsx || props.toast.title ? (
        props.toast.jsx || props.toast.title
      ) : (
        <>
          {toastType() || props.toast.icon || toast.promise ? (
            <div data-icon="">
              {(props.toast.promise || props.toast.type === 'loading') && !props.toast.icon ? getLoadingIcon() : null}
              {props.toast.icon || getAsset(toastType())}
            </div>
          ) : null}

          <div data-content="">
            <div data-title="" class={cn(props.classNames?.title, props.toast?.classNames?.title)}>
              {props.toast.title}
            </div>
            {props.toast.description ? (
              <div
                data-description=""
                class={cn(
                  props.descriptionClassName,
                  toastDescriptionclass(),
                  props.classNames?.description,
                  props.toast?.classNames?.description,
                )}
              >
                {props.toast.description}
              </div>
            ) : null}
          </div>
          {props.toast.cancel ? (
            <button
              data-button
              data-cancel
              style={props.toast.cancelButtonStyle || props.cancelButtonStyle}
              onClick={(event) => {
                if (!dismissible()) return;
                deleteToast();
                if (props.toast.cancel?.onClick) {
                  props.toast.cancel.onClick(event);
                }
              }}
              class={cn(props.classNames?.cancelButton, props.toast?.classNames?.cancelButton)}
            >
              {props.toast.cancel.label}
            </button>
          ) : null}
          {props.toast.action ? (
            <button
              data-button=""
              style={props.toast.actionButtonStyle ?? props.actionButtonStyle}
              onClick={(event) => {
                props.toast.action?.onClick(event);
                if (event.defaultPrevented) return;
                deleteToast();
              }}
              class={cn(props.classNames?.actionButton, props.toast?.classNames?.actionButton)}
            >
              {props.toast.action.label}
            </button>
          ) : null}
        </>
      )}
    </li>
  );
};

function getDocumentDirection(): ToasterProps['dir'] {
  if (typeof window === 'undefined') return 'ltr';
  if (typeof document === 'undefined') return 'ltr'; // For Fresh purpose

  const dirAttribute = document.documentElement.getAttribute('dir');

  if (dirAttribute === 'auto' || !dirAttribute) {
    return window.getComputedStyle(document.documentElement).direction as ToasterProps['dir'];
  }

  return dirAttribute as ToasterProps['dir'];
}
const Toaster = (props: ToasterProps) => {
  const hotkey = () => props.hotkey || ['altKey', 'KeyT'];
  const [toasts, setToasts] = createSignal<ToastT[]>([]);
  const possiblePositions = () => {
    return Array.from(
      new Set(
        [props.position].concat(
          toasts()
            .filter((toast) => toast.position)
            .map((toast) => toast.position),
        ),
      ),
    );
  };

  const [heights, setHeights] = createSignal<HeightT[]>([]);
  const [expanded, setExpanded] = createSignal(false);
  const [interacting, setInteracting] = createSignal(false);
  const [actualTheme, setActualTheme] = createSignal('');

  let listRef: HTMLOListElement | null = null;
  const hotkeyLabel = () => hotkey().join('+').replace(/Key/g, '').replace(/Digit/g, '');
  let lastFocusedElementRef: HTMLElement = null;
  let isFocusWithinRef = false;

  const removeToast = (toast: ToastT) => setToasts((toasts) => toasts.filter(({ id }) => id !== toast.id));

  onMount(() => {
    ToastState.subscribe((toast) => {
      if ((toast as ToastToDismiss).dismiss) {
        setToasts((toasts) => toasts.map((t) => (t.id === toast.id ? { ...t, delete: true } : t)));
      } else {
        // Prevent batching, temp solution.

        setTimeout(() => {
          setToasts((toasts) => {
            const indexOfExistingToast = toasts.findIndex((t) => t.id === toast.id);

            // Update the toast if it already exists
            if (indexOfExistingToast !== -1) {
              return [
                ...toasts.slice(0, indexOfExistingToast),
                { ...toasts[indexOfExistingToast], ...toast },
                ...toasts.slice(indexOfExistingToast + 1),
              ] as ToastT[];
            }

            return [toast, ...toasts] as ToastT[];
          });
        });
      }
    });

    document.addEventListener('keydown', handleKeyDown);

    setActualTheme(
      props.theme !== 'system'
        ? props.theme
        : typeof window !== 'undefined'
        ? window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : 'light',
    );
  });

  createEffect(
    on(
      () => props.theme,
      (theme) => {
        if (theme !== 'system') {
          setActualTheme(theme);
          return;
        }

        if (theme === 'system') {
          // check if current preference is dark
          if (window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // it's currently dark
            setActualTheme('dark');
          } else {
            // it's not dark
            setActualTheme('light');
          }
        }

        if (typeof window === 'undefined') return;

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
          if (matches) {
            setActualTheme('dark');
          } else {
            setActualTheme('light');
          }
        });
      },
    ),
  );
  createEffect(() => {
    // Ensure expanded is always false when no toasts are present / only one left
    if (toasts().length <= 1) {
      setExpanded(false);
    }
  });
  const handleKeyDown = (event: KeyboardEvent) => {
    const isHotkeyPressed = hotkey().every((key) => (event as any)[key] || event.code === key);

    if (isHotkeyPressed) {
      setExpanded(true);
      listRef?.focus();
    }

    if (event.code === 'Escape' && (document.activeElement === listRef || listRef?.contains(document.activeElement))) {
      setExpanded(false);
    }
  };

  createEffect(
    on(
      () => listRef,
      (ref) => {
        if (ref) {
          return () => {
            if (lastFocusedElementRef) {
              lastFocusedElementRef.focus({ preventScroll: true });
              lastFocusedElementRef = null;
              isFocusWithinRef = false;
            }
          };
        }
      },
    ),
  );

  const dir = getDocumentDirection();

  return (
    <Show when={toasts().length}>
      <section aria-label={`${props.containerAriaLabel || 'Notifications'} ${hotkeyLabel()}`} tabIndex={-1}>
        <For each={possiblePositions()}>
          {(position, index) => {
            const [y, x] = position.split('-');
            return (
              <ol
                dir={dir === 'auto' ? getDocumentDirection() : dir}
                tabIndex={-1}
                ref={listRef}
                class={props.className}
                data-sonner-toaster
                data-theme={actualTheme()}
                data-rich-colors={props.richColors}
                data-y-position={y}
                data-x-position={x}
                style={{
                  '--front-toast-height': `${heights()[0]?.height}px`,
                  '--offset': typeof props.offset === 'number' ? `${props.offset}px` : props.offset ?? VIEWPORT_OFFSET,
                  '--width': `${TOAST_WIDTH}px`,
                  '--gap': `${GAP}px`,
                  ...props.style,
                }}
                onBlur={(event) => {
                  if (isFocusWithinRef && !event.currentTarget.contains(event.relatedTarget as HTMLElement)) {
                    isFocusWithinRef = false;
                    if (lastFocusedElementRef) {
                      lastFocusedElementRef.focus({ preventScroll: true });
                      lastFocusedElementRef = null;
                    }
                  }
                }}
                onFocus={(event) => {
                  const isNotDismissible =
                    event.target instanceof HTMLElement && event.target.dataset.dismissible === 'false';

                  if (isNotDismissible) return;

                  if (!isFocusWithinRef) {
                    isFocusWithinRef = true;
                    lastFocusedElementRef = event.relatedTarget as HTMLElement;
                  }
                }}
                onmouseenter={() => {
                  console.log(listRef);

                  setExpanded(true);
                }}
                onmousemove={() => {
                  setExpanded(true);
                }}
                onmouseleave={() => {
                  // Avoid setting expanded to false when interacting with a toast, e.g. swiping
                  if (!interacting()) {
                    setExpanded(false);
                  }
                }}
                onPointerDown={(event) => {
                  const isNotDismissible =
                    event.target instanceof HTMLElement && event.target.dataset.dismissible === 'false';

                  if (isNotDismissible) return;
                  setInteracting(true);
                }}
                onPointerUp={() => setInteracting(false)}
              >
                <For
                  each={toasts().filter((toast) => (!toast.position && index() === 0) || toast.position === position)}
                >
                  {(toast, index) => (
                    <Toast
                      index={index()}
                      toast={toast}
                      duration={props.toastOptions?.duration ?? props.duration}
                      className={props.toastOptions?.className}
                      descriptionClassName={props.toastOptions?.descriptionClassName}
                      invert={props.invert}
                      visibleToasts={props.visibleToasts ?? VISIBLE_TOASTS_AMOUNT}
                      closeButton={props.closeButton}
                      interacting={interacting()}
                      position={position || 'bottom-right'}
                      style={props.toastOptions?.style}
                      unstyled={props.toastOptions?.unstyled}
                      classNames={props.toastOptions?.classNames}
                      cancelButtonStyle={props.toastOptions?.cancelButtonStyle}
                      actionButtonStyle={props.toastOptions?.actionButtonStyle}
                      removeToast={removeToast}
                      toasts={toasts()}
                      heights={heights()}
                      setHeights={setHeights}
                      expandByDefault={props.expand}
                      gap={props.gap}
                      loadingIcon={props.loadingIcon}
                      expanded={expanded()}
                    />
                  )}
                </For>
              </ol>
            );
          }}
        </For>
      </section>
    </Show>
  );
};
export { toast, Toaster, type ToastT, type ExternalToast };
