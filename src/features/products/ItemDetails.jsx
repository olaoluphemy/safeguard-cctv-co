import { useState } from "react";
import Button from "../../ui/Button";
import MoreDetails from "./MoreDetails";

function ItemDetails({ data }) {
  const [currentView, setCurrentView] = useState("overview");

  return (
    <div>
      <div className=" flex">
        <Button
          extraStyles={`${currentView === "overview" ? "bg-bgDarkblue mr-6" : "border-bgDarkblue border-[1px] mr-6 hover:text-white hover:bg-bgDarkblue"}`}
          text="overview"
          onClick={() =>
            currentView === "overview" ? null : setCurrentView("overview")
          }
          textColor={currentView !== "overview" ? `text-darkBlue` : ""}
        />
        <Button
          extraStyles={`${currentView === "specs" ? "bg-bgDarkblue mr-6" : "border-bgDarkblue border-[1px] mr-6 hover:text-white hover:bg-bgDarkblue"}`}
          text="specs"
          onClick={() =>
            currentView === "specs" ? null : setCurrentView("specs")
          }
          textColor={currentView !== "specs" ? `text-darkBlue` : ""}
        />
        <Button
          extraStyles={`${currentView === "reviews" ? "bg-bgDarkblue mr-6" : "border-bgDarkblue border-[1px] mr-6 hover:text-white hover:bg-bgDarkblue"}`}
          text="reviews"
          onClick={() =>
            currentView === "reviews" ? null : setCurrentView("reviews")
          }
          textColor={currentView !== "reviews" ? `text-darkBlue` : ""}
        >
          reviews
        </Button>
      </div>
      {currentView && <MoreDetails data={data} currentView={currentView} />}
    </div>
  );
}

export default ItemDetails;
