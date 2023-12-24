import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "~/components/Layout";
import { HoverableImage } from "~/components/UIComponents";
import Rating from "~/components/UIComponents/Rating";
import ProductDetailSkeleton from "~/components/UIComponents/Skeletons/product-detail";
import { useGetProductByIdQuery } from "~/store/api/api-service";
import { addToCart } from "~/store/api/redux/cart";
import { useAppDispatch } from "~/utils/hooks";
import HeartIcon from "~/assets/icons/heart-rounded.svg";
const ProductDetailPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data, isLoading, status, isError } = useGetProductByIdQuery(
    id as string
  );
  const dispatch = useAppDispatch();
  const failedToLoad = status === "rejected" || isError;
  if (failedToLoad) navigate("/404");
  return (
    <Layout>
      {isLoading ? (
        <ProductDetailSkeleton />
      ) : (
        <section className="px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {data?.thumbnail && <HoverableImage src={data?.thumbnail} />}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font tracking-widest uppercase">
                {data?.brand}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {data?.title}
              </h1>
              <div className="flex mb-4">
                {data?.rating ? <Rating rating={data?.rating} /> : null}
              </div>
              <p className="leading-relaxed">{data?.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${data?.price}
                </span>
                <button
                  className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
                  onClick={() => data && dispatch(addToCart(data))}
                >
                  {t("lbl.add")}
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <HeartIcon />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetailPage;
