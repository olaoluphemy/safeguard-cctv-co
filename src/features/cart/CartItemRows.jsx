import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteCartItem,
  increaseQuantity,
} from "../../Store/cartSlice";
import toast from "react-hot-toast";

function CartItemRows({ item }) {
  const dispatch = useDispatch();

  const { description, imgSrc, price, quantity, total, id } = item;

  function increase() {
    dispatch(increaseQuantity(id));
  }

  function decrease() {
    if (item.quantity === 1) return;
    dispatch(decreaseQuantity(id));
  }

  function deleteItem() {
    dispatch(deleteCartItem(id));

    toast.success("item deleted successfully");
  }

  return (
    <div
      role="row"
      className="grid grid-cols-tableSm items-center justify-center border-[1px] py-1 sm:grid-cols-table"
    >
      <div className=" items-center sm:flex">
        <img
          src={`/${imgSrc}`}
          alt={`${imgSrc}`}
          className=" h-[70px] p-[0.3rem]"
        />
        <div className=" ml-3">
          <p className=" w-[70px] overflow-hidden overflow-ellipsis whitespace-nowrap text-xs font-bold md:w-[100%]">
            {description}
          </p>
          <p className="w-[70px] overflow-hidden overflow-ellipsis whitespace-nowrap text-xs opacity-55 md:mt-2 md:w-[100%]">
            Dome indoor camera
          </p>
        </div>
      </div>
      <div className="flex items-center text-xs">
        <span>
          <img
            src="/currency-dark.png"
            alt="currency"
            className="mr-[1px] h-[0.6rem]"
          />
        </span>
        {price}
      </div>
      <div className=" flex">
        <p className=" text-xs" role="button" onClick={decrease}>
          -
        </p>
        <p className="mx-5 text-xs">{quantity}</p>
        <p className=" text-xs" role="button" onClick={increase}>
          +
        </p>
      </div>
      <div className="flex items-center text-xs">
        <span>
          <img
            src="/currency-dark.png"
            alt="currency"
            className="mr-[1px] h-[0.6rem]"
          />
        </span>
        {total}
      </div>
      <button className=" mr-5 flex justify-end" onClick={deleteItem}>
        <img src="/delete-x.png" alt="delete-x" className="h-[10px]" />
      </button>
    </div>
  );
}

export default CartItemRows;
