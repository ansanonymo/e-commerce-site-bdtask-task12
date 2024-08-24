import BagSvg from "../../svgs/BagSvg";
import HeartSvg from "../../svgs/HeartSvg";
import MeasurementSvg from "../../svgs/MeasurementSvg";
import ZoomSvg from "../../svgs/ZoomSvg";
import StarsContainer from "./StarsContainer";
import defaultImage from "./../../../assets/failback.png";
import { productModalId } from "../../ids";
import { selectProduct } from "../../../redux/productsSlice/productsSlice";
import { useDispatch } from "react-redux";

function PopularDepartmentCart({ product }) {
  const dispatch = useDispatch();
  const handleMouseOver = () => {
    dispatch(selectProduct(product?.id));
  };
  return (
    <div className="w-[200px] md:w-[233px] mb-3" onMouseEnter={handleMouseOver}>
      <div className="w-full h-[233px] md:h-[260px] bg-gray-100 flex justify-center items-center cursor-pointer relative group">
        <img src={product?.img ? product.img : defaultImage} alt="" />
        <div className="absolute top-4 transition ease-in-out invisible group-hover:visible right-4 w-[40px] h-[180px] flex flex-col gap-2 items-center ">
          <div className="w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center text-gray-400 hover:bg-cyan-700 hover:text-white">
            <BagSvg />
          </div>
          <div className="w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center text-gray-400 hover:bg-cyan-700 hover:text-white">
            <HeartSvg />
          </div>
          <label
            htmlFor={productModalId}
            className="w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center text-gray-400 hover:bg-cyan-700 hover:text-white cursor-pointer"
          >
            <ZoomSvg />
          </label>
          <div className="w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center text-gray-400 hover:bg-cyan-700 hover:text-white">
            <MeasurementSvg />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[2px] mt-2">
        <a className="text-[13px] cursor-pointer" href="/product-details/3">
          {product?.name}
        </a>
        <div className="flex items-center gap-1 cursor-pointer">
          <StarsContainer star={product?.rating} />
          <span className="text-gray-400 text-[13px] cursor-text">
            ({/* */}3{/* */} Reviews)
          </span>
        </div>
        <span className="text-[14px] font-semibold">
          ${/* */}
          {product?.price}
        </span>
      </div>
    </div>
  );
}

export default PopularDepartmentCart;
