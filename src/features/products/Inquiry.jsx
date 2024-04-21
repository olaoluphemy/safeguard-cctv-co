import Button from "../../ui/Button";

function Inquiry() {
  return (
    <section className="mx-auto flex w-[80%] flex-col justify-around bg-faintBlue  sm:h-[200px] sm:flex-row sm:items-center">
      <div className=" space-y-4 ">
        <h1 className="mb-5 text-center text-3xl font-bold sm:mb-0  sm:text-start">
          Do you have an inquiry?
        </h1>
        <p className=" hidden text-xs sm:block">
          Have Questions or ready to secure your property? Reach out to our tean
          today
        </p>
        <Button
          text="Ask us anything"
          extraStyles="bg-bgDarkblue hidden sm:inline-block"
        />
      </div>
      <img
        src="/customer-rep.png"
        alt="customer-rep"
        className=" h-[150px] w-[200px] self-center sm:w-fit"
      />
      <p className="mt-5 text-center text-xs sm:hidden">
        Have Questions or ready to secure your property? Reach out to our team
        today
      </p>
      <Button
        text="Ask us anything"
        extraStyles="bg-bgDarkblue sm:hidden self-center mt-10"
      />
    </section>
  );
}

export default Inquiry;
