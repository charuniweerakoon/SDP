import React from "react";
import logo from "../assets/logo C.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

function ResponsiveAppBar() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100px",
        backgroundColor: "#02054d",
        width: "99vw", // Changed to 100vw to fully occupy the width
        display: "flex",
      }}
    >
      <div
        style={{
          width: "40vw",
          height: "100px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "40px",
        }}
      >
        <img src={logo} style={{ width: "90px" }} alt="Logo" />{" "}
        <h1 style={{ color: "yellow", marginLeft: "10px" }}>THE TYRE MASTER</h1>
      </div>
      <div
        style={{
          flexGrow: 1, // This makes the div take the remaining space
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end", // Align items to the right
          gap: "5px", // Add space between the buttons
        }}
      >
        <Button
          onClick={() => navigate("/home")}
          sx={{ color: "white", fontSize: "17px" }}
        >
          Home
        </Button>
        <Button
          onClick={() => navigate("/products")}
          sx={{ color: "white", fontSize: "17px" }}
        >
          Products
        </Button>
        <Button
          onClick={() => navigate("/services")}
          sx={{ color: "white", fontSize: "17px" }}
        >
          Services
        </Button>
        <Button
          sx={{ borderRadius: "50%", height: "60px", width: "40px", marginRight: "20px", color: "#02054d", backgroundColor: "white" }}
          variant="contained"
          onClick={() => navigate("/login")}
        >
          <LoginIcon />
        </Button>
      </div>
    </div>
  );
}

export default ResponsiveAppBar;
