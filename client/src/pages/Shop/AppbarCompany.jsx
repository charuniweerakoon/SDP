import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { AppBarTitleContext } from "./AppBarTitleContext";
import { UserContext } from './UserContext';

const Appbar = () => {
  // const navigate = useNavigate();
  const { title } = useContext(AppBarTitleContext);
  const { user } = useContext(UserContext);

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
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
