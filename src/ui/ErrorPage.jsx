import { Link, useRouteError } from "react-router-dom";
import Container from "./Container";
import Header from "./Header";
import Button from "./Button";
import NavBar from "./NavBar";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <NavBar />
      <Header content=" Bombastic Side Eye">
        <img
          src="/bombastic-side-eye.jpg"
          alt="bombastic-element"
          className=" ml-10 h-[60px] w-[70px]  rounded-sm"
        />
      </Header>
      <Container>
        <h1 className=" text-center text-2xl  font-bold opacity-[0.5]">
          {`${error.data.split(":").at(0)} ${error.status}: Sorry ${error.data.split(":").at(1).toLowerCase()}` ||
            error.error}
        </h1>
        <div className=" mt-4 flex items-center justify-center">
          <Link to="/home">
            <Button text="Home" extraStyles="bg-bgDarkblue" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default ErrorPage;
