import BillingInfo from "../../ui/BillingInfo";
import { Link } from "react-router-dom";

function CartTotal() {
  return (
    <div className=" mt-5 w-[310px] text-xs">
      <BillingInfo>
        <BillingInfo.Header description="Cart Totals" />
        <BillingInfo.CartTotals />
        <BillingInfo.Discount />

        <div className="py-10">
          <BillingInfo.ActionButton
            styles="bg-bgDarkblue w-[200px] block mx-auto"
            type="checkout"
            text="Proceed to checkout"
          />
          <Link to="/products">
            <BillingInfo.ActionButton
              styles="w-[200px] block mt-2 mx-auto border-bgDarkblue border-[1px] text-black"
              text="Update cart"
              textColor="bgDarkblue"
            />
          </Link>
        </div>
      </BillingInfo>
    </div>
  );
}

export default CartTotal;
