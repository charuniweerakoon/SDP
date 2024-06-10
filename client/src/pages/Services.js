import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import Footer from './Footer'; // Import the Footer component
import { Link } from 'react-router-dom'; // Import the Link component
import Navbar from '../Components/Navbar'

const pages = ['Home', 'Products', 'Services'];

const BackgroundBox = styled(Box)({
  position: 'relative',
  height: '70vh', // Adjust the height as needed
  '&::before': {
    content: '""',
    backgroundImage: 'url(https://t4.ftcdn.net/jpg/03/82/43/91/360_F_382439158_a8zdPAPTgPGzIom7T8vF0dpi4B9TgZL6.jpg)', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.5, // Adjust the opacity as needed
    zIndex: -1,
  },
});

const ContentBox = styled(Box)({
  backgroundColor: 'white',
  padding: '50px',
  borderRadius: '0px',
  position: 'absolute',
  top: 'calc(0px)', // Start after the app bar (64px) plus some space (20px)
  left: '10%', // Some space from the left corner
  right: '10%', // Some space from the right corner
  bottom: '0px', // Some space from the bottom, before the footer
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  opacity: 0.8,
  display: 'flex', // Use flexbox
  flexDirection: 'column', // Stack children vertically
  alignItems: 'center', // Center children horizontally
});

const BoxSection = styled(Box)({
  margin: '20px 0', // Add margin between sections
  display: 'flex',
  justifyContent: 'center', // Center children horizontally
});

const Square = styled(Box)({
  width: '350px', // Adjust the size as needed
  height: '250px', // Adjust the size as needed
  backgroundColor: '#B2BEB5',
  opacity: 0.9, // Adjust the opacity as needed
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
  alignItems: 'center',
  margin: '0 10px', // Add margin between squares
});


const Title = styled(Typography)({
  fontFamily: 'Times New Roman, serif',
  color: 'black',
  fontSize: '24px', // Adjust the font size as needed
  marginBottom: '5px', // Add some space below the title
  marginLeft: '-100px',
  marginTop: '20px',
  fontWeight: 'bold', // Make the text bold
  opacity: '3'
});

const PlaceOrderButton = styled(Button)({
  backgroundColor: 'white',
  color: 'black',
  fontSize: '14px',
  padding: '6px 16px', // Adjust the padding as needed
  position: 'absolute',
  bottom: '20px',
  right: '20px',
  textTransform: 'capitalize',
  borderColor: 'black', // Set border color to black
  borderWidth: '1px', // Set border width
  borderStyle: 'solid', // Set border style
});


const Rectangle = styled(Box)({
  width: '90%',
  border: '1px solid #B2BEB5',
  padding: '10px',
  textAlign: 'center',
  margin: '20px auto',
  marginTop: '-20px'
});

function Services() {
  return (
    <div>
      <Navbar/>
      <BackgroundBox>
        <ContentBox>
          <BoxSection>
            <Square>
              <Title sx={{ marginLeft: '-155px' }}>Tire Installation</Title>
              <img src="\images\s1.jpg" alt="Tire Installation" style={{ width: '80%', height: '100%' }} />
            </Square>
            <Square>
              <Title sx={{ marginLeft: '-185px' }}>Tire Rotation</Title>
              <img src="\images\s2.jpg" alt="Tire Rotation" style={{ width: '80%', height: '100%' }} />
            </Square>
            <Square>
              <Title sx={{ marginLeft: '-65px' }}>Tire or Wheel Alignment</Title>
              <img src="\images\s3.jpg" alt="Tire or wheel Alignment" style={{ width: '80%', height: '100%' }} />
            </Square>
          </BoxSection>
          <BoxSection>
            <Rectangle>
              <Typography variant="body1">Experience the Difference with Our Premium Tyre Services. From precise Tyre Installation to thorough Tyre Rotation and precise Wheel Alignment, we ensure your vehicle runs smoothly and safely. Our expert team is dedicated to providing high-quality service, ensuring your safety on the road. Drive with Confidence, Drive with Us!</Typography>
            </Rectangle>
          </BoxSection>
          <BoxSection>
            <Link to="/serviceorder" style={{ textDecoration: 'none', color: 'inherit' }}>
              <PlaceOrderButton>Place Your Order Here</PlaceOrderButton>
            </Link>
          </BoxSection>
        </ContentBox>
      </BackgroundBox>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default Services;
