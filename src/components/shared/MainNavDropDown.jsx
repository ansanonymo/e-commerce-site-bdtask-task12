function MainNavDropDown({
  open = false,
  handleMouseEnter = () => {},
  handleMouseLeave = () => {},
}) {
  return (
    <div
      className="bg-gray-100  relative w-[280px]  h-[55px] flex items-center justify-between px-4 cursor-pointer "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-3 ">
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
          <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" />
        </svg>
        <span className="font-semibold uppercase text-[14px]">
          Browse Categories
        </span>
      </div>
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
        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      </svg>

      {/** main list */}
      <div
        className={`${
          open ? "scale-y-100" : "scale-y-0"
        } origin-top absolute left-0 w-full h-auto p-4 bg-white shadow-lg top-[56px] z-40 duration-200`}
      >
        <div className="flex flex-col w-full h-auto group border-b-[1px] relative group">
          <div className="flex items-center justify-between w-full h-[40px]">
            <div className="flex items-center gap-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 256 256"
                className="transition duration-700 ease-in-out group-hover:text-cyan-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M246.64,63,194.87,34.74A5.93,5.93,0,0,0,192,34H160a6,6,0,0,0-6,6,26,26,0,0,1-52,0,6,6,0,0,0-6-6H64a5.93,5.93,0,0,0-2.88.74L9.36,63A13.77,13.77,0,0,0,3.58,81.55l19.28,36.81A14.38,14.38,0,0,0,35.67,126H58v82a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V126h22.34a14.38,14.38,0,0,0,12.81-7.64l19.28-36.81A13.77,13.77,0,0,0,246.64,63Zm-211,51a2.42,2.42,0,0,1-2.18-1.21L14.21,76a1.82,1.82,0,0,1,.9-2.47L58,50.11V114ZM186,208a2,2,0,0,1-2,2H72a2,2,0,0,1-2-2V46H90.48a38,38,0,0,0,75,0H186Zm55.8-132-19.28,36.8a2.42,2.42,0,0,1-2.18,1.21H198V50.11l42.9,23.4A1.83,1.83,0,0,1,241.79,76Z" />
              </svg>
              <span className="text-[14px] group-hover:text-cyan-700 transition duration-700 ease-in-out">
                Fashion
              </span>
            </div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="transition duration-700 ease-in-out group-hover:text-cyan-700 group-hover:translate-x-3"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </div>
          <div className="absolute -top-4 left-[263px] -translate-x-3 transition ease-in-out duration-700 invisible group-hover:visible group-hover:translate-x-0 opacity-0 group-hover:opacity-100 shadow-md">
            <div className="w-[420px] h-auto bg-white p-4 flex justify-between">
              <div>
                <div className="h-[40px] flex items-center border-b">
                  {" "}
                  <span className="text-[14px] font-semibold text-gray-600 uppercase hover:cursor-text">
                    Women
                  </span>{" "}
                </div>
                <div className="my-2">
                  <ul className="text-[14px] flex flex-col gap-2">
                    <li>New Arrival</li>
                    <li>Best Seller</li>
                    <li>Trending</li>
                    <li>Clothing</li>
                    <li>Shoes</li>
                    <li>Bags</li>
                    <li>Accessories</li>
                    <li>Jewellay &amp; Watches</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="h-[40px] flex items-center border-b">
                  {" "}
                  <span className="text-[14px] font-semibold text-gray-600 uppercase hover:cursor-text">
                    Men
                  </span>{" "}
                </div>
                <div className="my-2">
                  <ul className="text-[14px] flex flex-col gap-2">
                    <li>New Arrival</li>
                    <li>Best Seller</li>
                    <li>Trending</li>
                    <li>Clothing</li>
                    <li>Shoes</li>
                    <li>Bags</li>
                    <li>Accessories</li>
                    <li>Jewellay &amp; Watches</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto group border-b-[1px] relative group">
          <div className="flex items-center justify-between w-full h-[40px]">
            <div className="flex items-center gap-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="transition duration-700 ease-in-out group-hover:text-cyan-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.03 2.59a1.501 1.501 0 0 1 1.94 0l7.5 6.363a1.5 1.5 0 0 1 .53 1.144V19.5a1.5 1.5 0 0 1-1.5 1.5h-5.75a.75.75 0 0 1-.75-.75V14h-2v6.25a.75.75 0 0 1-.75.75H4.5A1.5 1.5 0 0 1 3 19.5v-9.403c0-.44.194-.859.53-1.144ZM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v6.25h5v-9.403Z" />
              </svg>
              <span className="text-[14px] transition duration-700 ease-in-out group-hover:text-cyan-700">
                Home &amp; Garden
              </span>
            </div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="transition duration-700 ease-in-out group-hover:text-cyan-700 group-hover:translate-x-3"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </div>
          <div className="absolute -top-4 left-[263px] -translate-x-3 transition ease-in-out duration-700 invisible group-hover:visible group-hover:translate-x-0 opacity-0 group-hover:opacity-100 shadow-md">
            <div className="w-[420px] h-auto bg-white p-4 flex justify-between">
              <div>
                <div className="h-[40px] flex items-center border-b">
                  {" "}
                  <span className="text-[14px] font-semibold text-gray-600 uppercase hover:cursor-text">
                    BEDROOM
                  </span>{" "}
                </div>
                <div className="my-2">
                  <ul className="text-[14px] flex flex-col gap-2">
                    <li>Beds, Frames &amp; Bases</li>
                    <li>Dressers</li>
                    <li>Nightstands</li>
                    <li>Kid{"'"}s Beds &amp; Headboards</li>
                    <li>Armoires</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="h-[40px] flex items-center border-b">
                  {" "}
                  <span className="text-[14px] font-semibold text-gray-600 uppercase hover:cursor-text">
                    Office
                  </span>{" "}
                </div>
                <div className="my-2">
                  <ul className="text-[14px] flex flex-col gap-2">
                    <li>Office Chairs</li>
                    <li>Desks</li>
                    <li>Trending</li>
                    <li>Bookcases</li>
                    <li>File Cabinets</li>
                    <li>Bags</li>
                    <li>Breakroom Tables</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto group border-b-[1px] relative group">
          <div className="flex items-center justify-between w-full h-[40px]">
            <div className="flex items-center gap-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 256 256"
                className="transition duration-700 ease-in-out group-hover:text-cyan-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z" />
              </svg>
              <span className="text-[14px] transition duration-700 ease-in-out group-hover:text-cyan-700">
                Electronics
              </span>
            </div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="transition duration-700 ease-in-out group-hover:text-cyan-700 group-hover:translate-x-3"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </div>
          <div className="absolute -top-4 left-[263px] -translate-x-3 transition ease-in-out duration-700 invisible group-hover:visible group-hover:translate-x-0 opacity-0 group-hover:opacity-100 shadow-md">
            <div className="w-[420px] h-auto bg-white p-4 flex justify-between">
              <div>
                <div className="h-[40px] flex items-center border-b">
                  {" "}
                  <span className="text-[14px] font-semibold text-gray-600 uppercase hover:cursor-text">
                    LAPTOPS &amp; COMPUTERS
                  </span>{" "}
                </div>
                <div className="my-2">
                  <ul className="text-[14px] flex flex-col gap-2">
                    <li>Desktop Computers</li>
                    <li>Monitors</li>
                    <li>Laptops</li>
                    <li>Hard Drives &amp; Storage</li>
                    <li>Computer Accessories</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="h-[40px] flex items-center border-b">
                  {" "}
                  <span className="text-[14px] font-semibold text-gray-600 uppercase hover:cursor-text">
                    DIGITAL CAMERAS
                  </span>{" "}
                </div>
                <div className="my-2">
                  <ul className="text-[14px] flex flex-col gap-2">
                    <li>Digital SLR Cameras</li>
                    <li>Sports &amp; Action Cameras</li>
                    <li>Camera Lenses</li>
                    <li>Photo Printer</li>
                    <li>Digital Memory Cards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto group border-b-[1px] relative group">
          <div className="flex items-center justify-between w-full h-[40px]">
            <div className="flex items-center gap-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 256 256"
                className="transition duration-700 ease-in-out group-hover:text-cyan-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M208,138H174V102h18a14,14,0,0,0,14-14V40a14,14,0,0,0-14-14H64A14,14,0,0,0,50,40V88a14,14,0,0,0,14,14H82v36H48a14,14,0,0,0-14,14v16a14,14,0,0,0,14,14H58v42a6,6,0,0,0,12,0V182H186v42a6,6,0,0,0,12,0V182h10a14,14,0,0,0,14-14V152A14,14,0,0,0,208,138ZM62,88V40a2,2,0,0,1,2-2H192a2,2,0,0,1,2,2V88a2,2,0,0,1-2,2H64A2,2,0,0,1,62,88Zm32,14h68v36H94Zm116,66a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z" />
              </svg>
              <span className="text-[14px] transition duration-700 ease-in-out group-hover:text-cyan-700">
                Furniture
              </span>
            </div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="transition duration-700 ease-in-out group-hover:text-cyan-700 group-hover:translate-x-3"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </div>
          <div className="absolute -top-4 left-[263px] -translate-x-3 transition ease-in-out duration-700 invisible group-hover:visible group-hover:translate-x-0 opacity-0 group-hover:opacity-100 shadow-md">
            <div className="w-[420px] h-auto bg-white p-4 flex justify-between">
              <div>
                <div className="h-[40px] flex items-center border-b">
                  {" "}
                  <span className="text-[14px] font-semibold text-gray-600 uppercase hover:cursor-text">
                    Women
                  </span>{" "}
                </div>
                <div className="my-2">
                  <ul className="text-[14px] flex flex-col gap-2">
                    <li>New Arrival</li>
                    <li>Best Seller</li>
                    <li>Trending</li>
                    <li>Clothing</li>
                    <li>Shoes</li>
                    <li>Bags</li>
                    <li>Accessories</li>
                    <li>Jewellay &amp; Watches</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="h-[40px] flex items-center border-b">
                  {" "}
                  <span className="text-[14px] font-semibold text-gray-600 uppercase hover:cursor-text">
                    Men
                  </span>{" "}
                </div>
                <div className="my-2">
                  <ul className="text-[14px] flex flex-col gap-2">
                    <li>New Arrival</li>
                    <li>Best Seller</li>
                    <li>Trending</li>
                    <li>Clothing</li>
                    <li>Shoes</li>
                    <li>Bags</li>
                    <li>Accessories</li>
                    <li>Jewellay &amp; Watches</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto group border-b-[1px]">
          <div className="flex items-center justify-between w-full h-[40px]">
            <div className="flex items-center gap-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 256 256"
                className="transition duration-700 ease-in-out group-hover:text-cyan-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M72,136H32a8,8,0,0,1,0-16H67.72L81.34,99.56a8,8,0,0,1,13.32,0l25.34,38,9.34-14A8,8,0,0,1,136,120h24a8,8,0,0,1,0,16H140.28l-13.62,20.44a8,8,0,0,1-13.32,0L88,118.42l-9.34,14A8,8,0,0,1,72,136ZM178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,.75,0,1.5,0,2.25a8,8,0,1,0,16-.5c0-.58,0-1.17,0-1.75A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46c0,53.61-77.76,102.15-96,112.8-10.83-6.31-42.63-26-66.68-52.21a8,8,0,1,0-11.8,10.82c31.17,34,72.93,56.68,74.69,57.63a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32Z" />
              </svg>
              <span className="text-[14px] transition duration-700 ease-in-out group-hover:text-cyan-700">
                Health &amp; Beauty
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto group border-b-[1px]">
          <div className="flex items-center justify-between w-full h-[40px]">
            <div className="flex items-center gap-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="transition duration-700 ease-in-out group-hover:text-cyan-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Gift">
                  <path d="M19.435,5.568h-2.38a1.979,1.979,0,0,0-.51-1.92,2.022,2.022,0,0,0-2.83,0L12,5.367l-1.71-1.719a2,2,0,0,0-2.83,0,1.979,1.979,0,0,0-.51,1.92H4.565a1.5,1.5,0,0,0-1.5,1.5v1A1.487,1.487,0,0,0,4,9.448v8.99a2.507,2.507,0,0,0,2.5,2.5h11a2.5,2.5,0,0,0,2.5-2.5V9.458a1.509,1.509,0,0,0,.94-1.39v-1A1.5,1.5,0,0,0,19.435,5.568ZM8.165,4.357a1,1,0,0,1,1.41,0l1.21,1.211H8.015A.989.989,0,0,1,8.165,4.357ZM11,19.938H6.5a1.5,1.5,0,0,1-1.5-1.5V9.568h6Zm0-11.37H4.565a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5H11Zm3.43-4.211A1,1,0,0,1,16,5.568h-2.78ZM19,18.438a1.5,1.5,0,0,1-1.5,1.5H13V9.568h6Zm.94-10.37a.5.5,0,0,1-.5.5H13v-2h6.44a.5.5,0,0,1,.5.5Z" />
                </g>
              </svg>
              <span className="text-[14px] transition duration-700 ease-in-out group-hover:text-cyan-700">
                Gift Ideas
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto group border-b-[1px]">
          <div className="flex items-center justify-between w-full h-[40px]">
            <div className="flex items-center gap-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="transition duration-700 ease-in-out group-hover:text-cyan-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 8.65A5 5 0 0 0 17 4H7a5 5 0 0 0-5 4.74A2 2 0 0 0 2 9v7.5A3.48 3.48 0 0 0 5.5 20c1.43 0 2.32-1.06 3.19-2.09.32-.37.65-.76 1-1.1a4.81 4.81 0 0 1 1.54-.75 6.61 6.61 0 0 1 1.54 0 4.81 4.81 0 0 1 1.54.75c.35.34.68.73 1 1.1.87 1 1.76 2.09 3.19 2.09a3.48 3.48 0 0 0 3.5-3.5V9a2.09 2.09 0 0 0 0-.26zm-2 7.85a1.5 1.5 0 0 1-1.5 1.5c-.5 0-1-.64-1.66-1.38-.34-.39-.72-.85-1.15-1.26a6.68 6.68 0 0 0-2.46-1.25 6.93 6.93 0 0 0-2.46 0 6.68 6.68 0 0 0-2.46 1.25c-.43.41-.81.87-1.15 1.26C6.54 17.36 6 18 5.5 18A1.5 1.5 0 0 1 4 16.5V9a.77.77 0 0 0 0-.15A3 3 0 0 1 7 6h10a3 3 0 0 1 3 2.72v.12A.86.86 0 0 0 20 9z" />
                <circle cx={16} cy={12} r={1} />
                <circle cx={18} cy={10} r={1} />
                <circle cx={16} cy={8} r={1} />
                <circle cx={14} cy={10} r={1} />
                <circle cx={8} cy={10} r={2} />
              </svg>
              <span className="text-[14px] transition duration-700 ease-in-out group-hover:text-cyan-700">
                Toy &amp; Games
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto group border-b-[1px]">
          <div className="flex items-center justify-between w-full h-[40px]">
            <div className="flex items-center gap-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 256 256"
                className="transition duration-700 ease-in-out group-hover:text-cyan-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M88,48V16a8,8,0,0,1,16,0V48a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,128,56Zm32,0a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,160,56Zm92.8,46.4L224,124v60a32,32,0,0,1-32,32H64a32,32,0,0,1-32-32V124L3.2,102.4a8,8,0,0,1,9.6-12.8L32,104V88A16,16,0,0,1,48,72H208a16,16,0,0,1,16,16v16l19.2-14.4a8,8,0,0,1,9.6,12.8ZM208,88H48v96a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16Z" />
              </svg>
              <span className="text-[14px] transition duration-700 ease-in-out group-hover:text-cyan-700">
                Cooking
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto group border-b-[1px]">
          <div className="flex items-center justify-between w-full h-[40px]">
            <div className="flex items-center gap-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="transition duration-700 ease-in-out group-hover:text-cyan-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M15.5 1h-8A2.5 2.5 0 0 0 5 3.5v17A2.5 2.5 0 0 0 7.5 23h8a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" />
              </svg>
              <span className="text-[14px] transition duration-700 ease-in-out group-hover:text-cyan-700">
                Smart Phones
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto group border-b-[1px]">
          <div className="flex items-center justify-between w-full h-[40px]">
            <div className="flex items-center gap-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 256 256"
                className="transition duration-700 ease-in-out group-hover:text-cyan-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M208,58H179.21L165,36.67A6,6,0,0,0,160,34H96a6,6,0,0,0-5,2.67L76.78,58H48A22,22,0,0,0,26,80V192a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V80A22,22,0,0,0,208,58Zm10,134a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V80A10,10,0,0,1,48,70H80a6,6,0,0,0,5-2.67L99.21,46h57.57L171,67.33A6,6,0,0,0,176,70h32a10,10,0,0,1,10,10ZM128,90a42,42,0,1,0,42,42A42,42,0,0,0,128,90Zm0,72a30,30,0,1,1,30-30A30,30,0,0,1,128,162Z" />
              </svg>
              <span className="text-[14px] transition duration-700 ease-in-out group-hover:text-cyan-700">
                Cameras &amp; Photo
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto group border-b-[1px]">
          <div className="flex items-center justify-between w-full h-[40px]">
            <div className="flex items-center gap-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="transition duration-700 ease-in-out group-hover:text-cyan-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="m35.42 188.21 207.75 269.46a16.17 16.17 0 0 0 25.66 0l207.75-269.46a16.52 16.52 0 0 0 .95-18.75L407.06 55.71A16.22 16.22 0 0 0 393.27 48H118.73a16.22 16.22 0 0 0-13.79 7.71L34.47 169.46a16.52 16.52 0 0 0 .95 18.75zM48 176h416"
                />
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="m400 64-48 112-96-128M112 64l48 112 96-128m0 400-96-272m96 272 96-272"
                />
              </svg>
              <span className="text-[14px] transition duration-700 ease-in-out group-hover:text-cyan-700">
                Accessories
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto group">
          <div className="flex items-center gap-2 w-full h-[40px]">
            <div className="flex items-center gap-3">
              <span className="text-[14px] transition duration-700 ease-in-out text-cyan-700 font-semibold uppercase">
                View All Categories
              </span>
            </div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="text-[20px] text-cyan-700"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNavDropDown;
