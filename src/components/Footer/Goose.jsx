import React from 'react';
import { useSpring, animated } from 'react-spring';

export const Goose = () => {
  const props = useSpring({
    from: { transform: 'translateY(0px)' },
    to: { transform: 'translateY(200px)' },
    config: { duration: 1000 },
    reset: true,
    reverse: true,
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', height: '1vh' }}>
      <animated.img
        src="https://st2.depositphotos.com/7760196/12462/i/600/depositphotos_124620074-stock-photo-white-goose-cartoon.jpg"
        alt="Goose"
        style={{
          width: '500px',
          height: '500px',
          ...props,
        }}
      />
    </div>
  );
};