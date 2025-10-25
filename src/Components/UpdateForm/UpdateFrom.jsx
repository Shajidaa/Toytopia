import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";

const UpdateFrom = () => {
  const { user, setUser, updateProfileFunc, loading, setLoading } =
    useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const from = e.target;
    const displayName = from.name.value;
    const photoURL = from.photo.value;
    setLoading(false);
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
      // console.log(err.message);
      toast.error("Failed to update Profile .Please Try again");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            onClick={handleToggle}
            className="flex justify-between w-full p-5 font-medium 
            rtl:text-right text-blue-500 
               gap-3"
            aria-expanded={open}
            aria-controls="accordion-collapse-body-1"
          >
            <span>Update your Profile?</span>
            <svg
              className={`w-3 h-3 rotate-180 shrink-0 ${
                open ? "rotate-180" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
                  Don't want to leave blank.
                </p>
                <button
                  type="submit"
                  className="btn bg-linear-to-r from-[#e69d95] to-blue-500  hover:from-[#ec958b] hover:to-blue-800  text-white  "
                  disabled={loading}
                >
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
        )}
      </div>{" "}
    </div>
  );
};

export default UpdateFrom;
