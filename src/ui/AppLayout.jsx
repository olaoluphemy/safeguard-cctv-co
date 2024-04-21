import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className=" relative">
      <ScrollRestoration />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
