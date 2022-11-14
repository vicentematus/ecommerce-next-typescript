import { ChangeEvent, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ShieldCheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CheckIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import type { Product } from "types";
import { useCartStore } from "store/cart";
import toast from "react-hot-toast";
const notify = () => toast.success("Agregado al carrito exitosamente.");

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type QuickView = {
  open: boolean | undefined;
  setOpen: (arg: boolean) => void;
  product: Product;
};
const ProductQuickView = ({ open, setOpen, product }: QuickView) => {
  const [cartIsOpen, setCartProduct, setCartIsOpen] = useCartStore((state) => [
    state.cartIsOpen,
    state.setCartProducts,
    state.setCartIsOpen,
  ]);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCartProduct(product);
    notify();
    setCartIsOpen(true);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-[51] overflow-y-auto"
        onClose={setOpen}
      >
        <div
          className="flex min-h-screen text-center md:block md:px-2 lg:px-4"
          style={{ fontSize: 0 }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden md:inline-block md:h-screen md:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enterTo="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 md:scale-100"
            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <div className="flex w-full transform text-left text-base transition md:my-8 md:inline-block md:max-w-2xl md:px-4 md:align-middle lg:max-w-4xl">
              <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                  <div className="sm:col-span-4 lg:col-span-5">
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                      <div className="relative h-[300px] w-[400px]">
                        <Image
                          src={`${product.images[0]}`}
                          fill
                          alt={product.title}
                          className="object-cover object-center "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">
                      {product.title}
                    </h2>

                    <section
                      aria-labelledby="information-heading"
                      className="mt-4"
                    >
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>

                      <div className="flex items-center">
                        <p className="text-lg text-gray-900 sm:text-xl">
                          {product.price}{" "}
                          <span className="text-sm font-medium text-gray-700">
                            USD
                          </span>
                        </p>

                        <div className="ml-4 border-l border-gray-300 pl-4">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    product.rating > rating
                                      ? "text-yellow-400"
                                      : "text-gray-300",
                                    "h-5 w-5 flex-shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="ml-2 text-gray-700">
                              {product.rating} out of 5 stars
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-gray-700">
                        {product.description}
                      </div>
                      <div className="mt-6 flex items-center">
                        <CheckIcon
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                          aria-hidden="true"
                        />
                        <p className="ml-2 font-medium text-gray-500">
                          In stock and ready to ship
                        </p>
                      </div>
                    </section>

                    <section aria-labelledby="options-heading" className="mt-6">
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>

                      <form
                        onSubmit={(e: ChangeEvent<HTMLFormElement>) =>
                          handleSubmit(e)
                        }
                      >
                        <div className="mt-6">
                          <button
                            type="submit"
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                          >
                            Add to cart
                          </button>
                        </div>
                        <div className="mt-6 text-center">
                          <p className="group inline-flex text-base font-medium">
                            <ShieldCheckIcon
                              className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            <span className="text-gray-500 group-hover:text-gray-700">
                              Lifetime Guarantee
                            </span>
                          </p>
                        </div>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ProductQuickView;
