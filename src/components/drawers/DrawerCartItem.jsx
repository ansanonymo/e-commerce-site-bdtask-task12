import { useDispatch } from "react-redux";
import CrossSvg from "../svgs/CrossSvg";
import failbackImage from "./../../assets/failback.png";
import { removeProduct } from "../../redux/productsSlice/productsSlice";

function DrawerCartItem({ product }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeProduct(product?.id));
  };

  return (
    <div className="flex justify-between mb-3">
      <div>
        <div className="w-[180px] text-[14px]">{product?.name}</div>
        <div className="mt-3">
          <span className="text-gray-400">{product?.total} X</span>{" "}
          <span className="font-bold text-cyan-800">${product?.price}</span>
        </div>
      </div>
      <div className="relative w-[84px]">
        <img src={product?.img ? product.img : failbackImage} alt="" />
        <button
          className="cursor-pointer flex justify-center items-center absolute -top-[8px] -right-[7px] bg-white w-[18px] h-[18px] rounded-full"
          style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 5px 2px" }}
          onClick={handleRemove}
        >
          <CrossSvg />
        </button>
      </div>
    </div>
  );
}

export default DrawerCartItem;
