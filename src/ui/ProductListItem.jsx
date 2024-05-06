import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Button from "./Button";
import StarRating from "./StarRating";

function ProductListItem({ data }) {
  const cartItems = useSelector((store) => store.cart.cart);
  const dispatch = useDispatch();

  const { imgSrc, description, rating, price, id } = data;

  const isCarted = cartItems.some((item) => item.id === id);

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
    <Link to={`/products/${id}`}>
      <li className="group flex flex-col items-center border-[1px] p-3">
        <img
          src={`/${imgSrc}`}
          alt="image-10.png"
          className=" z-[-5] w-[70%] transition-all group-hover:scale-[0.85]"
        />

        <p className=" mt-5  min-h-[35px] text-center text-xs font-bold xl:min-h-fit">
          {description}
        </p>
        <StarRating rating={rating} />
        <p className=" flex items-center text-sm font-semibold text-darkOrange ">
          <span>
            <img
              src="/currency.png"
              alt="currency"
              className="mr-[1px] h-[0.6rem]"
            />
          </span>
          {price}.00
        </p>

        <Button
          text="Add to cart"
          extraStyles={` bg-bgDarkblue mt-5 ${!isCarted && "hover:opacity-[0.9]"} `}
          onClick={updateCart}
          disabled={isCarted}
        />
      </li>
    </Link>
  );
}

export default ProductListItem;
