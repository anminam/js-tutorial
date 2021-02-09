export function* rangeGanerator(from: number, to: number) {
  let value = from;
  while (value < to) {
    yield value++;
  }
}
