import { useDispatch, useSelector } from "react-redux";
import CartTable from "./CartTable";
import { clearAllProduct } from "../../redux/productsSlice/productsSlice";

function MainCart() {
  const products = useSelector((state) => state.products.cartProducts);
  const dispatch = useDispatch();

  const handleClear = () => {
    if (products?.length) {
      const confirm = window.confirm(
        "Do You Want To Clear All Products From Your Cart ?"
      );

      if (confirm) {
        dispatch(clearAllProduct());
      }
    }
  };

  return (
    <div className="grid w-full grid-cols-1 gap-4 pb-4 md:grid-cols-6">
      <div className="col-span-4">
        <div>
          {products?.length ? (
            <CartTable products={products} />
          ) : (
            <div className="my-24">
              <h1 className="text-center text-3xl text-gray-700">
                Please Add The Product To The Cart
              </h1>
            </div>
          )}

          <div className="flex justify-between my-3">
            <button className="px-6 py-3 text-white bg-gray-800 text-[14px] flex items-center gap-3">
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z" />
              </svg>{" "}
              CONTINUE SHOPPING
            </button>
            <button
              onClick={handleClear}
              className="px-6 py-3 text-[14px] flex items-center gap-3 border"
            >
              {" "}
              Clear All
            </button>
          </div>
          <div className="mt-10">
            <div className="text-[15px] font-bold"> COUPON DISCOUNT </div>
            <input
              type="text"
              placeholder="Enter coupon code here..."
              className="w-full border-b outline-none h-[50px] px-3 text-[13px]"
            />
            <button className="px-6 py-3 text-[14px] flex items-center gap-3 border my-4">
              {" "}
              Apply Coupon
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end w-full col-span-2">
        <div className="w-[385px] px-6 py-4 border">
          <span className="font-bold text-[18px]">CART TOTALS</span>
          <div className="flex justify-between mt-3">
            <span className="font-bold text-gray-600">Subtotal</span>
            <span className="font-bold text-gray-600">
              $
              {products
                ?.reduce((prev, pr) => {
                  return prev + pr?.total * pr?.price;
                }, 0)
                .toFixed(2)}
            </span>
          </div>
          <div className="w-full h-[10px] border-b-[1px] " />
          <div className="mt-4">
            <span className="font-semibold text-gray-600">Shipping</span>
            <div className="flex flex-col gap-[12px] mt-4">
              <div className="flex items-center">
                <input
                  id="Free-Shipping"
                  type="checkbox"
                  className="w-[18px] h-[18px] accent-black text-black bg-gray-100  border-gray-300  dark:bg-gray-600 dark:border-gray-600 outline-none"
                  defaultValue=""
                />
                <label
                  htmlFor="Free-Shipping"
                  className="ml-2 text-sm text-gray-600 dark:text-gray-300"
                >
                  Free Shipping
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="Local-Pickup"
                  type="checkbox"
                  className="w-[18px] h-[18px] accent-black text-black bg-gray-100  border-gray-300  dark:bg-gray-600 dark:border-gray-600 outline-none"
                  defaultValue=""
                />
                <label
                  htmlFor="Local-Pickup"
                  className="ml-2 text-sm text-gray-600 dark:text-gray-300"
                >
                  Local Pickup
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="Flat-rate"
                  type="checkbox"
                  className="w-[18px] h-[18px] accent-black text-black bg-gray-100  border-gray-300  dark:bg-gray-600 dark:border-gray-600 outline-none"
                  defaultValue=""
                />
                <label
                  htmlFor="Flat-rate"
                  className="ml-2 text-sm text-gray-600 dark:text-gray-300"
                >
                  Flat rate: $5.00
                </label>
              </div>
            </div>
            <div className="flex justify-between mt-[40px]">
              <span className="font-bold text-[14px]">Total</span>
              <span className="font-bold text-[14px]">
                $
                {products
                  ?.reduce((prev, pr) => {
                    return prev + pr?.total * pr?.price;
                  }, 0)
                  .toFixed(2)}
              </span>
            </div>
            <button className="w-full px-6 py-3 text-white bg-black  text-[15px] font-semibold mt-6">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCart;
