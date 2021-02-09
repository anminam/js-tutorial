export class IterableUsingGenerator<T> implements Iterable<T> {
  constructor(public values: T[] = [], public currentIndex: number = 0) {}
  [Symbol.iterator] = function* () {
    while (this.currentIndex < this.value.length) {
      yield this.values[this.currentIndex++];
    }
  };
}
