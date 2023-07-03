import { useState } from 'react';
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
  ButtonTeam,
} from './Footer.styled';
import { DevelopersModal } from './Developers/DevelopersModal/DevelopersModal';

export const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <FooterStyled>
      <Wrapper>
        <TeamInfoWrapper>
          <p>
            <span>
              <CopyIcon />
            </span>
            2023
          </p>
          <ButtonTeam
            onClick={handleShowModal}
            aria-label="open-developers-modal"
          >
            GoIT Students
          </ButtonTeam>
        </TeamInfoWrapper>
        <LinksList>
          <li>
            <Links
              href="https://github.com/Siryi-Oleksandr/goose-track-backend.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BackEndIcon />
            </Links>
          </li>
          <li>
            <Links
              href="https://github.com/Malakhow-Alexandr/Team-Project-Organaizer-Goose-Track"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FrontEndIcon />
            </Links>
          </li>
          <li>
            <Links
              href="https://goose-track-verq.onrender.com/api-docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SwaggerIcon />
            </Links>
          </li>
          <li></li>
        </LinksList>
      </Wrapper>
      {showModal && <DevelopersModal onClose={handleCloseModal} />}
    </FooterStyled>
  );
};
