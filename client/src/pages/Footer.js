import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Footer = () => {
  const images = [
    { src: '/images/MRF-Tyres-logo.png', alt: 'MRF Tyres Logo' }, 
    { src: '/images/CEAT.png', alt: 'CEAT Logo' },
    { src: '/images/Maxxis-Symbol.png', alt: 'Maxxis Logo' },
    { src: '/images/APlus.png', alt: 'APlus Logo' },
    { src: '/images/dsi.png', alt: 'DSI Logo' },
  ];

  return (
    <Box sx={{ backgroundColor: '#02054D', padding: '20px' }}>
      <Grid container spacing={4} justifyContent="center">
        {images.map((image, index) => (
          <Grid item key={index}>
            <img src={image.src} alt={image.alt} style={{ width: '170px', height: '100px' }} /> {/* Adjust size as needed */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Footer;
