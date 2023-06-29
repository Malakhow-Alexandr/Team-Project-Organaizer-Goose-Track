import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  createReviewByOwn,
  updateReviewByOwn,
  deleteReviewByOwn,
} from '../../redux/reviews/operations';
import { FaStar } from 'react-icons/fa';
import {
  Form,
  FormField,
  ErrorMessage,
  RatingLabel,
  // RatingInputOverlay,
  // RatingField,
  TextareaField,
  RatingBtnOverlay,
  SaveFeedbackBtn,
  CancelFeedbackBtn,
  EditFeedbackBtn,
  EditButtonContainer,
  ButtonDiv,
  PencilBtn,
  TrashBtn,
  Pencil,
  Trash,
} from './FeedbackForm.styled';

const FeedbackFormSchema = Yup.object().shape({
  rating: Yup.string().required('Required'),
  text: Yup.string()
    .min(5, 'Too short')
    .max(300, 'Your feedback is too long, please shorten it')
    .required('Required'),
});

export const FeedbackForm = ({ userFeedback, userRating, onClose }) => {
  // console.log(userFeedback);
  // console.log(userRating);

  const [feedbackRating, setFeedbackRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState(userFeedback || '');
  const [ratingHover, setRatingHover] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  console.log(feedbackRating);
  console.log(feedbackText);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userFeedback || userRating) {
      setFeedbackRating(userRating);
      setFeedbackText(userFeedback);   
    }
  }, [userRating, userFeedback]);

  const handleFeedbackSubmit = (values, { resetForm }) => {
    console.log(values);
    // console.log(actions);
    if (userFeedback || userRating) {
      dispatch(updateReviewByOwn({ text: values.text, rating: values.rating }));
      return;
    }
    if (!userFeedback || !userRating) {
      dispatch(createReviewByOwn({ text: values.text, rating: values.rating }));
      resetForm();
      // setFeedbackText(values.text);
     
      setIsEdit(!isEdit)
      console.log(isEdit)
      onClose();
    }
  };

  const handleEditBtnClick = () => {
    // setIsEdit(!isEdit);
  };

  const handleFeedbackDelete = () => {
    dispatch(deleteReviewByOwn());
    onClose();
  };
  

const handleReviewChange = event => {
  const inputValue = event.target.value;
    setFeedbackText(inputValue);
  };



  return (
    <Formik
      initialValues={{ rating: feedbackRating, text: feedbackText }}
      validationSchema={FeedbackFormSchema}
      onSubmit={handleFeedbackSubmit}
    >
      <Form>
        <RatingLabel>Rating</RatingLabel>

        <FormField>
          <div>
            {[...Array(5)].map((star, ind) => {
              const ratingValue = ind + 1;

              return (
                <label key={ratingValue}>
                  <Field
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
        </FormField>

       
       
      
        <EditButtonContainer>
          {isEdit ? (
            <RatingLabel>Review</RatingLabel>
          ) : (
            <>
              <RatingLabel>Review</RatingLabel>

              <ButtonDiv>
                <PencilBtn onClick={handleEditBtnClick}>
                  <Pencil />
                </PencilBtn>
                <TrashBtn onClick={handleFeedbackDelete}>
                  <Trash />
                </TrashBtn>
              </ButtonDiv>
            </>
          )}
        </EditButtonContainer>

        <FormField>
          <TextareaField
            component="textarea"
            type="text"
            placeholder="Enter text"
            name="text"
            value={feedbackText}
            onChange={handleReviewChange}
            autoComplete="off"
          />
          <ErrorMessage name="text" component="p" />
        </FormField>

        
        
        <RatingBtnOverlay>
          {userFeedback || userRating ? (
            <EditFeedbackBtn type="submit">Edit</EditFeedbackBtn>
          ) : (
            <SaveFeedbackBtn type="submit">Save</SaveFeedbackBtn>
          )}

          <CancelFeedbackBtn type="submit">Cancel</CancelFeedbackBtn>
        </RatingBtnOverlay>
      </Form>
    </Formik>
  );
};
