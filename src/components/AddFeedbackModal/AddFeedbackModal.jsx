import { Modal } from 'components/Modal/Modal';
import { FeedbackForm } from './FeedbackForm';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getReviewByOwn } from '../../redux/reviews/operations';
import { selectReviewByOwn } from '../../redux/reviews/selectors';

export const AddFeedbackModal = ({ onClose }) => {
  const [userFeedback, setUserFeedback] = useState('');
  const [userRating, setUserRating] = useState(null);

  const dispatch = useDispatch();

  const userReview = useSelector(selectReviewByOwn);

  useEffect(() => {
    dispatch(getReviewByOwn());
    setUserFeedback(userReview.text);
    setUserRating(userReview.rating);
  }, [dispatch, userReview.rating, userReview.text]);

  return (
    <Modal onClose={onClose}>
      <div>
        <FeedbackForm
          userFeedback={userFeedback}
          userRating={userRating}
          onClose={onClose}
        />
      </div>
    </Modal>
  );
};
