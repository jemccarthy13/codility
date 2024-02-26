/**
 * https://app.codility.com/demo/results/trainingNH8Y7G-GG2/
 */

function solution(X: number, A: number[]): number {
  let needed = X;

  let found: Map<number, boolean> = new Map<number, boolean>();

  for (let x = 0; x < A.length; x++) {
    if (!found.has(A[x])) {
      found.set(A[x], true);
      needed = needed - 1;
    }
    if (needed === 0) {
      return x;
    }
  }
  return -1;
}
