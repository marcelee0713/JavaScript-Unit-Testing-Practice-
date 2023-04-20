export default class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add(a, b) {
    return this.a + this.b;
  }

  subtract(a, b) {
    return this.a - this.b;
  }

  division(a, b) {
    return this.a / this.b;
  }

  multiply() {
    return this.a * this.b;
  }
}
