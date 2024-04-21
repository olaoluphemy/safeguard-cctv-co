import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" mt-24 bg-bgDarkblue px-14 py-12" id="contact-us">
      <div className="  grid gap-6  sm:grid-cols-3 sm:gap-20">
        <div className=" pb-14">
          <h1 className=" mb-2 font-bold text-darkOrange">Safeguard</h1>
          <p className=" text-xs text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            necessitatibus aperiam eum.
          </p>

          <p className=" mb-3 mt-12 text-sm font-bold text-white">
            subscribe to our newsletter
          </p>
          <div className=" flex h-[2.5rem] w-full items-center justify-end rounded-full bg-white">
            <span className=" flex h-full cursor-pointer items-center rounded-full bg-darkOrange px-[2rem] text-xs text-white hover:text-bgDarkblue">
              subscribe
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:items-center">
          <h2 className=" mb-2 font-bold text-darkOrange">Quick Links</h2>
          <ul className="space-y-2 text-xs text-white">
            <li className="cursor-pointer hover:text-darkOrange">
              <Link to="#categories">Categories</Link>
            </li>
            <li className="cursor-pointer hover:text-darkOrange">Contact Us</li>
            <li className="cursor-pointer hover:text-darkOrange">About Us</li>
            <li className="cursor-pointer hover:text-darkOrange">
              <Link to="#testimonials">Link Testimonials</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className=" mb-2 font-bold text-darkOrange">Partners</h2>
          <ul className="space-y-2 text-xs text-white">
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit</li>
          </ul>
        </div>
      </div>
      <div className=" mb-3 mt-10 w-[92%] border-b-[1px] border-b-darkOrange"></div>
      <p className=" text-xs text-darkOrange">
        All rights reserved &copy; Lorem ipsum dolor sit.
      </p>
    </footer>
  );
}

export default Footer;
