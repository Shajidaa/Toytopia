import React from "react";

const Detail = ({ label, value, className }) => {
  return (
    <p>
      <span className={`font-semibold text-[#dc7977] ${className}`}>
        {label}:
      </span>{" "}
      {value}
    </p>
  );
};

export default Detail;
