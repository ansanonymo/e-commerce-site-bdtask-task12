import { Link } from "react-router-dom";

function BreadCrump() {
  return (
    <div className="flex items-center justify-center py-12">
      <Link
        className="text-[16px] md:text-[22px] font-bold text-cyan-700 cursor-pointer"
        href="/cart"
      >
        Shopping Cart
      </Link>{" "}
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        className="text-[20px] md:text-[25px] text-gray-500"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
      </svg>
      <Link
        className="text-[16px] md:text-[22px] font-bold text-gray-500 cursor-pointer"
        href="/checkout"
      >
        Checkout
      </Link>{" "}
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        className="text-[20px] md:text-[25px] text-gray-500"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
      </svg>
      <span className="text-[16px] md:text-[22px] font-bold text-gray-500 cursor-pointer">
        Order Complete
      </span>
    </div>
  );
}

export default BreadCrump;
