// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { products } from "@/lib/dummy-data";
import { Product } from "@/lib/types";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  products: Product[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ products: products });
}
