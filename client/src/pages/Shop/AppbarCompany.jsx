// import React, { useContext } from "react";
// import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import { AppBarTitleContext } from "./AppBarTitleContext";

// const Appbar = () => {
//   const navigate = useNavigate();
//   const { title } = useContext(AppBarTitleContext);

//   const handleProfileMenuOpen = () => {
//     navigate("/profile");
//   };

//   return (
//     <AppBar position="static" style={{ backgroundColor: "#F1DA5E", marginLeft: "210px", width: "calc(100% - 210px)" }}>
//       <Toolbar style={{ minHeight: '90px' }}> {/* Adjust the minHeight value as needed */}
//         <Typography variant="h4" style={{ flexGrow: 1, color: "#02054D" }}>
//           {title}
//         </Typography>
//         <IconButton edge="end" color="inherit" onClick={handleProfileMenuOpen}>
//           <AccountCircle style={{ fontSize: '50px' }} /> {/* Adjust the fontSize value as needed */}
//         </IconButton>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Appbar;
// Appbar.js
import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { AppBarTitleContext } from "./AppBarTitleContext";
import { UserContext } from './UserContext';

const Appbar = () => {
  const navigate = useNavigate();
  const { title } = useContext(AppBarTitleContext);
  const { user } = useContext(UserContext);

  const handleProfileMenuOpen = () => {
    navigate("/profile");
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#F1DA5E", marginLeft: "210px", width: "calc(100% - 210px)" }}>
      <Toolbar style={{ minHeight: '90px' }}>
        <Typography variant="h4" style={{ flexGrow: 1, color: "#02054D" }}>
          {title}
        </Typography>
        {user && (
          <Box display="flex" alignItems="center">
            <Typography variant="h6" style={{ color: "#02054D", marginRight: '8px' }}>
              Welcome! {user.name}
            </Typography>
            <IconButton edge="end" color="inherit" onClick={handleProfileMenuOpen}>
              <AccountCircle style={{ fontSize: '50px' }} />
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
