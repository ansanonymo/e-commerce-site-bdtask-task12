import BannerOne from "./../../assets/mid-banner-1.jpg";
import BannerTwo from "./../../assets/mid-banner-2.jpg";
function MidBanner() {
  return (
    <div className="container flex flex-col justify-between gap-6 mx-auto my-4 md:flex-row">
      <div className="w-full h-[200px] relative mb-3">
        <img src={BannerOne} className="w-full h-full" alt="" />
        <div className="absolute left-8 top-8">
          <div>
            <span className="">Get up to</span>{" "}
            <span className="font-bold text-orange-500">20% OFF</span>
            <h3 className=" text-[22px] font-bold">SPORTS OUTFITS</h3>
            <span className=" text-[24px]">Collection</span>
          </div>
          <div className="text-[13px] mt-4">
            <span className="">Starting at</span>{" "}
            <span className="text-orange-500">$170.00</span>
          </div>
        </div>
      </div>
      <div className="w-full h-[200px] relative mb-3">
        <img src={BannerTwo} className="w-full h-full" alt="" />
        <div className="absolute left-8 top-8">
          <div>
            <span className="text-white">Get up to</span>{" "}
            <span className="font-bold text-orange-500">20% OFF</span>
            <h3 className="text-white text-[22px] font-bold">SPORTS OUTFITS</h3>
            <span className="text-white text-[24px]">Collection</span>
          </div>
          <div className="text-[13px] mt-4">
            <span className="text-white">Starting at</span>{" "}
            <span className="text-orange-500">$170.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidBanner;
