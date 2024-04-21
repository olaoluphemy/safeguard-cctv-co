import CartItemRows from "./CartItemRows";

function Table({ cartItems }) {
  return (
    <>
      <div role="row" className="grid grid-cols-table text-sm font-bold">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
        <div className=""></div>
      </div>
      <div role="table">
        {cartItems.map((item, i) => (
          <CartItemRows key={i} item={item} />
        ))}
      </div>
    </>
  );
}

export default Table;
