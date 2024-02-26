/*
 * https://app.codility.com/demo/results/trainingH6EPVE-GYR/
 */
function solution(A: number[], K: number): number[] {
  if (A.length === 0) {
    return A;
  }

  const k = K % A.length;

  const firstPart = A.slice(-k);
  const secondPart = A.slice(0, -k);

  return firstPart.concat(secondPart);
}
