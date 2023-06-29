import React from 'react';
import { Goose } from './Goose ';
import { FaGithub,FaRegBookmark } from 'react-icons/fa';

const styles = {
  footer: {
    backgroundColor: 'rgb(255, 255, 255)',
    padding: '1px',
    textAlign: 'center',
   
  },
  gooseText: {
    fontWeight: 'normal',
    marginBottom: '2px',
   
  },
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

};
export const gooseStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    height: '2vh',
  },
  image: {
    width: '40px',
   
  },

};

export const Footer = () => {
  return (
  
    <footer style={styles.footer}>
      <h2 style={styles.gooseText}> 
      <div>
      <a href="https://github.com/Malakhow-Alexandr/Team-Project-Organaizer-Goose-Track" >
        <FaGithub style={socialIconsStyles.link} />
      </a>
      <a href="https://github.com/Siryi-Oleksandr/goose-track-backend">
      <FaGithub style={socialIconsStyles.link}/>
      </a>
      <a href="https://editor.swagger.io">
        <FaRegBookmark style={socialIconsStyles.link}/>
      </a>  
       <Goose /> 
    </div>
 
     © 2023 | All Rights Reserved | 

Developed with  by GoIT Students </h2>
    
    </footer>
  );
};

