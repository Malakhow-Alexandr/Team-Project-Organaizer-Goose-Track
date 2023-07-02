import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Slider from 'react-slick';

import { getAllReviews } from 'redux/reviews/operations';
import { selectAllReviews } from 'redux/reviews/selectors';
import { ReviewCard } from './ReviewCard';

import {
  ReviewsContainer,
  Wrapper,
  ArrowContainer,
} from './ReviewsSlider.styled';

import sprite from 'icons/sprite.svg';
import { useTranslation } from 'react-i18next';

const SlickRight = ({ currentSlide, slideCount, ...props }) => (
  <div
    {...props}
    className={'slick-prev slick-arrow'}
    aria-hidden="true"
    aria-disabled={false}
    type="button"
  >
    <svg height="6" width="39" className="svg-arrow">
      <use href={sprite + '#arrow-right-slider'}></use>
    </svg>
  </div>
);

const SlickLeft = ({ currentSlide, slideCount, ...props }) => (
  <div
    {...props}
    className={'slick-next slick-arrow'}
    aria-hidden="true"
    aria-disabled={false}
    type="button"
  >
    <svg height="6" width="39" className="svg-arrow">
      <use href={sprite + '#arrow-left-slider'}></use>
    </svg>
  </div>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  nextArrow: <SlickRight />,
  prevArrow: <SlickLeft />,
};

export const ReviewsSlider = () => {
  const reviews = useSelector(selectAllReviews);
  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReviews());
  }, [dispatch]);

  return (
    <Wrapper>
      <ReviewsContainer>
        <h2>{t('REVIEWS')}</h2>
        <Slider className="slider" {...settings}>
          {reviews?.map(review => (
            <ReviewCard
              key={review._id}
              src={review.owner?.avatarURL || null}
              num={review.rating}
              name={review.owner?.name || 'John Doe'}
            >
              {review.text}
            </ReviewCard>
          ))}
        </Slider>
        <ArrowContainer />
      </ReviewsContainer>
    </Wrapper>
  );
};
