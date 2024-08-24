import { useEffect } from "react";
import MainNavDropDown from "./MainNavDropDown";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function MainNav() {
  const [isTop, setIsTop] = useState(true);
  const [onHover, setOnHover] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const listener = window.addEventListener("scroll", () => {
      if (window.scrollY > 750) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    });

    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  const fixedClass =
    "fixed left-0 top-0  z-50 shadow-md animate-menu-getDown bg-white transition ease-in-out  w-full h-[55px] border-t-[1px] border-gray-200 items-center hidden lg:flex px-3";

  const notFixedClass =
    "flex items-center justify-between w-full h-full gap-4 px-2 mx-auto border-b md:container";

  return (
    <div className={isTop ? notFixedClass : fixedClass}>
      <MainNavDropDown
        open={"/" === pathname ? isTop || onHover : onHover}
        handleMouseEnter={() => {
          setOnHover(true);
        }}
        handleMouseLeave={() => {
          setOnHover(false);
        }}
      />
      <div className="ml-3 flex items-center justify-between lg:flex-grow">
        <div className="items-center hidden gap-6 lg:flex">
          <div className="text-[15px] font-bold text-gray-700 cursor-pointer relative">
            Home
            <div className="absolute -bottom-[4px] left-0 w-full bg-cyan-700 h-[3px]" />
          </div>
          <div className="text-[15px] font-bold text-gray-700 cursor-pointer">
            Shop{" "}
          </div>
          <div className="text-[15px] font-bold text-gray-700 cursor-pointer flex items-center gap-2">
            Vendor
          </div>
          <div className="text-[15px] font-bold text-gray-700 cursor-pointer">
            Blog
          </div>
          <div className="text-[15px] font-bold text-gray-700 cursor-pointer">
            Pages
          </div>
          <div className="text-[15px] font-bold text-gray-700 cursor-pointer">
            Elements
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="items-center hidden gap-2 cursor-pointer lg:flex group">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              className="text-[20px] group-hover:text-cyan-700 transition duration-700 ease-in-out"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M515.664-.368C305.76-.368 128 178.4 128 390.176c0 221.76 206.032 448.544 344.624 607.936.528.64 22.929 25.52 50.528 25.52h2.449c27.6 0 49.84-24.88 50.399-25.52 130.064-149.52 320-396.048 320-607.936C896 178.4 757.344-.368 515.664-.368zm12.832 955.552c-1.12 1.12-2.753 2.369-4.193 3.409-1.472-1.008-3.072-2.288-4.255-3.408l-16.737-19.248C371.92 785.2 192 578.785 192 390.176c0-177.008 148.224-326.56 323.664-326.56 218.528 0 316.336 164 316.336 326.56 0 143.184-102.128 333.296-303.504 565.008zm-15.377-761.776c-106.032 0-192 85.968-192 192s85.968 192 192 192 192-85.968 192-192-85.968-192-192-192zm0 320c-70.576 0-129.473-58.816-129.473-129.408 0-70.576 57.424-128 128-128 70.624 0 128 57.424 128 128 .032 70.592-55.903 129.408-126.527 129.408z" />
            </svg>
            <span className="font-semibold transition duration-700 ease-in-out group-hover:text-cyan-700 text-[14px]">
              Track Order
            </span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer group ">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              className="text-[20px] group-hover:text-cyan-700 transition duration-700 ease-in-out"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1023.98 416.272l-.001-338.367c0-42.944-34.944-77.904-77.872-77.904H600.73c-21.68 0-54.496 0-75.92 21.44L18.875 527.393c-12.16 12.16-18.88 28.304-18.88 45.487 0 17.216 6.689 33.376 18.849 45.537l386.8 386.72C417.756 1017.312 433.916 1024 451.1 1024s33.36-6.689 45.487-18.849l505.952-505.968c21.696-21.648 21.569-52.816 21.441-82.912zm-66.685 37.666L450.878 959.874 64.126 572.658 569.518 67.154c5.088-3.152 23.408-3.152 30.992-3.152l14.4.048 331.2-.048c7.665 0 13.873 6.24 13.873 13.904V416.53c.064 12.176.129 32.544-2.688 37.408zM768.014 128.001c-70.689 0-128 57.311-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 192c-35.344 0-64-28.656-64-64s28.656-64 64-64 64 28.656 64 64-28.656 64-64 64z" />
            </svg>
            <span className="font-semibold transition duration-700 ease-in-out group-hover:text-cyan-700 text-[14px]">
              Daily Deals
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
