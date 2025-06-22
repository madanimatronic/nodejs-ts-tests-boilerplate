import { powEven } from '@/utils/utils';

describe('powEven', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call Math.pow one time for even number', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');

    powEven(2);

    expect(spyMathPow).toHaveBeenCalledTimes(1);
  });

  it('should not call Math.pow odd number', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');

    powEven(3);

    expect(spyMathPow).toHaveBeenCalledTimes(0);
  });
});
