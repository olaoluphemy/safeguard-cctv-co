import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Form } from "react-router-dom";
import Button from "../../ui/Button";

function BillingInfo({ formButton }) {
  const paymentOption = useSelector((store) => store.order.paymentOption);

  function handleSubmit(e) {
    if (!paymentOption) {
      e.preventDefault();
      return toast.error("please select a payment option before proceeding");
    }
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <Inputs name="firstName" label="First Name" />
      <Inputs name="lastName" label="Last Name" />
      <Inputs name="country" label="Country" />
      <Inputs name="address" label="Address" placeholder="street address" />
      <Inputs name="city" label="Town/City" placeholder="enter city" />
      <Inputs name="phone" label="Phone" placeholder="enter phone number" />
      <Inputs
        name="email"
        label="Email"
        type="email"
        placeholder="enter email address"
      />
      <Button
        text="Place order"
        extraStyles="bg-bgDarkblue hidden"
        formButton={formButton}
      />
    </Form>
  );
}

function Inputs({ placeholder, name, label, type }) {
  return (
    <>
      <label
        htmlFor={name}
        className="mb-4 block text-xs font-semibold opacity-85"
      >
        {label.toUpperCase()}
      </label>
      <input
        placeholder={placeholder}
        type={type ? type : "text"}
        name={name}
        required
        className=" mb-5 w-[100%] rounded-lg border-[1px] border-borderLight p-2 outline-none placeholder:text-xs sm:w-[80%]"
      />
    </>
  );
}

export default BillingInfo;
