import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { setPaymentOption } from "../../Store/orderSlice";

function OrderDetails({ formButton }) {
  const cart = useSelector((store) => store.cart.cart);
  const totalPurchase = useSelector((store) => store.order.totalPurchase);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const dispatch = useDispatch();

  const subtotalPrice = cart.reduce(
    (acc, item) => Number(item.total.replaceAll(",", "")) + acc,
    0,
  );

  useEffect(
    function () {
      if (isChecked) dispatch(setPaymentOption("Bank Transfer"));
      else if (isChecked2) dispatch(setPaymentOption("Card Payment"));
      else dispatch(setPaymentOption(""));
    },
    [isChecked, isChecked2, dispatch],
  );

  function handlePlaceOrder() {
    // completeOrder({ totalPurchase, subtotalPrice, cart });

    formButton.current.click();
  }

  return (
    <div className="rounded-lg border-[1px] border-borderLight pb-8">
      <Order
        cart={cart}
        subtotalPrice={subtotalPrice}
        totalPurchase={totalPurchase}
      />

      <div className=" items center flex border-b-[1px] p-5">
        <input
          type="radio"
          checked={isChecked}
          onClick={() => {
            setIsChecked((s) => !s);
          }}
          onChange={(e) => (e.target.checked ? setIsChecked2(false) : {})}
        />
        <span className=" ml-[0.8rem] text-xs font-bold">Bank Transfer</span>
      </div>
      <div className=" items center flex border-b-[1px] p-5">
        <input
          type="radio"
          checked={isChecked2}
          onClick={() => {
            setIsChecked2((s) => !s);
          }}
          onChange={(e) => (e.target.checked ? setIsChecked(false) : {})}
        />
        <span className=" ml-[0.8rem] text-xs font-bold">Card</span>
      </div>

      <Button
        text="Place Order"
        disabled={!isChecked && !isChecked2}
        extraStyles=" bg-bgDarkblue w-[200px] block mx-auto mt-8"
        onClick={handlePlaceOrder}
      />
    </div>
  );
}

function ItemList({ item }) {
  const { imgSrc, description, quantity, price } = item;

  // console.log(item);
  return (
    <li className=" flex w-full items-start gap-5 border-b-[1px] p-5  text-xs">
      <img src={`/${imgSrc}`} alt="image-1" className=" h-[60px]" />
      <div>
        <p className=" font-bold">{description}</p>
        <p className=" flex w-[40%] justify-between text-[0.6rem] font-extralight">
          Quantity: <span className=" font-bold">{quantity}</span>
        </p>
        <p className=" flex w-[60%] justify-between text-[0.6rem] font-extralight">
          Price:
          <span className=" flex items-center font-bold">
            <span>
              <img
                src="/currency-dark.png"
                alt="currency"
                className="mr-[1px] h-[0.6rem]"
              />
            </span>
            {price}
          </span>
        </p>
      </div>
    </li>
  );
}

function Order({ cart, subtotalPrice, totalPurchase }) {
  return (
    <>
      <h2 className=" rounded-t-lg bg-faintBlue px-4 py-4 text-lg font-bold">
        Your Order
      </h2>
      <ul className=" orderDeets h-[150px] overflow-y-scroll">
        {cart.map((item, i) => (
          <ItemList key={i} item={item} />
        ))}
      </ul>

      <p className=" flex justify-between border-b-[1px] p-5 text-xs font-bold">
        SUBTOTAL{" "}
        <span className=" flex items-center font-normal">
          <span>
            <img
              src="/currency-dark.png"
              alt="currency"
              className="mr-[1px] h-[0.6rem]"
            />
          </span>
          {subtotalPrice}
        </span>
      </p>
      <p className=" flex justify-between border-b-[1px] p-5 text-xs font-bold">
        SHIPPING FEE{" "}
        <span className=" flex items-center font-normal">
          <span>
            <img
              src="/currency-dark.png"
              alt="currency"
              className="mr-[1px] h-[0.6rem]"
            />
          </span>
          5000
        </span>
      </p>
      <p className=" flex justify-between border-b-[1px] p-5 text-xs font-bold">
        TOTAL{" "}
        <span className=" flex items-center font-normal">
          <span>
            <img
              src="/currency-dark.png"
              alt="currency"
              className="mr-[1px] h-[0.6rem]"
            />
          </span>
          {totalPurchase}
        </span>
      </p>
    </>
  );
}

export default OrderDetails;
