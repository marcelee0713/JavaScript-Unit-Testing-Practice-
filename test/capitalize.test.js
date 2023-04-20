import capitalize from "../src/capitalize";

test("Capitalize a string", () => {
  const name = "john";
  expect(capitalize(name)).toEqual("JOHN");
});
