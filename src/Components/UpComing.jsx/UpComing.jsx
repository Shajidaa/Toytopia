import React, { useContext } from "react";
import MyContainer from "../../MyContainer/MyContainer";
import { Link } from "react-router";
import MyCountDown from "./MyCountDown";

import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";

const UpComing = () => {
  const { user } = useContext(AuthContext);
  const handleToast = () => {
    return toast.success("You’ll be notified when we launch! 🎉");
  };
  return (
    <div className="bg-rose-200! my-5">
      <MyContainer className={""}>
        <h1 className=" py-10 md:text-4xl text-2xl  text-center font-bold text-rose-950">
          Coming Soon
        </h1>
        <MyCountDown></MyCountDown>
        <div className="grid grid-cols-1  py-10 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
          <div
            className="card bg-base-100  w-full p-2 shadow-sm  hover:shadow-lg
             hover:-translate-y-1 transition"
          >
            <figure className="w-[212px] h-[200px]  flex justify-center mx-auto items-center">
              <img
                className="w-full h-full object-contain p-2"
                src="https://i.ibb.co.com/3mfMF62H/images-4.jpg"
                alt="toy"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title mx-auto">Pink Bunny</h2>
              {user ? (
                <button
                  onClick={handleToast}
                  className="btn gradient mt-4 w-full"
                >
                  Notify Me
                </button>
              ) : (
                <Link to={"/login"} className="btn gradient mt-4 w-full">
                  Notify Me
                </Link>
              )}
            </div>
          </div>

          <div
            className="card bg-base-100 w-full p-2 shadow-sm  hover:shadow-lg
             hover:-translate-y-1 transition"
          >
            <figure className="w-[212px] h-[200px] flex justify-center mx-auto items-center">
              <img
                className="w-full h-full object-contain p-2"
                src="https://i.ibb.co.com/DDqwCFqh/41-Ub8y-NIn5-L.jpg"
                alt="toy"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center mx-auto">Blue Elephant </h2>
              {user ? (
                <button
                  onClick={handleToast}
                  className="btn gradient mt-4 w-full"
                >
                  Notify Me
                </button>
              ) : (
                <Link to={"/login"} className="btn gradient mt-4 w-full">
                  Notify Me
                </Link>
              )}
            </div>
          </div>
          <div
            className="card bg-base-100 w-full p-2 shadow-sm  hover:shadow-lg
             hover:-translate-y-1 transition"
          >
            <figure className="w-[212px] h-[200px] flex justify-center mx-auto items-center">
              <img
                className="w-full h-full object-contain p-2"
                src="https://i.ibb.co.com/qFRBgDNX/51nq-Xz7i-Wr-L-AC-UL165-SR165-165.jpg"
                alt="toy"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center mx-auto">Octopus </h2>
              {user ? (
                <button
                  onClick={handleToast}
                  className="btn gradient mt-4 w-full"
                >
                  Notify Me
                </button>
              ) : (
                <Link to={"/login"} className="btn gradient mt-4 w-full">
                  Notify Me
                </Link>
              )}
            </div>
          </div>
          <div
            className="card bg-base-100 w-full p-2 shadow-sm  hover:shadow-lg
             hover:-translate-y-1 transition"
          >
            <figure className="w-[212px] h-[200px] flex justify-center mx-auto items-center">
              <img
                className="w-full h-full object-contain p-2"
                src="https://i.ibb.co.com/RWj6gsV/images-5.jpg"
                alt="toy"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center mx-auto">Frog</h2>
              {user ? (
                <button
                  onClick={handleToast}
                  className="btn gradient mt-4 w-full"
                >
                  Notify Me
                </button>
              ) : (
                <Link to={"/login"} className="btn gradient mt-4 w-full">
                  Notify Me
                </Link>
              )}
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default UpComing;
