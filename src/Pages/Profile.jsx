import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, setUser, updateProfileFunc } = useContext(AuthContext);
  const handleUpdate = async (e) => {
    e.preventDefault();
    const from = e.target;
    const displayName = from.name.value;
    const photoUrl = from.photo.value;
    try {
      await updateProfileFunc({ displayName, photoUrl });

      toast.success("Update successfully");
      setUser({ ...user, displayName, photoUrl });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-dvh">
      <title>Toy Topia | Profile </title>
      <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
        <img
          src={user.photoURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div>
          <h2>Name:{user.displayName}</h2>
          <h2>Email:{user.email}</h2>
        </div>
      </div>
      <form onSubmit={handleUpdate}>
        <fieldset className="fieldset">
          {/* Name  */}
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          {/* Photo  */}
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo Url"
          />
          {/* Email  */}

          {/* button  */}
          <button type="submit" className="btn btn-neutral mt-4">
            Update
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Profile;
