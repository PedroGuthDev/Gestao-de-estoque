import { Outlet, NavLink } from "react-router-dom";

export default function ProductsPageLayout() {
  return (
    <main className="container-fluid flex-grow-1">
      <div className="d-flex flex-column mt-3 mb-3">
        <h1>Lista de items</h1>
        <nav className="navbar border-bottom p-0">
          <div className="container-fluid px-0">
            <ul className="navbar-nav d-flex flex-row gap-2">
              <li className="nav-item">
                <NavLink
                  end
                  to="/products"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active border-bottom border-light" : ""}`
                  }
                >
                  Todos os items
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products/new"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active border-bottom border-light" : ""}`
                  }
                >
                  Adicionar item
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Outlet />
    </main>
  );
}
