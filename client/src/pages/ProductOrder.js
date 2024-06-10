// import React, { useState } from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import MenuItem from '@mui/material/MenuItem';
// import Button from '@mui/material/Button';
// import Footer from './Footer'; // Import the Footer component
// import Navbar from '../Components/Navbar';
// import swal from 'sweetalert2';

// const BackgroundBox = styled(Box)({
//   position: 'relative',
//   height: '70vh',
//   '&::before': {
//     content: '""',
//     backgroundImage: 'url(https://t4.ftcdn.net/jpg/03/82/43/91/360_F_382439158_a8zdPAPTgPGzIom7T8vF0dpi4B9TgZL6.jpg)',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     opacity: 0.5,
//     zIndex: -1,
//   },
// });

// const ContentBox = styled(Box)({
//   backgroundColor: 'white',
//   padding: '20px',
//   borderRadius: '0px',
//   position: 'absolute',
//   top: 'calc(0px)',
//   left: '16%',
//   right: '16%',
//   bottom: '0px',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   opacity: 0.8,
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
// });

// const InnerBox = styled(Box)({
//   border: '2px solid #B2BEB5',
//   height: '100%',
//   padding: '20px',
//   boxSizing: 'border-box',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   position: 'relative',
// });

// const ConfirmButton = styled(Button)({
//   backgroundColor: 'white',
//   color: 'black',
//   fontSize: '14px',
//   padding: '6px 16px',
//   marginTop: '20px',
//   alignSelf: 'flex-end',
//   whiteSpace: 'nowrap',
//   maxWidth: '240px',
//   textTransform: 'capitalize',
//   borderColor: '#B2BEB5',
//   borderWidth: '2px',
//   borderStyle: 'solid',
//   position: 'absolute',
//   bottom: '20px',
//   right: '20px',
// });

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [productType, setProductType] = useState('');
//   const [size, setSize] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [pickupDate, setPickupDate] = useState('');
//   const [totalAmount, setTotalAmount] = useState('');
//   const [sizeOptions, setSizeOptions] = useState([]);
//   const [message, setMessage] = useState('');

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleProductTypeChange = (event) => {
//     const selectedProductType = event.target.value;
//     setProductType(selectedProductType);

//     let newSizeOptions = [];
//     switch (selectedProductType) {
//       case 'type1': // PCR Tires
//         newSizeOptions = [
//           '195-15', '185-14', '195-14', '165-14', '145-70-12', '145-80-12', '155-12', '155-80-12',
//           '155-70-12', '155-65-13', '165-65-13', '165-80-13', '185-70-14', '175-70-14', '175-70-13',
//           '175-70-13', '175-65-15', '185-65-15', '185-65-15', '195-65-15', '175-65-15', '185-55-16',
//           '165-70-14', '155-70-12', '155-80-13', '165-70-13', '155-70-13', '155-65-14', '155-65-14',
//           '165-55-14', '165-55-14', '165-13', '155-65-13'
//         ];
//         break;
//       case 'type2': // Bike Tires
//         newSizeOptions = [
//           '130-90-15', '140-60-17', '90-90-17', '100-90-10', '100-90-18', '100-90-17', '300-18',
//           '300-18', '275-18', '120-80-17', '120-80-16', '90-90-17', '110/80/10', '275-17', '140-70-17',
//           '300-17', '110-80-17', '110-80-12', '100-80-12', '250-17', '225-17', '275-14', '275-18',
//           '300-17', '300-17', '275-17', '90/90/12', '140-60-17', '130-70-17', '100-90-18', '300-17',
//           '90-90-18', '275-18', '100-80-17', '120/70/13', '130/70/13', '100-90-14', '90-90-14'
//         ];
//         break;
//       case 'type3': // Batteries
//         newSizeOptions = [
//           '500 ML W/B', '1 L', 'Acid  1 L', 'Acid  750', 'Acid 500', '65 AH', '12v4  MF', 'Utz-5s',
//           '6N6- 3B', 'YB5L-BS', 'UTZ-7L-BS', 'YB7B-BS', 'YB2-5L-BS', 'UTX5L-BS', '12N9-BS', 'UTX9-BS',
//           'UTX7A-BS'
//         ];
//         break;
//       default:
//         newSizeOptions = [];
//     }

//     setSize('');
//     setSizeOptions(newSizeOptions);
//   };

//   const handleSizeChange = (event) => {
//     setSize(event.target.value);
//   };

//   const handleQuantityChange = (event) => {
//     setQuantity(event.target.value);
//   };

//   const handlePickupDateChange = (event) => {
//     setPickupDate(event.target.value);
//   };

//   const handleTotalAmountChange = (event) => {
//     setTotalAmount(event.target.value);
// };

// const handleMessageChange = (event) => {
//     setMessage(event.target.value);
// };

// const handleConfirmButtonClick = () => {
//     swal.fire('Thank You for Choosing Us!', '', 'success');
// };

// return (
//     <div>
//         <Navbar />
//         <BackgroundBox>
//             <ContentBox>
//                 <InnerBox>
//                     <Typography variant="h7" gutterBottom>
//                         Provide relevant details to proceed the order.
//                     </Typography>
//                     <Grid container spacing={1}>
//                         <Grid item xs={6}>
//                             <TextField
//                                 fullWidth
//                                 id="firstName"
//                                 label="First Name"
//                                 variant="outlined"
//                                 placeholder="First Name"
//                                 sx={{ maxWidth: '350px' }}
//                                 required
//                             />
//                         </Grid>
//                         <Grid item xs={6}>
//                             <TextField
//                                 fullWidth
//                                 id="lastName"
//                                 label="Last Name"
//                                 variant="outlined"
//                                 placeholder="Last Name"
//                                 sx={{ maxWidth: '350px' }}
//                                 required
//                             />
//                         </Grid>
//                     </Grid>

//                     <Grid container spacing={1} sx={{ mt: 1 }}>
//                         <Grid item xs={6}>
//                             <TextField
//                                 fullWidth
//                                 id="email"
//                                 label="Email"
//                                 variant="outlined"
//                                 placeholder="Email"
//                                 sx={{ maxWidth: '350px' }}
//                                 required
//                             />
//                         </Grid>
//                         <Grid item xs={6}>
//                             <TextField
//                                 fullWidth
//                                 id="contactNumber"
//                                 label="Contact Number"
//                                 variant="outlined"
//                                 placeholder="Contact Number"
//                                 sx={{ maxWidth: '250px' }}
//                                 required
//                             />
//                         </Grid>
//                     </Grid>

//                     <Grid container spacing={1} sx={{ mt: 1 }}>
//                         <Grid item xs={3}>
//                             <FormControl fullWidth required>
//                                 <InputLabel>Product Type</InputLabel>
//                                 <Select
//                                     value={productType}
//                                     onChange={handleProductTypeChange}
//                                     label="Product Type"
//                                     variant="outlined"
//                                     sx={{ maxWidth: '250px' }}
//                                     required
//                                 >
//                                     <MenuItem value="type1">PCR Tires</MenuItem>
//                                     <MenuItem value="type2">Bike Tires</MenuItem>
//                                     <MenuItem value="type3">Batteries</MenuItem>
//                                 </Select>
//                             </FormControl>
//                         </Grid>
//                         <Grid item xs={3}>
//                             <FormControl fullWidth required>
//                                 <InputLabel>Size</InputLabel>
//                                 <Select
//                                     value={size}
//                                     onChange={handleSizeChange}
//                                     label="Size"
//                                     variant="outlined"
//                                     sx={{ maxWidth: '250px' }}
//                                     required
//                                 >
//                                     {sizeOptions.map((sizeOption) => (
//                                         <MenuItem key={sizeOption} value={sizeOption}>
//                                             {sizeOption}
//                                         </MenuItem>
//                                     ))}
//                                 </Select>
//                             </FormControl>
//                         </Grid>
//                         <Grid item xs={3}>
//                             <TextField
//                                 fullWidth
//                                 id="quantity"
//                                 label="Quantity"
//                                 variant="outlined"
//                                 placeholder="Quantity"
//                                 value={quantity}
//                                 onChange={handleQuantityChange}
//                                 sx={{ maxWidth: '250px' }}
//                                 required
//                             />
//                         </Grid>
//                         <Grid item xs={3}>
//                             <TextField
//                                 fullWidth
//                                 id="pickupDate"
//                                 label="Pickup Date"
//                                 variant="outlined"
//                                 type="date"
//                                 value={pickupDate}
//                                 onChange={handlePickupDateChange}
//                                 sx={{ maxWidth: '250px' }}
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}
//                                 required
//                             />
//                         </Grid>
//                     </Grid>

