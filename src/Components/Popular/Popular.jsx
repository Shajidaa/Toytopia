import { Link } from "react-router";
import useToys from "../../Hooks/Hook";
import MyContainer from "../../MyContainer/MyContainer";
import Spinner from "../Spinner/Spinner";

const Popular = () => {
  const { toys, loading } = useToys();

  const popularToys = toys.filter((category) => category.isPopular === true);
  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <MyContainer className={"py-5 "}>
      <div className="flex justify-between items-center">
        <h1 className=" py-3 text-3xl font-bold text-[#333333]">
          Popular Toys
        </h1>
        <Link
          to={"/toys"}
          className=" py-3 text-sm hover:underline hover:text-[#c76765] font-bold text-[#333333]"
        >
          All Toys
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {popularToys.map((toy) => (
          <div
            key={toy.toyId}
            className=" bg-white
          rounded-2xl shadow-sm p-4
           flex flex-col gap-2
             hover:shadow-lg
             hover:-translate-y-1 transition"
          >
            <div>
              <img
                className="rounded-xl"
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
              className="mt-2 btn font-bold rounded-2xl bg-[#8878f4] hover:bg-amber-800 text-white 
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

export default Popular;
