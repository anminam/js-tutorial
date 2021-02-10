type MapFunc<T, R> = (arg: T) => R;

type IdentifyFunc<T> = MapFunc<T, T>;

const numberIdentify: IdentifyFunc<number> = (x: number) => x;
