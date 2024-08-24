import { useDispatch, useSelector } from "react-redux";
import defaultImage from "./../../../assets/failback.png";
import product4 from "./../../../assets/products/product2.jpg";
import product3 from "./../../../assets/products/product3.jpg";
import product2 from "./../../../assets/products/product4.jpg";
import StarsContainer from "../PopularDepartment/StarsContainer";
import { useState } from "react";
import MinusSvg from "../../svgs/MinusSvg";
import PlusSvg from "../../svgs/PlusSvg";
import { addProduct } from "../../../redux/productsSlice/productsSlice";

function ProductModal({ closeRef }) {
  const [count, setCount] = useState(1);
  const product = useSelector((state) => state.products.selectProduct);
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    const newProduct = {
      ...product,
      total: count,
    };

    dispatch(addProduct(newProduct));
    setCount(1);
    closeRef?.current?.click();
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleChange = (e) => {
    const number = parseInt(e.target.value);

    if (number > 0) {
      setCount(number);
    }
  };
  return (
    <div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[50%] p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl scale-0 peer-checked:scale-100"
      id="headlessui-dialog-panel-:rp:"
      data-headlessui-state="open"
    >
      <div className="grid w-full grid-cols-2">
        <div>
          <div className="w-[372px] mx-auto -ml-[5px]">
            <div className="slider-container">
              <div className="slick-slider slick-initialized">
                <div>
                  <div className="ml-3">
                    <img
                      src={product?.img ? product.img : defaultImage}
                      alt=""
                      className="h-[400px]"
                    />
                  </div>
                </div>
              </div>

              <div className="slick-slider slick-initialized">
                <div className="slick-list">
                  <div className="slick-track grid grid-cols-4">
                    <div>
                      <div className="ml-2 cursor-pointer">
                        <img
                          src={product?.img ? product.img : defaultImage}
                          alt=""
                          className="w-[80px]"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="ml-2 cursor-pointer">
                        <img src={product2} alt="" className="w-[80px]" />
                      </div>
                    </div>

                    <div>
                      <div className="ml-2 cursor-pointer">
                        <img src={product3} alt="" className="w-[80px]" />
                      </div>
                    </div>

                    <div>
                      <div className="ml-2 cursor-pointer">
                        <img src={product4} alt="" className="w-[80px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="text-[26px] font-bolder">{product?.name}</span>
          <div className="flex gap-2">
            <span className="text-[13px]">Category:</span>
            <span className="text-[13px] text-gray-400">Electronics</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[13px]">SKU:</span>
            <span className="text-[13px] text-gray-400">AGHF46</span>
          </div>
          <div className="w-full h-[30px] border-b-[1px] " />
          <div>
            <div className="text-[30px] text-gray-700 font-bold">
              ${product?.price}
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="flex gap-[2px]">
                <StarsContainer star={product?.rating} />
              </div>
              <span className="text-gray-400 text-[13px] cursor-text">
                (43 Reviews)
              </span>
            </div>
            <ul className="mt-4 ml-4">
              <li className="mb-2 text-sm text-gray-700 list-disc">
                Ultrices eros in cursus turpis massa cursus mattis.
              </li>
              <li className="mb-2 text-sm text-gray-700 list-disc">
                Volutpat ac tincidunt vitae semper quis lectus.
              </li>
              <li className="mb-2 text-sm text-gray-700 list-disc">
                Aliquam id diam maecenas ultricies mi eget mauris.
              </li>
            </ul>
            <div className="w-full h-[30px] border-b-[1px] " />
            <div className="flex items-center gap-5 my-3">
              <span className="text-[14px]">Color:</span>
              <div className="flex gap-2">
                <div
                  className="w-[25px] h-[25px] rounded-full cursor-pointer flex justify-center items-center"
                  style={{ background: "rgb(255, 204, 1)" }}
                >
                  {" "}
                </div>
                <div
                  className="w-[25px] h-[25px] rounded-full cursor-pointer flex justify-center items-center"
                  style={{ background: "rgb(202, 109, 0)" }}
                >
                  {" "}
                </div>
                <div
                  className="w-[25px] h-[25px] rounded-full cursor-pointer flex justify-center items-center"
                  style={{ background: "rgb(28, 147, 203)" }}
                >
                  {" "}
                </div>
                <div
                  className="w-[25px] h-[25px] rounded-full cursor-pointer flex justify-center items-center"
                  style={{ background: "rgb(204, 204, 204)" }}
                >
                  {" "}
                </div>
                <div
                  className="w-[25px] h-[25px] rounded-full cursor-pointer flex justify-center items-center"
                  style={{ background: "rgb(51, 51, 51)" }}
                >
                  {" "}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 my-3">
              <span className="text-[14px]">Size:</span>
              <div className="flex gap-2">
                <div className="border p-2 cursor-pointer flex  justify-center items-center text-[11px] ">
                  {" "}
                  Small
                </div>
                <div className="border p-2 cursor-pointer flex  justify-center items-center text-[11px] ">
                  {" "}
                  Medium
                </div>
                <div className="border p-2 cursor-pointer flex  justify-center items-center text-[11px] ">
                  {" "}
                  Large
                </div>
                <div className="border p-2 cursor-pointer flex  justify-center items-center text-[11px] ">
                  {" "}
                  Extra Large
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-1 border w-[130px] h-[50px] items-center">
                <input
                  type="number"
                  className="pl-3 outline-none text-[12px] remove-arrow w-[60px]"
                  value={count}
                  onChange={handleChange}
                />
                <div className="flex gap-1">
                  <button
                    className="w-[25px] h-[25px] bg-[#eee] rounded-full flex items-center justify-center cursor-pointer select-none"
                    onClick={decrement}
                  >
                    {" "}
                    <MinusSvg />{" "}
                  </button>
                  <button
                    className="w-[25px] h-[25px] bg-[#eee] rounded-full flex items-center justify-center cursor-pointer select-none"
                    onClick={increment}
                  >
                    {" "}
                    <PlusSvg />{" "}
                  </button>
                </div>
              </div>
              <button
                onClick={handleAddProduct}
                className="bg-[#eee] px-4 py-3 text-[13px] font-bold"
              >
                ADD TO CART
              </button>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="text-[30px]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Heart">
                  <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z" />
                </g>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 32 32"
                className="text-[30px]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 16 5 C 14.707031 5 13.605469 5.84375 13.1875 7 L 6 7 L 6 9 L 7.40625 9 L 7.125 9.5 L 3.125 16.5 L 3 16.75 L 3 17 C 3 19.75 5.25 22 8 22 C 10.75 22 13 19.75 13 17 L 13 16.75 L 12.875 16.5 L 8.875 9.5 L 8.59375 9 L 13.1875 9 C 13.492188 9.84375 14.15625 10.507813 15 10.8125 L 15 24 L 11 24 L 11 26 L 21 26 L 21 24 L 17 24 L 17 10.8125 C 17.839844 10.507813 18.507813 9.839844 18.8125 9 L 23.40625 9 L 23.125 9.5 L 19.125 16.5 L 19 16.75 L 19 17 C 19 19.75 21.25 22 24 22 C 26.75 22 29 19.75 29 17 L 29 16.75 L 28.875 16.5 L 24.875 9.5 L 24.59375 9 L 26 9 L 26 7 L 18.8125 7 C 18.394531 5.84375 17.292969 5 16 5 Z M 16 7 C 16.5625 7 17 7.4375 17 8 C 17 8.5625 16.5625 9 16 9 C 15.4375 9 15 8.5625 15 8 C 15 7.4375 15.4375 7 16 7 Z M 8 12.03125 L 10.28125 16 L 5.71875 16 Z M 24 12.03125 L 26.28125 16 L 21.71875 16 Z M 5.25 18 L 10.75 18 C 10.347656 19.160156 9.304688 20 8 20 C 6.695313 20 5.652344 19.160156 5.25 18 Z M 21.25 18 L 26.75 18 C 26.347656 19.160156 25.304688 20 24 20 C 22.695313 20 21.652344 19.160156 21.25 18 Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
