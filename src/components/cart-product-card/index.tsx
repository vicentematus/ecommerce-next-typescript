import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { SyntheticEvent } from "react";
import { useCartStore } from "store/cart";

import type { Product } from "types";
const CartProductCard = ({ product }: { product: Product }) => {
  const [removeProduct] = useCartStore((state) => [state.removeProduct]);

  return (
    <li key={product.id} className="flex items-center py-6">
      <Image
        width={64}
        height={64}
        src={product.thumbnail}
        alt={product.title}
        className=" flex-none rounded-md border border-gray-200"
      />
      <div className="ml-4  flex-auto  ">
        <div>
          <h3 className="font-medium text-gray-900">
            <a href={product.title}>{product.title}</a>
          </h3>
          <p className="text-gray-500">{product.price}</p>
        </div>
        <div>
          <button
            onClick={(e: SyntheticEvent) => {
              e.preventDefault();
              removeProduct(product.id);
            }}
            className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-200"
          >
            <XMarkIcon className="h-4 w-4 fill-current text-red-500" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartProductCard;
