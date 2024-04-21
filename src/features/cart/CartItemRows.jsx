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
      className="grid grid-cols-table items-center justify-center border-[1px] py-1"
    >
      <div className="flex items-center">
        <img
          src={`/${imgSrc}`}
          alt={`${imgSrc}`}
          className=" h-[70px] p-[0.3rem]"
        />
        <div className=" ml-3">
          <p className=" text-xs font-bold">{description}</p>
          <p className="mt-2 text-xs opacity-55">Dome indoor camera</p>
        </div>
      </div>
      <div className="text-xs">#{price}</div>
      <div className=" flex">
        <p className=" text-xs" role="button" onClick={decrease}>
          -
        </p>
        <p className="mx-5 text-xs">{quantity}</p>
        <p className=" text-xs" role="button" onClick={increase}>
          +
        </p>
      </div>
      <div className="text-xs">#{total}</div>
      <button className=" mr-5 flex justify-end" onClick={deleteItem}>
        <img src="/delete-x.png" alt="delete-x" className="h-[10px]" />
      </button>
    </div>
  );
}

export default CartItemRows;
