import { incrementArray } from '@/utils/utils';

describe('incrementArray', () => {
  it('should return incremented values for valid numbers', () => {
    expect(incrementArray([1, 2, 3, -2, -1])).toEqual([2, 3, 4, -1, 0]);
  });

  it('should return empty array for invalid array', () => {
    //@ts-expect-error using invalid input for test
    expect(incrementArray([null, undefined, NaN])).toEqual([]);
  });

  it('should return incremented numbers array for array with numbers and trash', () => {
    //@ts-expect-error using invalid input for test
    expect(incrementArray([1, 2, NaN, undefined, null, 3, -2, -1])).toEqual([
      2, 3, 4, -1, 0,
    ]);
  });
});
