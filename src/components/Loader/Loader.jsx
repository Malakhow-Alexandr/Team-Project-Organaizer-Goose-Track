import React from 'react';
import { Backdrop, Spin, SpinWrap, Image } from './Loader.styled';

import ImgRacketGoose from '../../images/loader/racket-goose.webp';

export const Loader = () => {
  return (
    <Backdrop>
      <SpinWrap>
        <Spin>
          <Image srcSet={`${ImgRacketGoose}`} alt="Racket Goose" />
        </Spin>
      </SpinWrap>
    </Backdrop>
  );
};
