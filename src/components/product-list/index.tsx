import type { Product } from "types";
import Image from "next/image";
import { useCartStore } from "store/cart";
const ProductCard = ({ product }: { product: Product }) => {
  const [cartIsOpen, setCartProduct, setCartIsOpen] = useCartStore((state) => [
    state.cartIsOpen,
    state.setCartProducts,
    state.setCartIsOpen,
  ]);
  return (
    <div key={product.id} className="col-span-6 md:col-span-3">
      <Image
        src={product.thumbnail}
        height={300}
        width={300}
        alt={product.title}
      />
      <h1>{product.title}</h1>
      <button
        onClick={() => {
          setCartProduct(product);
          setCartIsOpen(true);
        }}
        className="bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-400"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
