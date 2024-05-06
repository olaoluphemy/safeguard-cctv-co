import LandingHeader from "../features/home/LandingHeader";
import PopularCategories from "../features/home/PopularCategories";
import ShowCase from "../features/home/Showcase";
import ProductsPreview from "../features/home/ProductsPreview";
import TestimonialsContainer from "../features/home/Testimonial";
import FAQs from "../features/home/FAQs";

function HomePage() {
  return (
    <>
      <LandingHeader />
      <PopularCategories />
      <ShowCase />
      <ProductsPreview />
      <TestimonialsContainer />
      <FAQs />
    </>
  );
}

export default HomePage;
