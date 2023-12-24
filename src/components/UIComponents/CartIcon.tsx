import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Cart from "~/assets/icons/cart.svg";

type CartProps = {
  count: number;
};

const CartIcon: React.FC<CartProps> = ({ count }) => {
  const countRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (countRef.current) {
      countRef.current.classList.add("animate-wiggle");
      setTimeout(() => {
        countRef.current?.classList.remove("animate-wiggle");
      }, 800);
    }
  }, [count]);

  return (
    <div>
      <Link
        className="inline-flex items-center justify-center no-underline hover:text-black dark:hover:text-white relative"
        to="/cart"
      >
        <span
          ref={countRef}
          className="bg-yellow-500 text-sm rounded-full left-2 absolute bottom-2 dark:bg-white dark:text-black flex items-center justify-center w-5 h-5 m-1 font-bold"
        >
          {count}
        </span>
        <Cart />
      </Link>
    </div>
  );
};

export default CartIcon;
