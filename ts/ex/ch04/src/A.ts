export class A {
  value: number = 1;
  method: () => void = (): void => {
    console.log(`value: ${this.value}`);
  };
}

export class B {
  constructor(public value: number = 1) {}

  method(): void {
    console.log(`value: ${this.value}`);
  }
}

export class C {
  static whoAraYou(): string {
    return `I'm C`;
  }
}

export class D {
  static whoAraYou(): string {
    return `I'm class D`;
  }
}

let a: A = new A();
a.method();

console.log(C.whoAraYou());
console.log(D.whoAraYou());
