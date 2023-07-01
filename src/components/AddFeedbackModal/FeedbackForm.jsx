


















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
  Title,
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
import { useTranslation } from 'react-i18next';

const FeedbackFormSchema = Yup.object().shape({
  rating: Yup.string().required('Required'),
  text: Yup.string()
    .min(5, 'Too short')
    .max(300, 'Your feedback is too long, please shorten it')
    .required('Required'),
});

export const FeedbackForm = ({ userFeedback, userRating, onClose }) => {
  const { t } = useTranslation();
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
  

// const handleReviewChange = event => {
//   const inputValue = event.target.value;
//     setFeedbackText(inputValue);
//   };



  return (
    <Formik
      initialValues={{ rating: '', text: ''}}
      validationSchema={FeedbackFormSchema}
      onSubmit={handleFeedbackSubmit}
    >
      {props => (
          <Form>
        <Title>Rating</Title>

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
            placeholder="Enter text"
            name="text"
            value={props.values.text || feedbackText}
              // onChange={props.handleChange}
              autoComplete="off"
             setFieldValue
          />
          <ErrorMessage name="text" component="p" />
        </FormField>

        
        
        <RatingBtnOverlay>
          {userFeedback || userRating ? (
            <EditFeedbackBtn type="submit">{t('Edit')}</EditFeedbackBtn>
          ) : (
            <SaveFeedbackBtn type="submit">{t('Save')}</SaveFeedbackBtn>
          )}

          <CancelFeedbackBtn type="submit">{t('Cancel')}</CancelFeedbackBtn>
        </RatingBtnOverlay>
      </Form>
      )}
    
    </Formik>
  );
};

























// // import { Formik, Field } from 'formik';
// // import * as Yup from 'yup';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

// // import { useEffect } from 'react';
// import {
//   createReviewByOwn,
//   updateReviewByOwn,
//   deleteReviewByOwn,
// } from '../../redux/reviews/operations';
// import { ReviewFeedbackComponent } from '../AddFeedbackModal/ReviewFeedbackComponent';
// import { RatingFeedbackComponent } from '../AddFeedbackModal/RatingFeedbackComponent';
// // import { FaStar } from 'react-icons/fa';
// import {
//   // Form,
//   // FormField,
//   // ErrorMessage,
//   Title,
//   // RatingInputOverlay,
//   // RatingField,
//   // TextareaField,
//   RatingBtnOverlay,
//   SaveFeedbackBtn,
//   CancelFeedbackBtn,
//   EditFeedbackBtn,
//   EditButtonContainer,
//   ButtonDiv,
//   PencilBtn,
//   TrashBtn,
//   Pencil,
//   Trash,
// } from './FeedbackForm.styled';
// import { useTranslation } from 'react-i18next';

// export const FeedbackForm = ({ onClose, userFeedback, userRating }) => {
//   const { t } = useTranslation();

//   const [feedbackRating, setFeedbackRating] = useState(0);
//   const [feedbackMessage, setFeedbackMessage] = useState('');
//   const [isEdit, setIsEdit] = useState(false);

//   const dispatch = useDispatch();

//   const handleFeedbackSubmit = e => {
//     e.preventDefault();
//     dispatch(
//       createReviewByOwn({ text: feedbackMessage, rating: feedbackRating })
//     );
//   };

//   const handleFeedbackDelete = () => {
//     dispatch(deleteReviewByOwn());
//     onClose();
//   };

//   const handleTextareaChange = e => {
//     const inputValue = e.target.value;
//     setFeedbackMessage(inputValue);
//   };

//   return (
//     <>
//       <form onSubmit={handleFeedbackSubmit}>
//         <Title>Rating</Title>
//         <RatingFeedbackComponent
//           feedbackRating={feedbackRating}
//           setFeedbackRating={setFeedbackRating}
//         />

//         <EditButtonContainer>
//           {isEdit ? (
//             <Title>{t('Review')}</Title>
//           ) : (
//             <>
//               <Title>{t('Review')}</Title>

//               <ButtonDiv>
//                 <PencilBtn>
//                   <Pencil />
//                 </PencilBtn>
//                 <TrashBtn onClick={handleFeedbackDelete}>
//                   <Trash />
//                 </TrashBtn>
//               </ButtonDiv>
//             </>
//           )}
//         </EditButtonContainer>

//         <ReviewFeedbackComponent
//           feedbackMessage={feedbackMessage}
//           handleTextareaChange={handleTextareaChange}
//         />

//         <RatingBtnOverlay>
//           {userFeedback || userRating ? (
//             <EditFeedbackBtn type="submit">{t('Edit')}</EditFeedbackBtn>
//           ) : (
//             <SaveFeedbackBtn type="submit">{t('Save')}</SaveFeedbackBtn>
//           )}

