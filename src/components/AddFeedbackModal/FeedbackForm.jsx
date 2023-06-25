import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {createReviewByOwn} from '../../redux/reviews/operations'
import { FaStar } from 'react-icons/fa';
import {
  Form,
  FormField,
  ErrorMessage,
  RatingLabel,
  RatingInputOverlay,
  RatingField,
  TextareaField,
  RatingBtnOverlay,
  SaveFeedbackBtn,
} from './FeedbackForm.styled';

const FeedbackFormSchema = Yup.object().shape({
  rating: Yup.string().required('Required'),
  text: Yup.string()
    .min(5, 'Too short')
    .max(300, 'Your feedback is too long, please shorten it')
    .required('Required'),
});

export const FeedbackForm = () => {
  const [feedbackRating, setFeedbackRating] = useState(null);
  const [ratingHover, setRatingHover] = useState(null);

  const dispatch = useDispatch();

  const handleFeedbackSubmit = (values, { resetForm }) => {
    console.log(values);
    // console.log(actions);

    dispatch(createReviewByOwn({text: values.text, rating: values.rating}))
    resetForm();
  };

  return (
    <Formik
      initialValues={{ rating: feedbackRating, text: '' }}
      validationSchema={FeedbackFormSchema}
      onSubmit={handleFeedbackSubmit}
    >
      <Form>
        <RatingLabel>Rating</RatingLabel>
        <FormField>
          <RatingInputOverlay>
          {[...Array(5)].map((item, ind) => {
            const ratingValue = ind + 1;

            return (
              <>
                <RatingField
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setFeedbackRating(ratingValue)}
                  autoComplete="off"
                    // style={{
                    //   display: 'none',
                    // }}
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
            <ErrorMessage name="rating" component="p" />
            </RatingInputOverlay>
        </FormField>

        <RatingLabel>Review</RatingLabel>
        <FormField>
          <TextareaField
            component="textarea"
            type="text"
            placeholder="Enter text"
            name="text"
            autoComplete="off"
          />
          <ErrorMessage name="text" component="p" />
        </FormField>

        <RatingBtnOverlay>
          {/* <button type="submit">Edit</button> */}
          <SaveFeedbackBtn type="submit">Save</SaveFeedbackBtn>
          <SaveFeedbackBtn type="submit">Cancel</SaveFeedbackBtn>
        </RatingBtnOverlay>
      </Form>
    </Formik>
  );
};

// export default FeedbackForm;
