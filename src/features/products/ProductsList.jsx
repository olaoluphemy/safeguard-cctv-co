import ProductListItem from "../../ui/ProductListItem";
import { data } from "../../data/productsMiniData";
import { useLoaderData } from "react-router-dom";

export function ProductsList() {
  const data = useLoaderData();

  return (
    <>
      <ul className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {data.map((data) => (
          <ProductListItem data={data} key={data.id} />
        ))}
      </ul>
      <div className="mt-10 flex items-center justify-center">
        {Array.from({ length: 5 }, (_, i) => i).map((_, i) => (
          <PaginationButtons index={i} key={i} />
        ))}
      </div>
    </>
  );
}

function PaginationButtons({ index }) {
  return (
    <button
      className={`mr-1 flex h-[1rem] w-[1rem] items-center justify-center rounded-sm ${index < 1 ? "bg-darkOrange" : "border-[1px] bg-white"} p-3 text-bgDarkblue`}
    >
      {index + 1}
    </button>
  );
}

// eslint-disable-next-line
export async function loader() {
  return new Promise(function (resolve, reject) {
    setTimeout(
      () =>
        !data ? reject("sorry, data could not be fetched") : resolve(data),
      800,
    );
  });
}

export default ProductsList;
