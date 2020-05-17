import { CSSProperties } from 'react';

export function merge(...args: CSSProperties[]): CSSProperties {
    return Object.assign({}, ...args);
}
