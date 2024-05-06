import { useState } from "react";

function StarRating({ rating = 3 }) {
  const [tempRating, setTempRating] = useState(null);

  return (
    <ul className=" my-2  flex">
      {Array.from({ length: 5 }, (_, index) => (
        <StarList
          index={index}
          rating={rating}
          tempRating={tempRating}
          setTempRating={setTempRating}
          key={index}
        />
      ))}
    </ul>
  );
}

function StarList({ index, tempRating, rating, setTempRating }) {
  return (
    <li
      onMouseOver={() => setTempRating(index + 1)}
      onMouseLeave={() => setTempRating(null)}
    >
      {index + 1 <= (tempRating || rating) ? (
        <img src="/rated.png" alt="image-2" className="cursor-pointer" />
      ) : (
        <img src="/unrated.png" alt="image-2" className="cursor-pointer" />
      )}
    </li>
  );
}

export default StarRating;
