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
  removeProduct: (id: number) => void;
};
const useCartStore = create<CartStore>((set) => ({
  cartIsOpen: false,
  cartProducts: [],
  totalAmount: 0,
  numberOfProducts: 0,
  removeProduct: (id) => {
    set((state) => ({
      cartProducts: state.cartProducts.filter((product) => product.id != id),
      // TODO Falta eliminar el monto.
      totalAmount:
        state.totalAmount -
        (state.cartProducts.find((product) => product.id === id)?.price || 0),
      numberOfProducts: state.numberOfProducts - 1,
    }));
  },

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
