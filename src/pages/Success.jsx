import { useEffect, useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import Header from "../ui/Header";

function Success() {
  const [timer, setTimer] = useState(1200);

  const min = String(Math.floor(timer / 60));
  const sec = String(timer % 60);

  useEffect(function () {
    const time = setInterval(function () {
      setTimer((s) => s - 1);
    }, 1000);

    return function () {
      clearInterval(time);
    };
  }, []);

  return (
    <div>
      <Header content="Order Placed" />
      <Container>
        <p className=" text-center">
          Order was successfully placed. Your order will arrive in
          {min.length < 2 ? "0" : ""}
          {min}:{sec.length < 2 ? "0" : ""}
          {sec}
        </p>
        <div className=" mt-10 flex justify-center">
          <Link to="/">
            <Button text="Go Home" extraStyles="bg-bgDarkblue" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Success;
