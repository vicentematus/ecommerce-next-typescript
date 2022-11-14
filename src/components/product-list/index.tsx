import type { Product } from "types";
import Image from "next/image";
import { useCartStore } from "store/cart";
import { StarIcon } from "@heroicons/react/24/solid";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Agregado al carrito exitosamente.");
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const ProductCard = ({ product }: { product: Product }) => {
  const [cartIsOpen, setCartProduct, setCartIsOpen] = useCartStore((state) => [
    state.cartIsOpen,
    state.setCartProducts,
    state.setCartIsOpen,
  ]);
  return (
    <>
      <div className="group relative border-r border-b border-gray-200 p-4 sm:p-6">
        <div className="aspect-w-1 aspect-h-1  relative overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
          <Image
            src={product.thumbnail}
            alt={product.title}
            height={300}
            width={300}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="pt-10 pb-4 text-center">
          <h3 className="text-sm font-medium text-gray-900">
            <a href={"#"}>{product.title}</a>
          </h3>
          <div className="mt-3 flex flex-col items-center">
            <p className="sr-only">{product.rating} out of 5 stars</p>
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    product.rating > rating
                      ? "text-yellow-400"
                      : "text-gray-200",
                    "h-5 w-5 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="mt-1 text-sm text-gray-500">
              {product.rating} reviews
            </p>
          </div>
          <p className="mt-4 text-base font-medium text-gray-900">
            {product.price} <span className="text-gray-600">USD </span>
          </p>

          <button
            onClick={() => {
              setCartProduct(product);
              notify();
              setCartIsOpen(true);
            }}
            className="mt-2 rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-400"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
