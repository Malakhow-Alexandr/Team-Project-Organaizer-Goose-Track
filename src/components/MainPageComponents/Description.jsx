import React from 'react';

import { useResponse } from 'hooks/useResponse';
import {
  Main,
  Wrapper,
  Section,
  InfoBox,
  InfoBoxReverse,
  ImageWrapper,
  Number,
  ColorTitle,
  SubTitle,
  Text,
} from './Description.styled';

//desktop_images
import d_calendar from 'images/mainPage/desktop_calendar.png';
import d_calendar2 from 'images/mainPage/desktop_calendar@2x.png';
import d_sidebar from 'images/mainPage/desktop_sidebar.png';
import d_sidebar2 from 'images/mainPage/desktop_sidebar@2x.png';
import d_all from 'images/mainPage/desktop_all.png';
import d_all2 from 'images/mainPage/desktop_all@2x.png';

//tablet_images
import t_calendar from 'images/mainPage/tablet_calendar.png';
import t_calendar2 from 'images/mainPage/tablet_calendar@2x.png';
import t_sidebar from 'images/mainPage/tablet_sidebar.png';
import t_sidebar2 from 'images/mainPage/tablet_sidebar@2x.png';
import t_all from 'images/mainPage/tablet_all.png';
import t_all2 from 'images/mainPage/tablet_all@2x.png';

//mobile_images
import m_calendar from 'images/mainPage/mobile_calendar.png';
import m_calendar2 from 'images/mainPage/mobile_calendar@2x.png';
import m_sidebar from 'images/mainPage/mobile_sidebar.png';
import m_sidebar2 from 'images/mainPage/mobile_sidebar@2x.png';
import m_all from 'images/mainPage/mobile_all.png';
import m_all2 from 'images/mainPage/mobile_all@2x.png';
import { useTranslation } from 'react-i18next';


export const Description = () => {
  const { isDesktop, isTablet, isMobile } = useResponse();
  const { t } = useTranslation();

  return (
    <Main id="mainPagesection">
      <Wrapper>
        <Section>
          <InfoBox>
            <Number>1.</Number>
            <ColorTitle>{t('CALENDAR')}</ColorTitle>
            <SubTitle>{t('VIEW')}</SubTitle>
            <Text>{t('GooseTrack_Calendar')}</Text>
          </InfoBox>
          <ImageWrapper>
            {isMobile && (
              <img
                srcSet={`${m_calendar} 1x, ${m_calendar2} 2x`}
                src={m_calendar}
                alt="calendar views"
                width="335"
                height="457"
              />
            )}
            {isTablet && (
              <img
                srcSet={`${t_calendar} 1x, ${t_calendar2} 2x`}
                src={t_calendar}
                alt="calendar views"
                width="704"
                height="700"
              />
            )}
            {isDesktop && (
              <img
                srcSet={`${d_calendar} 1x, ${d_calendar2} 2x`}
                src={d_calendar}
                alt="calendar views"
                width="604"
                height="700"
              />
            )}
          </ImageWrapper>
        </Section>

        <Section>
          <InfoBoxReverse>
            <Number>2.</Number>
            <SubTitle>{t('SIDEBAR')}</SubTitle>
            <Text>{t('GooseTrack_offers_easy')}</Text>
          </InfoBoxReverse>
          <ImageWrapper>
            {isMobile && (
              <img
                srcSet={`${m_sidebar} 1x, ${m_sidebar2} 2x`}
                src={m_sidebar}
                alt="sidebar views"
                width="335"
                height="457"
              />
            )}
            {isTablet && (
              <img
                srcSet={`${t_sidebar} 1x, ${t_sidebar2} 2x`}
                src={t_sidebar}
                alt="sidebar views"
                width="704"
                height="700"
              />
            )}
            {isDesktop && (
              <img
                srcSet={`${d_sidebar} 1x, ${d_sidebar2} 2x`}
                src={d_sidebar}
                alt="sidebar views"
                width="604"
                height="700"
              />
            )}
          </ImageWrapper>
        </Section>

        <Section>
          <InfoBox>
            <Number>3.</Number>
            <ColorTitle>{t('ALL IN')}</ColorTitle>
            <SubTitle>{t('ONE')}</SubTitle>
            <Text>{t('GooseTrack_is_an')}</Text>
          </InfoBox>
          <ImageWrapper>
            {isMobile && (
              <img
                srcSet={`${m_all} 1x, ${m_all2} 2x`}
                src={m_all}
                alt="all calendar view"
                width="335"
                height="457"
              />
            )}
            {isTablet && (
              <img
                srcSet={`${t_all} 1x, ${t_all2} 2x`}
                src={t_all}
                alt="all calendar view"
                width="704"
                height="700"
              />
            )}
            {isDesktop && (
              <img
                srcSet={`${d_all} 1x, ${d_all2} 2x`}
                src={d_all}
                alt="all calendar view"
                width="604"
                height="700"
              />
            )}
          </ImageWrapper>
        </Section>
      </Wrapper>
    </Main>
  );
};
