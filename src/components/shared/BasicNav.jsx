import DownArrowSvg from "../svgs/DownArrowSvg";
import UserSvg from "../svgs/UserSvg";

function BasicNav() {
  return (
    <div className="w-full h-11 bg-gray-100 flex items-center overflow-hidden">
      <div className="container flex justify-between mx-auto">
        <div className="">
          <p className="font-light small-text">
            {" "}
            WELCOME TO WOLMART STORE MESSAGE OR REMOVE IT!{" "}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex items-center gap-1 cursor-pointer group small-text">
              USD{" "}
              <div className="group-hover:rotate-180 duration-200">
                <DownArrowSvg />
              </div>
              <div className="absolute w-28 h-[50px] bg-white rounded-sm shadow-md bottom-0 left-0 p-2 translate-y-0 opacity-0 group-hover:visible group-hover:translate-y-14 transform duration-500 ease-in-out z-50 transition group-hover:opacity-100">
                <ul className="relative flex flex-col justify-around w-full h-full gap-1  z-50">
                  <li>USD</li>
                  <li>EUR</li>
                  <div className="absolute w-[15px] h-[15px] top-0 left-1 bg-white transform rotate-45 -translate-y-4 -z-50" />
                </ul>
              </div>
            </span>
            <span className="relative flex items-center gap-1 cursor-pointer small-text group ">
              ENG{" "}
              <div className="group-hover:rotate-180 duration-200">
                <DownArrowSvg />
              </div>
              <div className="absolute w-28  bg-white rounded-sm shadow-md -bottom-full left-0 p-2 translate-y-0 opacity-0 group-hover:visible group-hover:translate-y-14 transform duration-500 ease-in-out z-50 transition group-hover:opacity-100">
                <div className="relative w-full h-full">
                  <div className="flex items-center justify-between mb-1">
                    ENG
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    FAR
                  </div>
                  <div className="absolute w-[15px] h-[15px] top-0 left-1 bg-white transform rotate-45 -translate-y-4 -z-50" />
                </div>
              </div>
            </span>
          </div>
          <span className="hidden text-sm text-gray-300 lg:block">|</span>
          <div className="hidden gap-4 lg:flex small-text">
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
            <a href="#">My Account</a>
            <a href="#" className="flex items-center gap-1">
              <UserSvg /> Sign in / Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicNav;
