import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";

const UpdateFrom = () => {
  const { user, setUser, updateProfileFunc, setLoading } =
    useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const from = e.target;
    const displayName = from.name.value.trim();
    const photoURL = from.photo.value.trim();
    setLoading(false);
    setBtnLoading(true);
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
      let message = "Failed to update Profile .Please Try again";
      if (err) {
        toast.error(message);
      }
    } finally {
      setLoading(false);
      setBtnLoading(false);
    }
  };
  console.log(btnLoading);

  return (
    <div>
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            onClick={handleToggle}
            className="flex justify-between w-full  font-medium text-blue-500  relative gap-3"
          >
            <span className="text-lg text-start">Update your Profile?</span>
            <svg
              className={`w-4 h-4 transition-transform absolute top-2 right-0 duration-300 ${
                open ? "rotate-0" : "rotate-180"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        {open && (
          <div
            id="accordion-collapse-body-1"
            aria-labelledby="accordion-collapse-heading-1"
          >
            <form onSubmit={handleUpdate}>
              <fieldset className="fieldset">
                {/* Name  */}
                <label className="label text-gray-900 text-lg">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input placeholder:text-gray-500"
                  placeholder="Name"
                />
                <br />
                {/* Photo  */}
                <label className="label text-gray-900  text-lg">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  className="input placeholder:text-gray-500"
                  placeholder="https://exampleimage.com"
                />
                <br />
                <p className="font-medium text-red-500">
                  Leave blank if you don't want to update.
                </p>
                <button
                  type="submit"
                  className="btn gradient "
                  disabled={btnLoading}
                >
                  {btnLoading ? (
                    <>
                      {" "}
                      <span className="loading loading-spinner"></span>
                      Updating{" "}
                    </>
                  ) : (
                    <>Update</>
                  )}
                </button>
              </fieldset>
            </form>
          </div>
        )}
      </div>{" "}
    </div>
  );
};

export default UpdateFrom;
