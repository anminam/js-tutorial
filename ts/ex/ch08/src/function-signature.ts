export type FirstOrderFunc<T, R> = (x: T) => R;
export type SecondOrderFunc<T, R> = (x: T) => FirstOrderFunc<T, R>;
export type ThirdOrderFucn<T, R> = (x: T) => SecondOrderFunc<T, R>;
