// Want a default `value` here without messing up the compiler
// There might be a better way to do this.
export function fill<T = void>(size: number, value: T = (void 0 as T)): T[] {
  const arr = [];

  for (let i = 0; i < size; i++) {
    arr.push(value);
  }

  return arr;
}

export function randomize<T>(arr: T[]): T[] {
  const copy = [...arr];
  const result: T[] = [];

  while (copy.length > 0) {
    let index = pickANumber(0, copy.length - 1);

    result.push(...copy.splice(index, 1));
  }

  return result;
}

export function sample<T>(arr: T[]): T {
  const rando = Math.random();
  const index = Math.floor(arr.length * rando);

  return arr[index];
}

/**
 * Pick a number between the arguments. Inclusive.
 * @param from
 * @param to 
 * @returns 
 */
export function pickANumber(from: number, to: number) {
  if (to <= from) {
    return from;
  }

  const range = to - from;
  const rando = Math.random();

  return Math.round(from + (range * rando));
}

export default {
  fill,
  randomize,
  sample,
  pickANumber,
};