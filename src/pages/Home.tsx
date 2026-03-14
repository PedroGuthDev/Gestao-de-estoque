import { Link } from "react-router-dom";
import { getProducts } from "../loaders/products";

function parseDate(dateStr: string) {
  if (!dateStr) return new Date(0);
  if (dateStr.includes("/")) {
    const [day, month, year] = dateStr.split("/");
    return new Date(Number(year), Number(month) - 1, Number(day));
  }
  return new Date(dateStr);
}

export default function Home() {
  const products = getProducts();

  const tenDaysAgo = new Date();
  tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);

  return (
    <div className="p-3">
      <h1>Dashboard</h1>
      <div className="row">
        <div className="col-md-3">
          <div className="card bg-dark border-0 shadow">
            <div className="card-body">
              <h5 className="card-title">Total de items</h5>
              <p className="card-text">{products.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-dark border-0 shadow">
            <div className="card-body">
              <h5 className="card-title">Inventário total</h5>
              <p className="card-text">
                {products.reduce(
                  (total, product) => total + product.quantity,
                  0,
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-dark border-0 shadow">
            <div className="card-body">
              <h5 className="card-title">Items recentes</h5>
              <p className="card-text">
                {
                  products.filter(
                    (product) => parseDate(product.createdAt) >= tenDaysAgo,
                  ).length
                }
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-dark border-0 shadow">
            <div className="card-body">
              <h5 className="card-title">Items acabando</h5>
              <p className="card-text">
                {products.filter((product) => product.quantity < 10).length}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <div>
            <table className="table table-borderless">
              <thead className="table-dark">
                <tr>
                  <th scope="col" className="p-3">
                    Items recentes
                  </th>
                  <th scope="col" className="p-3">
                    Preço
                  </th>
                  <th scope="col" className="p-3">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {products
                  .filter(
                    (product) => parseDate(product.createdAt) >= tenDaysAgo,
                  )
                  .map((product) => (
                    <tr key={product.id}>
                      <td className="p-3">{product.name}</td>
                      <td className="p-3">R$ {product.price}</td>
                      <td className="p-3">
                        <Link
                          className="btn btn-primary"
                          to={`/products/${product.id}`}
                        >
                          Ver
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <table className="table table-borderless ">
              <thead className="table-dark">
                <tr>
                  <th scope="col" className="p-3">
                    Produtos com estoque baixo
                  </th>
                  <th scope="col" className="p-3">
                    Quantidade
                  </th>
                  <th scope="col" className="p-3">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {products
                  .filter((product) => product.quantity < 10)
                  .map((product) => (
                    <tr key={product.id}>
                      <td className="p-3">{product.name}</td>
                      <td className="p-3">{product.quantity}</td>
                      <td className="p-3">
                        <Link
                          className="btn btn-primary"
                          to={`/products/${product.id}`}
                        >
                          Ver
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
