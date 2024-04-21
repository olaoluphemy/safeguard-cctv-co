import { useState } from "react";
import { NavigationButtons, Testimonial } from "../home/Testimonial";

function MoreDetails({ data, currentView }) {
  const { overviewDetails, specs, description } = data;
  const [view, setView] = useState(3);

  if (currentView === "overview")
    return (
      <div>
        <h1 className="mt-6 text-xl font-bold sm:mt-16">{description}</h1>
        <p className=" my-4 text-sm font-semibold sm:my-10">
          {overviewDetails.details}
        </p>
        <p className=" text-xs font-semibold">
          Installation Team:
          <span className=" font-normal">
            Our professional team of two experienced installers from
            visionGuardwill ensure your cameras are installed securely and
            strategically.
          </span>
        </p>

        <h2 className="mb-3 mt-5 text-lg font-bold sm:mb-7">Key Features</h2>
        <ul className="">
          {overviewDetails.features.map((feature, i) => (
            <ItemFeatures
              feature={feature}
              key={i}
              customStyle=" mb-6 ml-5 list-disc text-xs "
            />
          ))}
        </ul>
      </div>
    );

  if (currentView === "specs")
    return (
      <div className=" mt-10 text-xl">
        <h1 className="font-bold">Specifications</h1>
        <ul className=" mt-5">
          {specs.map((spec, i) => (
            <ItemFeatures
              feature={spec}
              key={i}
              customStyle=" mb-6 ml-5 list-disc text-xs "
            />
          ))}
        </ul>
      </div>
    );
  if (currentView === "reviews")
    return (
      <div className=" mt-16 sm:w-[50%] sm:overflow-hidden">
        <Testimonial currentView={view} />
        <NavigationButtons setCurrentView={setView} />
      </div>
    );
}

function ItemFeatures({ feature, customStyle }) {
  return <li className={`${customStyle}`}>{feature}</li>;
}

export default MoreDetails;
