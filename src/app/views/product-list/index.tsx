import { useMemo } from "react";
import Layout from "~/components/Layout";
import { LoadingSpinner, ProductCard } from "~/components/UIComponents";
import { Animate } from "~/components/UIComponents/Animation/AnimationFactory";
import SearchBar from "~/components/UIComponents/SearchBar";
import { useGetProductsQuery } from "~/store/api/api-service";
import { Product } from "~/store/api/api-service/types";
import { selectSearchQuery } from "~/store/api/redux/common/selectors";
import { useAppSelector } from "~/utils/hooks";

export const selectFilteredProducts = (
  data: Array<Product> | undefined,
  searchTerm: string
) => {
  return data?.filter((item: Product) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

const Products = () => {
  const { data, isLoading, isError } = useGetProductsQuery(undefined);
  const searchTerm = useAppSelector(selectSearchQuery);

  const filteredProducts = useMemo(
    () => selectFilteredProducts(data?.products, searchTerm),
    [searchTerm, data]
  );

  return (
    <Layout>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className="my-6">
          <SearchBar />
          <div className="container mx-auto grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts?.map((product) => (
              <Animate.FadeIn key={product.id}>
                <ProductCard product={product} />
              </Animate.FadeIn>
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Products;
