import { useSelector } from "react-redux";
import { cartDrawerId } from "../ids";
import CartSvg from "../svgs/CartSvg";

function NavCartIcon() {
  const products = useSelector((state) => state.products.cartProducts);
  return (
    <label
      htmlFor={cartDrawerId}
      className="relative flex flex-col items-center cursor-pointer group"
    >
      <CartSvg />
      <span className="text-[12px] hidden lg:block group-hover:text-cyan-800 transition duration-700 ease-in-out">
        Cart
      </span>
      <div className="absolute top-0 -right-[8px] flex items-center justify-center w-5 h-5 text-white rounded-full bg-cyan-700">
        <span className="text-[10px]">{products?.length}</span>
      </div>
    </label>
  );
}

export default NavCartIcon;