//                     <Grid container spacing={1} sx={{ mt: 1 }}>
//                         <Grid item xs={2}>
//                             <TextField
//                                 fullWidth
//                                 id="totalAmount"
//                                 label="Total Amount"
//                                 variant="outlined"
//                                 placeholder="Total Amount"
//                                 value={totalAmount}
//                                 onChange={handleTotalAmountChange}
//                                 sx={{ maxWidth: '250px' }}
//                             />
//                         </Grid>
//                     </Grid>

//                     <Grid container spacing={1} sx={{ mt: 1 }}>
//                         <Grid item xs={12}>
//                             <TextField
//                                 fullWidth
//                                 id="message"
//                                 label="Message"
//                                 variant="outlined"
//                                 placeholder="Message"
//                                 multiline
//                                 rows={4}
//                                 value={message}
//                                 onChange={handleMessageChange}
//                                 sx={{ maxWidth: '700px' }}
//                             />
//                         </Grid>
//                     </Grid>

//                     <ConfirmButton onClick={handleConfirmButtonClick}>
//                         Confirm
//                     </ConfirmButton>
//                 </InnerBox>
//             </ContentBox>
//         </BackgroundBox>
//         <Footer /> {/* Add the Footer component here */}
//     </div>
// );
// }

// export default ResponsiveAppBar;

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Footer from './Footer'; // Import the Footer component
import Navbar from '../Components/Navbar';
import swal from 'sweetalert2';

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
  position: 'relative',
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
});

