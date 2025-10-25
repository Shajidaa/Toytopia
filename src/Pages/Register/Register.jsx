import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import MyContainer from "../../MyContainer/MyContainer";

const Register = () => {
  const { signInWithGoogle, setUser, createUser, updateProfileFunc } =
    useContext(AuthContext);
  const [btnLoading, setBtnLoading] = useState(false);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((res) => setUser(res.user))
      .catch((err) => {
        let message = "Oops! Something went wrong. Please try again.";

        if (err.code === "auth/popup-closed-by-user") {
          message = "Login was cancelled. Please try again.";
        } else if (err.code === "auth/network-request-failed") {
          message =
            "Network issue detected. Check your internet connection and retry.";
        } else if (
          err.code === "auth/account-exists-with-different-credential"
        ) {
          message =
            "This email is already linked to another login method. Try signing in differently.";
        }
        toast.error(message);
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const displayName = from.name.value.trim();
    const photoURL = from.photo.value.trim();
    const email = from.email.value.trim().toLowerCase();
    const password = from.password.value;

    const regExp = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regExp.test(password)) {
      toast.error(
        "Password must include uppercase, lowercase, and be at least 6 characters."
      );
      return;
    }
    setBtnLoading(true);
    try {
      const res = await createUser(email, password);
      const user = res.user;
      await updateProfileFunc({ displayName, photoURL });

      toast.success("Account create successfully");
      setUser({ ...user, displayName, photoURL });
      navigate("/");
    } catch (err) {
      let message = "Oops! Something went wrong. Please try again.";

      if (err.code === "auth/popup-closed-by-user") {
        message = "Login was cancelled. Please try again.";
      } else if (err.code === "auth/email-already-in-use") {
        message = "The email is already register.";
      } else if (err.code === "auth/network-request-failed") {
        message =
          "Network issue detected. Check your internet connection and retry.";
      } else if (err.code === "auth/account-exists-with-different-credential") {
        message =
          "This email is already linked to another login method. Try signing in differently.";
      }
      toast.error(message);
    } finally {
      setBtnLoading(false);
    }
  };
  const handleShowPassword = (e) => {
    e.preventDefault();

    setShow(!show);
  };

  return (
    <MyContainer className="flex justify-center px-5  items-center  py-2 min-h-dvh ">
      <title> Register page</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center text-xl font-semibold text-[#333333]">
              Create your account
            </h1>
            <fieldset className="fieldset">
              {/* Name  */}
              <label className="label text-gray-900 text-base">Name</label>
              <input
                type="text"
                name="name"
                className="input placeholder:text-gray-400 "
                placeholder="Name"
                required
              />
              {/* Photo  */}
              <label className="label text-gray-900 text-base">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input placeholder:text-gray-400"
                placeholder="https://exampleimage.com"
                required
              />
              {/* Email  */}
              <label className="label text-gray-900 text-base">
                Email
              </label>{" "}
              <input
                type="email"
                name="email"
                className="input placeholder:text-gray-400"
                placeholder="example@gmail.com"
                required
              />
              {/* password */}
              <div className="relative">
                <label className="label text-gray-900 text-base">
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
                  className="absolute right-[25px] top-[35px] cursor-pointer z-10"
                >
                  {show ? (
                    <FaEye className="text-lg text-gray-500"></FaEye>
                  ) : (
                    <IoEyeOff className="text-lg text-gray-500"></IoEyeOff>
                  )}
                </span>
              </div>
              {/* button  */}
              <button type="submit" className="btn gradient mt-4">
                {btnLoading ? (
                  <>
                    {" "}
                    <span className="loading loading-spinner"></span>
                    Register{" "}
                  </>
                ) : (
                  <> Register </>
                )}
              </button>
            </fieldset>
          </form>
          <p>
            Do you have an account?{" "}
            <Link
              to={"/login"}
              className="text-pink-500 ml-2 hover:text-blue-800 hover:underline cursor-pointer"
            >
              Login
            </Link>
          </p>
          <div className="divider divider-secondary">or</div>
          <button
            type="submit"
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
            Register with Google
          </button>
        </div>
      </div>
    </MyContainer>
  );
};

export default Register;
