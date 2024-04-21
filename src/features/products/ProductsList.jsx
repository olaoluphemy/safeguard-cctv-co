import { useSelector } from "react-redux";
import ProductListItem from "../../ui/ProductListItem";
import Loader from "../../ui/Loader";
import { data } from "../../data/productsMiniData";

export function ProductsList() {
  const loadingStatus = useSelector((store) => store.order.loadingStatus);
  const isLoading = loadingStatus === "loading";

  return (
    <>
      <ul className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {isLoading && <Loader />}

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

export default ProductsList;
