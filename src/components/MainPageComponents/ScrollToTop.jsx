import React from 'react';

import { Container } from './ScrollToTop.styled';
import { IconContext } from 'react-icons';
import { PiArrowFatLinesUpDuotone } from 'react-icons/pi';

// import sprite from 'icons/sprite.svg';

export const ScrollToTop = () => {
  const calcScrollValue = () => {
    const scrollProgress = document.getElementById('scroll-progress');
    const icon = document.getElementById('scroll-arrow');

    const pos = document.documentElement.scrollTop;
    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);

    if (scrollProgress) {
      if (pos > 100) {
        scrollProgress.style.display = 'grid';
        scrollProgress.style.bottom = `${scrollValue}px`;
      } else {
        scrollProgress.style.display = 'none';
      }

      scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
      });
      scrollProgress.style.background = `conic-gradient(rgba(${
        scrollValue - 38
      }, ${scrollValue * 1.33}, ${scrollValue * 2.43},${
        0.7 + scrollValue * 0.003
      }) ${scrollValue}%, rgba(${scrollValue + 155}, ${scrollValue + 155}, ${
        scrollValue + 155
      }, ${0.7 + scrollValue * 0.003}) ${scrollValue}%)`;

      icon.style.color = `rgb(${scrollValue - 38}, ${scrollValue * 1.33}, ${
        scrollValue * 2.43
      }, ${0.7 + scrollValue * 0.003})`;
    }
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

  return (
    <Container>
      <div id="scroll-progress">
        <span id="scroll-progress-value">
          <div id="scroll-arrow">
            <IconContext.Provider
              value={{
                className: 'scrollArrowBtn',
              }}
            >
              <div>
                <PiArrowFatLinesUpDuotone />
              </div>
            </IconContext.Provider>
          </div>
        </span>
      </div>
    </Container>
  );
};
