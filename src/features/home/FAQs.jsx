import { useState } from "react";
import Container from "../../ui/Container";
import Button from "../../ui/Button";
import { FAQData } from "../../data/FAQdata";

function FAQs() {
  const [openQus, setOpenQus] = useState(null);

  return (
    <Container>
      <p className=" mt-10 text-center text-sm text-darkOrange sm:mt-20">
        You have any questions
      </p>
      <h1 className=" mb-7 text-center text-xl font-bold">
        Frequently Asked Questions
      </h1>
      <ul className=" mx-auto w-[90%] sm:w-[60%]">
        {FAQData.map((data) => (
          <Questions
            data={data}
            key={data.id}
            openQus={openQus}
            setOpenQus={setOpenQus}
          />
        ))}
      </ul>
      <div className=" mt-10 flex justify-center">
        <Button text="View All" extraStyles="bg-bgDarkblue" />
      </div>
    </Container>
  );
}

function Questions({ data, openQus, setOpenQus }) {
  const { description, id } = data;

  return (
    <li
      className={`cursor-pointer border-y-[1px] ${!openQus || id !== openQus ? "sm:h-10" : "sm:h-24"} py-4 transition-all ${!openQus || id !== openQus ? "h-16" : "h-32"}`}
      onClick={() => setOpenQus((s) => (s === id ? null : id))}
    >
      <div className="flex items-start justify-between sm:items-center">
        <p className="text-xs font-semibold">{description}</p>
        <span>
          <img
            src="/plus.png"
            alt="plus-image"
            className=" h-3 cursor-pointer"
          />
        </span>
      </div>
      {openQus === id && (
        <p className=" mt-5 text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          reiciendis eligendi aperiam laudantium saepe numquam.
        </p>
      )}
    </li>
  );
}

export default FAQs;
