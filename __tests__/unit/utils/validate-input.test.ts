import { validateInput } from '@/utils/utils';

describe('validateInput', () => {
  it('should return true for value within range', () => {
    expect(validateInput(50)).toBe(true);
  });

  it('should return true if value is upper limit', () => {
    expect(validateInput(100)).toBe(true);
  });

  it('should return true if value is lower limit', () => {
    expect(validateInput(0)).toBe(true);
  });

  it('should return false if value exceeds upper limit', () => {
    expect(validateInput(101)).toBe(false);
  });

  it('should return false if value is less than lower limit', () => {
    expect(validateInput(-1)).toBe(false);
  });
});
