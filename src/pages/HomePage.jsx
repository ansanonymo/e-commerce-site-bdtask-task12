// import HomeFeature from "../components/homePage/HomeFeature";

import BottomBanner from "../components/homePage/BottomBanner/BottomBanner";
import Clothing from "../components/homePage/Clothing/Clothing";
import Hero from "../components/homePage/hero/Hero";
import HomeFeature from "../components/homePage/HomeFeature";
import MidBanner from "../components/homePage/MidBanner";
import PopularDepartment from "../components/homePage/PopularDepartment/PopularDepartment";
import Modal from "../components/homePage/ProductModal/Modal";

function HomePage() {
  return (
    <div className="w-full h-auto">
      {/* <HomeFeature /> */}
      <Hero />
      <HomeFeature />
      <PopularDepartment />
      <MidBanner />
      <Clothing />
      <BottomBanner />
      <Modal />
    </div>
  );
}

export default HomePage;
