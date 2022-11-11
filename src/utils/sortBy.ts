import type { Product } from "types";

const sortAscending = (products: Product[]) => {
  return [...products].sort((a, b) => a.price - b.price);
};

const sortDescending = (products: Product[]) => {
  return [...products].sort((a, b) => b.price - a.price);
};

const sortNameAscending = (products: Product[]) => {
  return [...products].sort((a, b) => (a.title < b.title ? -1 : 1));
};

const sortNameDescending = (products: Product[]) => {
  return [...products].sort((a, b) => (a.title > b.title ? -1 : 1));
};

const sortBy = (
  products: Product[],
  criteria: string,
  order: string
): Product[] => {
  // In case the criteria is price.
  if (criteria === "price") {
    return order === "ascending"
      ? sortAscending(products)
      : sortDescending(products);
  }

  // If not then is alphabetically.

  return order === "ascending"
    ? sortNameAscending(products)
    : sortNameDescending(products);
};

export { sortBy };
