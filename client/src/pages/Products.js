import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
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
import Navbar from '../Components/Navbar'

const BackgroundBox = styled(Box)({
  position: 'relative',
  height: '70vh',
  '&::before': {
    content: '""',
    backgroundImage: 'url(https://t4.ftcdn.net/jpg/03/82/43/91/360_F_382439158_a8zdPAPTgPGzIom7T8vF0dpi4B9TgZL6.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.5,
    zIndex: -1,
  },
});

const ContentBox = styled(Box)({
  backgroundColor: 'white',
  padding: '50px',
  borderRadius: '0px',
  position: 'absolute',
  top: 'calc(0px)',
  left: '10%',
  right: '10%',
  bottom: '0px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  opacity: 0.8,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center', // Center items vertically
  flexWrap: 'wrap', // Allow items to wrap to the next row
});

const BoxSection = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
  alignItems: 'flex-start',
  margin: '0 4px',
});

const Square = styled(Box)({
  width: '350px',
  height: '245px',
  backgroundColor: '#B2BEB5',
  opacity: 0.9,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
  alignItems: 'center',
});

const Title = styled(Typography)({
  fontFamily: 'Times New Roman, serif',
  color: 'black',
  fontSize: '24px',
  marginBottom: '5px',
  marginLeft: '-220px',
  marginTop: '20px',
  fontWeight: 'bold',
  opacity: '3',
});

const Description = styled(Typography)({
  fontFamily: 'Times New Roman, serif',
  color: 'black',
  fontSize: '16px',
  textAlign: 'left',
  marginBottom: '180px',
  marginLeft: '10px',
});

const PlaceOrderButton = styled(Button)({
  backgroundColor: 'white',
  color: 'black',
  fontSize: '14px',
  padding: '6px 16px',
  marginTop: '410px',
  position: 'absolute',
  right: '55px',
  whiteSpace: 'nowrap',
  maxWidth: '240px',
  textTransform: 'capitalize',
  borderColor: 'black',
  borderWidth: '1px',
  borderStyle: 'solid',
});

// const Rectangle = styled(Box)({
//   width: '100%',
//   backgroundColor: '#B2BEB5',
//   opacity: 0.9,
//   padding: '20px',
//   textAlign: 'center',
//   marginTop: '20px', // Adjust as needed
// });
const Rectangle = styled(Box)({
  width: '90%',
  border: '1px solid #B2BEB5', // Border color
  padding: '20px',
  textAlign: 'center',
  margin: '20px auto', // Center horizontally with top margin
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
              <Title>PCR Tires</Title>
              <Description>
                We provide a comprehensive selection of PCR tires, ranging from budget-friendly options to premium brands. With hundreds of tires readily available and access to thousands more through our supply chain network, we're confident we can find the right size for you on the same day.
              </Description>
            </Square>
          </BoxSection>
          <BoxSection>
            <Square>
              <Title>Bike Tires</Title>
              <Description>
                We provide a comprehensive selection of PCR tires, ranging from budget-friendly options to premium brands. With hundreds of tires readily available and access to thousands more through our supply chain network, we're confident we can find the right size for you on the same day.
              </Description>
            </Square>
          </BoxSection>
          <BoxSection>
            <Square>
              <Title>Batteries</Title>
              <Description>
                We offer a wide range of batteries, from budget-friendly options to top premium brands. With a large inventory in stock and access to thousands more through our supply chain network, we're confident we can provide the right battery for your needs.
              </Description>
            </Square>
          </BoxSection>
          <BoxSection>
            <Rectangle>
              <Typography>
              Experience the Difference with Our Premium Tyres. From Reliable Budget Options to High-Performance Brands, We've Got Your Wheels Covered. Our Expert Team is Here to Help You Find the Perfect Fit for Your Vehicle. Drive with Confidence, Drive with Us!
              </Typography>
            </Rectangle>
          </BoxSection>
          <PlaceOrderButton component={Link} to="/productorder">Place Your Order Here</PlaceOrderButton>
        </ContentBox>
      </BackgroundBox>
      <Footer />
    </div>
  );
}

export default ResponsiveAppBar;
