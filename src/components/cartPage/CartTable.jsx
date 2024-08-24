import ProductRow from "./ProductRow";

function CartTable({ products }) {
  return (
    <table className="w-full">
      <thead>
        <tr className="h-[50px] border-b">
          <th className="text-left">Product</th>
          <th className="text-left">Price</th>
          <th className="text-center">Quantity</th>
          <th className="text-left">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product) => {
          return <ProductRow key={product?.id} product={product} />;
        })}
      </tbody>
    </table>
  );
}

export default CartTable;
