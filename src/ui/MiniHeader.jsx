function MiniHeader({ isDiscounted, description }) {
  return (
    <header className="flex items-center justify-between rounded-lg bg-faintBlue px-4 py-4">
      <h2 className=" rounded-t-lg text-lg font-bold">{description}</h2>
      {isDiscounted && description.toLowerCase() !== "order details" && (
        <p className=" text-[8px] text-red-500">*50% discount applied</p>
      )}
    </header>
  );
}

export default MiniHeader;
