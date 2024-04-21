import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import Header from "../../ui/Header";
import Button from "../../ui/Button";

function checkoutError() {
  return (
    <div>
      <Header content=" Bombastic Side Eye">
        <img
          src="/bombastic-side-eye.jpg"
          alt="bombastic-element"
          className=" ml-10 h-[60px] w-[70px]  rounded-sm"
        />
      </Header>
      <Container>
        <h1 className=" text-center text-xs opacity-[0.5]">
          how in the world did you get here LMAO??
          <br />
          try adding some items to your cart so you can have a checkout lol
        </h1>
        {/* </div> */}
        <div className=" mt-4 flex items-center justify-center">
          <Link to="/products">
            <Button text="store" extraStyles="bg-bgDarkblue" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default checkoutError;
