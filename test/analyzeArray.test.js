import analyzeArray from "../src/analyzeArray";

test("Return object with the following properties", () => {
  expect(analyzeArray([2, 8, 3, 4, 10, 6, 1])).toEqual({
    average: 4,
    min: 1,
    max: 10,
    length: 7,
  });
});
