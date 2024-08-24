import { Link } from "react-router-dom";
import logoImage from "./../../assets/logo.png";
import NavCartIcon from "./NavCartIcon";
function TopNav() {
  return (
    <div className="flex items-center w-full h-[110px] bg-white __className_7df6af">
      <div className="flex items-center justify-between w-full gap-10 px-2 mx-auto md:container">
        <div className="flex items-center gap-4 mr-5">
          <div className="flex items-center cursor-pointer lg:hidden"></div>
          <Link href="/">
            <img
              src={logoImage}
              alt=""
              className="w-[144px] h-[44px] object-contain"
            />
          </Link>
        </div>
        <div className="items-center h-[45px] border-2 border-cyan-700 w-[600px] px-2 hidden md:flex">
          <select className="md:w-[150px] mr-4 text-[11px] outline-none">
            <option>All Categories</option>
            <option>Fashion</option>
            <option>Furniture</option>
            <option>Shoes</option>
            <option>Sports</option>
            <option>Games</option>
            <option>Computer</option>
            <option>Electronic</option>
            <option>Kitchen</option>
            <option>Clothing</option>
          </select>
          <div className="flex items-center justify-between w-full">
            <input
              type="text"
              placeholder="Search in..."
              className="text-[11px] w-full outline-none h-[40px]"
            />
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="cursor-pointer"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 pt-1 -mr-[6px] lg:mr-[50px] relative group cursor-pointer">
            <div className="">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                className="text-[24px] transform rotate-6 group-hover:text-cyan-600 transition ease-in-out duration-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
            </div>
            <div className="lg:flex-col items-start w-[130px] hidden lg:flex">
              <span className="text-[12px] mb-1">Live Chat or :</span>
              <span className="font-bold transition duration-700 ease-in-out group-hover:text-cyan-600">
                0(800)123-456
              </span>
            </div>
            <div className="absolute h-10 w-[1px] bg-gray-300 top-3 -right-8 hidden lg:block" />
          </div>
          <div className="text-sm">
            <div className="flex gap-2 px-3 lg:gap-6 lg:px-0">
              <div className="flex flex-col items-center cursor-pointer group">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="text-[30px] group-hover:text-cyan-700 transition duration-700 ease-in-out"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Heart">
                    <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z" />
                  </g>
                </svg>
                <span className="text-[12px] hidden lg:block group-hover:text-cyan-700 transition duration-700 ease-in-out">
                  Wishlist
                </span>
              </div>
              <div className="flex flex-col items-center cursor-pointer group">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 32 32"
                  className="text-[30px] group-hover:text-cyan-700 transition duration-700 ease-in-out"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 16 5 C 14.707031 5 13.605469 5.84375 13.1875 7 L 6 7 L 6 9 L 7.40625 9 L 7.125 9.5 L 3.125 16.5 L 3 16.75 L 3 17 C 3 19.75 5.25 22 8 22 C 10.75 22 13 19.75 13 17 L 13 16.75 L 12.875 16.5 L 8.875 9.5 L 8.59375 9 L 13.1875 9 C 13.492188 9.84375 14.15625 10.507813 15 10.8125 L 15 24 L 11 24 L 11 26 L 21 26 L 21 24 L 17 24 L 17 10.8125 C 17.839844 10.507813 18.507813 9.839844 18.8125 9 L 23.40625 9 L 23.125 9.5 L 19.125 16.5 L 19 16.75 L 19 17 C 19 19.75 21.25 22 24 22 C 26.75 22 29 19.75 29 17 L 29 16.75 L 28.875 16.5 L 24.875 9.5 L 24.59375 9 L 26 9 L 26 7 L 18.8125 7 C 18.394531 5.84375 17.292969 5 16 5 Z M 16 7 C 16.5625 7 17 7.4375 17 8 C 17 8.5625 16.5625 9 16 9 C 15.4375 9 15 8.5625 15 8 C 15 7.4375 15.4375 7 16 7 Z M 8 12.03125 L 10.28125 16 L 5.71875 16 Z M 24 12.03125 L 26.28125 16 L 21.71875 16 Z M 5.25 18 L 10.75 18 C 10.347656 19.160156 9.304688 20 8 20 C 6.695313 20 5.652344 19.160156 5.25 18 Z M 21.25 18 L 26.75 18 C 26.347656 19.160156 25.304688 20 24 20 C 22.695313 20 21.652344 19.160156 21.25 18 Z" />
                </svg>
                <span className="text-[12px] hidden lg:block group-hover:text-cyan-700 transition duration-700 ease-in-out">
                  Comapare
                </span>
              </div>
              <NavCartIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
