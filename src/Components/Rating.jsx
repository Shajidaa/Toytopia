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
  const [rating, setRating] = useState(0);

  return (
    <div style={{ maxWidth: 280, width: "100%" }}>
      <Rating value={rating} onChange={setRating} />
      <div>
        <br />
        <div className="text-base text-center font-semibold text-gray-600 ">{` ${getRating(
          rating
        )}`}</div>
      </div>
    </div>
  );
}
export default App;
