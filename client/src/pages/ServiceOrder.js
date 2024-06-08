import React, { useState } from 'react';
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
import swal from 'sweetalert2'; // Import SweetAlert2

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
  padding: '20px',
  borderRadius: '0px',
  position: 'absolute',
  top: 'calc(0px)',
  left: '16%',
  right: '16%',
  bottom: '0px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  opacity: 0.8,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const InnerBox = styled(Box)({
  border: '2px solid #B2BEB5',
  height: '100%',
  padding: '20px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const ConfirmButton = styled(Button)({
  backgroundColor: 'white',
  color: 'black',
  fontSize: '14px',
  padding: '6px 16px',
  marginTop: '20px',
  alignSelf: 'flex-end',
  whiteSpace: 'nowrap',
  maxWidth: '240px',
  textTransform: 'capitalize',
  borderColor: '#B2BEB5',
  borderWidth: '2px',
  borderStyle: 'solid',
  position: 'absolute',
  bottom: '20px',
  right: '20px',
  marginRight: '20px', // Add margin to the right
  marginBottom: '20px', // Add margin to the bottom
});

function ServiceOrder() {
  const [services, setServices] = useState({
    tireInstallation: false,
    tireRotation: false,
    tireAlignment: false,
  });
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleServiceChange = (event) => {
    setServices({
      ...services,
      [event.target.name]: event.target.checked,
    });
  };

  const handleConfirmButtonClick = () => {
    swal.fire('Thank You for Choosing Us!', '', 'success');
  };

  return (
    <div>
      <Navbar />
      <BackgroundBox>
        <ContentBox>
          <InnerBox>
            <Typography variant="h7" gutterBottom>
              Provide your relevant details to proceed with the order.
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  placeholder="First Name"
                  sx={{ maxWidth: '350px' }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  variant="outlined"
                  placeholder="Last Name"
                  sx={{ maxWidth: '350px' }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  variant="outlined"
                  placeholder="Email"
                  sx={{ maxWidth: '350px' }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="contactNumber"
                  label="Contact Number"
                  variant="outlined"
                  placeholder="Contact Number"
                  sx={{ maxWidth: '350px' }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="appointmentDate"
                  label="Appointment Date"
                  type="date"
                  sx={{ width: '100%' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="appointmentTime"
                  select
                  value={appointmentTime}
                  onChange={(e) => setAppointmentTime(e.target.value)}
                  sx={{ width: '100%' }}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value="">Select a time</option>
                  {[...Array(17)].map((_, index) => {
                    let hour = 9 + Math.floor(index / 4); // Start from 9 AM
                    let minute = (index % 4) * 15; // 0, 15, 30, 45
                    if (hour >= 12) {
                      hour++; // Skip 12 PM
                      if (hour === 14) hour = 15; // Skip 1 PM
                    }
                    let timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${(hour < 12 ? 'AM' : 'PM')}`;
                    return <option key={index} value={timeString}>{timeString}</option>;
                  })}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel component="legend">Select Services</FormLabel>
                  <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>
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
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  id="message"
                  label="Your Message"
                  variant="outlined"
                  placeholder="Your Message"
                  sx={{ maxWidth: '600px' }}
                />
              </Grid>
              <Grid item xs={12}>
                <ConfirmButton variant="contained" onClick={handleConfirmButtonClick}>
                  Confirm
                </ConfirmButton>
              </Grid>
            </Grid>
          </InnerBox>
        </ContentBox>
      </BackgroundBox>
      <Footer />
    </div>
  );
}

export default ServiceOrder;
