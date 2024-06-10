import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
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
  const [filteredOrders, setFilteredOrders] = useState(ordersData);
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
  const [searchQuery, setSearchQuery] = useState('');
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [showProductForm, setShowProductForm] = useState(false);

  const handleStatusChange = (orderId, status) => {
    const updatedOrders = orders.map(order =>
      order.orderId === orderId ? { ...order, status } : order
    );
    setOrders(updatedOrders);
    setFilteredOrders(updatedOrders);
  };

  const handleDelete = (orderId) => {
    const updatedOrders = orders.filter(order => order.orderId !== orderId);
    setOrders(updatedOrders);
    setFilteredOrders(updatedOrders);
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
      const updatedOrders = [...orders, newOrder];
      setOrders(updatedOrders);
      setFilteredOrders(updatedOrders);
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

  const productSizes = {
    'PCR Tires': [
      '195-15', '185-14', '195-14', '165-14', '145-70-12', '145-80-12', '155-12', '155-80-12', '155-70-12', '155-65-13', '165-65-13', '165-80-13',
      '185-70-14', '175-70-14', '175-70-13', '175-70-13', '175-65-15', '185-65-15', '185-65-15', '195-65-15', '175-65-15', '185-55-16', '165-70-14',
      '155-70-12', '155-80-13', '165-70-13', '155-70-13', '155-65-14', '155-65-14', '165-55-14', '165-55-14', '165-13', '155-65-13'
    ],
    'Bike Tires': [
      '130-90-15', '140-60-17', '90-90-17', '100-90-10', '100-90-18', '100-90-17', '300-18', '300-18', '275-18', '120-80-17', '120-80-16', '90-90-17',
      '110/80/10', '275-17', '140-70-17', '300-17', '110-80-17', '110-80-12', '100-80-12', '250-17', '225-17', '275-14', '275-18', '300-17', '300-17',
      '275-17', '90/90/12', '140-60-17', '130-70-17', '100-90-18', '300-17', '90-90-18', '275-18', '100-80-17', '120/70/13', '130/70/13', '100-90-14',
      '90-90-14'
    ],
    'Batteries': [
      '500 ML W/B', '1 L', 'Acid  1 L', 'Acid  750', 'Acid 500', '65 AH', '12v4  MF', 'Utz-5s', '6N6- 3B', 'YB5L-BS', 'UTZ-7L-BS', 'YB7B-BS', 'YB2-5L-BS',
      'UTX5L-BS', '12N9-BS', 'UTX9-BS', 'UTX7A-BS'
    ]
  };

  const getSizeOptions = () => {
    if (formData.orderType === 'Product') {
      return productSizes[formData.productType] || [];
    }
    return [];
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    const query = e.target.value.toLowerCase();
    const filtered = orders.filter(order =>
      order.orderId.toLowerCase().includes(query) ||
      order.customerId.toLowerCase().includes(query) ||
      order.orderDate.toLowerCase().includes(query) ||
      order.orderType.toLowerCase().includes(query) ||
      order.totalAmount.toLowerCase().includes(query) ||
      order.status.toLowerCase().includes(query)
    );
    setFilteredOrders(filtered);
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
                  label="Date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  fullWidth
                  variant="outlined"
                  required
                  margin="normal"
                  error={!!errors.date}
                  helperText={errors.date}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Order Status"
                  value={formData.orderStatus}
                  onChange={(e) => setFormData({ ...formData, orderStatus: e.target.value })}
                  fullWidth
                  variant="outlined"
                  required
                  margin="normal"
                  select
                  error={!!errors.orderStatus}
                  helperText={errors.orderStatus}
                >
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                  <MenuItem value="Cancelled">Cancelled</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Order Type"
                  value={formData.orderType}
                  onChange={(e) => {
                    setFormData({ ...formData, orderType: e.target.value });
                    setShowServiceForm(e.target.value === 'Service');
                    setShowProductForm(e.target.value === 'Product');
                  }}
                  fullWidth
                  variant="outlined"
                  required
                  margin="normal"
                  select
                  error={!!errors.orderType}
                  helperText={errors.orderType}
                >
                  <MenuItem value="Service">Service</MenuItem>
                  <MenuItem value="Product">Product</MenuItem>
                </TextField>
              </Grid>
              {showServiceForm && (
                <Grid item xs={4}>
                  <TextField
                    label="Service Type"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    fullWidth
                    variant="outlined"
                    required
                    margin="normal"
                    error={!!errors.serviceType}
                    helperText={errors.serviceType}
                    select
                    SelectProps={{
                      multiple: true,
                    }}
                  >
                    <MenuItem value="Tire Installation">Tire Installation</MenuItem>
                    <MenuItem value="Tire Rotation">Tire Rotation</MenuItem>
                    <MenuItem value="Tire or Wheel Alignment">Tire or Wheel Alignment</MenuItem>
                  </TextField>
                </Grid>
              )}
              {showProductForm && (
                <>
                  <Grid item xs={4}>
                    <TextField
                      label="Product Type"
                      value={formData.productType}
                      onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                      fullWidth
                      variant="outlined"
                      required
                      margin="normal"
                      select
                      error={!!errors.productType}
                      helperText={errors.productType}
                    >
                      <MenuItem value="PCR Tires">PCR Tires</MenuItem>
                      <MenuItem value="Bike Tires">Bike Tires</MenuItem>
                      <MenuItem value="Batteries">Batteries</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      label="Size"
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      fullWidth
                      variant="outlined"
                      required
                      margin="normal"
                      select
                      error={!!errors.size}
                      helperText={errors.size}
                    >
                      {getSizeOptions().map((size) => (
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
            </Grid>
            <Box mt={2}>
              <Button variant="contained" color="primary" onClick={handleAddOrder}>Add Order</Button>
            </Box>
          </Box>
          <Box mt={4}>
            <Typography variant="h5" gutterBottom>Order List</Typography>
            <TextField
              label="Search Orders"
              value={searchQuery}
              onChange={handleSearchChange}
              maxWidth="80px"
              variant="outlined"
              margin="normal"
            />
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
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredOrders.map((order) => (
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
                          margin="dense"
                        >
                          <MenuItem value="Pending">Pending</MenuItem>
                          <MenuItem value="Completed">Completed</MenuItem>
                          <MenuItem value="Cancelled">Cancelled</MenuItem>
                        </TextField>
                      </TableCell>
                      <TableCell>
                        <Button variant="contained" color="secondary" onClick={() => handleDelete(order.orderId)}>
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
