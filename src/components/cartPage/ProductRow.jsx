import MinusSvg from "./../svgs/MinusSvg";
import PlusSvg from "./../svgs/PlusSvg";
import defaultImage from "./../../assets/failback.png";
import CrossSvg from "./../svgs/CrossSvg";
import { useDispatch } from "react-redux";
import {
  addProduct,
  removeProduct,
} from "../../redux/productsSlice/productsSlice";

function ProductRow({ product }) {
  const dispatch = useDispatch();

  const handlePlus = () => {
    const addingProduct = { ...product };
    addingProduct.total = 1;
    dispatch(addProduct(addingProduct));
  };

  const handleMinus = () => {
    if (product?.total > 0) {
      const addingProduct = { ...product };
      addingProduct.total = -1;
      dispatch(addProduct(addingProduct));
    }
  };

  const handleRemove = () => {
    dispatch(removeProduct(product?.id));
  };
  return (
    <tr className="border-b">
      <td>
        <div className="relative w-[84px] items-center gap-4 my-3">
          <img src={product?.img ? product?.img : defaultImage} alt="" />
          <button
            onClick={handleRemove}
            className="cursor-pointer flex justify-center items-center absolute -top-[8px] -right-[7px] bg-white w-[18px] h-[18px] rounded-full"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 5px 2px",
            }}
          >
            <CrossSvg />
          </button>
        </div>
      </td>
      <td>
        <span className="text-[15px] text-gray-500">
          ${product?.price.toFixed(2)}
        </span>
      </td>
      <td>
        <div className="h-[40px] flex items-center justify-center">
          <div className="flex gap-1 border w-[130px] h-[50px] items-center">
            <input
              type="number"
              className="pl-3 outline-none text-[12px] remove-arrow w-[60px]"
              value={product?.total}
              disabled
            />
            <div className="flex gap-1">
              <button
                onClick={handleMinus}
                className="w-[25px] h-[25px] bg-[#eee] rounded-full flex items-center justify-center cursor-pointer select-none"
              >
                {" "}
                <MinusSvg />{" "}
              </button>
              <button
                onClick={handlePlus}
                className="w-[25px] h-[25px] bg-[#eee] rounded-full flex items-center justify-center cursor-pointer select-none"
              >
                {" "}
                <PlusSvg />{" "}
              </button>
            </div>
          </div>
        </div>
      </td>
      <td>
        <span className="text-[15px] text-gray-500">
          ${(product?.price * product?.total).toFixed(2)}
        </span>
      </td>
    </tr>
  );
}

export default ProductRow;
