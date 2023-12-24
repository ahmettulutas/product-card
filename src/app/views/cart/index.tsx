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
import LeftArrow from "~/assets/icons/left-icon.svg";
import Empty from "~/assets/img/empty.svg";

import PlusIcon from "~/assets/icons/plus.svg";
import { HoverableImage } from "~/components/UIComponents";

const Cart = () => {
  const { t } = useTranslation();
  const { cart, total } = useAppSelector((state) => state.cart);
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
              <h2 className="font-semibold text-2xl">
                {`${cart.length} ${t("lbl.item")}`}
              </h2>
            </div>
            {!cart.length ? (
              <div className="m-auto flex gap-2 items-center">
                <Empty className="w-40 h-40" />
                <p className="text-lg">{t("msg.emptyCart")}</p>
              </div>
            ) : (
              cart.map((item) => (
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
                      <span className="text-green-700 text-xs">
                        {item.brand}
                      </span>
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
              ))
            )}
            <Link
              to="/"
              className="flex font-semibold hover:text-yellow-600 text-sm mt-10"
            >
              <LeftArrow />
              {t("lbl.continueShopping")}
            </Link>
          </div>
          <div id="summary" className="w-full lg:w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              {t("lbl.summary")}
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm">{`${cart.length} ${t(
                "lbl.item"
              )}`}</span>
              <span className="font-semibold text-sm">{`${total} $`}</span>
            </div>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm">
                <span>{t("lbl.sum")}</span>
                <span>{`${total} $`}</span>
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
