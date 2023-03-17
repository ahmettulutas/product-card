import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingSpinner } from "~/components/UIComponents";
import { getProducts } from "~/store/api/redux/products/reducers";
import NotFound from "./views/404";

const Cart = React.lazy(() => import("./views/cart"));
const Product = React.lazy(() => import("./views/product"));
const Products = React.lazy(() => import("./views/products"));

const App = () => {

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Routes>
      <Route path="/cart" element={<React.Suspense fallback={<LoadingSpinner />}><Cart /></React.Suspense>} />
      <Route path="/" element={<React.Suspense fallback={<LoadingSpinner />}><Products /></React.Suspense>} />
      <Route path="/product/:id" element={<React.Suspense fallback={<LoadingSpinner />}><Product /></React.Suspense>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
