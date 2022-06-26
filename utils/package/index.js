'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function assertIsDefined(val, variable) {
    if (val === undefined || val === null) {
        throw new Error('Expected ' + (variable || 'value') + ' to be defined.');
    }
}

function checkEnv(envVar) {
    if (!process.env[envVar]) {
        throw Error(`Environment not set: ${envVar} `);
    }
    else {
        return process.env[envVar];
    }
}

function clickOutside(node, handler) {
    const onClick = (event) => node &&
        !node.contains(event.target) &&
        !event.defaultPrevented &&
        handler();
    document.addEventListener('click', onClick, true);
    return {
        destroy() {
            document.removeEventListener('click', onClick, true);
        },
    };
}

/**
 * Filter the array of objects by the given search term.
 * @param {string} search The search term.
 * @param {T[]} data The array of objects to filter.
 * @param {(keyof T)[]} params The fields to search.
 * @returns {T[]} The filtered array of objects.
 */
const searchArray = (search, data, params) => {
    return (data.filter((el) => {
        if (!search) {
            return true;
        }
        return params.some((param) => {
            const t = el[param];
            if (t &&
                (typeof t === 'string' ||
                    typeof t === 'number' ||
                    typeof t === 'boolean' ||
                    t instanceof Date) &&
                t.toString().toLowerCase().includes(search.toLowerCase())) {
                return true;
            }
            return false;
        });
    }) || []);
};

exports.assertIsDefined = assertIsDefined;
exports.checkEnv = checkEnv;
exports.clickOutside = clickOutside;
exports.searchArray = searchArray;
