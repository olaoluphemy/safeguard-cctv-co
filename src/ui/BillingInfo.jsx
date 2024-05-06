import { createContext, useContext, useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { applyDiscount } from "../Store/cartSlice";
import { setPaymentOption, setTotalPurchase } from "../Store/orderSlice";
import Amount from "./Amount";
import MiniHeader from "./MiniHeader";

const billingInfoContext = createContext();

function BillingInfo({ children }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const {
    cart: cartItems,
    isDiscounted,
    couponCode: discountCode,
  } = useSelector((store) => store.cart);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const subtotalPrice = cartItems.reduce(
    (acc, item) => Number(item.total.replaceAll(",", "")) + acc,
    0,
  );

  const total = isDiscounted
    ? (subtotalPrice + 5000) * 0.5
    : subtotalPrice + 5000;

  function handleSetTotalPurchase() {
    dispatch(setTotalPurchase(total));
    navigate("checkout");
  }

  return (
    <billingInfoContext.Provider
      value={{
        discountCode,
        cartItems,
        isDiscounted,
        subtotalPrice,
        total,
        handleSetTotalPurchase,
        isChecked,
        isChecked2,
        setIsChecked,
        setIsChecked2,
      }}
    >
      <div className="rounded-lg border-[1px] border-borderLight">
        {children}
      </div>
    </billingInfoContext.Provider>
  );
}

function Header({ description }) {
  const { isDiscounted } = useContext(billingInfoContext);

  return <MiniHeader description={description} isDiscounted={isDiscounted} />;
}

function OrderItems({ render }) {
  const { cartItems } = useContext(billingInfoContext);

  return (
    <ul className=" orderDeets h-[150px] overflow-y-scroll">
      {cartItems.map(render)}
    </ul>
  );
}

function CartTotals() {
  const { subtotalPrice, total: totalPurchase } =
    useContext(billingInfoContext);

  return (
    <>
      <Amount description="SUBTOTAL" amount={subtotalPrice} />
      <Amount description="SHIPPING FEE" />
      <Amount description="TOTAL" amount={totalPurchase} />
    </>
  );
}

function Discount() {
  const [couponCode, setCouponCode] = useState("");

  const { isDiscounted, discountCode } = useContext(billingInfoContext);

  const dispatch = useDispatch();

  function handleApplyDiscount(e) {
    e.preventDefault();

    if (!couponCode) return;

    if (discountCode !== couponCode.toUpperCase())
      return toast.error("the coupon code you entered is invalid");
    dispatch(applyDiscount(couponCode));
    setCouponCode("");
  }

  return (
    <div className="border-b-[1px] px-4 py-4">
      <form onSubmit={handleApplyDiscount} className=" flex space-x-6">
        <input
          onChange={(e) => setCouponCode(e.target.value)}
          disabled={isDiscounted}
          value={couponCode}
          placeholder="enter coupon code"
          className={` ${isDiscounted ? "opacity-40" : ""} rounded-md border-[1px] border-bgDarkblue p-2 outline-none placeholder:text-[0.6rem]`}
        />
        <Button
          text="Apply"
          extraStyles=" border-bgDarkblue border-[1px] rounded-[30px] h-[2rem] flex items-center font-bold"
          textColor="text-textBlue"
          disabled={isDiscounted}
        />
      </form>
    </div>
  );
}

function PaymentOption() {
  const { isChecked, setIsChecked, isChecked2, setIsChecked2 } =
    useContext(billingInfoContext);

  const dispatch = useDispatch();

  useEffect(
    function () {
      if (isChecked) dispatch(setPaymentOption("Bank Transfer"));
      else if (isChecked2) dispatch(setPaymentOption("Card Payment"));
      else dispatch(setPaymentOption(""));
    },
    [isChecked, isChecked2, dispatch],
  );

  return (
    <>
      <div className=" items center flex border-b-[1px] p-5">
        <input
          type="radio"
          checked={isChecked}
          onClick={() => {
            setIsChecked((s) => !s);
          }}
          onChange={(e) => (e.target.checked ? setIsChecked2(false) : null)}
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
          onChange={(e) => (e.target.checked ? setIsChecked(false) : null)}
        />
        <span className=" ml-[0.8rem] text-xs font-bold">Card</span>
      </div>
    </>
  );
}

function ActionButton({ action = null, text, type, styles, textColor }) {
  const { handleSetTotalPurchase, isChecked, isChecked2 } =
    useContext(billingInfoContext);

  return (
    <Button
      text={text}
      disabled={!type && action ? !isChecked && !isChecked2 : null}
      extraStyles={styles}
      onClick={type === "checkout" ? handleSetTotalPurchase : action}
      textColor={textColor}
    />
  );
}

BillingInfo.Header = Header;
BillingInfo.OrderItems = OrderItems;
BillingInfo.CartTotals = CartTotals;
BillingInfo.PaymentOption = PaymentOption;
BillingInfo.Discount = Discount;
BillingInfo.ActionButton = ActionButton;

export default BillingInfo;
