import useFilterStore from "store/filters";
import { useSortStore } from "store/sort";
import { Product } from "types";
import { isInRange } from "utils/isInRange";
import { sortBy } from "utils/sortBy";

const useFilter = (products: Product[]): Product[] => {
  const [filters, range] = useFilterStore((state) => [
    state.filters,
    state.priceRange,
  ]);
  const [criteria, order] = useSortStore((state) => [state.type, state.order]);

  const filterCategories = products.filter((p) => {
    // We check if any filters exist on the store.
    if (filters.length) return filters.some((f) => p.brand === f);
    // If no filter applied, then keep the same products.
    return p === p;
  });

  return sortBy(filterCategories, criteria, order);
};

export { useFilter };
