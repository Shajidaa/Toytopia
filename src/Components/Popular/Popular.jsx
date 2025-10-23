import { Link } from "react-router";
import useToys from "../../Hooks/Hook";
import MyContainer from "../../MyContainer/MyContainer";

const Popular = () => {
  const { toys, loading } = useToys();

  const popularToys = toys.filter((category) => category.isPopular === true);
  if (loading) {
    return <p>loading</p>;
  }
  return (
    <MyContainer className={"py-5 "}>
      <h1 className="text-center py-3 text-3xl font-bold">Popular Toys</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {popularToys.map((toy) => (
          <div
            key={toy.toyId}
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
      <Link to={"/toys"} className="btn">
        See All
      </Link>
    </MyContainer>
  );
};

export default Popular;

//  <div>
//       {toys.map((toy) => {
//         <div
//           className="border
//           rounded-2xl shadow-sm p-4
//            flex flex-col items-center
//             text-center hover:shadow-lg
//              hover:-translate-y-1 transition"
//         >
//           <div>
//             <img src={toy.pictureURL} alt={toy.toyName} />
//           </div>
//           <h2 className="text-lg font-semibold">{toy.toyName}</h2>
//           <div className="flex justify-between">
//             <p>⭐ {toy.rating}</p>
//             <p>Available: {toy.availableQuantity}</p>
//           </div>
//           <p className="font-bold text-blue-600">${toy.price}</p>
//           <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//             View More
//           </button>
//         </div>;
//       })}
//     </div>
