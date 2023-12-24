import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingSpinner } from "~/components/UIComponents";
import NotFound from "./views/404";

const Cart = React.lazy(() => import("./views/cart"));
const Product = React.lazy(() => import("./views/product-detail"));
const Products = React.lazy(() => import("./views/product-list"));

const App = () => {
  return (
    <Routes>
      <Route
        path="/cart"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Cart />
          </React.Suspense>
        }
      />
      <Route
        path="/"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Products />
          </React.Suspense>
        }
      />
      <Route
        path="/product/:id"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Product />
          </React.Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
