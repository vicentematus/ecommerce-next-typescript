import categories from "./categories";
import brands from "./brand";
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

export default filters;
