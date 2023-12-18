/* eslint-disable no-unused-vars */
function plusMinus(arr) {
  // Write your code here
  const n = arr.length;
  let negative = 0;
  let positive = 0;
  let zero = 0;

  for (let i = 0; i < n; i += 1) {
    if (arr[i] < 0) {
      negative += 1;
    } else if (arr[i] > 0) {
      positive += 1;
    } else {
      zero += 1;
    }
  }
  const pos = positive / n;
  const neg = negative / n;
  const zer = zero / n;

  // eslint-disable-next-line no-console
  console.log(pos.toFixed(6), `\n${neg.toFixed(6)}`, `\n${zer.toFixed(6)}`);
}
