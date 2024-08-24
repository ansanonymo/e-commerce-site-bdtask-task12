import { Outlet } from "react-router-dom";
import BasicNav from "../../components/shared/BasicNav";
import TopNav from "../../components/shared/TopNav";
import CartDrawer from "../../components/drawers/CartDrawer";
import MainNav from "../../components/shared/MainNav";
import Footer from "../../components/shared/Footer";

function GlobalTemplate() {
  return (
    <>
      <BasicNav />
      <TopNav />
      <CartDrawer />
      <MainNav />
      <Outlet />
      <Footer />
    </>
  );
}

export default GlobalTemplate;
