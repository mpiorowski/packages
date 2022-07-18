export declare const usePagination: () => {
    paginate: <T>(array: T[], pageNumber: number) => T[];
    paginationData: import("svelte/store").Writable<{
        pageNumber: number;
        pageCount: number;
    }>;
    pageSize: number;
    calcPageCount: (dataCount: number) => void;
    actions: {
        changePage: (index: number) => void;
        increment: () => void;
        decrement: () => void;
    };
};
//# sourceMappingURL=pagination.helper.d.ts.map