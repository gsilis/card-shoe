import ArrayUtils, { fill, pickANumber, randomize, sample, shuffle } from "./array";

describe('Array', () => {
  describe('fill()', () => {
    it('creates an array', () => {
      expect(fill(3)).toEqual([undefined, undefined, undefined]);
      expect(fill(1)).toEqual([undefined]);
    });

    it('can fill the array with an optional argument', () => {
      expect(fill(3, 'bye')).toEqual(['bye', 'bye', 'bye']);
      const testValue = { anything: 'will do' };
      expect(fill(2, testValue)).toEqual([testValue, testValue]);
    });
  });

  describe('randomize()', () => {
    /* This may be flaky. Without overriding `pickANumber` with mock values,
       there is a chance that the result does equal the source array. */
    it('shuffles an array', () => {
      const source = [1, 2, 3, 4, 5];

      expect(randomize(source)).not.toEqual([1, 2, 3, 4, 5]);
    });

    it('results in an array of the same length', () => {
      const source = [1, 2, 3, 4, 5];

      expect(randomize(source).length).toEqual(source.length);
    });
  });

  describe('sample()', () => {
    it('gives you an element from an array', () => {
      const arr = [1, 2, 3, 4];

      expect(arr.indexOf(sample(arr))).toBeGreaterThan(-1);
    });

    it('does not create copies', () => {
      const obj = { test: true };
      const arr = [obj, obj, obj];

      expect(sample(arr)).toStrictEqual(obj);
    });
  });

  describe('pickANumber()', () => {
    it('returns the first argument if second argument is lesser', () => {
      expect(pickANumber(10, 1)).toEqual(10);
    });

    it('gives you an item in the range', () => {
      const result = pickANumber(0, 10);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(10);
    });

    it('handles `from` that is greater than 0', () => {
      const result = pickANumber(100, 103);
      expect(result).toBeGreaterThanOrEqual(100);
      expect(result).toBeLessThanOrEqual(103);
    });

    it('gives you `from` if both values equal', () => {
      const result = pickANumber(3, 3);

      expect(result).toEqual(3);
    });
  });

  describe('shuffle()', () => {
    it('splits the array and merges them back like a zipper', () => {
      const source = [1, 2, 3, 4, 5, 6];

      expect(shuffle(source)).toEqual([1, 4, 2, 5, 3, 6]);
    });

    it('works with odd length arrays', () => {
      const source = [1, 2, 3, 4, 5];

      expect(shuffle(source)).toEqual([1, 4, 2, 5, 3]);
    });
  });
});