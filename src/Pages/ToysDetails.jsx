import { Link, useParams } from "react-router";
import useToys from "../Hooks/Hook";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaStar,
  FaPhone,
  FaMapMarkerAlt,
  FaBox,
  FaTags,
  FaFireAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";
import Rating from "../Components/Rating";
import Spinner from "../Components/Spinner/Spinner";
import MyContainer from "../MyContainer/MyContainer";
import Detail from "../Components/Detail";
import Input from "../Components/Input";
import { useState } from "react";
import TryNow from "../Components/Modal/TryNow";

const ToysDetails = () => {
  const { id } = useParams();
  const { toys, loading } = useToys();
  const [qty, setQty] = useState(1);
  const singleToys = toys.find((toy) => toy.toyId == id);

  if (loading) return <Spinner />;

  if (!singleToys)
    return <p className="text-center text-red-500">Toy not found.</p>;

  const {
    toyName,
    sellerName,
    sellerEmail,
    sellerPhone,
    sellerAddress,
    shopVerified,
    price,
    discount,
    rating,
    availableQuantity,
    description,
    pictureURL,
    subCategory,
    category,
    isPopular,
    inStock,
    brandName,
    ageGroup,
    learningBenefits,
    theme,
    difficultyLevel,
    ageRange,
    dimensions,
    weight,
    material,
    colorVariant,
    itemsIncluded,
    safetyWarnings,
    stockStatus,
    restockDate,
  } = singleToys;

  const increaseQty = () => setQty((q) => q + 1);
  const decreaseQty = () => setQty((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    toast.success(`${qty} item(s) added to cart! 🛒`);
  };
  const finalPrice = discount
    ? (price - (price * discount) / 100).toFixed(2)
    : price;

  return (
    <MyContainer className="p-6">
      <title>{toyName}</title>

      {/* CARD */}
      <div className="card bg-white p-1 md:p-5 shadow-2xl rounded-2xl border border-gray-200">
        <Link
          to="/toys"
          className="underline mb-4 flex items-center gap-2 text-[#dc7977] hover:text-[#ff6562]"
        >
          <FaArrowLeft /> Back to Toys
        </Link>
        <div className="flex flex-col md:flex-row gap-10 bg-white  p-6 md:p-10  ">
          {/* IMAGE */}
          <div className="md:w-1/2 flex justify-center">
            <figure className="w-full flex justify-center">
              <img
                src={pictureURL}
                alt={toyName}
                className="rounded-2xl w-full max-w-xl shadow-md object-cover border border-[#f3dada]"
              />
            </figure>
          </div>

          {/* INFO */}
          <div className="md:w-1/2 flex flex-col gap-4">
            {/* TITLE */}
            <h2
              className="card-title text-xl md:text-4xl
             font-extrabold text-[#dc7977] flex flex-wrap items-center gap-3"
            >
              {toyName}
              {inStock && (
                <span className="badge bg-linear-to-r from-[#dc7977] to-[#ff6562] text-white border-none flex items-center gap-1">
                  <FaCheckCircle /> In Stock
                </span>
              )}
              {isPopular && (
                <span className="badge bg-yellow-500 text-white border-none flex items-center gap-1">
                  <FaFireAlt /> Best Seller
                </span>
              )}
            </h2>

            {/* PRICE */}
            <div className="flex flex-wrap text-[#dc7977] items-center gap-3 text-lg md:text-2xl font-semibold">
              Price:
              {discount > 0 && (
                <span className="text-red-500 line-through">${price}</span>
              )}
              <span className="text-[#dc7977]">${finalPrice}</span>
              {discount > 0 && (
                <span className="md:badge badge-sm bg-[#ff6562] text-white flex items-center gap-1 px-3 py-1 rounded-xl shadow">
                  <FaTags /> {discount}% OFF
                </span>
              )}
            </div>

            {/* RATING */}
            <p className="flex items-center gap-2 text-lg">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <span>({rating})</span>
            </p>
            <div className="flex gap-4">
              <Detail
                className="flex flex-col "
                label="Brand"
                value={brandName}
              />

              <Detail
                className="flex flex-col"
                label="Dimensions"
                value={dimensions}
              />
            </div>
            <Detail label="Category" value={`${category} / ${subCategory}`} />
            {/* ADD TO CART SECTION */}
            <div className="mt-6 flex md:flex-row flex-col items-center gap-5">
              {/* Quantity Selector */}
              <div className="flex items-center border rounded-xl overflow-hidden shadow">
                <button
                  onClick={decreaseQty}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-xl font-bold"
                >
                  -
                </button>

                <span className="px-6 py-2 text-lg font-semibold">{qty}</span>

                <button
                  onClick={increaseQty}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-xl font-bold"
                >
                  +
                </button>
              </div>

              {/* ADD TO CART BUTTON */}
              <button
                onClick={handleAddToCart}
                className="btn bg-linear-to-r from-[#dc7977] to-[#ff6562] text-white px-6 py-3 rounded-xl shadow-lg hover:opacity-90"
              >
                Add to Cart 🛒
              </button>
            </div>
          </div>
        </div>

        {/* MAIN INFO */}
        <div className="card-body space-y-4">
          <p className="text-gray-700">{description}</p>

          {/* DETAILS GRID */}
          <div className="md:grid md:grid-cols-2 flex flex-col  gap-4 text-gray-700 mt-4">
            <Detail label="Age Group" value={ageGroup} />
            <Detail label="Age Range" value={ageRange} />
            <Detail label="Theme" value={theme} />
            <Detail label="Difficulty" value={difficultyLevel} />

            <Detail label="Weight" value={weight} />
            <Detail label="Material" value={material} />
            <Detail label="Stock Status" value={stockStatus} />
            {restockDate && <Detail label="Restock Date" value={restockDate} />}

            <Detail label="Available Quantity" value={availableQuantity} />
            <Detail
              label="Learning Benefits"
              value={learningBenefits?.join(", ")}
            />
            <Detail label="Colors" value={colorVariant?.join(", ")} />
            <Detail label="Items Included" value={itemsIncluded?.join(", ")} />
            <Detail label="Safety Warning" value={safetyWarnings} />

            {/* SELLER INFO */}
            <div className="col-span-2 p-4 rounded-xl mt-5  shadow-sm bg-gray-50">
              <h3 className="font-bold text-[#dc7977] mb-2 flex items-center gap-1">
                Seller Information{" "}
                {shopVerified && <FaCheckCircle className="text-green-500" />}
              </h3>
              <p>
                <span className="font-semibold">Name:</span> {sellerName}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {sellerEmail}
              </p>
              <p className="flex items-center gap-2">
                <FaPhone /> {sellerPhone}
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> {sellerAddress}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTIONS */}
      <div className="flex *:w-1/2 flex-col lg:flex-row gap-8 mt-10">
        {/* TRY FORM */}
        <TryNow></TryNow>

        {/* FEEDBACK */}
        <div className="p-6 rounded-2xl shadow-2xl bg-white flex flex-col items-center lg:w-1/2">
          <h1 className="text-3xl font-bold text-[#dc7977] mb-4">
            Leave Feedback →
          </h1>
          <Rating />
        </div>
      </div>
    </MyContainer>
  );
};

export default ToysDetails;
