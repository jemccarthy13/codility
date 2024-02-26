/**
 * https://app.codility.com/demo/results/trainingXWKCNS-E4F/
 */

function solution(A: number[]): number {
  A.sort((a, b) => a - b);

  let found = A[0];
  let count = 0;

  for (let x = 0; x < A.length; x++) {
    if (A[x] === found) {
      count = count + 1;
    }

    if (A[x + 1] !== found) {
      if (count % 2 === 1) {
        return A[x];
      }
      found = A[x + 1];
      count = 0;
    }
  }
  return found;
}
