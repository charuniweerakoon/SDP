import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import AppbarCompany from "./AppbarCompany";
import SidebarNavigation from "./Sidebar";

const Staff = () => {
  const [newMember, setNewMember] = useState({
    staffId: '',
    name: '',
    contactNumber: '',
    email: '',
    nicNumber: '',
    role: ''
  });

  const [rows, setRows] = useState([
    { staffId: 'S001', name: 'John Doe', contactNumber: '123456789', email: 'johndoe@example.com', nicNumber: '123456789V', role: 'admin' },
    { staffId: 'S002', name: 'Jane Smith', contactNumber: '987654321', email: 'janesmith@example.com', nicNumber: '987654321V', role: 'staff' },
    // Add more rows as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const addMember = () => {
    // Check if any required field is empty
    if (!newMember.name || !newMember.contactNumber || !newMember.email || !newMember.nicNumber || !newMember.role) {
      alert('Please fill in all required fields');
      return;
    }

    // Add the new member to the rows state
    setRows([...rows, { ...newMember }]);
    setNewMember({
      staffId: '',
      name: '',
      contactNumber: '',
      email: '',
      nicNumber: '',
      role: ''
    });
  };

  const deleteMember = (staffId) => {
    setRows(rows.filter((row) => row.staffId !== staffId));
  };

  const updateMember = (staffId) => {
    setRows(
      rows.map((row) =>
        row.staffId === staffId ? { ...newMember, staffId: row.staffId } : row
      )
    );
    setNewMember({
      staffId: '',
      name: '',
      contactNumber: '',
      email: '',
      nicNumber: '',
      role: ''
    });
  };

  const filteredRows = rows.filter(
    (row) =>
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.staffId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <AppbarCompany />
      <Box sx={{ display: 'flex' }}>
        <SidebarNavigation />
        <Box sx={{ flexGrow: 1, p: 3, ml: '5px', width: 'calc(100% - 210px)', mt: '10px' }}>
          <TextField
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={newMember.name}
              onChange={handleInputChange}
              required
              sx={{ mr: 2 }}
            />
            <TextField
              label="Contact Number"
              variant="outlined"
              name="contactNumber"
              value={newMember.contactNumber}
              onChange={handleInputChange}
              required
              sx={{ mr: 2 }}
            />
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              value={newMember.email}
              onChange={handleInputChange}
              required
              sx={{ mr: 2 }}
            />
            <TextField
              label="NIC Number"
              variant="outlined"
              name="nicNumber"
              value={newMember.nicNumber}
              onChange={handleInputChange}
              required
              sx={{ mr: 2 }}
            />
            <FormControl required sx={{ mr: 2, minWidth: 120 }}>
              <InputLabel>Role</InputLabel>
              <Select
                name="role"
                value={newMember.role}
                onChange={handleInputChange}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="staff">Staff</MenuItem>
                <MenuItem value="worker">Worker</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" onClick={addMember} sx={{ ml: 'auto', mb: 2 }}>Add</Button>
          </Box>
          <Typography variant="h5" gutterBottom>Staff Details</Typography>
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Staff ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Contact Number</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>NIC Number</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row, index) => (
                  <TableRow key={index} onClick={() => setNewMember(row)}>
                    <TableCell>{row.staffId}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.contactNumber}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.nicNumber}</TableCell>
                    <TableCell>{row.role}</TableCell>
                    <TableCell>
                      <Button variant="contained" onClick={() => deleteMember(row.staffId)}>Delete</Button>
                      <Button variant="contained" onClick={() => updateMember(row.staffId)} sx={{ ml: 1 }}>Update</Button>
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

export default Staff;
