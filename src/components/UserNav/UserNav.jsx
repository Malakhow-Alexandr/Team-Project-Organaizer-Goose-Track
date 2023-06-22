import { useLocation } from 'react-router-dom';

import {
  LinkLogo,
  LogoWrapper,
  GooseImg,
  TextLogo,
  TextLogoSpan,
  CloseBtnIcon,
  UserPanelText,
  StyledList,
  StyledItem,
  StyledLink,
  UserIconStyled,
  CalendarIconStyled,
  StatisticsIconStyled,
} from './UserNav.styled';

import goose_mobile from '../../images/sideBar/goose_mobile.webp';
import goose_mobile2 from '../../images/sideBar/goose_mobile@2x.webp';
import goose_tablet from '../../images/sideBar/goose_tablet.webp';
import goose_tablet2 from '../../images/sideBar/goose_tablet@2x.webp';
import goose_desktop from '../../images/sideBar/goose_desktop.webp';
import goose_desktop2 from '../../images/sideBar/goose_desktop@2x.webp';

const getTypePage = pathname => {
  if (pathname.includes('/account')) {
    return 'account';
  } else if (pathname.includes('/calendar')) {
    return 'calendar';
  }
};

const UserNav = ({ toggleShowSideBar }) => {
  const { pathname } = useLocation();
  const typePage = getTypePage(pathname);

  return (
    <div>
      <LogoWrapper>
        <LinkLogo to="calendar" onClick={() => toggleShowSideBar(false)}>
          <GooseImg
            alt="goose-track-img"
            srcSet={`
                      ${goose_desktop2}   142w,
                      ${goose_tablet2}   120w,
                      ${goose_mobile2}   72w,
                      ${goose_desktop}   71w,
                      ${goose_tablet}   60w,
                      ${goose_mobile}   36w,
                    `}
            sizes="(min-width: 1440px) 71px, (min-width: 768px) 60px, (min-width: 375px) 36px"
            src={goose_desktop}
          />
          <TextLogo>
            G<TextLogoSpan>oo</TextLogoSpan>seTrack
          </TextLogo>
        </LinkLogo>

        <CloseBtnIcon
          onClick={() => toggleShowSideBar(false)}
          stroke="currentColor"
        />
      </LogoWrapper>

      <nav>
        <UserPanelText>User Panel</UserPanelText>
        <StyledList>
          <StyledItem className={typePage === 'account' ? 'active' : ''}>
            <StyledLink to="account" onClick={() => toggleShowSideBar(false)}>
              <UserIconStyled stroke="currentColor"></UserIconStyled>
              My account
            </StyledLink>
          </StyledItem>
          <StyledItem className={typePage === 'calendar' ? 'active' : ''}>
            <StyledLink to="calendar" onClick={() => toggleShowSideBar(false)}>
              <CalendarIconStyled stroke="currentColor"></CalendarIconStyled>
              Calendar
            </StyledLink>
          </StyledItem>
          <StyledItem className={typePage === 'statistics' ? 'active' : ''}>
            <StyledLink
              to="statistics"
              onClick={() => toggleShowSideBar(false)}
            >
              <StatisticsIconStyled fill="currentColor"></StatisticsIconStyled>
              Statistics
            </StyledLink>
          </StyledItem>
        </StyledList>
      </nav>
    </div>
  );
};

export { UserNav };
