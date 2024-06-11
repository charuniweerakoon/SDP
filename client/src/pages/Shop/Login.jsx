// import React, { useState } from 'react';
// import { Container, TextField, Button, Typography, Box } from '@mui/material';
// import { styled } from '@mui/system';
// import { useNavigate } from 'react-router-dom';
// import backgroundImage from './images/bg.jpg'; // Update with your image path
// import shopIcon from './images/logo C.png'; // Update with your shop icon path

// const Background = styled(Box)({
//   backgroundImage: `url(${backgroundImage})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   opacity: 0.9,
//   position: 'absolute',
//   width: '100%',
//   height: '100%',
//   zIndex: -1,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// });

// const LoginBox = styled(Box)({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   backgroundColor: 'white',
//   padding: '30px',
//   borderRadius: '8px',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// });

// const ShopIcon = styled('img')({
//   width: '70px', // Adjust size as needed
//   height: '70px', // Adjust size as needed
//   marginRight: '8px',
// });

// const LoginButton = styled(Button)({
//   backgroundColor: '#02054D',
//   color: 'white',
//   marginTop: '20px',
//   '&:hover': {
//     backgroundColor: '#01043a',
//   },
// });

// const Login = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({ username: false, password: false });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = { username: false, password: false };

//     if (!username) {
//       newErrors.username = true;
//     }

//     if (!password) {
//       newErrors.password = true;
//     }

//     setErrors(newErrors);

//     if (!newErrors.username && !newErrors.password) {
//       // Simulate a successful login
//       navigate('/dashboard');
//     }
//   };

//   return (
//     <Background>
//       <Container component="main" maxWidth="xs">
//         <form onSubmit={handleSubmit}>
//           <LoginBox>
//             <Box display="flex" alignItems="center" width="100%">
//               <ShopIcon src={shopIcon} alt="Shop Icon" />
//               <Typography variant="h4" component="h1">
//                 Welcome!
//               </Typography>
//             </Box>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="username"
//               label="Username"
//               name="username"
//               autoComplete="username"
//               autoFocus
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               error={errors.username}
//               helperText={errors.username && 'Username is required'}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               error={errors.password}
//               helperText={errors.password && 'Password is required'}
//             />
//             <LoginButton
//               type="submit"
//               fullWidth
//               variant="contained"
//             >
//               Log In
//             </LoginButton>
//           </LoginBox>
//         </form>
//       </Container>
//     </Background>
//   );
// };

// export default Login;
// Login.js
import React, { useState, useContext } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import backgroundImage from './images/bg.jpg';
import shopIcon from './images/logo C.png';

const Background = styled(Box)({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 1,
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
  opacity: 0.7,
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const ShopIcon = styled('img')({
  width: '70px',
  height: '70px',
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

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: false, password: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { username: false, password: false };

    if (!username) {
      newErrors.username = true;
    }

    if (!password) {
      newErrors.password = true;
    }

    setErrors(newErrors);

    if (!newErrors.username && !newErrors.password) {
      // Simulate a successful login
      setUser({ name: username });
      navigate('/dashboard');
    }
  };

  return (
    <Background>
      <Container component="main" maxWidth="xs">
        <form onSubmit={handleSubmit}>
          <LoginBox>
            <Box display="flex" alignItems="center" width="100%">
              <ShopIcon src={shopIcon} alt="Shop Icon" />
              <Typography variant="h4" component="h1">
                Welcome!
              </Typography>
            </Box>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={errors.username}
              helperText={errors.username && 'Username is required'}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              helperText={errors.password && 'Password is required'}
            />
            <LoginButton
              type="submit"
              fullWidth
              variant="contained"
            >
              Log In
            </LoginButton>
          </LoginBox>
        </form>
      </Container>
    </Background>
  );
};

export default Login;
