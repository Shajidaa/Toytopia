import { Link, NavLink } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };
  const links = (
    <>
      <NavLink to={"/"} className={"navLink"}>
        HOME
      </NavLink>
      <NavLink to={"/toys"} className={"navLink"}>
        TOYS
      </NavLink>
      <NavLink to={"/profile"} className={"navLink"}>
        PROFILE
      </NavLink>
    </>
  );
  return (
    <div className={`bg-[#fff8f7]! shadow-sm sticky top-0 z-50`}>
      <MyContainer className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="h-20 ">
            <img
              className="w-full h-full object-contain"
              src={
                "https://i.ibb.co.com/7JphcGsC/download-removebg-preview.png"
              }
              alt=""
            />
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex justify-center items-center gap-2">
              {" "}
              <div
                data-tip={user.displayName}
                className="size-12 tooltip tooltip-error tooltip-bottom border-2 border-[#dc7977] rounded-full "
              >
                <img
                  className="w-full bg-cover h-full rounded-full  "
                  src={user.photoURL}
                  alt="User Profile"
                />
              </div>
              <Link onClick={handleLogOut} to={"login"} className="btn">
                Log Out
              </Link>
            </div>
          ) : (
            <Link to={"login"} className="btn">
              Login
            </Link>
          )}
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
