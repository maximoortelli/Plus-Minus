/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
function plusMinus(arr) {
  const positive = arr.filter((numero) => numero > 0).length / arr.length;
  const negative = arr.filter((numero) => numero < 0).length / arr.length;
  const zeros = arr.filter((numero) => numero === 0).length / arr.length;

  console.log(`${positive.toFixed(6)}\n`, `${negative.toFixed(6)}\n`, `${zeros.toFixed(6)}\n`);
}