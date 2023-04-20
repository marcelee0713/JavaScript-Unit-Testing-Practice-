export default function reverseString(str) {
  let stringArray = str.split("");
  let reverseString = "";

  for (let i = stringArray.length - 1; i >= 0; i--) {
    reverseString = reverseString.concat(stringArray[i]);
  }

  return reverseString;
}
