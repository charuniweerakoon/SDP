// import React from 'react';
// import { Box, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
// import { styled } from '@mui/system';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import StorageIcon from '@mui/icons-material/Storage';
// import SettingsIcon from '@mui/icons-material/Settings';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import PeopleIcon from '@mui/icons-material/People';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import AssessmentIcon from '@mui/icons-material/Assessment';
// import MessageIcon from '@mui/icons-material/Message';
// import logo from './images/logo C.png'; // Update with your logo path

// const SideBar = styled(Drawer)({
//   width: '210px',
//   flexShrink: 0,
//   display: 'flex',
//   flexDirection: 'column',
//   '& .MuiDrawer-paper': {
//     width: '210px',
//     boxSizing: 'border-box',
//     backgroundColor: '#02054D',
//     color: 'white',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
// });

// const LogoBox = styled(Box)({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   paddingTop: '20px',
// });

// const LogoImage = styled('img')({
//   width: '100px', // Adjust size as needed
//   height: '100px', // Adjust size as needed
// });

// const SidebarHeading = styled(Typography)({
//   fontSize: '1.7rem',
//   fontWeight: 'bold',
//   textAlign: 'center',
//   marginBottom: '20px',
//   color: '#F1DA5E',
// });

// const SidebarNavigation = () => {
//   return (
//     <SideBar variant="permanent" anchor="left">
//       <LogoBox>
//         <LogoImage src={logo} alt="The Tyre Master Logo" />
//         <SidebarHeading>
//           <span style={{ color: '#F1DA5E' }}>THE TYRE</span><br />
//           <span style={{ color: '#F1DA5E' }}>MASTER</span>
//         </SidebarHeading>
//       </LogoBox>
//       <List>
//         <ListItem button>
//           <ListItemIcon><DashboardIcon /></ListItemIcon>
//           <ListItemText primary="Dashboard" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><AssignmentIcon /></ListItemIcon>
//           <ListItemText primary="Orders" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><StorageIcon /></ListItemIcon>
//           <ListItemText primary="Products" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><StorageIcon /></ListItemIcon>
//           <ListItemText primary="Services" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><PeopleIcon /></ListItemIcon>
//           <ListItemText primary="Staff" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><LocalShippingIcon /></ListItemIcon>
//           <ListItemText primary="Suppliers" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><AssessmentIcon /></ListItemIcon>
//           <ListItemText primary="Reports" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><MessageIcon /></ListItemIcon>
//           <ListItemText primary="Messages" />
//         </ListItem>
//       </List>
//       <Divider />
//       <List style={{ marginTop: 'auto' }}>
//         <ListItem button>
//           <ListItemIcon><SettingsIcon /></ListItemIcon>
//           <ListItemText primary="Settings" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon><ExitToAppIcon /></ListItemIcon>
//           <ListItemText primary="Logout" />
//         </ListItem>
//       </List>
//     </SideBar>
//   );
// };

// export default SidebarNavigation;


// import React from 'react';
// import { Box, Typography, Drawer, List, ListItemIcon, ListItemText, Divider, ListItem } from '@mui/material';
// import { styled } from '@mui/system';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import StorageIcon from '@mui/icons-material/Storage';
// import SettingsIcon from '@mui/icons-material/Settings';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import PeopleIcon from '@mui/icons-material/People';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import AssessmentIcon from '@mui/icons-material/Assessment';
// import MessageIcon from '@mui/icons-material/Message';
// import { useNavigate } from 'react-router-dom';
// import logo from './images/logo C.png'; // Update with your logo path

// const SideBar = styled(Drawer)({
//   width: '210px',
//   flexShrink: 0,
//   display: 'flex',
//   flexDirection: 'column',
//   '& .MuiDrawer-paper': {
//     width: '210px',
//     boxSizing: 'border-box',
//     backgroundColor: '#02054D',
//     color: 'white',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
// });

// const LogoBox = styled(Box)({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   paddingTop: '20px',
// });

// const LogoImage = styled('img')({
//   width: '100px', // Adjust size as needed
//   height: '100px', // Adjust size as needed
// });

// const SidebarHeading = styled(Typography)({
//   fontSize: '1.7rem',
//   fontWeight: 'bold',
//   textAlign: 'center',
//   marginBottom: '20px',
//   color: '#F1DA5E',
// });

// const CustomListItem = styled(ListItem)(({ theme }) => ({
//   '&:hover': {
//     backgroundColor: '#222477', // Very light blue color
//   },
// }));

// const SidebarNavigation = () => {
//   const navigate = useNavigate();

