/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, SyntheticEvent } from "react";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import { useCartStore } from "store/cart";
import Image from "next/image";
import EmptyState from "components/empty-state";
import CartProductCard from "components/cart-product-card";

export default function CartMenu() {
  const [cartIsOpen, setCartIsOpen, cartProducts, clearCart, totalAmount] =
    useCartStore((state) => [
      state.cartIsOpen,
      state.setCartIsOpen,
      state.cartProducts,
      state.clearCart,
      state.totalAmount,
    ]);

  const numberOfProducts = useCartStore((state) => state.numberOfProducts);

  return (
    <header className="fixed z-50 w-full bg-white">
      <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative border-b border-gray-200 px-4 pb-14 sm:static sm:px-0 sm:pb-0">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex flex-1">
              <p className="text-3xl">🤖</p>
            </div>

            <div className="flex flex-1 items-center justify-end">
              {/* Cart */}
              <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-8">
                <Popover.Button className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    className="h-12 w-12 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-xl font-medium text-gray-700 group-hover:text-gray-800">
                    {numberOfProducts}{" "}
                  </span>
                  <span className="sr-only">items in cart, view bag</span>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel className="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                    <h2 className="sr-only">Shopping Cart</h2>

                    <form className="mx-auto max-w-2xl px-4">
                      <ul
                        role="list"
                        className="h-[200px] divide-y divide-gray-200 overflow-y-scroll"
                      >
                        {cartProducts.length > 0 ? (
                          cartProducts.map((product) => (
                            <CartProductCard
                              product={product}
                              key={product.id}
                            />
                          ))
                        ) : (
                          <EmptyState />
                        )}
                      </ul>

                      {numberOfProducts > 0 ? (
                        <>
                          <div className="w-full">
                            <dl>
                              <dt className="font-medium text-gray-700 ">
                                Monto total:
                              </dt>
                              <dd className="text-3xl text-gray-900">
                                {totalAmount}{" "}
                                <span className="text-sm font-semibold text-gray-600">
                                  USD
                                </span>
                              </dd>
                            </dl>
                          </div>
                          <button
                            type="submit"
                            className="w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                          >
                            Checkout
                          </button>
                          <button
                            onClick={(e: SyntheticEvent) => {
                              e.preventDefault();
                              clearCart();
                            }}
                            className="mt-6 w-full font-semibold  text-red-500 "
                          >
                            Limpiar carro
                          </button>
                        </>
                      ) : null}
                    </form>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
