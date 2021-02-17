const nameMaker = (): (() => string) => {
  const names = ["anminam", "aksdfksadk", "aaa", "bbbb"];
  let index = 0;
  return (): string => {
    if (names.length === index) {
      index = 0;
    }
    return names[index++];
  };
};

const maker = nameMaker();
console.log([...new Array(5)].map(() => maker()));
