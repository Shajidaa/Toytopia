import React from "react";

const Input = ({ label, name }) => {
  return (
    <div>
      <label className="font-semibold">{label}:</label>
      <input
        type="text"
        name={name}
        required
        className="input input-bordered w-full mt-1 border-gray-400"
      />
    </div>
  );
};

export default Input;
