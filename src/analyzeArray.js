export default function analyzeArray(arr) {
  let array = arr;
  let max = 0;
  let min = arr[0];
  let sum = 0;
  const length = arr.length;

  array.forEach((value) => {
    if (max < value) max = value;
    if (min > value) min = value;
    sum += value;
  });

  const average = Math.floor(sum / length);

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}
