import { useSelector } from "react-redux";
import CategorySection from "./CategorySection";
import PopularDepartmentCart from "./PopularDepartmentCart";

function PopularDepartment() {
  const products = useSelector((state) => state.products.products);
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h3 className="text-[18px] font-bold uppercase">Popular Departments</h3>
      <CategorySection />
      <div className="container flex justify-center mx-auto mt-5">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {products?.map((product) => {
            return (
              <PopularDepartmentCart key={product?.id} product={product} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PopularDepartment;
