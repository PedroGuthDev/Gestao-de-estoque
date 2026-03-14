import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import RootLayout from "./Components/RootLayout";
import ProductsPageLayout from "./Components/ProductsPageLayout";
import loadProduct from "./loaders/products";
import ProductBoundarie from "./ErrorBoundaries/ProductError";
import ChangeProduct from "./pages/ChangeProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <ProductsPageLayout />,
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: "new",
            element: <NewProduct />,
          },
          {
            path: ":id",
            element: <Product />,
            loader: loadProduct,
            errorElement: <ProductBoundarie />,
          },
          {
            path: "change-product/:id",
            element: <ChangeProduct />,
            loader: loadProduct,
            errorElement: <ProductBoundarie />,
          },
        ],
      },
    ],
  },
]);

export default router;
