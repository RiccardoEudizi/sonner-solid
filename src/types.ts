import { Setter } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";


export type ToastTypes = 'normal' | 'action' | 'success' | 'info' | 'warning' | 'error' | 'loading' | 'default';

export type PromiseT<Data = any> = Promise<Data> | (() => Promise<Data>);

export type PromiseExternalToast = Omit<ExternalToast, 'description'>;

export type PromiseData<ToastData = any> = PromiseExternalToast & {
  loading?: string | JSX.Element;
  success?: string | JSX.Element | ((data: ToastData) => JSX.Element | string);
  error?: string | JSX.Element | ((error: any) => JSX.Element | string);
  description?: string | JSX.Element | ((data: any) => JSX.Element | string);
  finally?: () => void | Promise<void>;
};

export interface ToastClassnames {
  toast?: string;
  title?: string;
  description?: string;
  loader?: string;
  closeButton?: string;
  cancelButton?: string;
  actionButton?: string;
  success?: string;
  error?: string;
  info?: string;
  warning?: string;
  default?: string;
}

export interface ToastT {
  id: number | string;
  title?: string | JSX.Element;
  type?: ToastTypes;
  icon?: JSX.Element;
  jsx?: JSX.Element;
  invert?: boolean;
  dismissible?: boolean;
  description?: JSX.Element;
  duration?: number;
  delete?: boolean;
  important?: boolean;
  action?: {
    label: JSX.Element;
    onClick: (event: MouseEvent) => void;
  };
  cancel?: {
    label: JSX.Element;
    onClick?: (event: MouseEvent) => void;
  };
  onDismiss?: (toast: ToastT) => void;
  onAutoClose?: (toast: ToastT) => void;
  promise?: PromiseT;
  cancelButtonStyle?: JSX.CSSProperties;
  actionButtonStyle?: JSX.CSSProperties;
  style?: JSX.CSSProperties;
  unstyled?: boolean;
  className?: string;
  classNames?: ToastClassnames;
  descriptionClassName?: string;
  position?: Position;
}

export type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
export interface HeightT {
  height: number;
  toastId: number | string;
}

interface ToastOptions {
  className?: string;
  descriptionClassName?: string;
  style?:  JSX.CSSProperties;
  cancelButtonStyle?: JSX.CSSProperties;
  actionButtonStyle?: JSX.CSSProperties;
  duration?: number;
  unstyled?: boolean;
  classNames?: ToastClassnames;
}

export interface ToasterProps {
  invert?: boolean;
  theme?: 'light' | 'dark' | 'system';
  position?: Position;
  hotkey?: string[];
  richColors?: boolean;
  expand?: boolean;
  duration?: number;
  gap?: number;
  visibleToasts?: number;
  closeButton?: boolean;
  toastOptions?: ToastOptions;
  className?: string ;
  style?:  JSX.CSSProperties;
  offset?: string | number;
  dir?: 'rtl' | 'ltr' | 'auto';
  loadingIcon?: JSX.Element;
  containerAriaLabel?: string;
}

export interface ToastProps {
  toast: ToastT;
  toasts: ToastT[];
  index: number;
  expanded: boolean;
  invert: boolean;
  heights: HeightT[];
  setHeights: Setter<HeightT[]>;
  removeToast: (toast: ToastT) => void;
  gap?: number;
  position: Position;
  visibleToasts: number;
  expandByDefault: boolean;
  closeButton: boolean;
  interacting: boolean;
  style?:  JSX.CSSProperties;
  cancelButtonStyle?: JSX.CSSProperties;
  actionButtonStyle?: JSX.CSSProperties;
  duration?: number;
  className?: string;
  unstyled?: boolean;
  descriptionClassName?: string ;
  loadingIcon?: JSX.Element;
  classNames?: ToastClassnames;
  closeButtonAriaLabel?: string;
}

export enum SwipeStateTypes {
  SwipedOut = 'SwipedOut',
  SwipedBack = 'SwipedBack',
  NotSwiped = 'NotSwiped',
}

export type Theme = 'light' | 'dark';

export interface ToastToDismiss {
  id: number | string;
  dismiss: boolean;
}

export type ExternalToast = Omit<ToastT, 'id' | 'type' | 'title' | 'jsx' | 'delete' | 'promise'> & {
  id?: number | string;
};