function ProductOrder() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [productType, setProductType] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [sizeOptions, setSizeOptions] = useState([]);
  const [message, setMessage] = useState('');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleProductTypeChange = (event) => {
    const selectedProductType = event.target.value;
    setProductType(selectedProductType);

    let newSizeOptions = [];
    switch (selectedProductType) {
      case 'type1': // PCR Tires
        newSizeOptions = [
          '195-15', '185-14', '195-14', '165-14', '145-70-12', '145-80-12', '155-12', '155-80-12',
          '155-70-12', '155-65-13', '165-65-13', '165-80-13', '185-70-14', '175-70-14', '175-70-13',
          '175-70-13', '175-65-15', '185-65-15', '185-65-15', '195-65-15', '175-65-15', '185-55-16',
          '165-70-14', '155-70-12', '155-80-13', '165-70-13', '155-70-13', '155-65-14', '155-65-14',
          '165-55-14', '165-55-14', '165-13', '155-65-13'
        ];
        break;
      case 'type2': // Bike Tires
        newSizeOptions = [
          '130-90-15', '140-60-17', '90-90-17', '100-90-10', '100-90-18', '100-90-17', '300-18',
          '300-18', '275-18', '120-80-17', '120-80-16', '90-90-17', '110/80/10', '275-17', '140-70-17',
          '300-17', '110-80-17', '110-80-12', '100-80-12', '250-17', '225-17', '275-14', '275-18',
          '300-17', '300-17', '275-17', '90/90/12', '140-60-17', '130-70-17', '100-90-18', '300-17',
          '90-90-18', '275-18', '100-80-17', '120/70/13', '130/70/13', '100-90-14', '90-90-14'
        ];
        break;
      case 'type3': // Batteries
        newSizeOptions = [
          '500 ML W/B', '1 L', 'Acid  1 L', 'Acid  750', 'Acid 500', '65 AH', '12v4  MF', 'Utz-5s',
          '6N6- 3B', 'YB5L-BS', 'UTZ-7L-BS', 'YB7B-BS', 'YB2-5L-BS', 'UTX5L-BS', '12N9-BS', 'UTX9-BS',
          'UTX7A-BS'
        ];
        break;
      default:
        newSizeOptions = [];
    }

    setSize('');
    setSizeOptions(newSizeOptions);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handlePickupDateChange = (event) => {
    setPickupDate(event.target.value);
  };

  const handleTotalAmountChange = (event) => {
    setTotalAmount(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleConfirmButtonClick = () => {
    // Validate required fields
    if (!productType || !size || !quantity || !pickupDate) {
      swal.fire('Please fill in all required fields.', '', 'error');
    } else {
      swal.fire('Thank You for Choosing Us!', '', 'success');
    }
  };

  return (
    <div>
      <Navbar />
      <BackgroundBox>
        <ContentBox>
          <InnerBox>
            <Typography variant="h7" gutterBottom>
              Provide relevant details to proceed the order.
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  placeholder="First Name"
                  sx={{ maxWidth: '350px' }}
                  required
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
                  required
                />
              </Grid>
            </Grid>

            <Grid container spacing={1} sx={{ mt: 1 }}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  variant="outlined"
                  placeholder="Email"
                  sx={{ maxWidth: '350px' }}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="contactNumber"
                  label="Contact Number"
                  variant="outlined"
                  placeholder="Contact Number"
                  sx={{ maxWidth: '250px' }}
                  required
                />
              </Grid>
            </Grid>

            <Grid container spacing={1} sx={{ mt: 1 }}>
              <Grid item xs={3}>
                <FormControl fullWidth required>
                  <InputLabel>Product Type</InputLabel>
                  <Select
                    value={productType}
                    onChange={handleProductTypeChange}
                    label="Product Type"
                    variant="outlined"
                    sx={{ maxWidth: '250px' }}
                    required
                  >
                    <MenuItem value="type1">PCR Tires</MenuItem>
                    <MenuItem value="type2">Bike Tires</MenuItem>
                    <MenuItem value="type3">Batteries</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <FormControl fullWidth required>
                  <InputLabel>Size</InputLabel>
                  <Select
                    value={size}
                    onChange={handleSizeChange}
                    label="Size"
                    variant="outlined"
                    sx={{ maxWidth: '250px' }}
                    required
                  >
                    {sizeOptions.map((sizeOption) => (
                      <MenuItem key={sizeOption} value={sizeOption}>
                        {sizeOption}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  id="quantity"
                  label="Quantity"
                  variant="outlined"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  sx={{ maxWidth: '250px' }}
                  required
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  id="pickupDate"
                  label="Pickup Date"
                  variant="outlined"
                  type="date"
                  value={pickupDate}
                  onChange={handlePickupDateChange}
                  sx={{ maxWidth: '250px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
              </Grid>
            </Grid>

            <Grid container spacing={1} sx={{ mt: 1 }}>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  id="totalAmount"
                  label="Total Amount"
                  variant="outlined"
                  placeholder="Total Amount"
                  value={totalAmount}
                  onChange={handleTotalAmountChange}
                  sx={{ maxWidth: '250px' }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={1} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="message"
                  label="Message"
                  variant="outlined"
                  placeholder="Message"
                  multiline
                  rows={4}
                  value={message}
                  onChange={handleMessageChange}
                  sx={{ maxWidth: '700px' }}
                />
              </Grid>
            </Grid>

            <ConfirmButton onClick={handleConfirmButtonClick}>
              Confirm
            </ConfirmButton>
          </InnerBox>
        </ContentBox>
      </BackgroundBox>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default ProductOrder;
