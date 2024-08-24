import { useSelector } from "react-redux";
import PopularDepartmentCart from "../PopularDepartment/PopularDepartmentCart";

function Clothing() {
  const products = useSelector((state) => state.products.products);
  return (
    <div className="w-full h-auto mb-4">
      <div className="container h-auto mx-auto">
        <div className="flex items-center justify-between py-2 border-b">
          <h3 className="text-[20px] font-bold">Clothing &amp; Apparel</h3>
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="text-[14px] font-semibold group-hover:text-cyan-600 transition duration-200">
              More Products
            </span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 16 16"
              className="text-[16px] text-gray-600 group-hover:text-cyan-600 transition duration-200"
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
        <div className="flex flex-col gap-8 mt-4 bg-center lg:flex-row">
          <div className="h-[11rem] md:h-auto bg-center md:bg-bottom md:w-[290px] w-full bg-no-repeat bg-cover bg-[url('/side-banner.jpg')]" />
          <div className="grid grid-cols-2 gap-3 md:gap-12 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
            {products?.map((product) => {
              return (
                <PopularDepartmentCart key={product?.id} product={product} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clothing;
