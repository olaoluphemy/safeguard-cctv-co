import BillingInfo from "../../ui/BillingInfo";

function ItemList({ item }) {
  const { imgSrc, description, quantity, price } = item;

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

function OrderDetails({ formButton }) {
  function handlePlaceOrder() {
    formButton.current.click();
  }

  return (
    <BillingInfo formButton={formButton}>
      <BillingInfo.Header description="Your Order" />
      <BillingInfo.OrderItems
        render={(item, i) => <ItemList key={i} item={item} />}
      />
      <BillingInfo.CartTotals />
      <BillingInfo.PaymentOption />

      <div className="py-10">
        <BillingInfo.ActionButton
          action={handlePlaceOrder}
          text="Place Order"
          styles="bg-bgDarkblue w-[200px] block mx-auto"
        />
      </div>
    </BillingInfo>
  );
}

export default OrderDetails;
