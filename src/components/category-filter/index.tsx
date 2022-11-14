import { ChangeEvent, Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/solid";

import brands from "data/brand";
import categories from "data/categories";
import useFilterStore from "store/filters";

const filters = [
  {
    id: "category",
    name: "Category",
    options: categories.map((category) => {
      return { label: category, value: category };
    }),
  },
  {
    id: "brand",
    name: "Brand",
    options: brands.map((brand) => {
      return {
        label: brand,
        value: brand,
      };
    }),
  },
];

console.log("filters es", filters);
const CategoryFilterLarge = () => {
  const [addFilter, removeFilter] = useFilterStore((state) => [
    state.addFilter,
    state.removeFilter,
  ]);

  const filtersStore = useFilterStore((state) => state.filters);
  console.log("Filters es", filtersStore);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // We check if the checkbox is checked to add it or remove it.
    const filter = e.target.value;
    if (e.target.checked) {
      addFilter(filter);
    } else {
      removeFilter(filter);
    }
  };
  return (
    <div className="hidden lg:block">
      <form className="space-y-10 divide-y divide-gray-200">
        {filters.map((section, sectionIdx) => (
          <div key={section.name} className={sectionIdx === 0 ? null : "pt-10"}>
            <fieldset>
              <legend className="block text-sm font-medium text-gray-900">
                {section.name}
              </legend>
              <div className="h-[200px] space-y-3 overflow-y-scroll pt-6">
                {section.options.map((option, optionIdx) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      id={`${section.id}-${optionIdx}`}
                      name={`${section.id}[]`}
                      onChange={handleChange}
                      defaultValue={option.value}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={`${section.id}-${optionIdx}`}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
        ))}
      </form>
    </div>
  );
};

export default CategoryFilterLarge;
