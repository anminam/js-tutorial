export const map = <T, R>(f: (T) => R) => (a: T[]): R[] => a.map(f);
