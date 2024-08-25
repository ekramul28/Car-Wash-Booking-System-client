import React from "react";

type ReadOnlyRatingProps = {
  count: number;
  value: number;

  color?: string;
};

const Rating: React.FC<ReadOnlyRatingProps> = ({
  count,
  value,

  color = "#ffd700",
}) => {
  return (
    <div className="flex">
      {[...Array(count)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill={currentRating <= value ? color : "none"}
            stroke={color}
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="mr-1"
          >
            <path d="M12 17.27l5.18 3.73-1.64-5.81L20 9.24l-5.82-.01L12 3.5 9.82 9.23 4 9.24l4.46 3.95L6.82 21z" />
          </svg>
        );
      })}
    </div>
  );
};

export default Rating;
