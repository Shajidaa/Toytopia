import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import useToys from "../Hooks/Hook";
import Spinner from "../Components/Spinner/Spinner";
import { Link, useLocation, useNavigate } from "react-router";

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
    const emailValue = e.target.email.value;
    try {
      await forgetPassword(emailValue);
      toast.success("Password reset email sent");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center  py-2  min-h-screen">
      <title> Forget Password Page </title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleReset}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                defaultValue={email}
              />

              <button className="btn btn-neutral mt-4">Reset</button>
            </fieldset>
            <br />
            <p className="text-md text-[#333333]">
              Want to go back?{" "}
              <Link
                to={"/login"}
                className="hover:underline text-blue-500 hover:text-blue-800 text-md"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forget;
