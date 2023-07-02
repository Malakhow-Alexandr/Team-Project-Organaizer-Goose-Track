import {
  FooterStyled,
  Wrapper,
  SwaggerIcon,
  FrontEndIcon,
  BackEndIcon,
  LinksList,
  Links,
  TeamInfoWrapper,
  CopyIcon,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Wrapper>
        <TeamInfoWrapper>
          <p>
            <span>
              <CopyIcon />
            </span>
            2023
            <span>GoIT Students</span>
          </p>
          <button type="button">Modal</button>
        </TeamInfoWrapper>
        <LinksList>
          <li>
            <Links href="https://github.com/Siryi-Oleksandr/goose-track-backend.git">
              <BackEndIcon />
            </Links>
          </li>
          <li>
            <Links href="https://github.com/Malakhow-Alexandr/Team-Project-Organaizer-Goose-Track">
              <FrontEndIcon />
            </Links>
          </li>
          <li>
            <Links href="https://goose-track-verq.onrender.com/api-docs/">
              <SwaggerIcon />
            </Links>
          </li>
          <li></li>
        </LinksList>
      </Wrapper>
    </FooterStyled>
  );
};
