import React from 'react';
import { Goose } from './Goose';


const styles = {
  footer: {
    backgroundColor: 'rgb(255, 255, 255)',
    padding: '100px',
    textAlign: 'center',
   
  },
  gooseText: {
    fontWeight: 'bold',
    marginBottom: '2px',
   
  },
};

export const Footer = () => {
  return (
    <footer style={styles.footer}>
      <h2 style={styles.gooseText}>
        Myke will following you every day if you need help</h2>
      <Goose />
    </footer>
  );
};