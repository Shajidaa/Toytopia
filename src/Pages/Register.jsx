import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Register = () => {
  const { signInWithGoogle, user, setUser, createUser, updateProfileFunc } =
    useContext(AuthContext);

  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((res) => setUser(res.user))
      .catch((err) => console.log(err.message));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const displayName = from.name.value;
    const photoUrl = from.photo.value;
    const email = from.email.value;
    const password = from.password.value;

    const regExp = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regExp.test(password)) {
      toast.error(
        "Password must include uppercase, lowercase, and be at least 6 characters."
      );
      return;
    }

    try {
      const res = await createUser(email, password);
      const user = res.user;
      await updateProfileFunc({ displayName, photoUrl });

      toast.success("Account create successfully");
      setUser({ ...user, displayName, photoUrl });
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleShowPassword = (e) => {
    e.preventDefault();

    setShow(!show);
  };
  console.log(user);

  return (
    <div className="flex justify-center items-center  py-2  min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              {/* Name  */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />
              {/* Photo  */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo Url"
                required
              />
              {/* Email  */}
              <label className="label">Email</label>{" "}
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* password */}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder=".."
                  required
                />
                <span
                  type="button"
                  onClick={handleShowPassword}
                  className="absolute right-[25px] top-[34px] cursor-pointer z-50"
                >
                  {show ? <FaEye></FaEye> : <IoEyeOff></IoEyeOff>}
                </span>
              </div>
              {/* button  */}
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>
          </form>
          <p>
            Do you have an account?{" "}
            <Link to={"/login"} className="underline ">
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
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
