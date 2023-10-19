import Button from "@mui/material/Button";
import Promo from "../data/promo.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/about.scss";
export function about() {
  const [pic, setPic] = useState("/images/red_shoes1.png");
  return (
    <div className="bg-about-hero bg-contain">
      <div className="flex items-center justify-center">
        <h1 className="py-5 text-3xl font-bold text-violet-500 md:text-5xl">
          WEB ABOUT
        </h1>
      </div>
      <div
        className="flex flex-col gap-y-5 
      md:grid md:grid-cols-2
      "
      >
        <div className="flex gap-x-3 items-center justify-center">
          <div className="flex flex-col gap-2 md:gap-4">
            {Promo.map((prompic, index) => {
              const { img } = prompic;
              return (
                <>
                  <div
                    className="ima_ge "
                    key={index}
                    onClick={() => setPic(img)}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-16  rounded-sm cursor-pointer
                      md:w-28
                      "
                      cursor-pointer
                    />
                  </div>
                </>
              );
            })}
          </div>
          <div
            className="flex w-52 h-52  items-center shadow-md shadow-violet-500 rounded-lg 
          md:w-60 md:h-96 "
          >
            <img src={pic} alt="" className=" p-2" />
          </div>
        </div>
        <div className="flex items-center justify-center my-7 ">
          <p className="w-80 text-justify py-2 px-8 text leading-6 shadow-lg shadow-violet-500 bg-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nulla
            mollitia tempore fugit ducimus sequi velit nostrum dolore debitis
            impedit inventore error sunt rerum, eius quia similique maxime? In
            voluptatem nam temporibus, sit nihil ex ea doloribus enim voluptate
            ducimus! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Pariatur cupiditate vitae laborum, ipsa, adipisci, odio omnis quod
            facere eveniet nihil quidem quia consectetur. Optio dolorum eum quo?
            Eveniet id vero corporis labore nesciunt
          </p>
        </div>
      </div>
      <div className="flex justify-center mb-5">
        <Link to="/store">
          <Button variant="contained" className="bg-blue-500 w-48 p-2">
            SHOP NOW
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default about;
