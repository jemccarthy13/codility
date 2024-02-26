/**
 * https://app.codility.com/demo/results/trainingBDU9UX-UWG/
 */

function solution(A: number[]): number {
  A.sort((a, b) => a - b);

  let missing = 1;

  A.forEach((a) => {
    if (a === missing) {
      missing++;
    }
  });
  return missing;
}
