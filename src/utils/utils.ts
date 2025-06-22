export const validateInput = (value: number) => {
  if (value < 0 || value > 100) {
    return false;
  }
  return true;
};

export const incrementArray = (arr: number[]) => {
  return arr
    .filter(
      (item) => typeof item === 'number' && !isNaN(item) && isFinite(item),
    )
    .map((item) => item + 1);
};

export const powEven = (value: number) => {
  if (value % 2 === 0) {
    return Math.pow(value, 2);
  }
  return value;
};
