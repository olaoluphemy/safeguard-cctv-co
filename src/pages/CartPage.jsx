import { useSelector } from "react-redux";
import Container from "../ui/Container";
import Table from "../features/cart/Table";
import EmptyCart from "../features/cart/EmptyCart";
import CartTotal from "../features/cart/CartTotal";
import Header from "../ui/Header";

function CartPage() {
  const cartItems = useSelector((store) => store.cart.cart);

  return (
    <div>
      <Header content="Your Cart" />
      {cartItems.length > 0 ? (
        <Container>
          <Table cartItems={cartItems} />
          <CartTotal />
        </Container>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default CartPage;
