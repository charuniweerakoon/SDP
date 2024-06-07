import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Footer from './Footer';
import Navbar from '../Components/Navbar';

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
  const [services, setServices] = React.useState({
    tireInstallation: false,
    tireRotation: false,
    tireAlignment: false,
  });

  const handleServiceChange = (event) => {
    setServices({
      ...services,
      [event.target.name]: event.target.checked,
    });
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <Navbar />
      <BackgroundBox>
        <ContentBox>
          <InnerBox>
            <Typography variant="h7" gutterBottom>
              Provide your relevant details to proceed the order.
            </Typography>
            <Grid container spacing={1}>
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
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  variant="outlined"
                  placeholder="Email"
                  sx={{ width: '280px' }} // Adjust the width as needed
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  id="contactNumber"
                  label="Contact Number"
                  variant="outlined"
                  placeholder="Contact Number"
                  sx={{ width: '200px' }} // Adjust the width as needed
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  id="vehicleNumber"
                  label="Vehicle Number"
                  variant="outlined"
                  placeholder="Vehicle Number"
                  sx={{ width: '170px' }} // Adjust the width as needed
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  id="vehicleType"
                  label="Vehicle Type"
                  variant="outlined"
                  placeholder="Vehicle Type"
                  sx={{ width: '150px' }} // Adjust the width as needed
                />
              </Grid>
            </Grid>

            <FormControl component="fieldset" sx={{ mt: 2 }}>
              <FormLabel component="legend">Select Services</FormLabel>
              <FormGroup row>
                <Grid container spacing={2}>
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={services.tireInstallation}
                          onChange={handleServiceChange}
                          name="tireInstallation"
                        />
                      }
                      label="Tire Installation"
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={services.tireRotation}
                          onChange={handleServiceChange}
                          name="tireRotation"
                        />
                      }
                      label="Tire Rotation"
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={services.tireAlignment}
                          onChange={handleServiceChange}
                          name="tireAlignment"
                        />
                      }
                      label="Tire or Wheel Alignment"
                    />
                  </Grid>
                </Grid>
              </FormGroup>
            </FormControl>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                multiline
                rows={3} // Adjust the number of rows as needed
                id="message"
                label="Your Message"
                variant="outlined"
                placeholder="Your Message"
                sx={{ maxWidth: '600px' }} // Adjust the width as needed
              />
            </Grid>
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

// import React, { useState } from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import Footer from './Footer';
// import Navbar from '../Components/Navbar';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


// const BackgroundBox = styled(Box)({
//   position: 'relative',
//   height: '70vh', // Adjust the height as needed
//   '&::before': {
//     content: '""',
//     backgroundImage: 'url(https://t4.ftcdn.net/jpg/03/82/43/91/360_F_382439158_a8zdPAPTgPGzIom7T8vF0dpi4B9TgZL6.jpg)', // Replace with your image path
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     opacity: 0.5, // Adjust the opacity as needed
//     zIndex: -1,
//   },
// });

// const ContentBox = styled(Box)({
//   backgroundColor: 'white',
//   padding: '20px', // Adjust padding to create space for inner border
//   borderRadius: '0px', // Adjust the border radius if needed
//   position: 'absolute',
//   top: 'calc(0px)', // Start after the app bar (64px) plus some space (20px)
//   left: '16%', // Some space from the left corner
//   right: '16%', // Some space from the right corner
//   bottom: '0px', // Some space from the bottom, before the footer
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   opacity: 0.8, // Adjust the opacity as needed
//   display: 'flex', // Use flexbox
//   flexDirection: 'column', // Arrange children vertically
//   justifyContent: 'space-between', // Distribute the space
// });

// const InnerBox = styled(Box)({
//   border: '2px solid #B2BEB5', // Add the inner border
//   height: '100%', // Fill the parent container
//   padding: '20px', // Adjust padding inside the inner box
//   boxSizing: 'border-box', // Ensure padding is included in width and height
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   position: 'relative', // To position the Confirm button at the bottom right
// });

