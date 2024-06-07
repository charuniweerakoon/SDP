import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AppbarCompany from "./AppbarCompany";
import SidebarNavigation from "./Sidebar";

const Message = () => {
  const rows = [
    { customerId: 'C001', orderId: 'O001', message: 'Order delivered successfully.' },
    { customerId: 'C002', orderId: 'O002', message: 'Order delayed due to weather conditions.' },
    { customerId: 'C003', orderId: 'O003', message: 'Customer requested for a callback.' },
    // Add more rows as needed
  ];

  return (
    <>
      <AppbarCompany />
      <Box sx={{ display: 'flex' }}>
        <SidebarNavigation />
        <Box sx={{ flexGrow: 1, p: 3, ml: '5px', width: 'calc(100% - 210px)', mt: '10px' }}>
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
                {rows.map((row, index) => (
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
