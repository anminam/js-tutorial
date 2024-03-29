export class StringIterable implements Iterable<string> {
  constructor(public strings: string[], public currentIndex: number) {}
  [Symbol.iterator](): Iterator<string> {
    const that = this;
    let currentIndex = that.currentIndex;
    let length = that.strings.length;

    const iterator: Iterator<string> = {
      next(): { value: string; done: boolean } {
        const value =
          currentIndex < length ? that.strings[currentIndex++] : undefined;
        const done = value === undefined;
        return { value, done };
      },
    };

    return iterator;
  }
}
