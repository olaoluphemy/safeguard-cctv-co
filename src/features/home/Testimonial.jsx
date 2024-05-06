import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { testimonialsData } from "../../data/testimonialsData";

function TestimonialsContainer() {
  const [currentView, setCurrentView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const timer = useRef(null);

  useEffect(
    function () {
      if (isPaused) return clearInterval(timer.current);

      timer.current = setInterval(function () {
        setCurrentView((s) => (s < testimonialsData.length - 1 ? s + 1 : 0));
      }, 2500);

      return function () {
        clearInterval(timer.current);
      };
    },
    [isPaused],
  );

  return (
    <>
      <div
        className="relative mt-10 flex flex-col-reverse gap-6 sm:mt-40 sm:flex-none lg:grid lg:grid-cols-2 lg:items-center"
        id="testimonials"
      >
        <Testimonial
          currentView={currentView}
          setCurrentView={setCurrentView}
          setIsPaused={setIsPaused}
        />
        <CompanyNote />
        <div className="hidden lg:block">
          <NavigationButtons setCurrentView={setCurrentView} />
        </div>
        <div className="absolute bottom-[-12%] right-0 z-[-100] h-[110%] w-[100%] bg-faintBlue sm:bottom-[-12%] sm:w-[70%] md:bottom-[-14%] lg:bottom-[0]"></div>
      </div>
      <div className=" lg:hidden">
        <NavigationButtons setCurrentView={setCurrentView} />
      </div>
    </>
  );
}

export function NavigationButtons({ setCurrentView }) {
  return (
    <div className=" flex min-h-20 items-center justify-center space-x-10">
      <p
        className="cursor-pointer transition-all hover:text-4xl hover:text-darkOrange"
        onClick={() => {
          setCurrentView((s) => (s > 0 ? s - 1 : testimonialsData.length - 1));
        }}
      >
        &#x2190;
      </p>
      <p
        className="cursor-pointer transition-all hover:text-4xl hover:text-darkOrange"
        onClick={() =>
          setCurrentView((s) => (s < testimonialsData.length - 1 ? s + 1 : 0))
        }
      >
        &#x2192;
      </p>
    </div>
  );
}

export function Testimonial({ currentView, setIsPaused }) {
  return (
    <div
      onMouseEnter={() => {
        setIsPaused(true);
      }}
      onMouseLeave={() => setIsPaused(false)}
    >
      <section className=" relative mx-auto min-h-[270px] w-[95%] max-w-[600px] overflow-hidden  sm:min-h-[290px] sm:w-[100%] ">
        {testimonialsData.map((user, i) => (
          <TestimonialContent
            key={i}
            currentView={currentView}
            index={i}
            user={user}
            setIsPaused={setIsPaused}
          />
        ))}
      </section>
    </div>
  );
}

function TestimonialContent({ currentView, index, user }) {
  return (
    <div
      style={{
        transform: `translateX(${index * 100 - currentView * 100}%) scaleY(${index === currentView ? "1" : "0.85"}) scaleX(${index === currentView ? "1" : "0.9"})`,

        filter: `blur(${index === currentView ? "0" : "2px"})`,
      }}
      className={` ${currentView === 0 ? "right-10 sm:right-20" : "right-0"} absolute right-0 top-0 z-[-10] ml-24 h-full  w-[300px] rounded-xl bg-bgDarkblue p-8 text-white transition-all duration-[0.3s] ease-in sm:w-[400px] sm:pt-12`}
    >
      <img src="/quotes.png" alt="quotes" className="mb-5 h-[30px]" />
      <p className="text-xs opacity-80">
        {user.message
          ? user.message
          : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus sunt architecto molestias"}
      </p>
      <div>
        <img
          src={user.imgSrc}
          alt="image-1"
          className=" mb-1 mt-3 h-[40px] w-[40px] rounded-[50%]"
        />
        <p className=" text-sm font-bold">{user.name}</p>
        <p className=" text-xs opacity-80">{user.job}</p>
      </div>
    </div>
  );
}

function CompanyNote() {
  return (
    <div className="mt-10 px-8 text-center sm:mt-0 lg:text-start">
      <p className=" text-xs text-darkOrange">Testimonials</p>
      <h2 className=" mt-1 text-lg  font-bold">
        What our customers say about us
      </h2>
      <p className=" mt-4 text-xs">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ullam
        tenetur veritatis quae esse voluptas cum culpa est dicta atque natus
        recusandae, nam eum aliquam ducimus, deserunt corporis maxime rem?
      </p>
      <p
        className=" mt-10 cursor-pointer text-xs font-bold text-darkOrange underline md:text-center lg:text-start"
        onClick={() => toast.success("coming soon")}
      >
        Write a review
      </p>
    </div>
  );
}

export default TestimonialsContainer;
