import create from "zustand";

type MobileStore = {
  mobileFiltersOpen: boolean;
  setMobileFiltersOpen: (condition: boolean) => void;
};
const useMobileMenuStore = create<MobileStore>((set) => ({
  mobileFiltersOpen: false,
  setMobileFiltersOpen: (condition: boolean) => {
    set((state) => ({
      mobileFiltersOpen: condition === true ? true : false,
    }));
  },
}));

export { useMobileMenuStore };
