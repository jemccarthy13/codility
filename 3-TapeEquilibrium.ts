/**
 * https://app.codility.com/demo/results/trainingAKCEQ7-UA7/
 */
function solution(A: number[]): number {
  let total: number = 0;

  if (A.length === 1) {
    return A[0];
  }

  for (let x = 0; x < A.length; x++) {
    total = total + A[x];
  }

  let minimum: number = 100000000000;

  let rearSum: number = 0;

  for (let y = A.length - 1; y > 0; y--) {
    rearSum = rearSum + A[y];

    const firstSum = total - rearSum;
    const diff = Math.abs(rearSum - firstSum);

    if (diff < minimum) {
      minimum = diff;
    }
  }

  return minimum;
}
