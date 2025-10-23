import { Rating } from "@smastrom/react-rating";
import { useState } from "react";

function getRating(rating) {
  switch (rating) {
    case 1:
      return "Poor";
    case 2:
      return "Nothing special";
    case 3:
      return "Average";
    case 4:
      return "Very good";
    case 5:
      return "Excellent";
    default:
      return "None";
  }
}

function App() {
  const [rating, setRating] = useState(3);

  return (
    <div
      className=" bg-white mt-2 p-4 rounded-2xl shadow-2xl"
      style={{ maxWidth: 280, width: "100%" }}
    >
      <Rating value={rating} onChange={setRating} />
      <div>
        <div>{`Selected: ${getRating(rating)}`}</div>
      </div>
    </div>
  );
}
export default App;
