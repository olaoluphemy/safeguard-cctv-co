function Amount({ description, value, amount = "5000", type }) {
  return (
    <p
      className={` flex ${type === "ticket" ? "gap-3" : "justify-between"} border-b-[1px] p-5 text-xs font-bold`}
    >
      <span className={`${type === "ticket" && " w-[55px]"}`}>
        {description}
      </span>
      <span className=" flex items-center font-normal">
        <span>
          {!value && (
            <img
              src="/currency-dark.png"
              alt="currency"
              className="mr-[1px] h-[0.6rem]"
            />
          )}
        </span>
        <span className="max-w-[200px]">{value || formatNumber(amount)}</span>
      </span>
    </p>
  );
}

export default Amount;

function formatNumber(num) {
  return new Intl.NumberFormat("en-US").format(num);
}
