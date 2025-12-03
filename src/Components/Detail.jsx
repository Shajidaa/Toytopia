const Detail = ({ label, value }) => (
  <p>
    <span className="font-semibold text-[#dc7977]">{label}:</span> {value}
  </p>
);

const Input = ({ label, name }) => (
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

export { Detail, Input };
