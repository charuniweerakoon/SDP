import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';
import AppbarCompany from "./AppbarCompany";
import SidebarNavigation from "./Sidebar";

const Message = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRows, setFilteredRows] = useState([]);

  const rows = [
    { customerId: 'C001', orderId: 'O001', message: 'Order delivered successfully.' },
    { customerId: 'C002', orderId: 'O002', message: 'Order delayed due to weather conditions.' },
    { customerId: 'C003', orderId: 'O003', message: 'Customer requested for a callback.' },
    // Add more rows as needed
  ];

  const handleSearch = () => {
    const search = searchTerm.toLowerCase();
    const filtered = rows.filter(row =>
      row.customerId.toLowerCase().includes(search) || row.orderId.toLowerCase().includes(search)
    );
    setFilteredRows(filtered);
  };

  const handleReset = () => {
    setSearchTerm('');
    setFilteredRows([]);
  };

  return (
    <>
      <AppbarCompany />
      <Box sx={{ display: 'flex' }}>
        <SidebarNavigation />
        <Box sx={{ flexGrow: 1, p: 3, ml: '5px', width: 'calc(100% - 210px)', mt: '10px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ mr: 1 }}
            />
            <Button variant="contained" color="primary" onClick={handleSearch} sx={{ mr: 1 }}>
              Search
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleReset}>
              Reset
            </Button>
          </Box>
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Customer ID</TableCell>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Message</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(filteredRows.length > 0 ? filteredRows : rows).map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.customerId}</TableCell>
                    <TableCell>{row.orderId}</TableCell>
                    <TableCell>{row.message}</TableCell>
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

export default Message;
