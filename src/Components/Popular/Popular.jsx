import { Link } from "react-router";
import useToys from "../../Hooks/Hook";
import MyContainer from "../../MyContainer/MyContainer";
import Spinner from "../Spinner/Spinner";

import Card from "../Card";

const Popular = () => {
  const { toys, loading } = useToys();

  const popularToys = toys.filter((category) => category.isPopular === true);
  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <MyContainer className={"py-5 "}>
      <div className="flex justify-between items-center ">
        <h1 className=" py-3 md:py-6 text-3xl font-bold text-[#333333]">
          Popular Toys
        </h1>
        <Link
          to={"/toys"}
          className=" py-3 text-sm hover:underline hover:text-[#c76765] font-bold text-[#333333]"
        >
          All Toys
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {popularToys.map((toy) => (
          <Card toy={toy} key={toy.id}></Card>
        ))}
      </div>
    </MyContainer>
  );
};

export default Popular;
