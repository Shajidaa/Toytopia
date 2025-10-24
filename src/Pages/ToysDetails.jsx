import { Link, useParams } from "react-router";
import useToys from "../Hooks/Hook";
import { FaArrowLeft, FaCheckCircle, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import Rating from "../Components/Rating";
import Spinner from "../Components/Spinner/Spinner";
import Error from "./Error";

const ToysDetails = () => {
  const { id } = useParams();
  const { toys, loading } = useToys();
  const singleToys = toys.find((toy) => toy.toyId == id);

  if (loading) {
    return <Spinner></Spinner>;
  }
  // if (!singleToys) {
  //   return <Error></Error>;
  // }
  const {
    toyName,

    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
    pictureURL,
    subCategory,
    category,
    isPopular,
    brandName,
  } = singleToys;

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    e.target.reset();
    return toast.success(
      `Thanks ${name}! You tried ${toyName} successfully!🎉`
    );
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
      <title>Toy Details Page</title>
      <div className="card p-2 bg-base-100 shadow-xl ">
        <Link
          to="/"
          className=" underline mb-4 flex items-center gap-2 border-primary text-primary hover:text-accent "
        >
          <FaArrowLeft /> Back to Toys
        </Link>
        <figure className="">
          <img
            src={pictureURL}
            alt={toyName}
            className="h-full w-full object-cover rounded-xl"
          />
        </figure>

        <div className="card-body ">
          <h2 className="card-title text-3xl font-bold text-primary">
            {toyName}
            {isPopular && (
              <div className="badge bg-primary text-white border-none ml-2">
                🔥 Popular
              </div>
            )}
          </h2>

          <p className="text-gray-600 leading-relaxed">{description}</p>

          <div className="divider my-2"></div>

          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-semibold text-primary">Seller:</span>{" "}
              {sellerName}
            </p>
            <p>
              <span className="font-semibold text-primary">Email:</span>{" "}
              {sellerEmail}
            </p>
            <p>
              <span className="font-semibold text-primary"> Brand : </span>{" "}
              {brandName}
            </p>
            <p>
              <span className="font-semibold text-primary">Category:</span>{" "}
              {category} / {subCategory}
            </p>
            <p>
              <span className="font-semibold text-primary">
                Available Quantity:
              </span>{" "}
              {availableQuantity}
            </p>
          </div>

          <div className="flex items-center gap-4 mt-3">
            <span className="text-2xl font-bold text-primary">
              Price: ${price}
            </span>

            <div className="flex items-center ">
              Rating: <FaStar className=" text-yellow-500" />{" "}
              <span className="ml-1 text-gray-700">{rating}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-around">
        <div className=" mt-10 lg:max-w-96 bg-white  p-4 rounded-2xl shadow-2xl ">
          <div className="">
            <form onSubmit={handleSubmit}>
              <legend>
                <label className="text-lg font-semibold">Your Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-ghost border w-full border-gray-400"
                  required
                />
              </legend>
              <br />
              <legend>
                <label className="text-lg font-semibold">Your Email:</label>{" "}
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  className="input input-ghost border w-full border-gray-400"
                  required
                />
              </legend>
              <br />
              <button
                type="submit"
                className="btn bg-blue-700 text-white  hover:bg-accent w-full "
              >
                Try now{" "}
              </button>
            </form>
          </div>
        </div>
        <div
          className="flex flex-col justify-center 
        items-center bg-white mt-10 p-4 rounded-2xl shadow-2xl"
        >
          <h1 className=" py-3 text-3xl font-bold text-center text-blue-800">
            leave feedback &#8594;
          </h1>
          <Rating></Rating>
        </div>
      </div>
    </div>
  );
};

export default ToysDetails;
