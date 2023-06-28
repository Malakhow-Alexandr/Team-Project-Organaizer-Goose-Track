import React from 'react';
import { Backdrop, Spin, SpinWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <Backdrop>
      <SpinWrap>
        <Spin></Spin>
      </SpinWrap>
    </Backdrop>
  );
};
