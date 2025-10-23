import { Link, useParams } from "react-router";
import useToys from "../Hooks/Hook";
import { FaArrowLeft, FaCheckCircle, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import Rating from "../Components/Rating";
import Spinner from "../Components/Spinner/Spinner";

const ToysDetails = () => {
  const { id } = useParams();
  const { toys, loading } = useToys();
  const singleToys = toys.find((toy) => toy.toyId == id);

  if (loading) {
    return <Spinner></Spinner>;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    e.target.reset();
    return toast.success(
      `Thanks ${name}! You tried ${toyName} successfully!🎉`
    );
  };
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
  } = singleToys;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <title>Toy Topia | Toy Details Page</title>
      <div className="card lg:card-side bg-base-100 shadow-xl border border-purple-200">
        <figure className="lg:w-1/2">
          <img
            src={pictureURL}
            alt={toyName}
            className="h-full w-full object-cover rounded-l-xl"
          />
        </figure>

        <div className="card-body lg:w-1/2">
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
              ${price.toFixed(2)}
            </span>
            <div className="flex items-center text-yellow-500">
              <FaStar /> <span className="ml-1 text-gray-700">{rating}</span>
            </div>
          </div>

          <div className="card-actions justify-end mt-6">
            <button className="btn bg-primary text-white hover:bg-purple-700 gap-2">
              <FaCheckCircle />
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Link
        to="/"
        className=" underline mb-4 flex items-center gap-2 border-primary text-primary  hover:text-white"
      >
        <FaArrowLeft /> Back to Toys
      </Link>
      <div className="">
        <form onSubmit={handleSubmit}>
          <legend>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-ghost border border-gray-400"
              required
            />
          </legend>
          <br />
          <legend>
            {" "}
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="input input-ghost border border-gray-400"
              required
            />
          </legend>
          <button type="submit" className="btn">
            Try now{" "}
          </button>
        </form>
      </div>
      <div>
        <h1>Ratings &#8594;</h1>
        <Rating></Rating>
      </div>
    </div>
  );
};

export default ToysDetails;
