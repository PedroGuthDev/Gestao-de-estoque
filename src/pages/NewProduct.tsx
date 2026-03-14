import { getProducts } from "../loaders/products";
import type { ProductType } from "../types/productType";
import { useState } from "react";

export default function NewProduct() {
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const product: ProductType = {
      id: crypto.randomUUID(),
      name,
      quantity,
      price,
      category,
      description,
      createdAt: new Date().toLocaleDateString(),
    };
    const products = getProducts();
    localStorage.setItem("products", JSON.stringify([...products, product]));
    setName("");
    setQuantity(0);
    setPrice(0);
    setCategory("");
    setDescription("");
  }
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="container-fluid mt-3 mb-3">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="mb-3 col-md-3">
                <label htmlFor="name" className="form-label">
                  Nome
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3 col-md-3">
                <label htmlFor="quantity" className="form-label">
                  Quantidade
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  value={quantity}
                  required
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>
              <div className="mb-3 col-md-3">
                <label htmlFor="price" className="form-label">
                  Preço
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  value={price}
                  required
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
              <div className="mb-3 col-md-3 d-flex flex-column">
                <label htmlFor="category" className="form-label">
                  Categoria
                </label>
                <select
                  name="category"
                  className="form-select"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="Eletrônicos">Eletrônicos</option>
                  <option value="Roupas">Roupas</option>
                  <option value="Alimentos">Alimentos</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-md-12">
                <label htmlFor="description" className="form-label">
                  Descrição
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  cols={8}
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Adicionar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
