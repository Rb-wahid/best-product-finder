import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/image/Acer-Nitro-5_1.png";
import useReview from "../hooks/useReview";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  const reviews = useReview();
  const nagivate = useNavigate();

  const handleNavigate = () => {
    nagivate("/reviews");
  };
  return (
    <div className="">
      <div className=" myGrid ml-20 my-20">
        <div className="pl-14 indent-8">
          <div className="  font-semibold">
            <h2 className=" mb-4  text-4xl text-cyan-400 pb-6">
              Best Gaming Laptop For You
            </h2>
          </div>
          <p className=" ">
            Acer gaming laptops deliver advanced performance for all gamers. The
            Nitro lineup of gaming PCs and accessories are ideal for casual
            gamers who are ready for something better. The Acer Nitro 5 AN515-55
            is equipped with a beautiful 15.6 inch FHD display to help you
            visualize the win. The latest NVIDIA GeForce RTX 30 series GPU
            supports 2nd Gen Ray Tracing Cores, 3rd Gen Tensor Cores, DLSS,
            Resizable BAR, Microsoft DirectX 12 Ultimate, and so much more. With
            Killer Ethernet and Wi-Fi 6, get quicker matchmaking and never worry
            about disconnecting during a game. The Acer Nitro 5 with Intel Core
            i5 processing power enables impressive performance whether you're
            challenging your buddies to battle or focusing on a new hobby. This
            Acer Nitro laptop is configured with 8GB RAM memory and 256GB
            solid-state drive storage space, and the ability to upgrade as
            needed. Use the HDMI 2.0 port for a monitor, use power-off USB
            charging, and plug in your favorite accessories with the array of
            USB Type-A and USB Type-C ports. (NH.QB0AA.001).
          </p>
          <div>
            <button class="mt-6 text-white-500 font-bold px-5 py-3 rounded-md bg-green-600 shadow-md shadow-green-400/50 ...">
              Live Demo
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center pr-8 pb-5">
          <img width={"500px"} src={img1} alt="" />
        </div>
      </div>
      <div>
        <h2 className=" text-cyan-400  text-4xl font-semibold text-center pb-6">
          Customers Review (3)
        </h2>
        <div className="px-5 pb-12 md:w-[70%] m-auto  grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 ">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
        <div className="flex justify-center items-center pb-28">
          <button
            onClick={handleNavigate}
            class="text-white-500 font-bold px-5 py-3 rounded-md bg-green-600 shadow-md shadow-green-400/50 ..."
          >
            See All Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
