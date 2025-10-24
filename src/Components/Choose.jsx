import bus from "../assets/icons8-bus-60.png";
import hand from "../assets/icons8-delivery-64.png";
import boy from "../assets/icons8-kid-40.png";
import trust from "../assets/trust.png";

import MyContainer from "../MyContainer/MyContainer";

const Choose = () => {
  return (
    <MyContainer className={"my-10"}>
      <h1 className=" py-5  text-3xl font-bold text-[#333333] text-center">
        Why Choose Us ?
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
        <div className="card bg-base-100 shadow-sm hover:transform hover:scale-105 transition hover:bg-[#f6b6b4] ">
          <figure className="mt-5 w-20 mx-auto  h-20 flex justify-center items-center">
            <img src={hand} alt="" className="rounded-xl w-10 h-10" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-nowrap">
              Carefully Curated Selection
            </h2>
            <p>
              We handpick every toy to ensure it’s safe, durable, and fun—so you
              can shop with confidence.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm hover:transform hover:scale-105 transition hover:bg-[#f6b6b4] ">
          <figure className="mt-5 w-20 mx-auto  h-20 flex justify-center items-center">
            <img src={boy} alt="" className="rounded-xl w-10 h-10" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-nowrap">Age-Based Navigation</h2>
            <p>
              Easily browse toys by age group, helping you find the perfect
              match for every child.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm hover:transform hover:scale-105 transition hover:bg-[#f6b6b4] ">
          <figure className="mt-5 w-20 mx-auto  h-20 flex justify-center items-center">
            <img src={trust} alt="" className="rounded-xl w-10 h-10" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-nowrap">Trusted Local Partners</h2>
            <p>
              We collaborate with reputable local and international brands to
              bring you quality toys that inspire joy and learning.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm hover:transform hover:scale-105 transition hover:bg-[#f6b6b4] ">
          <figure className="mt-5 w-20 mx-auto  h-20 flex justify-center items-center">
            <img src={bus} alt="" className="rounded-xl w-10 h-10" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-nowrap">Fast & Friendly Service</h2>
            <p>
              Enjoy quick delivery and a customer support team that’s always
              ready to help.
            </p>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Choose;
