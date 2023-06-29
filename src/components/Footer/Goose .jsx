import React from 'react';
import { FaGithub, FaRegBookmark } from 'react-icons/fa';

export class Goose extends React.Component {
  render() {
    return (
      <div style={gooseStyles.container}>
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3ZscWlvZDBnMHd4d2RucjEwNmxvcDc1d2dvaXl1bHI2bXdja3Q1MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PQUVqmv8n1kRdQ3xNT/giphy.gif" alt="Goose" style={gooseStyles.image} />
      </div>
    );
  }
}

export const gooseStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    height: '2vh',
  },
  image: {
    width: '20px',
  },
};

export const SocialIcons = () => {
  return (
    <div style={socialIconsStyles.container}>
      <a href="https://github.com/Malakhow-Alexandr/Team-Project-Organaizer-Goose-Track" style={socialIconsStyles.link}>
        <FaGithub style={socialIconsStyles.link}/>
      </a>
      <a href="https://github.com/Siryi-Oleksandr/goose-track-backend" style={socialIconsStyles.link}>
      <FaGithub style={socialIconsStyles.link}/>
      </a>
      <a href="https://editor.swagger.io" style={socialIconsStyles.link}>
        <FaRegBookmark style={socialIconsStyles.link}/>
      </a>
    </div>
  );
};

export const socialIconsStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    margin: '0 10px',
    color: 'grey',
    textDecoration: 'none',
    fontSize: '24px',
    transition: 'color 0.3s',
    ':hover': {
      color: 'blue',
    },
    ':focus': {
      outline: 'none',
      color: 'blue',
    },
  },
}