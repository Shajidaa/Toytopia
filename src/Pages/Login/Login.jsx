import { useContext, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import MyContainer from "../../MyContainer/MyContainer";

const Login = () => {
  const [show, setShow] = useState(null);

  const { signInWithGoogle, setUser, logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();
  const handleSignInWithGoogle = async () => {
    try {
      const res = await signInWithGoogle();
      await setUser(res.user);
      toast.success("Google login successful!");
      navigate(location.state ? location.state : "/");
    } catch (err) {
      let message = "Oops! Something went wrong. Please try again.";

      if (err.code === "auth/popup-closed-by-user") {
        message = "Login was cancelled. Please try again.";
      } else if (err.code === "auth/network-request-failed") {
        message =
          "Network issue detected. Check your internet connection and retry.";
      } else if (err.code === "auth/account-exists-with-different-credential") {
        message =
          "This email is already linked to another login method. Try signing in differently.";
      }
      toast.error(message);
    }
  };

  const handleShowPassword = (e) => {
    e.preventDefault();

    setShow(!show);
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    const from = e.target;

    const email = from.email.value.trim();
    const password = from.password.value;
    try {
      const res = await logIn(email, password);
      await setUser(res.user);
      toast.success("Your login successfully!");
      navigate(location.state ? location.state : "/");
    } catch (err) {
      let message =
        "Unable to log in. Please check your credentials and try again.";

      if (err.code === "auth/user-not-found") {
        message = "No account found with this email.";
      } else if (err.code === "auth/wrong-password") {
        message = "Incorrect password. Please try again.";
      } else if (err.code === "auth/too-many-requests") {
        message = "Too many failed attempts. Please try again later.";
      }

      toast.error(message);
    }
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;

    navigate("/forget", { state: { email } });
  };

  return (
    <MyContainer className="flex px-5  justify-center items-center  py-3 min-h-dvh ">
      <title> Login page</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset">
              <h1 className="text-center text-xl font-semibold text-[#333333]">
                Login your account
              </h1>
              <label className="label text-gray-900 text-base">Email</label>
              <input
                type="email"
                name="email"
                className="input placeholder:text-gray-400"
                placeholder="example@gmail.com"
                ref={emailRef}
                required
              />
              {/* password */}
              <div className="relative">
                <label className="label  text-gray-900 text-base">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input placeholder:text-gray-400"
                  placeholder="••••••••"
                  required
                />
                <span
                  type="button"
                  onClick={handleShowPassword}
                  className="absolute right-[25px] top-[35px] z-10 cursor-pointer "
                >
                  {show ? (
                    <FaEye className="text-lg text-gray-500"></FaEye>
                  ) : (
                    <IoEyeOff className="text-lg text-gray-500"></IoEyeOff>
                  )}
                </span>
              </div>
              <div>
                <p
                  onClick={handleForgetPassword}
                  className="text-right text-blue-500 hover:text-blue-800 hover:underline cursor-pointer"
                >
                  Forgot password?
                </p>
              </div>
              <button className="btn gradient  mt-4">Login</button>
            </fieldset>
          </form>
          <p>
            Are you new to here?
            <Link
              to={"/register"}
              className="text-pink-500 ml-2 hover:text-blue-800 hover:underline cursor-pointer"
            >
              Register
            </Link>
          </p>
          <div className="divider divider-secondary">or</div>
          <button
            onClick={handleSignInWithGoogle}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </MyContainer>
  );
};

export default Login;
