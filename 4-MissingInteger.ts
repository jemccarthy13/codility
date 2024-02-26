/**
 * https://app.codility.com/demo/results/trainingGYFM4G-NZN/
 */

function solution(A: number[]): number {
  A.sort((a, b) => a - b);

  let found = 1;
  A.map((a) => {
    if (a === found) {
      found++;
    }
  });
  return found;
}
