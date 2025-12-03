import { Link, NavLink, useNavigate } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { TbUser } from "react-icons/tb";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [openSidebar, setOpenSidebar] = useState(false);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate("/");
    toast.success("Logout successfully!");
  };

  const toggleSidebar = (e) => {
    e.stopPropagation();
    setOpenSidebar(!openSidebar);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest("#mobile-sidebar") &&
        !e.target.closest("#hamburger-btn")
      ) {
        setOpenSidebar(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const links = (
    <>
      <NavLink to={"/"} className={"navLink"}>
        HOME
      </NavLink>
      <NavLink to={"/toys"} className={"navLink"}>
        TOYS
      </NavLink>
      <NavLink to={"/about"} className="navLink">
        ABOUT
      </NavLink>
      <NavLink to={"/support"} className="navLink">
        SUPPORT
      </NavLink>
      {user && (
        <>
          <NavLink to={"/profile"} className={"navLink"}>
            PROFILE
          </NavLink>
          <NavLink to={"/offers"} className={"navLink"}>
            OFFERS
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <>
      <div className={`bg-[#fadbd7] shadow-sm sticky top-0 z-50`}>
        <MyContainer className="navbar">
          <div className="navbar-start">
            <div className="lg:h-18 md:h-14 h-10">
              <Link to={"/"}>
                <img
                  className="w-full h-full object-contain"
                  src={
                    "https://i.ibb.co.com/mgLPLgj/7b902309-4336-4cf9-8ec6-c3bc50c557a2-removebg-preview.png"
                  }
                  alt=""
                />
              </Link>
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
                  className="md:size-12 size-8 tooltip tooltip-error tooltip-bottom border-2 border-[#dc7977] rounded-full "
                >
                  <img
                    className="w-full bg-cover h-full rounded-full  "
                    src={user.photoURL}
                    alt="User Profile"
                  />
                </div>
                <Link
                  onClick={handleLogOut}
                  to={"login"}
                  className="btn  hidden md:inline btn-sm md:btn-md gradient"
                >
                  Log Out
                </Link>
              </div>
            ) : (
              <div className="flex justify-center items-center gap-2">
                <TbUser className="md:size-8 size-5" />
                <Link to={"login"} className="btn  btn-sm md:btn-md gradient">
                  Login
                </Link>
              </div>
            )}
            {/* ADD THIS ONLY FOR MOBILE */}
            <button
              id="hamburger-btn"
              onClick={toggleSidebar}
              className="md:hidden  mr-3"
            >
              <svg
                className="w-7 h-7 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </MyContainer>
      </div>

      {/* MOBILE SIDEBAR DRAWER */}
      <div
        id="mobile-sidebar"
        className={`fixed top-0 left-0 w-56 h-full bg-white text-[#dc7977] transform 
  ${openSidebar ? "translate-x-0" : "-translate-x-full"}
  transition-transform duration-300 z-[9999]  md:hidden`}
      >
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-4">Menu</h1>
          <ul className="flex flex-col gap-3">{links}</ul>

          <div className="mt-5">
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn w-full btn-sm gradient"
              >
                Log Out
              </button>
            ) : (
              <Link to="/login" className="btn w-full btn-sm gradient">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
