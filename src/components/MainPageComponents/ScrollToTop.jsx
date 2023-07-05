import React, { useEffect, useState } from 'react';

import { Container } from './ScrollToTop.styled';
import { IconContext } from 'react-icons';
import { PiArrowFatLinesUpDuotone } from 'react-icons/pi';
import { GiRocket } from 'react-icons/gi';
import sprite from 'icons/sprite.svg';

export const ScrollToTop = () => {
  const [startRocket, setStartRocket] = useState(false);
  const [saray, setSaray] = useState(false);
  const [fire, setFire] = useState(false);

  const fireContainer = document.getElementById('fire-container');

  const createParticles = (fireContainer, num, leftSpacing) => {
    for (let i = 0; i < num; i += 1) {
      const particle = document.createElement('div');
      particle.style.left = `calc((100% - 5em) * ${i / leftSpacing})`;
      particle.setAttribute('class', 'particle');
      particle.style.animationDelay = 4 * Math.random() + 's';
      fireContainer.appendChild(particle);
    }
  };

  if (fire) {
    fireContainer.style.display = 'block';
    createParticles(fireContainer, 60, 60);
    setTimeout(() => {
      setFire(false);
    }, 1000);
  }
  useEffect(() => {
    const fireContainer = document.getElementById('fire-container');

    if (!fire) {
      setTimeout(() => {
        fireContainer.style.display = 'none';
      }, 3500);
    }
  }, [fireContainer, fire]);

  useEffect(() => {
    const bremyl = document.getElementById('bremyl');

    if (!saray) {
      setTimeout(() => {
        bremyl.style.display = 'none';
      }, 2500);
    }
  }, [saray]);

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
        setStartRocket(true);
        setSaray(true);
        const bremyl = document.getElementById('bremyl');
        bremyl.style.display = 'block';

        document.documentElement.scrollTop = 0;
        setTimeout(() => {
          setStartRocket(false);
          setFire(true);
        }, 3000);
        setTimeout(() => {
          setSaray(false);
        }, 5000);
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
    <Container style={{ position: 'fixed' }}>
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
      <div id="rocket" className={startRocket ? 'rocket-start' : 'hidden'}>
        <span
          id="rocket-value"
          className={startRocket ? 'animation-rocket' : 'hidden'}
        >
          <IconContext.Provider
            value={{
              className: 'scrollArrowBtn',
            }}
          >
            <div>
              <GiRocket />
            </div>
          </IconContext.Provider>
        </span>
      </div>
      <div id="bremyl">
        <span
          style={{
            display: 'block',
          }}
        >
          <svg className="icon icon-KKKK">
            <use href={sprite + '#icon-KKKK'}></use>
          </svg>
        </span>
      </div>
      <div id="yeah">
        <div id="fire-container"></div>
      </div>
    </Container>
  );
};
