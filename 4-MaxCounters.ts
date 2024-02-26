/**
 * https://app.codility.com/demo/results/training9BJ923-AKM/
 */

function solution(N: number, A: number[]): number[] {
  let sum = 0;
  let local_highest = 0;

  let counters: Map<number, number> = new Map<number, number>();

  for (let x = 0; x < A.length; x++) {
    if (A[x] === N + 1) {
      sum += local_highest;
      local_highest = 0;
      counters.clear();
    } else {
      if (!counters.has(A[x])) {
        counters.set(A[x], 1);
      } else {
        counters.set(A[x], counters.get(A[x]) + 1);
      }

      const count = counters.get(A[x]);
      if (count > local_highest) {
        local_highest = count;
      }
    }
  }
  let answer: number[] = [];
  for (let y = 0; y < N; y++) {
    const add = counters.get(y + 1) ?? 0;
    answer.push(sum + add);
  }

  return answer;
}
