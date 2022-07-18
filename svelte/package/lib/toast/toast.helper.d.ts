declare type Toast = {
    id: string;
    type: ToastType;
    message: string;
    icon?: string;
};
export declare enum ToastType {
    INFO = "INFO",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR"
}
export declare const notifications: import("svelte/store").Writable<Toast[]>;
export declare const toast: (message: string, type: ToastType, timeout?: number) => void;
export declare const toastSave: () => void;
export declare const toastDelete: () => void;
export declare const toastError: () => void;
export {};
//# sourceMappingURL=toast.helper.d.ts.map