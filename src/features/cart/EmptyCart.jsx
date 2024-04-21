import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

function EmptyCart() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[50vh] text-center">
      <h1 className="text-3xl font-bold">
        You Currently have no items in your cart
      </h1>
      <p className=" mt-5 text-xs opacity-55">
        Start by adding items to your cart to have them displayed here :\
      </p>
      <Button
        text="Go Back"
        extraStyles=" border-[1px] border-bgDarkblue mt-5 hover:text-white hover:bg-bgDarkblue"
        textColor=" text-black"
        onClick={() => navigate(-1)}
      />
    </div>
  );
}

export default EmptyCart;
