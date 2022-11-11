import { useSortStore } from "store/sort";
import { isInRange } from "utils/isInRange";
import { sortBy } from "utils/sortBy";

const useFilter = (products: Product[]) => {
  const [criteria, order] = useSortStore((state) => [state.type, state.order]);

  const filteredProducts = products.filter((product) =>
    isInRange(product.price, range)
  );
};