// const ConfirmButton = styled(Button)({
//   backgroundColor: 'white',
//   color: 'black',
//   fontSize: '14px',
//   padding: '6px 16px', // Adjust the padding as needed
//   marginTop: '20px', // Adjust the top margin as needed
//   alignSelf: 'flex-end', // Center the button horizontally
//   whiteSpace: 'nowrap', // Keep the text on one line
//   maxWidth: '240px', // Set a max-width for the button
//   textTransform: 'capitalize',
//   borderColor: '#B2BEB5', // Set border color to black
//   borderWidth: '2px', // Set border width
//   borderStyle: 'solid', // Set border style
//   position: 'absolute', // Position the button at the bottom right
//   bottom: '20px', // Adjust as needed
//   right: '20px', // Adjust as needed
// });

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [services, setServices] = useState({
//     tireInstallation: false,
//     tireRotation: false,
//     tireAlignment: false,
//   });
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [timeSlot, setTimeSlot] = useState('');

//   const handleServiceChange = (event) => {
//     setServices({
//       ...services,
//       [event.target.name]: event.target.checked,
//     });
//   };

//   const handleDateChange = (newValue) => {
//     setSelectedDate(newValue);
//   };

//   const handleTimeSlotChange = (event) => {
//     setTimeSlot(event.target.value);
//   };

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <div>
//       <Navbar />
//       <BackgroundBox>
//         <ContentBox>
//           <InnerBox>
//             <Typography variant="h7" gutterBottom>
//               Provide your relevant details to proceed the order.
//             </Typography>
//             <Grid container spacing={1}>
//               <Grid item xs={6}>
//                 <TextField
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   variant="outlined"
//                   placeholder="First Name"
//                   sx={{ maxWidth: '350px' }} // Adjust the width as needed
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   variant="outlined"
//                   placeholder="Last Name"
//                   sx={{ maxWidth: '350px' }} // Adjust the width as needed
//                 />
//               </Grid>
//             </Grid>

//             <Grid container spacing={2} sx={{ mt: 1 }}>
//               <Grid item xs={4}>
//                 <TextField
//                   fullWidth
//                   id="email"
//                   label="Email"
//                   variant="outlined"
//                   placeholder="Email"
//                   sx={{ width: '280px' }} // Adjust the width as needed
//                 />
//               </Grid>
//               <Grid item xs={3}>
//                 <TextField
//                   fullWidth
//                   id="contactNumber"
//                   label="Contact Number"
//                   variant="outlined"
//                   placeholder="Contact Number"
//                   sx={{ width: '200px' }} // Adjust the width as needed
//                 />
//               </Grid>
//               <Grid item xs={3}>
//                 <TextField
//                   fullWidth
//                   id="vehicleNumber"
//                   label="Vehicle Number"
//                   variant="outlined"
//                   placeholder="Vehicle Number"
//                   sx={{ width: '170px' }} // Adjust the width as needed
//                 />
//               </Grid>
//               <Grid item xs={2}>
//                 <TextField
//                   fullWidth
//                   id="vehicleType"
//                   label="Vehicle Type"
//                   variant="outlined"
//                   placeholder="Vehicle Type"
//                   sx={{ width: '150px' }} // Adjust the width as needed
//                 />
//               </Grid>
//             </Grid>

//             <FormControl component="fieldset" sx={{ mt: 2, mb: 2 }}>
//               <FormLabel component="legend">Select Services</FormLabel>
//               <FormGroup row>
//                 <Grid container spacing={2}>
//                   <Grid item>
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           checked={services.tireInstallation}
//                           onChange={handleServiceChange}
//                           name="tireInstallation"
//                         />
//                       }
//                       label="Tire Installation"
//                     />
//                   </Grid>
//                   <Grid item>
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           checked={services.tireRotation}
//                           onChange={handleServiceChange}
//                           name="tireRotation"
//                         />
//                       }
//                       label="Tire Rotation"
//                     />
//                   </Grid>
//                   <Grid item>
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           checked={services.tireAlignment}
//                           onChange={handleServiceChange}
//                           name="tireAlignment"
//                         />
//                       }
//                       label="Tire or Wheel Alignment"
//                     />
//                   </Grid>
//                   <Grid item>
//                     <LocalizationProvider dateAdapter={AdapterDateFns}>
//                       <DatePicker
//                         label="Pick a Date"
//                         value={selectedDate}
//                         onChange={handleDateChange}
//                         renderInput={(params) => <TextField {...params} sx={{ width: '150px' }} />}
//                       />
//                     </LocalizationProvider>
//                   </Grid>
//                   <Grid item>
//                     <FormControl sx={{ minWidth: 150 }}>
//                       <InputLabel id="time-slot-label">Time Slot</InputLabel>
//                       <Select
//                         labelId="time-slot-label"
//                         id="time-slot"
//                         value={timeSlot}
//                         label="Time Slot"
//                         onChange={handleTimeSlotChange}
//                       >
//                         <MenuItem value={10}>10:00 AM - 11:00 AM</MenuItem>
//                         <MenuItem value={11}>11:00 AM - 12:00 PM</MenuItem>
//                         <MenuItem value={12}>12:00 PM - 01:00 PM</MenuItem>
//                         <MenuItem value={13}>01:00 PM - 02:00 PM</MenuItem>
//                         <MenuItem value={14}>02:00 PM - 03:00 PM</MenuItem>
//                         <MenuItem value={15}>03:00 PM - 04:00 PM</MenuItem>
//                       </Select>
//                     </FormControl>
//                   </Grid>
//                 </Grid>
//               </FormGroup>
//             </FormControl>

//             <Grid item xs={12} sx={{ mt: 2 }}>
//               <TextField
//                 fullWidth
//                 multiline
//                 rows={3} // Adjust the number of rows as needed
//                 id="message"
//                 label="Your Message"
//                 variant="outlined"
//                 placeholder="Your Message"
//                 sx={{ maxWidth: '600px' }} // Adjust the width as needed
//               />
//             </Grid>
//             <ConfirmButton variant="contained">
//               Confirm
//             </ConfirmButton>
//           </InnerBox>
//         </ContentBox>
//       </BackgroundBox>
//       <Footer /> {/* Add the Footer component */}
//     </div>
//   );
// }

// export default ResponsiveAppBar;
