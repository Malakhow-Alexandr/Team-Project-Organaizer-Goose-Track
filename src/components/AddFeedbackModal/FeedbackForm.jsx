import { Formik} from 'formik';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';



import { Form, FormField, Field } from './FeedbackForm.styled'

const FeedbackForm = () => {
  const [feedbackRating, setFeedbackRating] = useState(1);
  const [ratingHover, setRatingHover] = useState(null);

  const handleSubmit = (values, {resetForm}) => {
    console.log(values);
    // console.log(actions);
    resetForm()
  };

  return (
    <Formik
      initialValues={{ rating: feedbackRating, text: '' }}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormField>
          Rating
        
            {[...Array(5)].map((item, ind) => {
              const ratingValue = ind + 1;

              return (
                <>
                  <Field
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setFeedbackRating(ratingValue)}
                    autoComplete="off"
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
        </FormField>

        <FormField>
          Review
          <Field component="textarea" type="text" placeholder="Enter text" name="text" autoComplete="off" />
        </FormField>

        <div>
          <button type="submit">Save</button>
          <button>Cancel</button>
        </div>
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
