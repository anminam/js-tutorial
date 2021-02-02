import IPerson from "./person/IPerson";
import Person, { makePerson } from "./person/Person";

import Chance from "chance";
import * as R from "ramda";
const testMakePerson = (): void => {
  let anminam: IPerson = new Person("anminam");
  let lee: IPerson = makePerson("lee");
  console.log(anminam, lee);
};

testMakePerson();

const chance = new Chance();
const persons: IPerson[] = R.range(0, 2).map(
  (n: number) => new Person(chance.name(), chance.age())
);

console.log(persons);
