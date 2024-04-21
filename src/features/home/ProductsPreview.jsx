import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import Button from "../../ui/Button";
import ProductListItem from "../../ui/ProductListItem";
import { data } from "../../data/productsPreviewData";

function ProductsPreview() {
  return (
    <Container>
      <p className=" mt-16 text-xs text-darkOrange">Explore </p>
      <ul>
        <li>
          <h2 className="font-bold">Our Products</h2>
        </li>
      </ul>
      <ul className=" grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
        {data.map((data, i) => (
          <ProductListItem data={data} key={data.id + i} />
        ))}
      </ul>
      <div className="mt-20 flex justify-center">
        <Link to="/products">
          <Button text="View all" extraStyles=" bg-bgDarkblue  mx-auto" />
        </Link>
      </div>
    </Container>
  );
}

export default ProductsPreview;
