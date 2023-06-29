import React from 'react';
// import {Footer} from '../../components/Footer/Footer';
import {
  AuthSection,
  Description,
  ReviewsSlider,
} from 'components/MainPageComponents/';

const MainPage = () => {
  return (
    <>
      <AuthSection />
      <Description />
      <ReviewsSlider />
      {/* <Footer/> */}
    </>
  );
};

export default MainPage;
