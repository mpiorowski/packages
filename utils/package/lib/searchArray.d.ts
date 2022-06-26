/**
 * Filter the array of objects by the given search term.
 * @param {string} search The search term.
 * @param {T[]} data The array of objects to filter.
 * @param {(keyof T)[]} params The fields to search.
 * @returns {T[]} The filtered array of objects.
 */
export declare const searchArray: <T extends Record<string, unknown>>(search: string, data: T[], params: (keyof T)[]) => T[];
