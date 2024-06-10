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
                  <Grid item xs={
4}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Tire or Wheel Alignment"
                      onChange={(e) => {
                       
                        const { serviceType } = formData;
                        if (e.target.checked) {
                          serviceType.push('Tire or Wheel Alignment');
                        } else {
                          const index = serviceType.indexOf('Tire or Wheel Alignment');
                          if (index !== -1) {
                            serviceType.splice(index, 1);
                          }
                        }
                        setFormData({ ...formData, serviceType });
                      }}
                    />
                  </Grid>
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
                    >
                      {['PCR Tires', 'Bike Tires', 'Batteries'].map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  {formData.productType === 'PCR Tires' && (
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
                      >
                        {[
                          '195-15', '185-14', '195-14', '165-14', '145-70-12', '145-80-12', '155-12',
                          '155-80-12', '155-70-12', '155-65-13', '165-65-13', '165-80-13', '185-70-14',
                          '175-70-14', '175-70-13', '175-70-13', '175-65-15', '185-65-15', '185-65-15',
                          '195-65-15', '175-65-15', '185-55-16', '165-70-14', '155-70-12', '155-80-13',
                          '165-70-13', '155-70-13', '155-65-14', '155-65-14', '165-55-14', '165-55-14',
                          '165-13', '155-65-13',
                        ].map((size) => (
                          <MenuItem key={size} value={size}>
                            {size}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  )}
                  {formData.productType === 'Bike Tires' && (
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
                      >
                        {[
                          '130-90-15', '140-60-17', '90-90-17', '100-90-10', '100-90-18', '100-90-17',
                          '300-18', '300-18', '275-18', '120-80-17', '120-80-16', '90-90-17', '110/80/10',
                          '275-17', '140-70-17', '300-17', '110-80-17', '110-80-12', '100-80-12', '250-17',
                          '225-17', '275-14', '275-18', '300-17', '300-17', '275-17', '90/90/12',
                          '140-60-17', '130-70-17', '100-90-18', '300-17', '90-90-18', '275-18', '100-80-17',
                          '120/70/13', '130/70/13', '100-90-14', '90-90-14',
                        ].map((size) => (
                          <MenuItem key={size} value={size}>
                            {size}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  )}
                  {formData.productType === 'Batteries' && (
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
                      >
                        {[
                          '500 ML W/B', '1 L', 'Acid  1 L', 'Acid  750', 'Acid 500', '65 AH', '12v4  MF',
                          'Utz-5s', '6N6- 3B', 'YB5L-BS', 'UTZ-7L-BS', 'YB7B-BS', 'YB2-5L-BS', 'UTX5L-BS',
                          '12N9-BS', 'UTX9-BS', 'UTX7A-BS',
                        ].map((size) => (
                          <MenuItem key={size} value={size}>
                            {size}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  )}
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
                />
              </Grid>
            </Grid>
          </Box>
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
                        variant="outlined"
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
    </>
  );
};

export default Orders;
