import React from "react";
import { Link } from "react-router-dom";
import HeartIcon from "~/assets/icons/heart.svg";
import CartIcon from "~/assets/icons/cart.svg";
import { Product } from "~/store/api/redux/products/types";
import HoverableImage from "./HoverableImage";
import { useAppDispatch } from "~/utils/hooks";
import { addToCart, decreaseFromCart } from "~/store/api/redux/cart";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full flex flex-col overflow-hidden dark:border-white shadow-md rounded-sm">
      <Link to={`/product/${product.id}`}>
        {product.thumbnail && <HoverableImage src={product.thumbnail} />}
      </Link>
      <div className="pt-3 px-3 flex products-center justify-between">
        <p>{product.title}</p>
        <HeartIcon
          onClick={() => dispatch(decreaseFromCart(product.id))}
          className="hover:text-yellow-500 h-6 w-6 cursor-pointer"
        />
      </div>
      <div className="mb-4 pt-3 px-3 flex products-center justify-between">
        <p>{`£${product.price}`}</p>
        <CartIcon
          onClick={() => dispatch(addToCart(product))}
          className="hover:text-yellow-500 h-6 w-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ProductCard;
