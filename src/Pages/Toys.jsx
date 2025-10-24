import { Link } from "react-router";
import useToys from "../Hooks/Hook";
import MyContainer from "../MyContainer/MyContainer";
import Spinner from "../Components/Spinner/Spinner";

const Toys = () => {
  const { toys, loading } = useToys();
  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <MyContainer className={"py-5 "}>
      <title> Toys section</title>
      <h1 className="text-center py-3 text-3xl font-bold">Our All Toys</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {toys.map((toy) => (
          <div
            key={toy.toyId}
            className=" bg-white
          rounded-2xl shadow-sm p-4
           flex flex-col gap-2
            hover:shadow-lg
             hover:-translate-y-1 transition"
          >
            <div className="w-[295px] h-[198px]">
              <img
                className="rounded-xl w-full h-full object-contain"
                src={toy.pictureURL}
                alt={toy.toyName}
              />
            </div>
            <h2 className="text-lg font-semibold ">{toy.toyName}</h2>
            <p className="font-semibold text-[#555555] ">Price:${toy.price}</p>
            <div className="flex justify-between">
              <p className="text-gray-600 font-medium">
                Available: {toy.availableQuantity}
              </p>
              <p className="text-gray-600 font-medium">⭐ {toy.rating}</p>
            </div>

            <Link
              to={`/toyDetails/${toy.toyId}`}
              className="mt-2 btn font-bold rounded-2xl bg-blue-700 text-white  hover:bg-accent
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
