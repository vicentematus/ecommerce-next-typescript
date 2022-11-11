const isInRange = (
  price: number,
  range: number,
  rangeMin = 0,
  rangeMax = 0
) => {
  if (!range) return rangeMin < price && price > rangeMax;

  return price < range;
};

export { isInRange };
