import { useEffect, useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import Header from "../ui/Header";
import { useDispatch, useSelector } from "react-redux";
import Amount from "../ui/Amount";
import MiniHeader from "../ui/MiniHeader";
import { clearCart } from "../Store/cartSlice";

function Success() {
  const [timer, setTimer] = useState(1200);
  const dispatch = useDispatch();

  const order = useSelector((store) => store.order);
  const navigate = useNavigate();
  const min = String(Math.floor(timer / 60));
  const sec = String(timer % 60);

  useEffect(function () {
    const time = setInterval(function () {
      setTimer((s) => s - 1);
    }, 1000);

    return function () {
      clearInterval(time);
    };
  }, []);

  useEffect(
    function () {
      dispatch(clearCart());
    },
    [dispatch],
  );

  useEffect(
    function () {
      if (!order.orderId) navigate("/");
    },
    [order.orderId, navigate],
  );

  return (
    <div>
      <Header content="Order Successfully Placed" />
      <Container>
        <div className="flex items-center justify-center">
          <div>
            <YourOrder order={order} />
          </div>
        </div>

        <p className=" mt-5 text-center text-sm">
          Your order will arrive in
          {min.length < 2 ? "0" : ""}
          {min}:{sec.length < 2 ? "0" : ""}
          {sec}
        </p>
        <div className=" mt-3 flex justify-center">
          <Link to="/home">
            <Button text="Go back Home" extraStyles="bg-bgDarkblue" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

function YourOrder({ order }) {
  const {
    deliveryDetails,
    deliveryStatus,
    orderId,
    paymentOption,
    totalPurchase,
  } = order;

  console.log(deliveryDetails);

  return (
    <div className="rounded-lg border-[1px] border-borderLight">
      <MiniHeader description="Order Details " />
      <Amount
        description="address"
        value={deliveryDetails.address}
        type="ticket"
      />
      <Amount
        description="name"
        value={deliveryDetails.firstName}
        type="ticket"
      />
      <Amount description="phone" value={deliveryDetails.phone} type="ticket" />
      <Amount
        description="payment option"
        value={paymentOption}
        type="ticket"
      />
      <Amount
        description="total purchase"
        amount={totalPurchase}
        type="ticket"
      />
      <Amount description="order ID" value={orderId} type="ticket" />
      <Amount
        description="delivery status"
        value={deliveryStatus}
        type="ticket"
      />
    </div>
  );
}

export default Success;
