export type Person = { name: string; age: number };

export const makePerson = (name: string, age: number = 10): Person => {
  const person = { name, age };
  return person;
};

export const makePerson2 = (name: string, age: number = 10): Person => ({
  name,
  age,
});

const printPerson = ({ name, age }: Person): void =>
  console.log(`name:${name}, age:${age}`);

const a = makePerson("anminam");
printPerson(a);

const makeObject = (key: string, value: any) => {
  return { [key]: value };
};

console.log(makeObject("name", "anminam"));

type keyType = {
  [key: string]: string;
};
