import Button from "../../ui/Button";
import { productsData } from "../../data/productsData";
import { useLoaderData } from "react-router-dom";
import ItemDetails from "./ItemDetails";
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
          <p className=" mb-7  mt-2 flex items-center text-sm font-bold text-darkOrange">
            <span>
              <img
                src="/currency.png"
                alt="currency"
                className="mr-[1px] h-[0.6rem]"
              />
            </span>
            {price}.00
          </p>
          <div className=" flex items-center justify-between sm:flex-col">
            <p className="text-textLigh w-fi text-xs opacity-70 sm:self-start">
              In Stock
            </p>
            <Button
              text="Add to cart"
              extraStyles={` bg-bgDarkblue mt-5 ${!isCarted && "hover:opacity-[0.9]"} self-center sm:self-start`}
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

// eslint-disable-next-line
export async function loader({ params }) {
  const id = params.id;

  return await new Promise(function (resolve, reject) {
    const item = productsData.find((item) => item.id === Number(id));

    setTimeout(() => {
      if (!item)
        reject({ error: "something went wrong, item could not be fetched..." });

      resolve(item);
    }, 800);
  });
}

export default Item;
