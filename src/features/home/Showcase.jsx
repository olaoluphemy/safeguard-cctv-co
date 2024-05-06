import Container from "../../ui/Container";
import ButtonWithLoader from "../../ui/ButtonWIthLoader";

function ShowCase() {
  return (
    <Container>
      <div className="grid space-y-10 md:grid-cols-2 md:space-x-10 md:space-y-0">
        <ShowCaseLayout
          title="Hikvision 8MP IP"
          description="This camera has transformed the cctv"
          imgSrc="/image-12.png"
          // className=" mb-[2rem] mr-[4rem] w-[35%]"
        />
        <ShowCaseLayout
          title="Hikvision 4MM 4MP"
          description="Megapixel with Ultra low light"
          imgSrc="/image-13.png"
        />
      </div>
    </Container>
  );
}

function ShowCaseLayout({ title, description, imgSrc }) {
  return (
    <div className="flex h-60 items-center justify-around rounded-md bg-faintBlue p-4">
      <div className="">
        <h2 className="mb-2 font-bold">{title}</h2>
        <p className="mb-12 text-xs text-textLight">{description}</p>
        <ButtonWithLoader
          text="Shop now"
          extraStyles=" bg-bgDarkblue hover:opacity-[0.9]"
        />
        {/* LEFT FOR LEGACY REASONS */}
        {/* <Link to="/products">
          <Button
            text="Shop now"
            extraStyles=" bg-bgDarkblue hover:opacity-[0.9]"
          />
        </Link> */}
      </div>
      <img src={imgSrc} alt="image-1" className={`mb-[2rem] w-[28%]`} />
    </div>
  );
}

export default ShowCase;
