import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

export const RatingFeedbackComponent = ({ setFeedbackRating, feedbackRating }) => {
 const [ratingHover, setRatingHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, ind) => {
        const ratingValue = ind + 1;

        return (
          <label key={ratingValue}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setFeedbackRating(ratingValue);
              }}
              style={{
                display: 'none',
              }}
            />
            <FaStar
              size={24}
              color={
                ratingValue <= (ratingHover || feedbackRating)
                  ? '#FFAC33'
                  : '#CEC9C1'
              }
              onMouseEnter={() => setRatingHover(ratingValue)}
              onMouseLeave={() => setRatingHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};
