import React from "react";
import Layout from "~/components/Layout";
import { LoadingSpinner, ProductCard } from "~/components/UIComponents";
import { Animate } from "~/components/UIComponents/Animation/AnimationFactory";
import SearchBar from "~/components/UIComponents/SearchBar";
import { selectFilteredProducts } from "~/store/api/redux/products/selectors";
import { useAppSelector } from "~/utils/hooks";

const Products = () => {
  const products = useAppSelector(selectFilteredProducts);
  const loading = useAppSelector(
    (state) => state.productsSlice.products.loading,
  );
  return (
    <Layout>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SearchBar />
          <div className="container mx-auto grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {products?.map((product) => (
              <Animate.FadeIn key={product.id}>
                <ProductCard product={product} />
              </Animate.FadeIn>
            ))}
          </div>
        </>
      )}
    </Layout>
  );
};

export default Products;
