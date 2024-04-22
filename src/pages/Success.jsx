import { useEffect, useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import Header from "../ui/Header";
import { useSelector } from "react-redux";

function formatNumber(num) {
  return new Intl.NumberFormat("en-US").format(num);
}

function Success() {
  const [timer, setTimer] = useState(1200);

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

  useEffect(function () {
    if (!order.orderId) navigate("/");
  }, []);

  return (
    <div>
      <Header content="Order Successfully Placed" />
      <Container>
        <div className="flex items-center justify-center">
          <div>
            <h1 className=" mb-2 text-sm font-bold">Order Details</h1>
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
          <Link to="/">
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

  return (
    <div className=" w-[250px] rounded-lg border-[1px] text-xs">
      <p className=" border-b-[1px] p-3 hover:bg-[#f4f4f4]">
        address: {deliveryDetails.address}
      </p>
      <p className=" border-b-[1px] p-3 hover:bg-[#f4f4f4]">
        name: {deliveryDetails.firstName}
      </p>
      <p className=" border-b-[1px] p-3 hover:bg-[#f4f4f4]">
        phone: {deliveryDetails.phone}
      </p>
      <p className=" border-b-[1px] p-3 hover:bg-[#f4f4f4]">
        payment option: {paymentOption}
      </p>
      <p className=" border-b-[1px] p-3 hover:bg-[#f4f4f4]">
        total: #{formatNumber(totalPurchase)}
      </p>
      <p className=" border-b-[1px] p-3 hover:bg-[#f4f4f4]">
        order ID: {orderId}
      </p>
      <p className=" border-b-[1px] p-3 hover:bg-[#f4f4f4]">
        delivery status: {deliveryStatus}
      </p>
    </div>
  );
}

export default Success;
