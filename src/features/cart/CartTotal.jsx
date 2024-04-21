import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { applyDiscount } from "../../Store/cartSlice";
import { setTotalPurchase } from "../../Store/orderSlice";
import Button from "../../ui/Button";
import toast from "react-hot-toast";

function formatNumber(num) {
  return new Intl.NumberFormat("en-US").format(num);
}

function CartTotal() {
  const [couponCode, setCouponCode] = useState("");
  const {
    cart: cartItems,
    isDiscounted,
    couponCode: discountCode,
  } = useSelector((store) => store.cart);
  const navigate = useNavigate();
  // const

  const dispatch = useDispatch();

  const subtotalPrice = cartItems.reduce(
    (acc, item) => Number(item.total.replaceAll(",", "")) + acc,
    0,
  );

  const total = isDiscounted
    ? (subtotalPrice + 5000) * 0.5
    : subtotalPrice + 5000;
  console.log(total);

  function handleApplyDiscount(e) {
    e.preventDefault();

    if (!couponCode || discountCode !== couponCode.toUpperCase())
      return toast.error("the coupon code you entered is invalid");
    dispatch(applyDiscount(couponCode));
    setCouponCode("");
  }

  function handleSetTotalPurchase() {
    dispatch(setTotalPurchase(total));
    navigate("checkout");
  }

  return (
    <div className=" mt-5 w-[300px] border-[1px] text-xs">
      <div className=" flex items-center justify-between bg-faintBlue px-4 py-4">
        <h2 className="text-lg font-bold">Cart Totals</h2>
        {isDiscounted && (
          <p className=" text-[8px] text-red-500">*50% discount applied</p>
        )}
      </div>
      <p className=" flex justify-between border-b-[1px]  px-4 py-4">
        SUBTOTAL PRICE{" "}
        <span className=" font-bold">#{formatNumber(subtotalPrice)}</span>
      </p>
      <p className=" flex justify-between border-b-[1px] px-4 py-4">
        SHIPPING FEE <span className=" font-bold">#5000</span>
      </p>
      <p className="  flex justify-between border-b-[1px] px-4 py-4">
        TOTAL PRICE <span className=" font-bold">#{formatNumber(total)}</span>
      </p>

      <div className=" flex items-end justify-between border-b-[1px] px-4 py-4">
        <form onSubmit={handleApplyDiscount} className=" flex space-x-6">
          <input
            onChange={(e) => setCouponCode(e.target.value)}
            value={couponCode}
            placeholder="enter coupon code"
            className=" rounded-md border-[1px] border-bgDarkblue p-2 outline-none placeholder:text-[0.6rem]"
          />
          <Button
            text="Apply"
            extraStyles=" border-bgDarkblue border-[1px] rounded-[30px] h-[2rem] flex items-center font-bold"
            textColor="text-textBlue"
            disabled={isDiscounted}
          />
        </form>
      </div>
      <div className="py-10">
        <Button
          text="Proceed to checkout"
          extraStyles=" bg-bgDarkblue w-[200px] block mx-auto"
          onClick={handleSetTotalPurchase}
        />
        <Link to="/products">
          <Button
            text="Update cart"
            extraStyles="w-[200px] block mt-2 mx-auto border-bgDarkblue border-[1px]"
            textColor="bgDarkblue"
          />
        </Link>
      </div>
    </div>
  );
}

export default CartTotal;
