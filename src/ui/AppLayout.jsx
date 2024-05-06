import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading =
    navigation.state === "loading" || navigation.state === "submitting";

  return (
    <div className=" relative">
      <ScrollRestoration />
      {isLoading && <Loader />}
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
