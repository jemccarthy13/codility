/**
 * https://app.codility.com/demo/results/trainingDE8KQE-RR8/
 */

function solution(A: number[]): number {
  A.sort((a, b) => a - b);

  let found = 1;

  for (let x = 0; x < A.length; x++) {
    if (A[x] === found) {
      found++;
    } else {
      return 0;
    }
  }
  return 1;
}
