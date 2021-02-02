export function makePerson(name: string, age: number) {
  return { name, age };
}

export function testMakePerson() {
  console.log(makePerson("Jane", 22));
  console.log(makePerson("AKK", 33));
}
