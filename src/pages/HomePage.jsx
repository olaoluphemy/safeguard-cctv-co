import LandingHeader from "../features/home/LandingHeader";
import PopularCategories from "../features/home/PopularCategories";
import ShowCase from "../features/home/Showcase";
import ProductsPreview from "../features/home/ProductsPreview";
import TestimonialsContainer from "../features/home/Testimonial";
import FAQs from "../features/home/FAQs";
import Loader from "../ui/Loader";
import { useSelector } from "react-redux";

function HomePage() {
  const loadingStatus = useSelector((store) => store.order.loadingStatus);
  const isLoading = loadingStatus === "loading";

  return (
    <>
      <LandingHeader />
      <PopularCategories />
      {isLoading && <Loader />}
      <ShowCase />
      <ProductsPreview />
      <TestimonialsContainer />
      <FAQs />
    </>
  );
}

export default HomePage;
