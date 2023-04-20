import Calculator from "../src/calculator";

test("Calculator Object", () => {
  const calc = new Calculator(20, 10);

  expect(calc.add()).toBe(30);
  expect(calc.subtract()).toBe(10);
  expect(calc.division()).toBe(2);
  expect(calc.multiply()).toBe(200);
});
