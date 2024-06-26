import React from 'react';
import { Container, TextField, Button, Typography, Box, Link } from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from './images/bg.jpg'; // Update with your image path
import shopIcon from './images/logo C.png'; // Update with your shop icon path

const Background = styled(Box)({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0.9,
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: -1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const LoginBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const ShopIcon = styled('img')({
  width: '70px', // Adjust size as needed
  height: '70px', // Adjust size as needed
  marginRight: '8px',
});

const LoginButton = styled(Button)({
  backgroundColor: '#02054D',
  color: 'white',
  marginTop: '20px',
  '&:hover': {
    backgroundColor: '#01043a',
  },
});

const SignUp = () => {
  return (
    <Background>
      <Container component="main" maxWidth="xs">
        <LoginBox>
          <Box display="flex" alignItems="center" width="100%">
            <ShopIcon src={shopIcon} alt="Shop Icon" />
            <Typography variant="h4" component="h1">
              Sign Up
            </Typography>
          </Box>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="yourName"
            label="Your Name"
            name="yourName"
            autoComplete="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Create a Strong Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <LoginButton
            type="submit"
            fullWidth
            variant="contained"
          >
            Sign Up
          </LoginButton>
          <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '20px' }}>
            Already a member? <Link href="#" variant="body2">Login</Link>
          </Typography>
        </LoginBox>
      </Container>
    </Background>
  );
};

export default SignUp;
