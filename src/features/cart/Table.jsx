import CartItemRows from "./CartItemRows";

function Table({ cartItems }) {
  return (
    <>
      <div
        role="row"
        className="grid-cols-tableSm grid text-sm font-bold sm:grid-cols-table"
      >
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
