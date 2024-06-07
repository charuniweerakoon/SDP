import React, { useState } from 'react';
import { Box, Typography, Button, TextField, MenuItem, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardContent, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AppbarCompany from "./AppbarCompany";
import SidebarNavigation from "./Sidebar";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    customerName: '',
    contactNumber: '',
    items: [{ type: 'product', name: '', quantity: 1 }],
  });

  const handleAddItem = () => {
    setNewOrder((prevOrder) => ({
      ...prevOrder,
      items: [...prevOrder.items, { type: 'product', name: '', quantity: 1 }],
    }));
  };

  const handleRemoveItem = (index) => {
    setNewOrder((prevOrder) => ({
      ...prevOrder,
      items: prevOrder.items.filter((_, i) => i !== index),
    }));
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...newOrder.items];
    newItems[index][field] = value;
    setNewOrder((prevOrder) => ({ ...prevOrder, items: newItems }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to save new order
    setOrders([...orders, newOrder]);
    setNewOrder({
      customerName: '',
      contactNumber: '',
      items: [{ type: 'product', name: '', quantity: 1 }],
    });
  };

  const productOrders = orders.filter(order => order.orderType === 'product').length;
  const serviceOrders = orders.filter(order => order.orderType === 'service').length;
  const pendingOrders = orders.filter(order => !order.completed).length;
  const totalOrders = orders.filter(order => order.total).length;
  const completedOrders = orders.filter(order => order.completed).length;
  const cancelledOrders = orders.filter(order => order.cancelled).length;

  return (
    <>
      <AppbarCompany />
      <SidebarNavigation />
      <Box sx={{ marginLeft: '225px', width: 'calc(100% - 225px)', marginTop: '30px' }}>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Orders</Typography>
                <Typography variant="body2">Service Orders: {serviceOrders}</Typography>
                <Typography variant="body2">Product Orders: {productOrders}</Typography>
                <Typography variant="body2">Total Orders: {totalOrders}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Order Status</Typography>
                <Typography variant="body2">Pending Orders: {pendingOrders}</Typography>
                <Typography variant="body2">Completed Orders: {completedOrders}</Typography>
                <Typography variant="body2">Cancelled Orders: {cancelledOrders}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', gap: '1rem', mb: 2 }}>
            <TextField
              fullWidth
              label="Customer Name"
              value={newOrder.customerName}
              onChange={(e) => setNewOrder({ ...newOrder, customerName: e.target.value })}
              sx={{ width: '30%' }}
            />
            <TextField
              fullWidth
              label="Contact Number"
              value={newOrder.contactNumber}
              onChange={(e) => setNewOrder({ ...newOrder, contactNumber: e.target.value })}
              sx={{ width: '20%' }}
            />
          </Box>

          {newOrder.items.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <TextField
                select
                fullWidth
                label="Type"
                value={item.type}
                onChange={(e) => handleItemChange(index, 'type', e.target.value)}
                sx={{ mr: 1, width: '20%' }}
              >
                <MenuItem value="product">Product</MenuItem>
                <MenuItem value="service">Service</MenuItem>
              </TextField>
              <TextField
                fullWidth
                label="Name"
                value={item.name}
                onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                sx={{ mr: 1, width: '25%' }}
              />
              <TextField
                type="number"
                label="Quantity"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                sx={{ mr: 1, width: '15%' }}
              />
              <IconButton onClick={() => handleRemoveItem(index)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}

          <Button onClick={handleAddItem}>Add Item</Button>
          <Button type="submit" variant="contained" color="primary" sx={{ ml: 2 }}>
            Save Order
          </Button>
        </form>
        <TableContainer component={Paper} sx={{ mt: 4, maxWidth: '98%' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Customer Name</TableCell>
                <TableCell>Contact Number</TableCell>
                <TableCell>Order Items</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>{order.contactNumber}</TableCell>
                  <TableCell>
                    <ul>
                      {order.items.map((item, idx) => (
                        <li key={idx}>
                          {item.name} ({item.quantity})
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Order;
