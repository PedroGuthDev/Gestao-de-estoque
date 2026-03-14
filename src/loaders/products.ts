import type { LoaderFunctionArgs } from "react-router-dom";
import type { ProductType } from "../types/productType";

export default function loadProduct({ params: { id } }: LoaderFunctionArgs) {
  const products = getProducts();
  const product: ProductType | undefined = products.find(
    (product: ProductType) => product.id === id,
  );
  if (!product) {
    throw new Response("Produto não encontrado", {
      status: 404,
    });
  }
  return product;
}

export function getProducts(): ProductType[] {
  const products: ProductType[] = JSON.parse(
    localStorage.getItem("products") || "[]",
  );
  return products;
}

export function deleteProduct(id: string) {
  const products = getProducts();
  const updatedProducts = products.filter((product) => product.id !== id);
  localStorage.setItem("products", JSON.stringify(updatedProducts));
}
