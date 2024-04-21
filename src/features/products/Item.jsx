import Button from "../../ui/Button";
import { productsData } from "../../data/productsData";
import { useLoaderData } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import Store from "../../Store/store";
import { setLoadingStatus } from "../../Store/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Store/cartSlice";
import toast from "react-hot-toast";

function Item() {
  const cartItems = useSelector((store) => store.cart.cart);
  const dispatch = useDispatch();

  const data = useLoaderData();
  const { imgSrc, description, price, id } = data;

  const isCarted = cartItems.map((item) => item.id).includes(data.id);

  function updateCart(e) {
    e.preventDefault();

    const item = {
      description,
      imgSrc,
      price,
      id,
      quantity: 1,
      total: price,
    };

    dispatch(addToCart(item));
    toast.success("item added to cart");
  }

  return (
    <>
      <div className=" relative mt-14 grid min-h-[300px] gap-8 pb-16 sm:grid-cols-2">
        <div className="flex items-center justify-center rounded-xl  border-[1px] border-borderLight p-3">
          <img src={`/${imgSrc}`} alt="img-12" />
        </div>
        <div className="p-3">
          <h1 className=" text-xl font-bold">{description}</h1>
          <p className=" mb-7  mt-2 text-sm font-bold text-darkOrange">
            #{price}.00
          </p>
          <div className=" flex items-center justify-between sm:flex-col">
            <p className="text-textLigh w-fi text-xs opacity-70 sm:self-start">
              In Stock
            </p>
            <Button
              text="Add to cart"
              extraStyles={` bg-bgDarkblue mt-5 ${!isCarted && "hover:text-darkOrange"} self-center sm:self-start`}
              onClick={updateCart}
              disabled={isCarted}
            />
          </div>
        </div>
      </div>
      <ItemDetails data={data} />
    </>
  );
}

export async function loader({ params }) {
  const id = params.id;

  Store.dispatch(setLoadingStatus("loading"));
  return await new Promise(function (resolve, reject) {
    const item = productsData.find((item) => item.id === Number(id));

    setTimeout(() => {
      if (!item) reject({ error: "something went wrong..." });

      resolve(item);
      Store.dispatch(setLoadingStatus("idle"));
    }, 1500);
  });
}

export default Item;
