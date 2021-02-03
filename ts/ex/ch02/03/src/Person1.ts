interface IPerson {
  name: string;
  age?: number;
}
class Person4 implements IPerson {
  constructor(public name: string, public age?: number) {}
}

let anminam: Person4 = new Person4("anminam");
anminam.name = "anminam";
anminam.age = 23;
