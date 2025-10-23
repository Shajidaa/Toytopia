import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";
import "./P.css";
const Profile = () => {
  const { user, setUser, updateProfileFunc, loading, setLoading } =
    useContext(AuthContext);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const from = e.target;
    const displayName = from.name.value;
    const photoURL = from.photo.value;
    setLoading(true);
    try {
      if (displayName && !photoURL) {
        await updateProfileFunc({ ...user, displayName });

        toast.success("Update successfully");
        setUser({ ...user, displayName });
      } else if (!displayName && photoURL) {
        await updateProfileFunc({ ...user, photoURL });

        toast.success("Update successfully");
        setUser({ ...user, photoURL });
      } else if (displayName && photoURL) {
        await updateProfileFunc({ ...user, displayName, photoURL });

        toast.success("Update successfully");
        setUser({ ...user, displayName, photoURL });
      }
      from.reset();
    } catch (err) {
      console.log(err.message);
      toast.error("Failed to update Profile .Please Try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center fixedHight">
      <title> Profile </title>
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

          <button type="submit" className="btn" disabled={loading}>
            {loading ? (
              <>
                <span className="loading loading-spinner"></span>
                Updating{" "}
              </>
            ) : (
              <>Update </>
            )}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Profile;
