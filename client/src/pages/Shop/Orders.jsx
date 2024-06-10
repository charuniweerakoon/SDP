import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import AppbarCompany from './AppbarCompany';
import SidebarNavigation from './Sidebar';

const Orders = () => {
  // Sample data for illustration, replace with actual data from your database
  const ordersData = [
    { orderId: '1', customerId: '1', orderDate: '2024-07-01', orderType: 'Service', totalAmount: '100.00', status: 'Pending' },
    { orderId: '2', customerId: '2', orderDate: '2024-07-02', orderType: 'Product', totalAmount: '50.00', status: 'Completed' },
    // Add more orders as needed
  ];

  const [orders, setOrders] = useState(ordersData);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    date: '',
    orderStatus: '',
    orderType: '',
    serviceType: [],
    productType: '',
    size: '',
    totalAmount: '',
  });

  const [showServiceForm, setShowServiceForm] = useState(false);
  const [showProductForm, setShowProductForm] = useState(false);

  const handleStatusChange = (orderId, status) => {
    setOrders(orders.map(order =>
      order.orderId === orderId ? { ...order, status } : order
    ));
  };

  const handleDelete = (orderId) => {
    setOrders(orders.filter(order => order.orderId !== orderId));
  };

  const cancelledOrders = orders.filter(order => order.status === 'Cancelled').length;
  const pendingOrders = orders.filter(order => order.status === 'Pending').length;
  const completedOrders = orders.filter(order => order.status === 'Completed').length;

  const productOrders = orders.filter(order => order.orderType === 'Product').length;
  const serviceOrders = orders.filter(order => order.orderType === 'Service').length;

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Required';
    if (!formData.contactNumber) tempErrors.contactNumber = 'Required';
    if (!formData.date) tempErrors.date = 'Required';
    if (!formData.orderStatus) tempErrors.orderStatus = 'Required';
    if (!formData.orderType) tempErrors.orderType = 'Required';
    if (formData.orderType === 'Service' && formData.serviceType.length === 0) tempErrors.serviceType = 'Required';
    if (formData.orderType === 'Product' && !formData.productType) tempErrors.productType = 'Required';
    if (formData.orderType === 'Product' && !formData.size) tempErrors.size = 'Required';
    if (!formData.totalAmount) tempErrors.totalAmount = 'Required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleAddOrder = () => {
    if (validateForm()) {
      const newOrder = {
        orderId: (orders.length + 1).toString(),
        customerId: (orders.length + 1).toString(),
        orderDate: formData.date,
        orderType: formData.orderType,
        totalAmount: formData.totalAmount,
        status: formData.orderStatus,
      };
      setOrders([...orders, newOrder]);
      setFormData({
        name: '',
        contactNumber: '',
        date: '',
        orderStatus: '',
        orderType: '',
        serviceType: [],
        productType: '',
        size: '',
        totalAmount: '',
      });
      setShowServiceForm(false);
      setShowProductForm(false);
      setErrors({});
    }
  };

  return (
    <>
      <AppbarCompany />
      <Box sx={{ display: 'flex' }}>
        <SidebarNavigation />
        <Box sx={{ flexGrow: 1, p: 3, ml: '5px', width: 'calc(100% - 210px)', mt: '10px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6">Order Statuses</Typography>
                          <Typography variant="body1">Cancelled: {cancelledOrders}</Typography>
                          <Typography variant="body1">Pending: {pendingOrders}</Typography>
                          <Typography variant="body1">Completed: {completedOrders}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6">Total Orders for the Day</Typography>
                          <Typography variant="body1">Product Orders: {productOrders}</Typography>
                          <Typography variant="body1">Service Orders: {serviceOrders}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box mt={3}>
            <Typography variant="h5" gutterBottom>New Order Form</Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  label="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  fullWidth
                  variant="outlined"
                  required
                  margin="normal"
                  error={!!errors.name}
                  helperText={errors.name}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Contact Number"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                  fullWidth
                  variant="outlined"
                  required
                  margin="normal"
                  error={!!errors.contactNumber}
                  helperText={errors.contactNumber}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  fullWidth
                  variant="outlined"
                  required
                  margin="normal"
                  error={!!errors.date}
                  helperText={errors.date}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  select
                  label="Order Status"
                  value={formData.orderStatus}
                  onChange={(e) => setFormData({ ...formData, orderStatus: e.target.value })}
                  fullWidth
                  variant="outlined"
                  required
                  margin="normal"
                  error={!!errors.orderStatus}
                  helperText={errors.orderStatus}
                >
                  {['Pending', 'Completed', 'Cancelled'].map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  select
                  label="Order Type"
                  value={formData.orderType}
                  onChange={(e) => {
                    setFormData({ ...formData, orderType: e.target.value });
                    if (e.target.value === 'Service') {
                      setShowServiceForm(true);
                      setShowProductForm(false);
                    } else if (e.target.value === 'Product') {
                      setShowProductForm(true);
                      setShowServiceForm(false);
                    }
                  }}
                  fullWidth
                  variant="outlined"
                  required
                  margin="normal"
                  error={!!errors.orderType}
                  helperText={errors.orderType}
                >
                  {['Service', 'Product'].map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              {showServiceForm && (
                <>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">Select Services</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Tire Installation"
                      onChange={(e) => {
                        const { serviceType } = formData;
                        if (e.target.checked) {
                          serviceType.push('Tire Installation');
                        } else {
                          const index = serviceType.indexOf('Tire Installation');
                          if (index !== -1) {
                            serviceType.splice(index, 1);
                          }
                        }
                        setFormData({ ...formData, serviceType });
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Tire Rotation"
                      onChange={(e) => {
                        const { serviceType } = formData;
                        if (e.target.checked) {
                          serviceType.push('Tire Rotation');
                        } else {
                          const index = serviceType.indexOf('Tire Rotation');
                          if (index !== -1) {
                            serviceType.splice(index, 1);
                          }
                        }
                        setFormData({ ...formData, serviceType });
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Wheel Alignment"
                      onChange={(e) => {
                        const { serviceType } = formData;
                        if (e.target.checked) {
                          serviceType.push('Wheel Alignment');
                        } else {
                          const index = serviceType.indexOf('Wheel Alignment');
                          if (index !== -1) {
                            serviceType.splice(index, 1);
                          }
                        }
                        setFormData({ ...formData, serviceType });
                      }}
                    />
                  </Grid>
                  {errors.serviceType && (
                    <Grid item xs={12}>
                      <Typography color="error">{errors.serviceType}</Typography>
                    </Grid>
                  )}
                </>
              )}
              {showProductForm && (
                <>
                  <Grid item xs={4}>
                    <TextField
                      select
                      label="Product Type"
                      value={formData.productType}
                      onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                      fullWidth
                      variant="outlined"
                      required
                      margin="normal"
                      error={!!errors.productType}
                      helperText={errors.productType}
                    >
                      {['Type 1', 'Type 2', 'Type 3'].map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      select
                      label="Size"
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      fullWidth
                      variant="outlined"
                      required
                      margin="normal"
                      error={!!errors.size}
                      helperText={errors.size}
                    >
                      {['Small', 'Medium', 'Large'].map((size) => (
                        <MenuItem key={size} value={size}>
                          {size}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </>
              )}
              <Grid item xs={4}>
                <TextField
                  label="Total Amount"
                  value={formData.totalAmount}
                  onChange={(e) => setFormData({ ...formData, totalAmount: e.target.value })}
                  fullWidth
                  variant="outlined"
                  required
                  margin="normal"
                  error={!!errors.totalAmount}
                  helperText={errors.totalAmount}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={handleAddOrder}>
                  Add
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box mt={3}>
            <Typography variant="h5" gutterBottom>Orders Table</Typography>
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
                  {orders.map(order => (
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
                          variant="outlined"
                          size="small"
                        >
                          {['Pending', 'Completed', 'Cancelled'].map((status) => (
                            <MenuItem key={status} value={status}>
                              {status}
                            </MenuItem>
                          ))}
                        </TextField>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => handleDelete(order.orderId)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Orders;
