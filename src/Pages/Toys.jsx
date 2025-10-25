import { Link } from "react-router";
import useToys from "../Hooks/Hook";
import MyContainer from "../MyContainer/MyContainer";
import Spinner from "../Components/Spinner/Spinner";
import { FaStar } from "react-icons/fa";

const Toys = () => {
  const { toys, loading } = useToys();
  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <MyContainer className={"py-5 "}>
      <title> Toys section</title>
      <h1 className="text-center py-3 text-3xl text-[#333333] font-bold">
        Our All Toys
      </h1>
      <p className="text-center text-base text-[#555555]">
        Explore our wide collection of fun and creative toys from local sellers!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 md:my-15 ">
        {toys.map((toy) => (
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
              <div className="absolute top-0 right-0">
                {toy.isPopular && (
                  <span className="badge border-2 border-dotted badge-sm bg-[#f10a0a] font-semibold  text-nowrap text-white">
                    Popular
                  </span>
                )}
              </div>
            </div>
            <h2 className="md:text-lg text-base font-bold pt-2 ">
              {toy.toyName}
            </h2>
            <p className="font-semibold text-[#555555] ">Price:${toy.price}</p>
            <div className="flex justify-between">
              <p className="text-gray-600 font-medium">
                Available: {toy.availableQuantity}
              </p>
              <p className="text-gray-600 font-medium">
                <FaStar className="inline text-amber-500" /> {toy.rating}
              </p>
            </div>

            <Link
              to={`/toyDetails/${toy.toyId}`}
              className="mt-2 btn gradient
             "
            >
              View More
            </Link>
          </div>
        ))}
      </div>
    </MyContainer>
  );
};

export default Toys;
