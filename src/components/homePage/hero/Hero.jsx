import HeroImage from "./../../../assets/hero-image.png";

function Hero() {
  return (
    <div className="w-full h-auto">
      <div className="w-full lg:h-[650px] bg-gray-100">
        <div className="flex flex-row-reverse items-center justify-around mx-auto lg:container lg:justify-between lg:flex-row">
          <div className="lg:ml-80">
            <h4 className="uppercase font-semibold text-[14px]">
              More luxury &amp; Trending
            </h4>
            <h2 className="uppercase text-[18px] lg:text-[35px] font-bold">
              Single Sofa
            </h2>
            <div className="w-10 h-[2px] bg-cyan-700 my-6 sm:block hidden" />
            <p className="text-[14px] lg:text-[16px] sm:block hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing. <br /> Quod
              debitis mollitia recusandae perspiciatis{" "}
            </p>
            <button className="px-4 py-2 bg-black text-white mt-3 text-[14px]">
              Show now
            </button>
          </div>
          <img src={HeroImage} className="w-1/2" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
