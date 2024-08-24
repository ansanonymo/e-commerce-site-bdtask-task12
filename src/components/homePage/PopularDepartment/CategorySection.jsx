function CategorySection() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <div className="cursor-pointer uppercase p-2 px-3 border border-cyan-600 text-cyan-700  hover:border-cyan-600 transition rounded text-[13px]  hover:text-cyan-700 font-semibold">
        New Arrivals
      </div>
      <div className="cursor-pointer uppercase p-2 px-3 border border-gray-300 text-gray-700  hover:border-cyan-600 transition rounded text-[13px]  hover:text-cyan-700 font-semibold">
        Best Seller
      </div>
      <div className="cursor-pointer uppercase p-2 px-3 border border-gray-300 text-gray-700  hover:border-cyan-600 transition rounded text-[13px]  hover:text-cyan-700 font-semibold">
        Most Popular
      </div>
      <div className="cursor-pointer uppercase p-2 px-3 border border-gray-300 text-gray-700  hover:border-cyan-600 transition rounded text-[13px]  hover:text-cyan-700 font-semibold">
        Featured
      </div>
    </div>
  );
}

export default CategorySection;
