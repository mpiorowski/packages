import { writable } from 'svelte/store';
type Toast = {
  id: string;
  type: ToastType;
  message: string;
  icon?: string;
};

export enum ToastType {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export const notifications = writable<Toast[]>([]);

export const toast = (
  message: string,
  type: ToastType,
  timeout = 2000
): void => {
  notifications.update((state) => {
    return [...state, { id: crypto.randomUUID(), type, message }];
  });
  setTimeout(() => {
    notifications.update((state) => {
      return state.filter((_a, i) => i > 0) || [];
    });
  }, timeout);
};

export const toastSave = (): void =>
  toast('common.saved', ToastType.SUCCESS, 2000);
export const toastDelete = (): void =>
  toast('common.deleted', ToastType.SUCCESS, 2000);
export const toastError = (): void =>
  toast('errors.something-went-wrong', ToastType.ERROR, 2000);
