import create from "zustand";
import { removeDuplicatesFrom } from "utils/removeDuplicatesFrom";

type FiltersStore = {
  filters: string[];
  priceRange: number;
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
  setPriceRange: (range: string) => void;
  resetFilters: () => void;
};

const useFilterStore = create<FiltersStore>((set) => ({
  filters: [],
  priceRange: 0,
  addFilter: (filter) =>
    set((state) => ({
      ...state,
      filters: removeDuplicatesFrom(state.filters.concat(filter)),
    })),
  removeFilter: (filter) =>
    set((state) => ({
      ...state,
      filters: state.filters.filter((f) => f != filter),
    })),
  setPriceRange: (range) => set((state) => ({ ...state, priceRange: range })),
  resetFilters: () =>
    set((state) => ({ ...state, filteres: [], priceRange: "" })),
}));

export default useFilterStore;
