import { Formik, Form } from 'formik';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const FeedbackForm = () => {
  const [feedbackRating, setFeedbackRating] = useState(0);
    const [ratingHover, setRatingHover] = useState(null);
    

    

  return (
    <Formik>
      <Form>
        <label>
          Rating
          {/* <FeedbackRating /> */}
          <>
            {[...Array(5)].map((star, ind) => {
              const ratingValue = ind + 1;

              return (
                <>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setFeedbackRating(ratingValue)}
                    //   style={{
                    //     display: 'none',
                    //   }}
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
                    style={{
                      marginRight: 0,
                      cursor: 'pointer',
                    }}
                  />
                </>
              );
            })}
          </>
        </label>

        <label>
          Review
          <textarea placeholder="Enter text" />
        </label>

        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
