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
  flexDirection: 'row',
  justifyContent: 'space-around', // Distribute the boxes evenly
});

const BoxSection = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column', // Align text in a column
  justifyContent: 'top', // Center the content vertically
  alignItems: 'flex-start', // Align text to the left
  margin: '0 4px', // Add some margin to the sides
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
  marginTop: '410px', // Adjust the top margin as needed
  position: 'absolute', // Position the button absolutely
  right: '55px', // Align the button to the right edge
  whiteSpace: 'nowrap', // Keep the text on one line
  maxWidth: '240px', // Set a max-width for the button
  textTransform: 'capitalize',
  //margin: '10px', // Add a black color margin
  borderColor: 'black', // Set border color to black
  borderWidth: '1px', // Set border width
  borderStyle: 'solid', // Set border style
});

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
          </BoxSection>
          <BoxSection>
            <Square>
              <Title sx={{ marginLeft: '-185px' }}>Tire Rotation</Title>
              <img src="\images\s2.jpg" alt="Tire Rotation" style={{ width: '80%', height: '100%' }} />
            </Square>
          </BoxSection>
          <BoxSection>
            <Square>
              <Title sx={{ marginLeft: '-65px' }}>Tire or Wheel Alignment</Title>
              <img src="\images\s3.jpg" alt="Tire or wheel Alignment" style={{ width: '80%', height: '100%' }} />
            </Square>
          </BoxSection>
          <Link to="/serviceorder" style={{ textDecoration: 'none', color: 'inherit' }}>
            <PlaceOrderButton>Place Your Order Here</PlaceOrderButton>
          </Link>
        </ContentBox>
      </BackgroundBox>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default ResponsiveAppBar;
