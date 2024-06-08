import React, { useState } from 'react';
import { Box, Card, CardContent, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, MenuItem, Button } from '@mui/material';
import AppbarCompany from "./AppbarCompany";
import SidebarNavigation from "./Sidebar";

const Orders = () => {
  // Sample data for illustration, replace with actual data from your database
  const ordersData = [
    { orderId: '1', customerId: '1', orderDate: '2024-07-01', orderType: 'Service', totalAmount: '100.00', status: 'Pending' },
    { orderId: '2', customerId: '2', orderDate: '2024-07-02', orderType: 'Product', totalAmount: '50.00', status: 'Completed' },
    // Add more orders as needed
  ];

  const [orders, setOrders] = useState(ordersData);

  const handleStatusChange = (orderId, status) => {
    setOrders(orders.map(order =>
      order.orderId === orderId ? { ...order, status } : order
    ));
  };

  return (
    <>
      <AppbarCompany />
      <Box sx={{ display: 'flex' }}>
        <SidebarNavigation />
        <Box sx={{ flexGrow: 1, p: 3, ml: '5px', width: 'calc(100% - 210px)', mt: '10px' }}>
          <Typography variant="h5" gutterBottom>All Orders</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Customer ID</TableCell>
                  <TableCell>Order Date</TableCell>
                  <TableCell>Order Type</TableCell>
                  <TableCell>Total Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.orderId}>
                    <TableCell>{order.orderId}</TableCell>
                    <TableCell>{order.customerId}</TableCell>
                    <TableCell>{order.orderDate}</TableCell>
                    <TableCell>{order.orderType}</TableCell>
                    <TableCell>{order.totalAmount}</TableCell>
                    <TableCell>
                      <TextField
                        select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.orderId, e.target.value)}
                        fullWidth
                        variant="outlined"
                      >
                        {['Pending', 'Completed', 'Cancelled'].map((status) => (
                          <MenuItem key={status} value={status}>
                            {status}
                          </MenuItem>
                        ))}
                      </TextField>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained">Save</Button>
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

export default Orders;
