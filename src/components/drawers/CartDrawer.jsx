import { useRef } from "react";
import RightArrowSvg from "../svgs/RightArrowSvg";
import { cartDrawerId } from "./../ids";
import DrawerCartItem from "./DrawerCartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CartDrawer() {
  const products = useSelector((state) => state.products.cartProducts);
  const closeRef = useRef();
  const navigate = useNavigate();

  const handleGo = () => {
    closeRef?.current?.click();
    navigate("/cart");
  };

  return (
    <div>
      <input
        type="checkbox"
        ref={closeRef}
        className="peer hidden"
        id={cartDrawerId}
      />

      <label
        className="fixed top-0 left-0 h-full w-full opacity-0 peer-checked:opacity-30 bg-black pointer-events-none peer-checked:pointer-events-auto z-50"
        htmlFor={cartDrawerId}
      ></label>

      <div
        className="fixed top-0 right-0 h-full w-full max-w-[345px] p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl translate-x-full peer-checked:translate-x-0 z-50"
        id="headlessui-dialog-panel-:r7:"
        data-headlessui-state="open"
      >
        <div className="flex justify-between">
          <div className="text-[14px] font-bold">SHOPPING CART</div>
          <label
            htmlFor={cartDrawerId}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <span className="text-[14px] text-gray-600">Close</span>
            <RightArrowSvg />
          </label>
        </div>

        <div className="w-full h-[30px] border-b-[1px] " />

        <div className="mt-5">
          {!products?.length && <h1>Please Add Product Your Cart</h1>}
          {products?.map((product) => {
            return <DrawerCartItem key={product?.id} product={product} />;
          })}
        </div>

        <div className="w-full h-[30px] border-b-[1px] " />

        <div className="flex items-center justify-between h-[60px]">
          <span className="text-[14px] font-bold">Subtotal:</span>
          <span className="text-[14px] font-bold">
            $
            {products
              .reduce((prev, pr) => {
                return prev + pr?.total * pr?.price;
              }, 0)
              .toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-around">
          <button
            className="px-6 py-2 border text-[14px] border-cyan-700"
            onClick={handleGo}
          >
            VIEW CART
          </button>
          <button className="px-6 py-2 border text-[14px] border-cyan-700 text-white bg-cyan-800">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;
