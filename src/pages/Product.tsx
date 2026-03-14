import { Link, useLoaderData, useNavigate } from "react-router-dom";
import type { ProductType } from "../types/productType";
import { deleteProduct } from "../loaders/products";

export default function Product() {
  const product: ProductType = useLoaderData();
  const navigate = useNavigate();
  function handleDelete() {
    deleteProduct(product.id);
    navigate("/products");
  }
  return (
    <div className="container-fluid mt-3 mb-3 d-flex flex-column gap-3">
      <div className="d-flex gap-3 align-items-center">
        <p className="m-0 fs-3 text-capitalize">{product.name}</p>
        <Link
          className="btn btn-light"
          to={`/products/change-product/${product.id}`}
        >
          Editar
        </Link>
        <button className="btn btn-danger" onClick={handleDelete}>
          Excluir
        </button>
      </div>
      <div className="d-flex gap-3">
        <div className="card bg-dark border-0 shadow">
          <div className="card-body d-flex gap-3">
            <h5 className="card-title">Categoria:</h5>
            <h5 className="card-text">{product.category}</h5>
          </div>
        </div>
        <div className="card bg-dark border-0 shadow">
          <div className="card-body d-flex gap-3">
            <h5 className="card-title">Quantidade:</h5>
            <h5 className="card-text">{product.quantity}</h5>
          </div>
        </div>
        <div className="card bg-dark border-0 shadow">
          <div className="card-body d-flex gap-3">
            <h5 className="card-title">Preço:</h5>
            <h5 className="card-text">R$ {product.price}</h5>
          </div>
        </div>
      </div>
      <div>
        <p className="fs-5">{product.description}</p>
      </div>
      <div className="d-flex gap-3">
        <p>Cadastrado em: {product.createdAt}</p>
        {product.updatedAt && <p>Atualizado em: {product.updatedAt}</p>}
      </div>
    </div>
  );
}