//           <CancelFeedbackBtn type="submit">{t('Cancel')}</CancelFeedbackBtn>
//         </RatingBtnOverlay>
//       </form>
//     </>
//   );
// };










// const FeedbackFormSchema = Yup.object().shape({
//   rating: Yup.string().required('Required'),
//   text: Yup.string()
//     .min(5, 'Too short')
//     .max(300, 'Your feedback is too long, please shorten it')
//     .required('Required'),
// });

// export const FeedbackForm = ({ userFeedback, userRating, onClose }) => {
//   const { t } = useTranslation();
//   // console.log(userFeedback);
//   // console.log(userRating);

//   const [feedbackRating, setFeedbackRating] = useState(0);
//   const [feedbackText, setFeedbackText] = useState(userFeedback || '');
//   const [ratingHover, setRatingHover] = useState(null);
//   const [isEdit, setIsEdit] = useState(false);

//   console.log(feedbackRating);
//   console.log(feedbackText);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (userFeedback || userRating) {
//       setFeedbackRating(userRating);
//       setFeedbackText(userFeedback);
//     }
//   }, [userRating, userFeedback]);

//   const handleFeedbackSubmit = (values, { resetForm }) => {
//     console.log(values);
//     // console.log(actions);
//     if (userFeedback || userRating) {
//       dispatch(updateReviewByOwn({ text: values.text, rating: values.rating }));
//       return;
//     }
//     if (!userFeedback || !userRating) {
//       dispatch(createReviewByOwn({ text: values.text, rating: values.rating }));
//       resetForm();
//       // setFeedbackText(values.text);

//       setIsEdit(!isEdit)
//       console.log(isEdit)
//       onClose();
//     }
//   };

//   const handleEditBtnClick = () => {
//     // setIsEdit(!isEdit);
//   };

//   const handleFeedbackDelete = () => {
//     dispatch(deleteReviewByOwn());
//     onClose();
//   };

// const handleReviewChange = event => {
//   const inputValue = event.target.value;
//     setFeedbackText(inputValue);
//   };

//   return (
//     <Formik
//       initialValues={{ rating: feedbackRating, text: feedbackText }}
//       validationSchema={FeedbackFormSchema}
//       onSubmit={handleFeedbackSubmit}
//     >
//       <Form>
//         <RatingLabel>Rating</RatingLabel>

//         <FormField>
//           <div>
//             {[...Array(5)].map((star, ind) => {
//               const ratingValue = ind + 1;

//               return (
//                 <label key={ratingValue}>
//                   <Field
//                     type="radio"
//                     name="rating"
//                     value={ratingValue}
//                     onClick={() => {
//                       setFeedbackRating(ratingValue);
//                     }}
//                     style={{
//                       display: 'none',
//                     }}
//                   />
//                   <FaStar
//                     size={24}
//                     color={
//                       ratingValue <= (ratingHover || feedbackRating)
//                         ? '#FFAC33'
//                         : '#CEC9C1'
//                     }
//                     onMouseEnter={() => setRatingHover(ratingValue)}
//                     onMouseLeave={() => setRatingHover(null)}
//                   />
//                 </label>
//               );
//             })}
//           </div>
//         </FormField>

//         <EditButtonContainer>
//           {isEdit ? (
//             <RatingLabel>{t('Review')}</RatingLabel>
//           ) : (
//             <>
//               <RatingLabel>{t('Review')}</RatingLabel>

//               <ButtonDiv>
//                 <PencilBtn onClick={handleEditBtnClick}>
//                   <Pencil />
//                 </PencilBtn>
//                 <TrashBtn onClick={handleFeedbackDelete}>
//                   <Trash />
//                 </TrashBtn>
//               </ButtonDiv>
//             </>
//           )}
//         </EditButtonContainer>

//         <FormField>
//           <TextareaField
//             component="textarea"
//             type="text"
//             placeholder="Enter text"
//             name="text"
//             value={feedbackText}
//             onChange={handleReviewChange}
//             autoComplete="off"
//           />
//           <ErrorMessage name="text" component="p" />
//         </FormField>

//         <RatingBtnOverlay>
//           {userFeedback || userRating ? (
//             <EditFeedbackBtn type="submit">{t('Edit')}</EditFeedbackBtn>
//           ) : (
//             <SaveFeedbackBtn type="submit">{t('Save')}</SaveFeedbackBtn>
//           )}

//           <CancelFeedbackBtn type="submit">{t('Cancel')}</CancelFeedbackBtn>
//         </RatingBtnOverlay>
//       </Form>
//     </Formik>
//   );
// };
