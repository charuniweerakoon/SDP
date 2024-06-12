// import React, { useState } from 'react';
// import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Grid } from '@mui/material';
// import AppbarCompany from "./AppbarCompany";
// import SidebarNavigation from "./Sidebar";

// const originalSuppliers = [
//   // { id: 'S001', companyName: 'Company A', contactName: 'John Doe', phone: '1234567890', email: 'john@example.com' },
//   // { id: 'S002', companyName: 'Company B', contactName: 'Jane Doe', phone: '0987654321', email: 'jane@example.com' },
//   // Add more rows as needed
// ];

// const Suppliers = () => {
//   const [suppliers, setSuppliers] = useState(originalSuppliers);
//   const [form, setForm] = useState({ companyName: '', contactName: '', phone: '', email: '' });
//   const [isEditing, setIsEditing] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');

  
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEditing) {
//       setSuppliers(suppliers.map(supplier => supplier.id === form.id ? form : supplier));
//       setIsEditing(false);
//     } else {
//       setSuppliers([...suppliers, form]);
//     }
//     setForm({ companyName: '', contactName: '', phone: '', email: '' });
//   };

//   const handleEdit = (supplier) => {
//     setForm(supplier);
//     setIsEditing(true);
//   };

//   const handleDelete = (id) => {
//     setSuppliers(suppliers.filter(supplier => supplier.id !== id));
//   };

//   const handleSearchInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearch = () => {
//     const filteredSuppliers = originalSuppliers.filter(
//       (supplier) =>
//         supplier.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         supplier.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         supplier.contactName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         supplier.phone.includes(searchTerm)
//     );
//     setSuppliers(filteredSuppliers);
//   };

//   const handleReset = () => {
//     setSearchTerm('');
//     setSuppliers(originalSuppliers);
//   };

//   return (
//     <>
//       <AppbarCompany />
//       <Box sx={{ display: 'flex' }}>
//         <SidebarNavigation />
//         <Box sx={{ flexGrow: 1, p: 3, ml: '5px', width: 'calc(100% - 210px)', mt: '10px' }}>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Company Name"
//                   name="companyName"
//                   value={form.companyName}
//                   onChange={handleInputChange}
//                   fullWidth
//                   margin="normal"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Contact Name"
//                   name="contactName"
//                   value={form.contactName}
//                   onChange={handleInputChange}
//                   fullWidth
//                   margin="normal"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Phone"
//                   name="phone"
//                   value={form.phone}
//                   onChange={handleInputChange}
//                   fullWidth
//                   margin="normal"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Email"
//                   name="email"
//                   value={form.email}
//                   onChange={handleInputChange}
//                   fullWidth
//                   margin="normal"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button type="submit" variant="contained" color="primary">
//                   {isEditing ? 'Update Supplier' : 'Add Supplier'}
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//           <Grid item xs={12} sx={{ mt: 2 }}>
//             <TextField
//               label="Search"
//               value={searchTerm}
//               onChange={handleSearchInputChange}
//               fullWidth
//               margin="normal"
//             />
//             <Button onClick={handleSearch} variant="contained" color="primary" sx={{ ml: 2 }}>
//               Search
//             </Button>
//             <Button onClick={handleReset} variant="contained" color="primary" sx={{ ml: 2 }}>
//               Reset
//             </Button>
//           </Grid>
//           <TableContainer component={Paper} sx={{ mt: 2 }}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Supplier ID</TableCell>
//                   <TableCell>Company Name</TableCell>
//                   <TableCell>Contact Name</TableCell>
//                   <TableCell>Phone</TableCell>
//                   <TableCell>Email</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {suppliers.map((supplier) => (
//                   <TableRow key={supplier.id}>
//                     <TableCell>{supplier.id}</TableCell>
//                     <TableCell>{supplier.companyName}</TableCell>
//                     <TableCell>{supplier.contactName}</TableCell>
//                     <TableCell>{supplier.phone}</TableCell>
//                     <TableCell>{supplier.email}</TableCell>
//                     <TableCell>
//                       <Button onClick={() => handleEdit(supplier)}>Edit</Button>
//                       <Button onClick={() => handleDelete(supplier.id)}>Delete</Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Suppliers;

import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Grid } from '@mui/material';
import AppbarCompany from "./AppbarCompany";
import SidebarNavigation from "./Sidebar";

// Replace this with a fetch from the backend if needed
const originalSuppliers = [
  // { id: 'S001', companyName: 'Company A', contactName: 'John Doe', phone: '1234567890', email: 'john@example.com' },
  // { id: 'S002', companyName: 'Company B', contactName: 'Jane Doe', phone: '0987654321', email: 'jane@example.com' },
  // Add more rows as needed
];

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState(originalSuppliers);
  const [form, setForm] = useState({ companyName: '', contactName: '', phone: '', email: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const response = await fetch('/api/suppliers');
      const data = await response.json();
      setSuppliers(data);
    } catch (error) {
      console.error('Error fetching suppliers:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateSupplier(form);
      setIsEditing(false);
    } else {
      await addSupplier({ ...form, id: generateSupplierId() });
    }
    setForm({ companyName: '', contactName: '', phone: '', email: '' });
    fetchSuppliers();
  };

  const addSupplier = async (supplier) => {
    try {
      const response = await fetch('/api/suppliers/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(supplier),
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error adding supplier:', error);
    }
  };

  const updateSupplier = async (supplier) => {
    try {
      const response = await fetch('/api/suppliers/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(supplier),
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error updating supplier:', error);
    }
  };

  const handleEdit = (supplier) => {
    setForm(supplier);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch('/api/suppliers/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ supplier_id: id }),
      });
      const data = await response.json();
      console.log(data.message);
      fetchSuppliers();
    } catch (error) {
      console.error('Error deleting supplier:', error);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const filteredSuppliers = suppliers.filter(
      (supplier) =>
        supplier.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplier.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplier.contactName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplier.phone.includes(searchTerm)
    );
    setSuppliers(filteredSuppliers);
  };

  const handleReset = () => {
    setSearchTerm('');
    fetchSuppliers();
  };

  const generateSupplierId = () => {
    return 'S' + (suppliers.length + 1).toString().padStart(3, '0');
  };

  return (
    <>
      <AppbarCompany />
      <Box sx={{ display: 'flex' }}>
        <SidebarNavigation />
        <Box sx={{ flexGrow: 1, p: 3, ml: '5px', width: 'calc(100% - 210px)', mt: '10px' }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Company Name"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Contact Name"
                  name="contactName"
                  value={form.contactName}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  {isEditing ? 'Update Supplier' : 'Add Supplier'}
                </Button>
              </Grid>
            </Grid>
          </form>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Search"
              value={searchTerm}
              onChange={handleSearchInputChange}
              fullWidth
              margin="normal"
            />
            <Button onClick={handleSearch} variant="contained" color="primary" sx={{ ml: 2 }}>
              Search
            </Button>
            <Button onClick={handleReset} variant="contained" color="primary" sx={{ ml: 2 }}>
              Reset
            </Button>
          </Grid>
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Supplier ID</TableCell>
                  <TableCell>Company Name</TableCell>
                  <TableCell>Contact Name</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {suppliers.map((supplier) => (
                  <TableRow key={supplier.id}>
                    <TableCell>{supplier.id}</TableCell>
                    <TableCell>{supplier.companyName}</TableCell>
                    <TableCell>{supplier.contactName}</TableCell>
                    <TableCell>{supplier.phone}</TableCell>
                    <TableCell>{supplier.email}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleEdit(supplier)}>Edit</Button>
                      <Button onClick={() => handleDelete(supplier.id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default Suppliers;

