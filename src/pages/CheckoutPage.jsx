import { redirect, useNavigate } from "react-router-dom";
import Container from "../ui/Container";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import Store from "../Store/store";
import Header from "../ui/Header";
// import CheckoutError from "../features/checkout/CheckoutError";
import BillingInfo from "../features/checkout/BillingInfo";
import OrderDetails from "../features/checkout/OrderDetails";
import { completeOrder } from "../Store/orderSlice";

function Checkout() {
  const cartItems = useSelector((store) => store.cart.cart);
  const formButton = useRef(null);
  const navigate = useNavigate();

  useEffect(
    function () {
      if (cartItems.length < 1) navigate("/");
    },
    [cartItems.length, navigate],
  );

  // a little joke never hurt anyone lol
  // if (cartItems.length < 1) return <CheckoutError />;

  return (
    <div className="relative">
      <Header content="Checkout" />
      <Container>
        <div className=" mx-auto w-[80%]  ">
          <p className="mb-4 text-xs text-textLight">
            Returning customer?{" "}
            <span className=" text-xs font-semibold text-black opacity-[1]">
              Click here to login
            </span>
          </p>
          <p className=" mb-[3rem] font-bold">Billing information</p>
        </div>
        <div className=" mx-auto w-[80%] grid-cols-checkout sm:grid">
          <BillingInfo formButton={formButton} />
          <OrderDetails formButton={formButton} />
        </div>
      </Container>
    </div>
  );
}

export default Checkout;

// eslint-disable-next-line
export async function action({ request }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  return await new Promise(function (resolve) {
    setTimeout(function () {
      Store.dispatch(completeOrder(data));
      resolve(redirect("/cart/checkout/success"));
    }, 1500);
  });
}
