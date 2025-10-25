import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import useToys from "../Hooks/Hook";
import Spinner from "../Components/Spinner/Spinner";
import { Link, useLocation, useNavigate } from "react-router";
import { TbLogout2 } from "react-icons/tb";

const Forget = () => {
  const { loading } = useToys();
  const { forgetPassword } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";
  if (loading) {
    return <Spinner></Spinner>;
  }

  const handleReset = async (e) => {
    e.preventDefault();
    const emailValue = e.target.email.value.trim().toLowerCase();
    try {
      toast.success("Password reset email sent");
      await forgetPassword(emailValue);

      window.open("https://mail.google.com", "_blank");

      navigate("/login");
    } catch (error) {
      let message = "Unable to send reset email. Please try again later.";

      if (error.code === "auth/user-not-found") {
        message = "No account found with this email address.";
      } else if (error.code === "auth/invalid-email") {
        message = "The email address is invalid. Please check and try again.";
      } else if (error.code === "auth/too-many-requests") {
        message = "Too many requests. Please wait and try again later.";
      }

      toast.error(message);
    }
  };

  return (
    <div className="flex justify-center items-center px-5   py-2  min-h-screen">
      <title> Forget Password Page </title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleReset}>
            <fieldset className="fieldset">
              <h1 className="text-center text-xl font-semibold text-[#333333]">
                Reset Password
              </h1>
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                defaultValue={email}
              />

              <button className="btn bg-linear-to-r from-[#e69d95] to-blue-500  hover:from-[#ec958b] hover:to-blue-800  text-white   mt-4">
                Reset
              </button>
            </fieldset>
            <br />

            <Link
              to={"/login"}
              className="hover:underline text-blue-500 hover:text-blue-800 text-md"
            >
              <TbLogout2 className="inline" /> Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forget;
