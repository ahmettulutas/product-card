import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Layout from "~/components/Layout";
import { useAppDispatch, useAppSelector } from "~/utils/hooks";
import Delete from "~/assets/icons/bin.svg";
import {
  addToCart,
  decreaseFromCart,
  removeFromCart,
} from "~/store/api/redux/cart";
import MinusIcon from "~/assets/icons/minus.svg";
import PlusIcon from "~/assets/icons/plus.svg";
import { HoverableImage } from "~/components/UIComponents";

const Cart = () => {
  const { t } = useTranslation();
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <Layout>
      <div className="container mx-auto mt-10">
        <div className="flex my-10 flex-wrap">
          <div className="w-full lg:w-3/4 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">
                {t("lbl.shoppingCart")}
              </h1>
              <h2 className="font-semibold text-2xl">{`${cart.cart.length} ${t(
                "lbl.item"
              )}`}</h2>
            </div>
            {cart.cart.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 gap-y-4 md:grid-cols-5 items-center hover:bg-gray-100 dark:hover:bg-gray-700 -mx-8 px-6 py-5"
              >
                <div className="grid col-span-1">
                  <h3 className="font-semibold text-xs mt-10 mb-5">
                    {t("lbl.productDetail")}
                  </h3>
                  <HoverableImage src={item.thumbnail} />
                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-bold text-sm">{item.title}</span>
                    <span className="text-green-700 text-xs">{item.brand}</span>
                  </div>
                </div>
                <section className="col-span-4 flex flex-col justify-center items-center gap-4">
                  <div className="grid grid-cols-4 items-center w-[80%]">
                    <p className="text-center font-semibold mb-6">
                      {t("lbl.quantity")}
                    </p>
                    <p className="text-center font-semibold mb-6">
                      {t("lbl.price")}
                    </p>
                    <p className="font-semibold text-center mb-6">
                      {t("lbl.total")}
                    </p>
                  </div>
                  <div className="grid grid-cols-4 items-center w-[80%]">
                    <div className="flex justify-center items-center">
                      <MinusIcon
                        className="cursor-pointer"
                        onClick={() => dispatch(decreaseFromCart(item.id))}
                      />
                      <input
                        className="mx-2 border text-center w-8"
                        type="text"
                        value={item.quantity}
                        disabled
                      />
                      <PlusIcon
                        onClick={() => dispatch(addToCart(item))}
                        className="cursor-pointer"
                      />
                    </div>
                    <span className="text-center font-semibold">{`$ ${item.price}`}</span>
                    <span className="text-center font-semibold">
                      {`$ ${item.price * item.quantity}`}
                    </span>
                    <Delete
                      className="w-4 h-4 font-semibold hover:text-red-500 text-xs cursor-pointer"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    />
                  </div>
                </section>
              </div>
            ))}

            <Link
              to="/"
              className="flex font-semibold hover:text-yellow-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 hover:text-yellow-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              {t("lbl.continueShopping")}
            </Link>
          </div>

          <div id="summary" className="w-full lg:w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              {t("lbl.summary")}
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm">{`${cart.cart.length} ${t(
                "lbl.item"
              )}`}</span>
              <span className="font-semibold text-sm">{`${cart.total} $`}</span>
            </div>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm">
                <span>{t("lbl.sum")}</span>
                <span>{`${cart.total} $`}</span>
              </div>
              <button className="bg-yellow-500 font-semibold hover:bg-yellow-600 py-3 text-sm text-white w-full">
                {t("lbl.checkout")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
