import { Link } from "react-router";
import useToys from "../Hooks/Hook";
import MyContainer from "../MyContainer/MyContainer";

const Toys = () => {
  const { toys, loading } = useToys();
  if (loading) {
    return <p>loading........</p>;
  }

  return (
    <MyContainer className={"py-5 "}>
      <h1 className="text-center py-3 text-3xl font-bold">Our All Toys</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {toys.map((toy) => (
          <div
            className=" bg-white
          rounded-2xl shadow-sm p-4
           flex flex-col gap-2
            text-center hover:shadow-lg
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
            <p className="font-bold text-blue-600">${toy.price}</p>
            <div className="flex justify-between">
              <p>⭐ {toy.rating}</p>
              <p>Available: {toy.availableQuantity}</p>
            </div>

            <Link
              to={`/toyDetails/${toy.toyId}`}
              className="mt-2 px-4 py-1 bg-[rgb(182,26,255)] text-white rounded-lg
             hover:bg-[rgb(175,66,226)]"
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
