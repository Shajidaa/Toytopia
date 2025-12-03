import React from "react";
import { toast } from "react-toastify";
import Input from "../Input";

const TryNow = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    e.target.reset();
    return toast.success(`Thanks ${name}, Received your request! 🎉`);
  };

  return (
    <div>
      <div className="p-6 rounded-2xl shadow-2xl bg-white lg:w-1/2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="text-2xl font-bold text-center text-[#dc7977]">
            Try This Toy
          </h1>

          <Input label="Your Name" name="name" />
          <Input label="Your Email" name="email" />

          <button
            type="submit"
            className="btn bg-linear-to-r from-[#dc7977] to-[#ff6562] text-white w-full"
          >
            Try Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default TryNow;
