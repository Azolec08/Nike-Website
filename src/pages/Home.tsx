import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div
        className="h-screen bg-[url('/images/bg1.png)] w-full bg-about-hero bg-contain grid grid-rows-7 
        lg:grid-cols-11
      "
      >
        <div
          className="row-span-6 flex flex-col items-start justify-center mx-5
        lg:col-span-5 md:mx-8 
        "
        >
          <span className="text-6xl text-violet-600 font-serif">
            NIKE <br /> Collection
          </span>
          <p className="text-justify my-6">
            Nike often uses premium materials, including top-grade leather,
            advanced textiles, and cutting-edge synthetic materials in the
            construction of their shoes. These materials can drive up the cost
            of production. Nike is known for its commitment to innovation in
            athletic footwear.
          </p>
          <Link to="/store">
            <button
              className="bg-violet-600 text-white p-3 rounded-full hover:bg-violet-500
             transition duration-500 bold font-bold"
            >
              Shop Now
              <ArrowForwardIosIcon className="text-xl" />
            </button>
          </Link>
        </div>
        <div
          className="hidden justify-end items-center
        md:col-span-5  lg:block
        "
        >
          <img
            src="/images/shoes.png"
            alt=""
            className="w-3/4 lg:my-24 ml-16"
          />
        </div>
        <div
          className="flex row-span-1 gap-y-4 items-center justify-evenly 
        lg:flex-col 
        "
        >
          <a href="">
            <img src="/images/facebook.png" alt="" className="w-6" />
          </a>
          <a href="">
            <img src="/images/twitter.png" alt="" className="w-6" />
          </a>
          <a href="">
            <img src="/images/google.png" alt="" className="w-6" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
