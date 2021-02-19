import { map } from "./map";

const square = (v) => v * v;

export const squaredMap = map<number[], number>(square);
