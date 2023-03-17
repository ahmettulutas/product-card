import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Layout from "~/components/Layout";
import { useAppDispatch, useAppSelector } from "~/utils/hooks";
import Delete from "~/assets/icons/bin.svg";
import { addToCart, decreaseFromCart, removeFromCart } from "~/store/api/redux/cart";
const Cart = () => {

  const { t } = useTranslation();
  const cart = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();
  return (
    <Layout>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10 flex-wrap">
          <div className="w-full lg:w-3/4 px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">{t("lbl.shoppingCart")}</h1>
              <h2 className="font-semibold text-2xl">{`${cart.cart.length} ${t("lbl.item")}`}</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-xs uppercase w-2/5">{t("lbl.productDetail")}</h3>
              <h3 className="font-semibold text-center text-xs uppercase w-1/5">{t("lbl.quantity")}</h3>
              <h3 className="font-semibold text-center text-xs uppercase w-1/5">{t("lbl.price")}</h3>
              <h3 className="font-semibold text-center text-xs uppercase w-1/5">{t("lbl.total")}</h3>
            </div>
            {cart.cart.map(item => (
              <div key={item.id} className="flex items-center hover:bg-gray-600 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img className="h-24" src={item.thumbnail} alt="" />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{item.title}</span>
                    <span className="text-red-500 text-xs">{item.brand}</span>
                    <Delete className="w-4 font-semibold hover:text-red-500 text-xs cursor-pointer" onClick={() => dispatch(removeFromCart(item.id))}/>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <svg onClick={() => dispatch(decreaseFromCart(item.id))} className="fill-current w-3 cursor-pointer" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                  </svg>
                  <input className="mx-2 border text-center w-8" type="text" value={item.quantity} />
                  <svg onClick={() => dispatch(addToCart(item))} className="fill-current w-3 cursor-pointer" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                  </svg>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">{`$ ${item.price}`}</span>
                <span className="text-center w-1/5 font-semibold text-sm">{`$ ${item.price * item.quantity}`}</span>
              </div>
            ))}

            <Link to="/" className="flex font-semibold hover:text-yellow-600 text-sm mt-10">
              <svg className="fill-current mr-2 hover:text-yellow-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
              {t("lbl.continueShopping")}
            </Link>
          </div>

          <div id="summary" className="w-full lg:w-1/4 px-8 py-10">
            <h1 className="font-semibold text-xl border-b pb-8">{t("lbl.summary")}</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">{`${cart.cart.length} ${t("lbl.item")}`}</span>
              <span className="font-semibold text-sm">{`${cart.total} $`}</span>
            </div>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>{t("lbl.sum")}</span>
                <span>{`${cart.total} $`}</span>
              </div>
              <button className="bg-yellow-500 font-semibold hover:bg-yellow-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;