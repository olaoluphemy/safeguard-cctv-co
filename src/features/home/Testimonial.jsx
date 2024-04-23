import { useState } from "react";
import toast from "react-hot-toast";
import { testimonialsData } from "../../data/testimonialsData";

function TestimonialsContainer() {
  const [currentView, setCurrentView] = useState(0);
  return (
    <>
      <div
        className="relative mt-40 flex flex-col-reverse gap-6 sm:flex-none lg:grid lg:grid-cols-2"
        id="testimonials"
      >
        <Testimonial
          currentView={currentView}
          setCurrentView={setCurrentView}
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
        onClick={() =>
          setCurrentView((s) => (s > 0 ? s - 1 : testimonialsData.length - 1))
        }
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

export function Testimonial({ currentView }) {
  return (
    <div>
      <section className=" relative mx-auto min-h-[270px] w-[85%] max-w-[410px]  overflow-hidden sm:min-h-[290px] sm:w-[70%]">
        {testimonialsData.map((user, i) => (
          <TestimonialContent
            key={i}
            currentView={currentView}
            index={i}
            user={user}
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
        transform: `translateX(${index * 100 - currentView * 100}%) scaleY(${index === currentView ? "1" : "0.8"})`,

        filter: `blur(${index === currentView ? "0" : "2px"})`,
      }}
      className={`absolute left-0 top-0 z-[-10] ml-24 h-full  rounded-xl bg-bgDarkblue p-8 text-white transition-all duration-[0.2s] ease-in sm:pt-12`}
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
    <div className="sm:mt-o mt-10 px-8 text-center lg:text-start">
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
