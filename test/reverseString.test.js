import reverseString from "../src/reverseString";

test("Reverse a string", () => {
  let name = "steven";
  expect(reverseString(name)).toBe("nevets");
});
