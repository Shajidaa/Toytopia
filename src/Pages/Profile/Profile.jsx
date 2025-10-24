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
    <MyContainer className="flex justify-center px-5 items-center min-h-dvh">
      <title> Profile </title>
      <div className=" p-6 shadow-md rounded-xl border border-[#e57368] sm:px-12">
        <div className="flex md:flex-row flex-col justify-between gap-3.5  items-center ">
          <img
            src={user.photoURL}
            alt=""
            className="w-32 h-32  mx-auto rounded-full aspect-square"
          />
          <div className="divider divider-horizontal "></div>
          <div className="relative">
            <h2>
              {" "}
              <span className="text-xl font-semibold text-blue-500">
                Name:{" "}
              </span>
              <span className="text-lg font-medium text-[#333333]">
                {user.displayName}{" "}
              </span>
            </h2>
            <br />
            <h2 className="text-lg font-medium text-[#333333]">
              <span className="text-xl font-semibold text-blue-500">
                Email:
              </span>
              {user.email}
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
