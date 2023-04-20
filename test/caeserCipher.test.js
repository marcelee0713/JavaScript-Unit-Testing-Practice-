import ceaserCypher from "../src/caeaserCipher";

test("String to Caeser Cypher", () => {
  const number4Question =
    "I don't really understand what is the number 4 does he mean this?";
  expect(ceaserCypher("z")).toBe("a");
  expect(ceaserCypher("mArcElEE")).toBe("nBsdFmFF");
  expect(ceaserCypher("m@rcEl!!")).toBe("n@sdFm!!");
  expect(ceaserCypher(number4Question)).toBe(
    "J epo'u sfbmmz voefstuboe xibu jt uif ovncfs 4 epft if nfbo uijt?"
  );
});
