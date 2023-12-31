import { useState } from 'react';
import {
  FooterStyled,
  Wrapper,
  SwaggerIcon,
  FrontEndIcon,
  BackEndIcon,
  LinksList,
  LinkBack,
  LinkFront,
  LinkSwagger,
  TeamInfoWrapper,
  CopyIcon,
  TeamButton,
  YearInfo,
  CreatedBy
} from './Footer.styled';
import { WavingFlagCustom } from './WavingFlag';
import { DevelopersModal } from './Developers/DevelopersModal/DevelopersModal';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const [showModal, setShowModal] = useState(false);
const { t } = useTranslation();
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
          <YearInfo>
            <span>
              <CopyIcon />
            </span>
            2023
          </YearInfo>
          <CreatedBy>{t('Created with love by')}</CreatedBy>
          <TeamButton
            onClick={handleShowModal}
            aria-label="open-developers-modal"
          >
            {t('GoIT Students')}
          </TeamButton>
        </TeamInfoWrapper>
        <WavingFlagCustom/>
        <LinksList>
          <li>
          <LinkSwagger
              href="https://goose-track-verq.onrender.com/api-docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SwaggerIcon />
            </LinkSwagger>
          </li>
          <li>
            <LinkFront
              href="https://github.com/Malakhow-Alexandr/Team-Project-Organaizer-Goose-Track"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FrontEndIcon />
            </LinkFront>
          </li>
          <li> <LinkBack
              href="https://github.com/Siryi-Oleksandr/goose-track-backend.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BackEndIcon />
            </LinkBack>
            
          </li>
          <li></li>
        </LinksList>
      </Wrapper>
      {showModal && <DevelopersModal onClose={handleCloseModal} />}
    </FooterStyled>
  );
};
