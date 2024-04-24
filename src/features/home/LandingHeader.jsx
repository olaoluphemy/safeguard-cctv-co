import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Container from "../../ui/Container";

function LandingHeader() {
  return (
    <>
      <Container>
        <p className="my-5 text-xs text-darkOrange sm:hidden">Save 30% off</p>
      </Container>
      <div className="mx-auto w-[92%] sm:w-[100%]">
        <main className="h-fit bg-faintBlue pb-10 sm:min-h-[60vh]">
          <section className=" ml-auto mr-auto  w-[92%] grid-cols-2 gap-x-12 gap-y-12 md:grid md:pt-20">
            <div className="hidden sm:block">
              <Introduction />
            </div>
            <div className="relative h-72 flex-col justify-start sm:flex">
              <img
                src="/landing-image-3.png"
                alt="landing-image-1"
                className=" absolute left-[-5] top-1 w-20 sm:left-28"
              />
              <img
                src="/landing-image-1.png"
                alt="landing-image-2"
                className=" absolute bottom-0 left-[10%] w-14 sm:left-[50%]"
              />
              <img
                src="/landing-image-2.png"
                alt="landing-image-3"
                className=" absolute right-[2rem] top-[-30px] w-20 sm:right-[5.5rem] sm:top-[-50px]"
              />
              <img
                src="/cctv-1.png"
                alt="/cctv-1.png"
                // className=" absolute sm:relative sm:mx-auto sm:h-[80%] sm:w-[300px] lg:h-full"
                // className=" mx-auto mt-[10%] h-[80%] sm:mt-0 sm:w-[300px] md:w-[80%] lg:h-full"
                className=" absolute left-[50%] top-[50%] mx-auto h-[80%] translate-x-[-60%]  translate-y-[-50%] sm:relative sm:left-0 sm:top-0 sm:mt-0 sm:w-[300px] sm:translate-x-0 sm:translate-y-0 md:w-[80%] lg:h-full"
              />
            </div>
          </section>
          <div className="ml-auto mr-auto mt-10 hidden w-[92%] md:block">
            <div className="flex flex-col justify-between space-y-20 sm:flex-row sm:items-center sm:space-y-0">
              <div className="flex flex-col items-center sm:flex-row">
                <span className=" mr-2 flex  items-center rounded-[50%] border-[1px] border-darkOrange px-3 py-3">
                  <img src="/truck.png" alt="" className="h-4" />
                </span>
                <span className=" space-x-3 text-center sm:flex sm:flex-col sm:items-start sm:space-x-0">
                  <p className="text-sm font-bold">Nationwide Delivery</p>
                  <p className="text-start text-xs text-textLight">
                    Enjoy fast delivery and peace of mind
                  </p>
                </span>
              </div>
              <div className="flex flex-col items-center sm:flex-row ">
                <span className=" mr-2 flex  items-center rounded-[50%] border-[1px] border-darkOrange px-3 py-3">
                  <img src="/Vector.png" alt="" className=" h-4" />
                </span>
                <span className="space-x-3 text-center sm:flex sm:flex-col sm:items-start sm:space-x-0">
                  <p className="text-sm font-bold">24/7 Customer Support</p>
                  <p className="text-start text-xs text-textLight">
                    Expert support, always here for you
                  </p>
                </span>
              </div>
              <div className="flex flex-col items-center sm:flex-row ">
                <span className="mr-2 flex  items-center rounded-[50%] border-[1px] border-darkOrange px-3 py-3">
                  <img src="/trusted.png" alt="" className=" h-4" />
                </span>
                <span className="space-x-3 text-center sm:flex sm:flex-col sm:items-start sm:space-x-0">
                  <p className="text-sm font-bold">Complementary Setup</p>
                  <p className="text-start text-xs text-textLight">
                    Enjoy fast delivery and peace of mind
                  </p>
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Container>
        <div className=" mt-5 sm:hidden">
          <Introduction smallScreen={true} />
        </div>
      </Container>
    </>
  );
}

function Introduction({ smallScreen }) {
  return (
    <div
      className={`${!smallScreen ? "flex h-72 flex-col items-center justify-center md:items-start" : ""} space-y-3 text-start`}
    >
      {!smallScreen && <p className="text-darkOrange">Save 30% off</p>}
      <h3 className=" text-2xl font-bold">Dome Camera series</h3>
      <p className=" text-sm text-textLight">
        Feature packed at a better value than ever powerful sensors to monitor
        yourenvironment.
      </p>
      <Link to="/products">
        <Button
          text="Shop now"
          extraStyles={`hover:opacity-[0.9] bg-bgDarkblue ${smallScreen ? "mt-3" : ""}`}
        />
      </Link>
    </div>
  );
}

export default LandingHeader;
