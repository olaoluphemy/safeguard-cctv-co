import { useRouteError } from "react-router-dom";
import Container from "./Container";

function Error() {
  const error = useRouteError();

  return (
    <Container>
      <div className=" flex min-h-[40vh] items-center justify-center">
        <h1 className="  text-2xl font-bold"> {error.data || error.error}</h1>
      </div>
    </Container>
  );
}

export default Error;
