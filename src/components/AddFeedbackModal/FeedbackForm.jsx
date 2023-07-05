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
  FeedbackFormContainer,
  Form,
  FormField,
  StarsField,
  ErrorMessage,
  Title,
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
import { useTranslation } from 'react-i18next';

const FeedbackFormSchema = Yup.object().shape({
  rating: Yup.string().required('Required'),
  text: Yup.string()
    .min(2, 'Your feedback is too short')
    .max(300, 'Your feedback is too long, please shorten it')
    .required('Required'),
});

export const FeedbackForm = ({ userFeedback, userRating, onClose }) => {
  const { t } = useTranslation();

  const [feedbackRating, setFeedbackRating] = useState(4);
  const [feedbackText, setFeedbackText] = useState(userFeedback || '');
  const [ratingHover, setRatingHover] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userFeedback || userRating) {
      setFeedbackRating(userRating);
      setFeedbackText(userFeedback);
    }
  }, [userRating, userFeedback]);

  const handleFeedbackSubmit = (values, { resetForm }) => {
    if (userFeedback || userRating) {
      dispatch(updateReviewByOwn({ text: values.text, rating: values.rating }));
      setIsEditOpen(false);
      onClose();
      return;
    }
    if (!userFeedback || !userRating) {
      dispatch(createReviewByOwn({ text: values.text, rating: values.rating }));
      resetForm();
      onClose();
    }
  };

  const handleEditBtnClick = () => {
    setIsEditOpen(!isEditOpen);
  };

  const handleCancelBtnClick = () => {
    setFeedbackRating(userRating);
    setFeedbackText(userFeedback);
    setIsEditOpen(false);
    onClose();
  };

  const handleFeedbackDelete = () => {
    dispatch(deleteReviewByOwn());
    setIsEditOpen(false);
    onClose();
  };

  return (
    <Formik
      initialValues={{ rating: '', text: '' }}
      validationSchema={FeedbackFormSchema}
      onSubmit={handleFeedbackSubmit}
    >
      {props => (
        <FeedbackFormContainer>
          <Form>
            <Title>{t('Rating')}</Title>

            <FormField>
              <StarsField>
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
                <ErrorMessage name="rating" component="p" />
              </StarsField>
            </FormField>

            <EditButtonContainer>
              {!userFeedback || !userRating ? (
                <Title>{t('Review')}</Title>
              ) : (
                <>
                  <Title>{t('Review')}</Title>

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
                placeholder={t('Enter text')}
                name="text"
                value={props.values.text || feedbackText}
                onChange={props.handleChange}
                autoComplete="off"
              />
              <ErrorMessage name="text" component="p" />
            </FormField>

            <RatingBtnOverlay>
              {(!userFeedback || !userRating) && (
                <>
                  <SaveFeedbackBtn type="submit">{t('Save')}</SaveFeedbackBtn>
                  <CancelFeedbackBtn
                    type="button"
                    onClick={handleCancelBtnClick}
                  >
                    {t('Cancel')}
                  </CancelFeedbackBtn>
                </>
              )}

              {isEditOpen === true && (
                <>
                  <EditFeedbackBtn type="submit">{t('Edit')} </EditFeedbackBtn>
                  <CancelFeedbackBtn
                    type="button"
                    onClick={handleCancelBtnClick}
                  >
                    {t('Cancel')}
                  </CancelFeedbackBtn>
                </>
              )}
            </RatingBtnOverlay>
          </Form>
        </FeedbackFormContainer>
      )}
    </Formik>
  );
};
