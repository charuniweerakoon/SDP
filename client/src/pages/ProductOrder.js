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
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Footer from './Footer'; // Import the Footer component
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
  padding: '20px', // Adjust padding to create space for inner border
  borderRadius: '0px', // Adjust the border radius if needed
  position: 'absolute',
  top: 'calc(0px)', // Start after the app bar (64px) plus some space (20px)
  left: '16%', // Some space from the left corner
  right: '16%', // Some space from the right corner
  bottom: '0px', // Some space from the bottom, before the footer
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  opacity: 0.8, // Adjust the opacity as needed
  display: 'flex', // Use flexbox
  flexDirection: 'column', // Arrange children vertically
  justifyContent: 'space-between', // Distribute the space
});

const InnerBox = styled(Box)({
  border: '2px solid #B2BEB5', // Add the inner border
  height: '100%', // Fill the parent container
  padding: '20px', // Adjust padding inside the inner box
  boxSizing: 'border-box', // Ensure padding is included in width and height
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative', // To position the Confirm button at the bottom right
});

const ConfirmButton = styled(Button)({
  backgroundColor: 'white',
  color: 'black',
  fontSize: '14px',
  padding: '6px 16px', // Adjust the padding as needed
  marginTop: '20px', // Adjust the top margin as needed
  alignSelf: 'flex-end', // Center the button horizontally
  whiteSpace: 'nowrap', // Keep the text on one line
  maxWidth: '240px', // Set a max-width for the button
  textTransform: 'capitalize',
  borderColor: '#B2BEB5', // Set border color to black
  borderWidth: '2px', // Set border width
  borderStyle: 'solid', // Set border style
  position: 'absolute', // Position the button at the bottom right
  bottom: '20px', // Adjust as needed
  right: '20px', // Adjust as needed
});

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [productType, setProductType] = React.useState('');
  const [size, setSize] = React.useState('');
  const [quantity, setQuantity] = React.useState('');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div>
     <Navbar/>
      <BackgroundBox>
        <ContentBox>
          <InnerBox>
            <Typography variant="h7" gutterBottom>
              Provide your relevant details to proceed the order.
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  placeholder="First Name"
                  sx={{ maxWidth: '350px' }} // Adjust the width as needed
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  variant="outlined"
                  placeholder="Last Name"
                  sx={{ maxWidth: '350px' }} // Adjust the width as needed
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  variant="outlined"
                  placeholder="Email"
                  sx={{ maxWidth: '350px' }} // Adjust the width as needed
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="contactNumber"
                  label="Contact Number"
                  variant="outlined"
                  placeholder="Contact Number"
                  sx={{ maxWidth: '250px' }} // Adjust the width as needed
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 1, mb: 10 }}> {/* Increased the bottom margin */}
              <Grid item xs={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="productType-label">Product Type</InputLabel>
                  <Select
                    labelId="productType-label"
                    id="productType"
                    value={productType}
                    onChange={handleProductTypeChange}
                    label="Product Type"
                    sx={{ maxWidth: '200px' }} // Adjust the width as needed
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="type1">PCR Tires</MenuItem>
                    <MenuItem value="type2">Bike Tires</MenuItem>
                    <MenuItem value="type3">Batteries</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="size-label">Size</InputLabel>
                  <Select
                    labelId="size-label"
                    id="size"
                    value={size}
                    onChange={handleSizeChange}
                    label="Size"
                    sx={{ maxWidth: '200px' }} // Adjust the width as needed
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="small">Small</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="large">Large</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="quantity"
                  label="Quantity"
                  variant="outlined"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  sx={{ maxWidth: '100px' }} // Adjust the width as needed
                />
              </Grid>
            </Grid>
              <Grid item xs={12} sx={{ mt: -7 }}>
              <TextField
                fullWidth
                multiline
                rows={4} // Adjust the number of rows as needed
                id="message"
                label="Your Message"
                variant="outlined"
                placeholder="Your Message"
                sx={{ maxWidth: '600px' }} // Adjust the width as needed
              />
            </Grid>
            <Typography variant="h7" sx={{ mt: 2 }}>
              Please collect your order within three days.
            </Typography>
            <ConfirmButton variant="contained">
              Confirm
            </ConfirmButton>
          </InnerBox>
        </ContentBox>
      </BackgroundBox>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}

export default ResponsiveAppBar;
