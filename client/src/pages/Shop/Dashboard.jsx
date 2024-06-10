import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import AppbarCompany from "./AppbarCompany";
import SidebarNavigation from "./Sidebar";

// Sample data for the charts
const salesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 2000 },
  { name: 'Apr', sales: 2780 },
  { name: 'May', sales: 1890 },
  { name: 'Jun', sales: 2390 },
  { name: 'Jul', sales: 3490 },
  { name: 'Aug', sales: 4000 },
  { name: 'Sep', sales: 3000 },
  { name: 'Oct', sales: 2000 },
  { name: 'Nov', sales: 2780 },
  { name: 'Dec', sales: 1890 },
];

const orderData = [
  { name: 'Completed', value: 400 },
  { name: 'Pending', value: 300 },
  { name: 'Canceled', value: 100 },
];

// Sample inventory data
const inventoryData = [
  { id: 'P001', product: 'Tyre A', quantity: 150 },
  { id: 'P002', product: 'Tyre B', quantity: 200 },
  { id: 'P003', product: 'Tyre C', quantity: 100 },
];

const productIds = [
  'BK-MRF',
  'BK-DSI',
  'BK-CEAT',
  'BK-GNEX',
  'BK-LTS',
  'BK-TMSN'
];

const sizesByProductId = {
  'BK-MRF': ['130-90-15', '140-60-17', '90-90-17', '100-90-10'],
  'BK-DSI': ['100-90-18', '100-90-17', '300-18', '275-18', '120-80-17', '120-80-16'],
  'BK-CEAT': ['275-17', '140-70-17', '300-17', '110-80-17', '110-80-12', '100-80-12'],
  'BK-GNEX': ['90-90-17', '110/80/10'],
  'BK-LTS': ['250-17', '225-17', '275-14', '275-18', '300-17', '275-17', '90/90/12'],
  'BK-TMSN': ['140-60-17', '130-70-17', '100-90-18', '300-17', '90-90-18', '275-18', '100-80-17', '120/70/13', '130/70/13', '100-90-14', '90-90-14']
};

const DashboardPage = () => {
  const [selectedProductId, setSelectedProductId] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [totalInventory, setTotalInventory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleProductChange = (event) => {
    const selectedProductId = event.target.value;
    setSelectedProductId(selectedProductId);
    setTotalInventory('');
  };

  const handleSizeChange = (event) => {
    const selectedSize = event.target.value;
    setSelectedSize(selectedSize);
    const totalInventoryCount = inventoryData.reduce((total, item) => {
      if (item.product === `${selectedProductId} - ${selectedSize}`) {
        total += item.quantity;
      }
      return total;
    }, 0);
    setTotalInventory(totalInventoryCount);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <>
      <AppbarCompany />
      <Box sx={{ display: 'flex' }}>
        <SidebarNavigation />
        <Box sx={{ flexGrow: 1, p: 3, ml: '5px', width: 'calc(100% - 210px)', mt: '10px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Earnings for the Day
                  </Typography>
                  <Typography variant="h4">
                    $1200
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Inventory
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel>Product</InputLabel>
                    <Select
                      value={selectedProductId}
                      onChange={handleProductChange}
                    >
                      {productIds.map(productId => (
                        <MenuItem key={productId} value={productId}>{productId}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel>Size</InputLabel>
                    <Select
                      value={selectedSize}
                      onChange={handleSizeChange}
                    >
                      {sizesByProductId[selectedProductId] && sizesByProductId[selectedProductId].map(size => (
                        <MenuItem key={size} value={size}>{size}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    Total Inventory: {totalInventory}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Select Date
                  </Typography>
                  <input type="date" value={selectedDate} onChange={handleDateChange} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Monthly Sales
              </Typography>
              <LineChart
                width={500}
                height={300}
                data={salesData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              </LineChart>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Order Status
              </Typography>
              <BarChart
                width={500}
                height={300}
                data={orderData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default DashboardPage;
