import type { NextApiRequest, NextApiResponse } from "next";
import type { Product } from "types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch("https://dummyjson.com/products");
  const products: Product[] = await response.json();

  const brandsBuffer: Set<string> = new Set();
  for (const product of products.products) {
    brandsBuffer.add(product.brand);
  }

  const brandsAvailable = Array.from(brandsBuffer);

  return res.status(200).json(brandsAvailable);
}
