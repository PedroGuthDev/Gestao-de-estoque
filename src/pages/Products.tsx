import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteProduct, getProducts } from "../loaders/products";

export default function Products() {
  const [products, setProducts] = useState(getProducts());
  function handleDelete(id: string) {
    deleteProduct(id);
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id),
    );
  }
  return (
    <div>
      <table className="table table-borderless">
        <thead className="table-dark">
          <tr>
            <th scope="col" className="p-3">
              ID
            </th>
            <th scope="col" className="p-3">
              Nome
            </th>
            <th scope="col" className="p-3">
              Quantidade
            </th>
            <th scope="col" className="p-3">
              Preço
            </th>
            <th scope="col" className="p-3">
              Categoria
            </th>
            <th scope="col" className="p-3">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="p-3">{product.id.slice(0, 8)}</td>
              <td className="p-3">{product.name}</td>
              <td className="p-3">{product.quantity}</td>
              <td className="p-3">R$ {product.price}</td>
              <td className="p-3">{product.category}</td>
              <td className="p-3 d-flex gap-2">
                <Link
                  className="btn btn-primary"
                  to={`/products/${product.id}`}
                >
                  Ver
                </Link>
                <Link
                  className="btn btn-light"
                  to={`/products/change-product/${product.id}`}
                >
                  Editar
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
