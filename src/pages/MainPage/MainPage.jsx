import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import {
  AuthSection,
  Description,
  ReviewsSlider,
  ScrollToTop,
} from 'components/MainPageComponents/';

const MainPage = () => {
  return (
    <>
      <AuthSection />
      <Description />
      <ReviewsSlider />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default MainPage;
