/**
 * https://app.codility.com/demo/results/trainingDSQMVF-7JR/
 */

function solution(X: number, Y: number, D: number): number {
  // Implement your solution here
  const dist = Y - X;

  const jumps = Math.floor(dist / D);
  const rem = dist % D;

  if (rem !== 0) {
    return jumps + 1;
  }
  return jumps;
}