//   return (
//     <SideBar variant="permanent" anchor="left">
//       <LogoBox>
//         <LogoImage src={logo} alt="The Tyre Master Logo" />
//         <SidebarHeading>
//           <span style={{ color: '#F1DA5E' }}>THE TYRE</span><br />
//           <span style={{ color: '#F1DA5E' }}>MASTER</span>
//         </SidebarHeading>
//       </LogoBox>
//       <List>
//         <CustomListItem button onClick={() => navigate('/dashboard')}>
//           <ListItemIcon><DashboardIcon sx={{color:"white"}}/></ListItemIcon>
//           <ListItemText primary="Dashboard" />
//         </CustomListItem>
//         <CustomListItem button onClick={() => navigate('/orders')}>
//           <ListItemIcon><AssignmentIcon sx={{color:"white"}}/></ListItemIcon>
//           <ListItemText primary="Orders" />
//         </CustomListItem>
//         <CustomListItem button onClick={() => navigate('/productlist')}>
//           <ListItemIcon><StorageIcon sx={{color:"white"}}/></ListItemIcon>
//           <ListItemText primary="Products" />
//         </CustomListItem>
//         <CustomListItem button onClick={() => navigate('/servicelist')}>
//           <ListItemIcon><StorageIcon sx={{color:"white"}}/></ListItemIcon>
//           <ListItemText primary="Services" />
//         </CustomListItem>
//         <CustomListItem button onClick={() => navigate('/staff')}>
//           <ListItemIcon><PeopleIcon sx={{color:"white"}}/></ListItemIcon>
//           <ListItemText primary="Staff" />
//         </CustomListItem>
//         <CustomListItem button onClick={() => navigate('/suppliers')}>
//           <ListItemIcon><LocalShippingIcon sx={{color:"white"}}/></ListItemIcon>
//           <ListItemText primary="Suppliers" />
//         </CustomListItem>
//         <CustomListItem button onClick={() => navigate('/reports')}>
//           <ListItemIcon><AssessmentIcon sx={{color:"white"}}/></ListItemIcon>
//           <ListItemText primary="Reports" />
//         </CustomListItem>
//         <CustomListItem button onClick={() => navigate('/messages')}>
//           <ListItemIcon><MessageIcon sx={{color:"white"}}/></ListItemIcon>
//           <ListItemText primary="Messages" />
//         </CustomListItem>
//       </List>
//       <Divider />
//       <List style={{ marginTop: 'auto' }}>
//         <CustomListItem button onClick={() => navigate('/settings')}>
//           <ListItemIcon><SettingsIcon sx={{color:"white"}}/></ListItemIcon>
//           <ListItemText primary="Settings" />
//         </CustomListItem>
//         <CustomListItem button onClick={() => navigate('/logout')}>
//           <ListItemIcon><ExitToAppIcon sx={{color:"white"}}/></ListItemIcon>
//           <ListItemText primary="Logout" />
//         </CustomListItem>
//       </List>
//     </SideBar>
//   );
// };

// export default SidebarNavigation;

import React, { useContext } from 'react';
import { Box, Typography, Drawer, List, ListItemIcon, ListItemText, Divider, ListItem } from '@mui/material';
import { styled } from '@mui/system';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PeopleIcon from '@mui/icons-material/People';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MessageIcon from '@mui/icons-material/Message';
import { useNavigate } from 'react-router-dom';
import logo from './images/logo C.png'; // Update with your logo path
import { AppBarTitleContext } from './AppBarTitleContext';

const SideBar = styled(Drawer)({
  width: '210px',
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  '& .MuiDrawer-paper': {
    width: '210px',
    boxSizing: 'border-box',
    backgroundColor: '#02054D',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

const LogoBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '20px',
});

const LogoImage = styled('img')({
  width: '100px', // Adjust size as needed
  height: '100px', // Adjust size as needed
});

const SidebarHeading = styled(Typography)({
  fontSize: '1.7rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '20px',
  color: '#F1DA5E',
});

const CustomListItem = styled(ListItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#222477', // Very light blue color
  },
}));

const SidebarNavigation = () => {
  const navigate = useNavigate();
  const { setTitle } = useContext(AppBarTitleContext);

  const handleNavigation = (path, title) => {
    setTitle(title);
    navigate(path);
  };

  return (
    <SideBar variant="permanent" anchor="left">
      <LogoBox>
        <LogoImage src={logo} alt="The Tyre Master Logo" />
        <SidebarHeading>
          <span style={{ color: '#F1DA5E' }}>THE TYRE</span><br />
          <span style={{ color: '#F1DA5E' }}>MASTER</span>
        </SidebarHeading>
      </LogoBox>
      <List>
        <CustomListItem button onClick={() => handleNavigation('/dashboard', 'Dashboard')}>
          <ListItemIcon><DashboardIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </CustomListItem>
        <CustomListItem button onClick={() => handleNavigation('/orders', 'Orders')}>
          <ListItemIcon><AssignmentIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Orders" />
        </CustomListItem>
        <CustomListItem button onClick={() => handleNavigation('/productlist', 'Products')}>
          <ListItemIcon><StorageIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Products" />
        </CustomListItem>
        <CustomListItem button onClick={() => handleNavigation('/servicelist', 'Services')}>
          <ListItemIcon><StorageIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Services" />
        </CustomListItem>
        <CustomListItem button onClick={() => handleNavigation('/staff', 'Staff')}>
          <ListItemIcon><PeopleIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Staff" />
        </CustomListItem>
        <CustomListItem button onClick={() => handleNavigation('/suppliers', 'Suppliers')}>
          <ListItemIcon><LocalShippingIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Suppliers" />
        </CustomListItem>
        <CustomListItem button onClick={() => handleNavigation('/reports', 'Reports')}>
          <ListItemIcon><AssessmentIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Reports" />
        </CustomListItem>
        <CustomListItem button onClick={() => handleNavigation('/messages', 'Messages')}>
          <ListItemIcon><MessageIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Messages" />
        </CustomListItem>
      </List>
      <Divider />
      <List style={{ marginTop: 'auto' }}>
        <CustomListItem button onClick={() => handleNavigation('/settings', 'Settings')}>
          <ListItemIcon><SettingsIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Settings" />
        </CustomListItem>
        <CustomListItem button onClick={() => handleNavigation('/logout', 'Logout')}>
          <ListItemIcon><ExitToAppIcon sx={{ color: "white" }} /></ListItemIcon>
          <ListItemText primary="Logout" />
        </CustomListItem>
      </List>
    </SideBar>
  );
};

export default SidebarNavigation;
