import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";

import UpdateFrom from "../../Components/UpdateForm/UpdateFrom";
import Spinner from "../../Components/Spinner/Spinner";
import MyContainer from "../../MyContainer/MyContainer";
const Profile = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <MyContainer className="flex py-5 justify-center px-5 items-center min-h-dvh">
      <title> Profile </title>
      <div className="md:p-6 bg-base-100 shadow-md rounded-xl ">
        <div className="flex p-4 md:flex-row flex-col justify-between gap-3.5  items-center ">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="max-w-32 max-h-32  border-rose-400 border-2 mx-auto rounded-full aspect-square"
          />
          <div className="divider divider-horizontal "></div>
          <div className="relative">
            <h2 className="flex md:flex-row md:justify-start flex-col justify-center items-center">
              {" "}
              <span className="text-xl  font-semibold text-[#444444]">
                Name:{" "}
              </span>
              <span className="md:text-lg  text-base font-medium  text-[#444444]">
                {user.displayName}{" "}
              </span>
            </h2>
            <br />
            <h2 className="flex md:flex-row flex-col md:justify-start justify-center items-center">
              <span className="text-xl  font-medium text-[#333333] ">
                Email:
              </span>
              <span className="md:text-lg text-base font-semibold text-[#444444]">
                {user.email}
              </span>
            </h2>
            <br />
            <div>
              <UpdateFrom></UpdateFrom>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Profile;
