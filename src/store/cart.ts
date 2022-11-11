import { Product } from "types";
import create from "zustand";

type CartStore = {
  cartIsOpen: boolean;
  cartProducts: Product[];
  totalAmount: number;
  numberOfProducts: number;
  setCartIsOpen: (isOpen: boolean) => void;
  setCartProducts: (product: Product) => void;
  clearCart: VoidFunction;
};
const useCartStore = create<CartStore>((set) => ({
  cartIsOpen: false,
  cartProducts: [],
  totalAmount: 0,
  numberOfProducts: 0,
  setCartProducts: (product) => {
    set((state) => {
      const alreadyAdded = state.cartProducts.some(
        (entry) => entry.id === product.id
      );

      if (alreadyAdded) {
        return {
          ...state,
          totalAmount: state.totalAmount + product.price,
          numberOfProducts: state.numberOfProducts + 1,
        };
      }

      console.log("Products es", state.cartProducts);
      return {
        ...state,
        cartProducts: [...state.cartProducts, product],
        totalAmount: state.totalAmount + product.price,
        numberOfProducts: state.numberOfProducts + 1,
      };
    });
  },
  setCartIsOpen: (isOpen: boolean) =>
    set((state) => ({ ...state, cartIsOpen: isOpen })),
  clearCart: () =>
    set((state) => ({
      ...state,
      cartProducts: [],
      totalAmount: 0,
      numberOfProducts: 0,
    })),
}));

export { useCartStore };
