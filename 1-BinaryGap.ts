/*
 * https://app.codility.com/demo/results/training6YAD3W-MR8/
 */

function solution(N: number): number {
  // Implement your solution here
  const binStr = (N >>> 0).toString(2);

  const possibles: string[] = [];
  for (let x = 31; x > 1; x--) {
    possibles.push("1".concat("1".padStart(x, "0")));
  }

  for (let y = 0; y < possibles.length; y++) {
    if (binStr.includes(possibles[y])) {
      return possibles[y].length - 2;
    }
  }

  return 0;
}
