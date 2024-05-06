import Button from "./Button";
import { useNavigate } from "react-router-dom";

// DIRTY TRICK TO DISPLAY LOADER
function ButtonWithLoader({ text, smallScreen }) {
  const navigate = useNavigate();

  function displayLoader() {
    navigate("/products");
    setTimeout(function () {}, 1500);
  }

  return (
    <Button
      onClick={displayLoader}
      text={text}
      extraStyles={`hover:opacity-[0.9] bg-bgDarkblue ${smallScreen ? "mt-3" : ""}`}
    />
  );
}

export default ButtonWithLoader;
