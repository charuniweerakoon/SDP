import React from 'react';
import { Box, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
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
import logo from './images/logo C.png'; // Update with your logo path

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

const SidebarNavigation = () => {
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
        <ListItem button>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><StorageIcon /></ListItemIcon>
          <ListItemText primary="Inventory" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Staff" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><LocalShippingIcon /></ListItemIcon>
          <ListItemText primary="Suppliers" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><AssessmentIcon /></ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><MessageIcon /></ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
      </List>
      <Divider />
      <List style={{ marginTop: 'auto' }}>
        <ListItem button>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </SideBar>
  );
};

export default SidebarNavigation;
