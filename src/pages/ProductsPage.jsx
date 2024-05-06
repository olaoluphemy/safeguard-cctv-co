import { Outlet, useLocation } from "react-router-dom";
import Container from "../ui/Container";
import Inquiry from "../features/products/Inquiry";
import Header from "../ui/Header";

function ProductsPage() {
  const location = useLocation();

  return (
    <div>
      <Header content="Explore Our Comprehensive Home CCTV Packages." />
      <Container>
        <div className="relative w-[50%]">
          <input
            type="text"
            className="mb-10 w-full rounded-[30px] border-[1px] border-faintOrange p-2 outline-[1.5px] outline-faintOrange hover:border-darkOrange"
          />
        </div>
        <div className="flex items-center justify-between border-b-[1px]  border-borderLight pb-3">
          <p className=" text-xs sm:text-sm">products / cctv packages</p>
          <p className=" text-xs sm:text-sm">Sorted by</p>
        </div>
        <Outlet />
      </Container>
      {location.pathname !== "/products" && (
        <div className="border-b-[1px] border-borderLight"></div>
      )}
      <div className="mt-14 bg-faintBlue  py-5">
        <Inquiry />
      </div>
    </div>
  );
}

export default ProductsPage;
