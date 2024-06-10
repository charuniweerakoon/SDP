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
import Footer from './Footer';
import CarouselComponent from './CarouselComponent'; // Import the Carousel component
import { Link } from 'react-router-dom'; // Add this import statement
import Navbar from '../Components/Navbar'


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
});

const LeftBox = styled(Box)({
  flex: 1,
});

const RightBox = styled(Box)({
  flex: 1,
  marginTop: '30px',
});

function Home() {
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
          <LeftBox>
            <Typography variant="h3" component="h1" sx={{ color: '#02054D', marginTop: '25px', fontWeight: 'bold' }}>
              WELCOME TO 
            </Typography>
            <Typography variant="h3" component="h1" sx={{ color: '#F1DA5E', marginTop: '10px', fontWeight: 'bold' }}>
              THE TYRE MASTER
            </Typography>
            <Typography variant="h7" component="p" sx={{ color: '#000000', mt: '2' }}>
              The Tyre Master specializes in expert tyre replacement and repair services, offering a comprehensive selection of new, part-worn, and quality retread tyres. Our wide range ensures we can cater to every budget, providing tailored solutions to meet your specific needs.
            </Typography>
            <hr style={{ border: 'none', borderBottom: '2px solid #000000', opacity: 0.3, margin: '20px 0' }} />
            <Typography variant="h6" component="p" sx={{ color: '#F1DA5E', marginBottom: '10px' }}>
              <span style={{ fontWeight: 'bold' }}>CONTACT US:</span>
            </Typography>
            <Typography variant="h7" component="p" sx={{ color: '#000000', marginBottom: '10px' }}>
              <span style={{ fontWeight: 'bold' }}>CONTACT NUMBER:</span> +9470 278 2155
            </Typography>
            <Typography variant="h7" component="p" sx={{ color: '#000000', marginBottom: '10px' }}>
              <span style={{ fontWeight: 'bold' }}>ADDRESS:</span> THE TYRE MASTER, Gampola Rd, Peradeniya.
            </Typography>
          </LeftBox>
          <RightBox>
            <CarouselComponent />
          </RightBox>
        </ContentBox>
      </BackgroundBox>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default Home;
