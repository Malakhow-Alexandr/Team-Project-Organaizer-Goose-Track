import React from 'react';
import Slider from 'react-slick';

import {
  ReviewsContainer,
  Wrapper,
  ArrowContainer,
} from './DevelopersSlider.styled';

import sprite from 'icons/sprite.svg';
import { developers } from '../db/developersDB';
import { DeveloperCard } from '../DevelopersCard/DeveloperCard';

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
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  // autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  nextArrow: <SlickRight />,
  prevArrow: <SlickLeft />,
  edgeFriction: 0,
};

export const DevelopersSlider = () => {
  return (
    <Wrapper>
      <ReviewsContainer>
        <h2>Developers</h2>
        <Slider className="slider" {...settings}>
          {developers.map(developer => (
            <DeveloperCard key={developer.surName} developer={developer} />
          ))}
        </Slider>
        <ArrowContainer />
      </ReviewsContainer>
    </Wrapper>
  );
};
