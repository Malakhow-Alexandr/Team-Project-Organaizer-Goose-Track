import React from 'react';
import { Backdrop, Spin, SpinWrap } from './Loader.styled';

// import ImgRacketGoose from '../../images/loader/racket-goose.webp';
import { LoaderForBtn } from 'components/LoaderForBtn/LoaderForBtn';

export const Loader = () => {
  return (
    <Backdrop>
      <SpinWrap>
        <Spin>
          {/* <Image srcSet={`${ImgRacketGoose}`} alt="Racket Goose" /> */}
          <LoaderForBtn />
        </Spin>
      </SpinWrap>
    </Backdrop>
  );
};
