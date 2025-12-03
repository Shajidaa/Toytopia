import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router";

const Card = ({ toy }) => {
  return (
    <div
      key={toy.toyId}
      className=" bg-white
          rounded-2xl shadow-sm p-5
           flex flex-col gap-2 
            hover:shadow-lg 
             hover:-translate-y-1 transition"
    >
      <div className=" flex relative justify-center items-center">
        <div className=" h-[198px]">
          <img
            className="w-full h-full rounded-xl object-contain"
            src={toy.pictureURL}
            alt={toy.toyName}
          />
        </div>
        <div
          className="absolute top-0 
        left-0"
        >
          {toy.isPopular && (
            <span className="badge border-2 border-dotted badge-sm bg-red-400 font-semibold  text-nowrap text-white">
              Popular 🔥
            </span>
          )}
        </div>
        <div className="absolute top-0 right-0">
          {toy.discount && (
            <span className="badge  badge-sm bg-[#0e0af1] font-semibold  text-nowrap text-white">
              {toy.discount}%
            </span>
          )}
        </div>
      </div>
      <h2 className="md:text-lg text-base font-bold pt-2 ">{toy.toyName}</h2>
      <p className="font-semibold text-[#555555] ">Price:${toy.price}</p>

      <Link
        to={`/toyDetails/${toy.toyId}`}
        className="mt-2 btn gradient
             "
      >
        View More <MdOutlineKeyboardDoubleArrowRight className="text-2xl" />
      </Link>
    </div>
  );
};

export default Card;
