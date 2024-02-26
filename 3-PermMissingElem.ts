function solution(A: number[]): number {
  let found = 1;

  A.sort((a, b) => a - b);

  for (let x = 0; x < A.length; x++) {
    if (A[x] === found) {
      found = found + 1;
    }
  }
  return found;
}
