import { Link, NavLink, useNavigate } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { TbUser } from "react-icons/tb";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate("/");
    toast.success("Logout successfully!");
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
      <NavLink to={"/offers"} className={"navLink"}>
        OFFERS
      </NavLink>
    </>
  );
  return (
    <>
      <div className={`bg-[#f3efef] shadow-sm sticky top-0 z-50`}>
        <MyContainer className="navbar">
          <div className="navbar-start">
            <div className="lg:h-22 md:h-15 h-10">
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
                  className="btn  btn-sm md:btn-md gradient"
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
          </div>
        </MyContainer>
      </div>

      <div className="shadow-sm bg-base-100/30 backdrop-blur-md md:hidden fixed bottom-0 left-0 w-full z-50">
        <div className=" flex justify-center items-center">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
