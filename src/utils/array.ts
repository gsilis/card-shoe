export function range(from: number = 0, to: number = 1): void[] {
  const arr: void[] = [];

  for (let i = from; i < to; i++) {
    arr.push(undefined);
  }

  return arr;
}

export function randomize(arr: any[]): any[] {
  return arr;
}