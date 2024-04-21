import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [servicesVisible, setServicesVisible] = useState(false);
  const location = useLocation();
  const [sideNavVisible, setSideNavVisible] = useState(false);

  const cart = useSelector((store) => store.cart.cart);

  return (
    <>
      <SideNav
        sideNavVisible={sideNavVisible}
        setSideNavVisible={setSideNavVisible}
      />
      {sideNavVisible && (
        <div
          className=" bg-navOverlay fixed left-0 top-0 z-[1800] h-[100%] w-[100%] backdrop-blur-[2px] sm:hidden"
          onClick={() => setSideNavVisible(false)}
        ></div>
      )}
      <nav
        className={`sticky left-0 top-0 z-[1000] border-b-[1px] ${!location.pathname.includes("/home") ? "bg-white" : " bg-white sm:bg-faintBlue"}`}
      >
        <div className=" m-auto mr-auto flex w-[92%]  items-center justify-between py-5">
          <div className=" flex items-center ">
            <nav
              className=" mr-5 cursor-pointer space-y-[2px] sm:hidden"
              onClick={() => setSideNavVisible(true)}
            >
              <SideNavIcon setSideNavVisible={setSideNavVisible} />
            </nav>
            <h1 className="text-xl font-bold">
              <Link to="/home">safeguard</Link>
            </h1>
          </div>
          <ul className=" hidden text-sm md:flex md:items-center md:space-x-9">
            <li className=" cursor-pointer">
              <Link to="/home">Home</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/home/#categories">Categories</Link>
            </li>
            <li
              className=" relative flex cursor-pointer items-center space-x-[4px]"
              onClick={() => setServicesVisible((s) => !s)}
            >
              <p>Services</p>
              <img
                src="/arrow-down.png"
                alt="arrow-down"
                className=" h-[5px]"
              />
              {servicesVisible && <Categories />}
            </li>
            <li className=" cursor-pointer">
              <Link to="#contact-us">Contact Us</Link>
            </li>
          </ul>

          <div className=" space-x-5">
            <button>
              <img src="/search.png" alt="search-icon" className="h-[0.9rem]" />
            </button>
            <button>
              <img src="/person.png" alt="search-icon" className="h-[0.9rem]" />
            </button>
            <button className=" relative">
              <Link to="/cart">
                {cart.length > 0 && (
                  <span className=" absolute right-[-7px] top-[-5px] flex items-center justify-center text-xs text-darkOrange">
                    {cart.length}
                  </span>
                )}

                <img src="/cart.png" alt="search-icon" className="h-[1rem]" />
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

function Categories() {
  function comingSoon() {
    toast.success("COMING SOON", {});
  }

  return (
    <ul
      className="absolute left-0 top-4 w-[120px]  rounded-[10px] bg-white text-xs text-opacity-40"
      onClick={comingSoon}
    >
      <li className="p-2 hover:bg-[#f4f4f4]">Installation</li>
      <li className="p-2 hover:bg-[#f4f4f4]">Maintenance</li>
      <li className="p-2 hover:bg-[#f4f4f4]">Payment Plans</li>
      <li className="p-2 hover:bg-[#f4f4f4]">Trade-ins</li>
    </ul>
  );
}

///////////////////////////////////
//////////////////////////////////
// FOR SMALLER SCREENS
function SideNavIcon() {
  return (
    <>
      <div className=" h-[3px] w-[20px] bg-[#353535]"></div>
      <div className=" h-[3px] w-[20px] bg-[#353535]"></div>
      <div className=" h-[3px] w-[20px] bg-[#353535]"></div>
    </>
  );
}

//FOR SMALLER SCREENS
function SideNav({ sideNavVisible, setSideNavVisible }) {
  return (
    <aside
      className={`fixed ${sideNavVisible ? "translate-x-0" : "translate-x-[-110%] "} left-2 top-2 z-[2000] h-fit w-[200px]  cursor-pointer  rounded-[10px] border-[1px] bg-bgDarkblue text-white duration-[0.4s] ease-in sm:hidden`}
    >
      <p
        className=" absolute right-3 top-1"
        onClick={() => setSideNavVisible((s) => !s)}
      >
        &#10006;
      </p>
      <ul
        className="my-[26px] text-center text-sm"
        onClick={() => setSideNavVisible((s) => !s)}
      >
        <Link to="/home">
          <li className=" hover:bg-navHover  p-5">Home</li>
        </Link>
        <Link to="#categories">
          <li className=" hover:bg-navHover p-5">Categories</li>
        </Link>
        <Link>
          <li className="hover:bg-navHover   p-5">Services</li>
        </Link>
        <Link to="#contact-us">
          <li className=" hover:bg-navHover  p-5">Contact Us</li>
        </Link>
      </ul>
    </aside>
  );
}

export default NavBar;
