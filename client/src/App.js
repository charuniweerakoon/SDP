// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import Services from "./pages/Services";
// import ProductOrder from "./pages/ProductOrder";
// import Login from "./pages/Shop/Login";
// import SignUp from "./pages/Shop/SignUp";
// import SidebarNavigation from "./pages/Shop/Sidebar";
// import Footer from "./pages/Home";
// import ServiceOrder from "./pages/ServiceOrder";
// import AppbarCompany from "./pages/Shop/AppbarCompany";
// import Suppliers from "./pages/Shop/Suppliers";
// import Staff from "./pages/Shop/Staff";
// import ProductList from "./pages/Shop/ProductList";
// import ServiceList from "./pages/Shop/ServiceList";
// import Orders from "./pages/Shop/Orders";
// import Dashboard from "./pages/Shop/Dashboard";
// import Messages from "./pages/Shop/Messages";
// import { AppBarTitleProvider } from "./pages/Shop/AppBarTitleContext";

// export default function App() {
//   return (
//     <AppBarTitleProvider>
//       <Router>
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/productorder" element={<ProductOrder />} />
//           <Route path="/serviceorder" element={<ServiceOrder />} />
//           <Route path="/footer" element={<Footer />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/sidebar" element={<SidebarNavigation />} />
//           <Route path="/appbarcompany" element={<AppbarCompany />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/productlist" element={<ProductList />} />
//           <Route path="/servicelist" element={<ServiceList />} />
//           <Route path="/suppliers" element={<Suppliers />} />
//           <Route path="/staff" element={<Staff />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/messages" element={<Messages />} />
          
//         </Routes>
//       </Router>
//     </AppBarTitleProvider>
//   );
// }

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from './pages/Shop/UserContext';
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import ProductOrder from "./pages/ProductOrder";
import Login from "./pages/Shop/Login";
import SignUp from "./pages/Shop/SignUp";
import SidebarNavigation from "./pages/Shop/Sidebar";
import Footer from "./pages/Home";
import ServiceOrder from "./pages/ServiceOrder";
import AppbarCompany from "./pages/Shop/AppbarCompany";
import Suppliers from "./pages/Shop/Suppliers";
import Staff from "./pages/Shop/Staff";
import ProductList from "./pages/Shop/ProductList";
import ServiceList from "./pages/Shop/ServiceList";
import Orders from "./pages/Shop/Orders";
import Messages from "./pages/Shop/Messages";
import { AppBarTitleProvider } from "./pages/Shop/AppBarTitleContext";
import Dashboard from "./pages/Shop/Dashboard";

export default function App() {
  return (
    <UserProvider>
    <AppBarTitleProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/productorder" element={<ProductOrder />} />
          <Route path="/serviceorder" element={<ServiceOrder />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/sidebar" element={<SidebarNavigation />} />
          <Route path="/appbarcompany" element={<AppbarCompany />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/servicelist" element={<ServiceList />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </AppBarTitleProvider>
    </UserProvider>
  );
}
