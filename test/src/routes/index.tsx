import { createSignal } from 'solid-js';

import { Toaster, toast } from 'solid-sonner';




export default function Home() {
  const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));
  const [showAutoClose, setShowAutoClose] = createSignal(false);
  const [showDismiss, setShowDismiss] = createSignal(false);
  const [theme, setTheme] = createSignal<"light" | "dark" | "system" | undefined>( 'light');
  const [isFinally, setIsFinally] = createSignal(false);

  return (
    <>
      <button data-testid="theme-button" class="button" onClick={() => setTheme('dark')}>
        Change theme
      </button>
      <button data-testid="default-button" class="button" onClick={() => toast('My Toast')}>
        Render Toast
      </button>
      <button data-testid="default-button-top" class="button" onClick={() => toast('My Toast')}>
        Render Toast Top
      </button>
      <button data-testid="success" class="button" onClick={() => toast.success('My Success Toast')}>
        Render Success Toast
      </button>
      <button data-testid="error" class="button" onClick={() => toast.error('My Error Toast')}>
        Render Error Toast
      </button>
      <button
        data-testid="action"
        class="button"
        onClick={() =>
          toast('My Message', {
            action: {
              label: 'Action',
              onClick: () => console.log('Action'),
            },
          })
        }
      >
        Render Action Toast
      </button>
      <button
        data-testid="action-prevent"
        class="button"
        onClick={() =>
          toast('My Message', {
            action: {
              label: 'Action',
              onClick: (event: MouseEvent) => {
                event.preventDefault();
                console.log('Action');
              },
            },
          })
        }
      >
        Render Action Toast
      </button>
      <button
        data-testid="promise"
        data-finally={isFinally() ? '1' : '0'}
        class="button"
        onClick={() =>
          toast.promise(promise, {
            loading: 'Loading...',
            success: 'Loaded',
            error: 'Error',
            finally: () => {setIsFinally(true)}
          })
        }
      >
        Render Promise Toast
      </button>
      <button
        data-testid="custom"
        class="button"
        onClick={() =>
          toast.custom((t:any) => (
            <div>
              <h1>jsx</h1>
              <button data-testid="dismiss-button" onClick={() => toast.dismiss(t)}>
                Dismiss
              </button>
            </div>
          ))
        }
      >
        Render Custom Toast
      </button>
      <button
        data-testid="custom-cancel-button-toast"
        class="button"
        onClick={() =>
          toast('My Custom Cancel Button', {
            cancel: {
              label: 'Cancel',
              onClick: () => console.log('Cancel'),
            },
          })
        }
      >
        Render Custom Cancel Button
      </button>
      <button data-testid="infinity-toast" class="button" onClick={() => toast('My Toast', { duration: Infinity })}>
        Render Infinity Toast
      </button>
      <button
        data-testid="auto-close-toast-callback"
        class="button"
        onClick={() =>
          toast('My Toast', {
            onAutoClose: () => setShowAutoClose(true),
          })
        }
      >
        Render Toast With onAutoClose callback
      </button>
      <button
        data-testid="dismiss-toast-callback"
        class="button"
        onClick={() =>
          toast('My Toast', {
            onDismiss: () => setShowDismiss(true),
          })
        }
      >
        Render Toast With onAutoClose callback
      </button>
      <button
        data-testid="non-dismissible-toast"
        class="button"
        onClick={() =>
          toast('My Toast', {
            dismissible: false,
          })
        }
      >
        Non-dismissible Toast
      </button>
      <button
        data-testid="update-toast"
        class="button"
        onClick={() => {
          const toastId = toast('My Unupdated Toast', {
            duration: 10000,
          });
          toast('My Updated Toast', {
            id: toastId,
            duration: 10000,
          });
        }}
      >
        Updated Toast
      </button>
      {showAutoClose() ? <div data-testid="auto-close-el" /> : null}
      {showDismiss() ? <div data-testid="dismiss-el" /> : null}
      <Toaster
        position={ 'bottom-right'}
        toastOptions={{
          actionButtonStyle: { "background-color": 'rgb(219, 239, 255)' },
          cancelButtonStyle: { "background-color": 'rgb(254, 226, 226)' },
        
        }}
        theme={theme() }
        dir={'auto'}
      />
    </>
  );
}

// Home.theme = 'light';
