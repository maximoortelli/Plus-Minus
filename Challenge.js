process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', () => {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

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

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
