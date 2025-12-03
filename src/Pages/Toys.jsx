import { Link } from "react-router";
import useToys from "../Hooks/Hook";
import MyContainer from "../MyContainer/MyContainer";
import Spinner from "../Components/Spinner/Spinner";
import { FaStar } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useState } from "react";
import NoToys from "../Components/NoToys";
import Card from "../Components/Card";

const Toys = () => {
  const { toys, loading } = useToys();
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("");

  if (loading) {
    return <Spinner></Spinner>;
  }
  const filteredToys = toys
    .filter((toy) =>
      toy.toyName.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === "lowToHigh") return a.price - b.price;
      if (sortType === "highToLow") return b.price - a.price;
      if (sortType === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <MyContainer className={"py-5 "}>
      <title> Toys section</title>
      <h1 className="text-center py-3 text-3xl text-[#333333] font-bold">
        Our All Toys
      </h1>
      <p className="text-center text-base text-[#555555]">
        Explore our wide collection of fun and creative toys from local sellers!
      </p>

      <div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 my-6">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search toys..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="input input-bordered w-full sm:w-1/2"
          />

          {/* Sort Dropdown */}
          <select
            className="select select-bordered w-full sm:w-1/3"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="lowToHigh">Price: Low → High</option>
            <option value="highToLow">Price: High → Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
      {filteredToys.length === 0 ? (
        <NoToys></NoToys>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5 md:my-15 ">
          {filteredToys.map((toy) => (
            <Card toy={toy} key={toy.id}></Card>
          ))}
        </div>
      )}
    </MyContainer>
  );
};

export default Toys;
