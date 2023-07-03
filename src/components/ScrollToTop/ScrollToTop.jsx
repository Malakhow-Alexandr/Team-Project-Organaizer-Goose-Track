import { useState, useEffect } from 'react';
import { TopButton, IconPath } from './ScrollToTop.styled';

export function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      UpdateDashOffSet();
      if (200 < window.scrollY) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  function UpdateDashOffSet() {
    let scrollUpSvgPath = document.getElementById('iconPath');
    if (scrollUpSvgPath) {
      let pageLength = scrollUpSvgPath.getTotalLength();

      scrollUpSvgPath.style.strokeDasharray = `${pageLength} ${pageLength}`;
      scrollUpSvgPath.style.transition = `stroke-dashoffset 25ms`;

      let currentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const dashOffSet =
        pageLength - (window.scrollY * pageLength) / currentHeight;

      scrollUpSvgPath.style.strokeDashoffset = dashOffSet;
    }
  }

  return (
    <TopButton hidden={!showTopBtn} id="topButton" onClick={goToTop}>
      {
        <svg id="icon" viewBox="-2 -2 52 52">
          <IconPath
            id="iconPath"
            d="
                M24,0
                a24,24 0 0,1 0,48
                a24,24 0 0,1 0,-48
            "
          />
        </svg>
      }
    </TopButton>
  );
}
