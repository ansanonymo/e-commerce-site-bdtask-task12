import bottomBanner1 from "./../../../assets/bottom-banner-1.jpg";
import bottomBanner2 from "./../../../assets/bottom-banner-2.jpg";

function BottomBanner() {
  return (
    <div className="container flex flex-col justify-between gap-6 mx-auto my-4 md:flex-row">
      <div className="w-full h-[200px] relative mb-3">
        <img src={bottomBanner1} className="w-full h-full" alt="" />
        <div className="absolute left-8 top-8">
          <div>
            <span className="text-white">NATURAL PROCESS</span>
            <h3 className="text-white text-[22px] font-bold">
              Cosmetic Makeup
            </h3>
            <span className="text-white text-[24px]">Professional</span>
          </div>
          <div className="text-[13px] mt-4 flex items-center gap-2 cursor-pointer">
            <span className="text-white uppercase font-bold">Shop Now</span>{" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 16 16"
              className="text-white font-semibold"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full h-[200px] relative mb-3">
        <img src={bottomBanner2} className="w-full h-full" alt="" />
        <div className="absolute left-8 top-8">
          <div>
            <span className="">TRENDING NOW</span>
            <h3 className=" text-[22px] font-bold">Cosmetic Makeup</h3>
            <span className=" text-[24px]">Collection</span>
          </div>
          <div className="text-[13px] mt-4 flex items-center gap-2 cursor-pointer">
            <span className=" uppercase font-bold">Shop Now</span>{" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 16 16"
              className=" font-semibold"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomBanner;
