// import React from "react";
// import { styled } from "@mui/material/styles";
// import { Link } from "react-router-dom";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import AdbIcon from "@mui/icons-material/Adb";
// import { useNavigate } from "react-router-dom";

// function ResponsiveAppBar() {
//   const pages = [
//     { title: "Home", path: "/home" },
//     { title: "Products", path: "/products" },
//     { title: "Services", path: "/services" },
//   ];
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const navigate = useNavigate();

//   return (
//     <div>
//       <AppBar position="static" sx={{ backgroundColor: "#02054D" }}>
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <img
//               src="/images/logo C.png"
//               alt="Logo"
//               style={{
//                 display: { xs: "none", md: "flex" },
//                 marginRight: "0px",
//                 marginLeft: "30px",
//                 height: "110px",
//               }}
//             />
//             <Typography
//               variant="h3"
//               noWrap
//               component={Link}
//               to="/"
//               sx={{
//                 mr: 2,
//                 display: { xs: "none", md: "flex" },
//                 fontFamily: "Times New Roman, serif",
//                 fontWeight: 600,
//                 letterSpacing: ".1rem",
//                 color: "#F1DA5E",
//                 textDecoration: "none",
//               }}
//             >
//               THE TYRE MASTER
//             </Typography>

//             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: "block", md: "none" },
//                 }}
//               >
//                 {pages.map((page) => (
//                   <MenuItem
//                     key={page.title}
//                     onClick={navigate(page.path)}
//                     component={Link}
//                     to={page.path}
//                   >
//                     <Typography textAlign="center">{page.title}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//             <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//             <Typography
//               variant="h4"
//               noWrap
//               component={Link}
//               to="/"
//               sx={{
//                 mr: 2,
//                 display: { xs: "flex", md: "none" },
//                 flexGrow: 1,
//                 fontFamily: "Times New Roman, serif",
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               THE TYRE MASTER
//             </Typography>
//             <Box
//               sx={{
//                 flexGrow: 1,
//                 display: { xs: "none", md: "flex" },
//                 justifyContent: "flex-end",
//               }}
//             >
//               {/* {pages.map((page) => (
//                 <Button
//                   key={page.title}
//                   component={Link}
//                   to={page.path}
//                   sx={{
//                     my: 2,
//                     color: "white",
//                     display: "block",
//                     fontSize: "18px",
//                   }}
//                 >
//                   {page.title}
//                 </Button>
//               ))} */}
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </div>
//   );
// }

// export default ResponsiveAppBar;


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
        width: "100vw",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "40vw",
          height: "100px",
          display: "flex",
          paddingLeft: "40px",
        }}
      >
        <img src={logo} style={{ width: "90px" }} />{" "}
        <h1 style={{ color: "yellow" }}>THE TYRE MASTER</h1>
      </div>
      <div
        style={{
          width: "50vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button onClick={() => navigate("/home")}>Home</Button>
        <Button onClick={() => navigate("/products")}>Products</Button>
        <Button onClick={() => navigate("/services")}>Services</Button>
      </div>
      <div
        style={{
          width: "10vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button sx={{borderRadius:"50%",height:"60px",width:"40px"}} variant="contained" onClick={() => navigate("/login")}>
          <LoginIcon sx={{mr:1}}/>
        </Button>
      </div>
    </div>
  );
}

export default ResponsiveAppBar;
