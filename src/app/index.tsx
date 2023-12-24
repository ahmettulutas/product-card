import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingSpinner } from "~/components/UIComponents";
import ProductDetailSkeleton from "~/components/UIComponents/Skeletons/product-detail";
import ProductsSkeleton from "~/components/UIComponents/Skeletons/product-list";

const NotFound = React.lazy(() => import("./pages/not-found"));
const Cart = React.lazy(() => import("./pages/cart"));
const Product = React.lazy(() => import("./pages/product-detail"));
const Products = React.lazy(() => import("./pages/product-list"));

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
          <React.Suspense fallback={<ProductsSkeleton />}>
            <Products />
          </React.Suspense>
        }
      />
      <Route
        path="/product/:id"
        element={
          <React.Suspense fallback={<ProductDetailSkeleton />}>
            <Product />
          </React.Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
