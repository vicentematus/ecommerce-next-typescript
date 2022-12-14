import { VoidFunctionComponent } from "react";
import create from "zustand";

type SortStore = {
  type: string;
  order: string;
  setType: (type: string) => void;
  setOrder: () => void;
  resetSort: () => void;
};

const useSortStore = create<SortStore>((set) => ({
  type: "price",
  order: "ascending",
  setType: (type) => set((state) => ({ ...state, type })),
  setOrder: () =>
    set((state) => ({
      ...state,
      order: state.order === "ascending" ? "descending" : "ascending",
    })),
  resetSort: () =>
    set((state) => ({ ...state, type: "price", order: "ascending" })),
}));

export { useSortStore };
