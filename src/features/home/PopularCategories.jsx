import { popularCategoryData } from "../../data/popularCategoriesData";
import Container from "../../ui/Container";

function PopularCategories() {
  return (
    <>
      <Container classes="mt-10">
        <p className="text-center text-xs text-darkOrange" id="categories">
          Save 30% off
        </p>
        <h2 className="mt-1  text-center font-bold">Popular categories</h2>
        <ul className=" mt-7 grid grid-cols-2 gap-x-8 sm:grid-cols-4 md:grid-cols-6">
          {popularCategoryData.map((data, i) => (
            <PopularCategoryItems data={data} key={i} />
          ))}
        </ul>
      </Container>
    </>
  );
}

function PopularCategoryItems({ data }) {
  const { imgSrc, description } = data;
  return (
    <li className="group mb-5  lg:w-40">
      <div className="flex h-[6rem] items-center justify-center rounded-md border-[1px] border-borderLight px-2 py-1 transition-all hover:border-darkOrange">
        <img
          src={`/${imgSrc}`}
          className="h-[4rem] w-[3.5rem] transition-all group-hover:scale-[0.9] "
        />
      </div>
      <p className="text-center text-xs group-hover:text-darkOrange">
        {description}
      </p>
    </li>
  );
}

export default PopularCategories;
