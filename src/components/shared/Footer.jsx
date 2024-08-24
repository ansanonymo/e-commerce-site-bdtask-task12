function Footer() {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-[185px] lg:h-[110px] bg-sky-800">
        <div className="container flex flex-col items-center justify-between mx-auto lg:flex-row">
          <div className="flex h-[110px] items-center gap-5">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              className="text-white font-bold text-[45px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1023.46 232a31.629 31.629 0 0 0-2.48-18.271C1012.917 178.288 987.3 160 944.005 160h-832c-38.08 0-79.105 14-99.28 41.472-1.745 1.328-3.409 2.832-4.912 4.576-6.449 7.44-8.705 17.009-7.264 26.033-.288 2.592-.544 5.2-.544 7.92v512c0 53.024 58.992 112 112 112h832c53.024 0 80-58.976 80-112v-512c0-2.832-.368-5.313-.544-8.001zm-911.459-8l832.001-.001h.432L512.002 568.655 81.314 225.407C91.106 223.599 103.154 224 112 224zm832.001 575.999H112.003c-17.648 0-48-30.336-48-48V293.551l427.04 341.648c6.016 5.2 13.487 7.792 20.959 7.792a32.046 32.046 0 0 0 20.976-7.792l427.024-341.632v458.432c0 17.664 1.664 48-16 48z" />
            </svg>
            <div className="flex flex-col text-white">
              <span className="font-bold">SUBSCRIBE TO OUR NEWSLETTER</span>
              <span className="text-[13px]">
                Get all the latest information on Events, Sales and Offers.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Your E-mail Address"
              className="text-[13px] flex flex-grow w-[320px]  lg:w-[450px] p-[12px] bg-white rounded outline-none box-border"
            />
            <button className="flex items-center gap-4 p-3 text-white rounded bg-slate-800 text-[13px] font-semibold">
              <span>SUBSCRIBE</span>{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
              </svg>{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full py-4">
        <div className="container flex flex-col gap-10 mx-auto my-8 lg:justify-between lg:flex-row">
          <div className="flex flex-col gap-2">
            <img
              src="/_next/static/media/logo.dd0438da.png"
              alt=""
              className="w-[150px]"
            />
            <span className="text-[14px] font-semibold">
              Got Question? Call us 24/7
            </span>
            <h3 className="text-[18px] font-bold text-slate-700">
              1-800-570-7777
            </h3>
            <p className="text-[14px] text-slate-600 leading-[26px]">
              Register now to get updates on pronot get <br /> up icons &amp;
              coupons ster now toon.
            </p>
            <div className="flex gap-2 mt-2">
              <div className="w-10 h-10 rounded-full bg-[#1B4F9B] flex justify-center items-center text-white">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="text-lg"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#00ADEF] flex justify-center items-center text-white">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="text-lg"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#CC0001] flex justify-center items-center text-white">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  className="text-lg"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#2C567E] flex justify-center items-center text-white">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 256 256"
                  className="text-lg"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#F96A02] flex justify-center items-center text-white">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 496 512"
                  className="text-lg"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[16px] uppercase font-semibold text-slate-600 mb-2">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="text-[13px]">About Us</li>
              <li className="text-[13px]">Team Member</li>
              <li className="text-[13px]">Career</li>
              <li className="text-[13px]">Contact Us</li>
              <li className="text-[13px]">Affilate</li>
              <li className="text-[13px]">Order History</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[16px] uppercase font-semibold text-slate-600 mb-2">
              MY ACCOUNT
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="text-[13px]">Track My Order</li>
              <li className="text-[13px]">View Cart</li>
              <li className="text-[13px]">Sign In</li>
              <li className="text-[13px]">Help</li>
              <li className="text-[13px]">My Wishlist</li>
              <li className="text-[13px]">Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[16px] uppercase font-semibold text-slate-600 mb-2">
              CUSTOMER SERVICE
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="text-[13px]">Payment Methods</li>
              <li className="text-[13px]">Money-back guarantee!</li>
              <li className="text-[13px]">Product Returns</li>
              <li className="text-[13px]">Support Center</li>
              <li className="text-[13px]">Shipping</li>
              <li className="text-[13px]">Term and Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
