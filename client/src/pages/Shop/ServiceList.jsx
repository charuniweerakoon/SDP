import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Typography } from '@mui/material';
import AppbarCompany from "./AppbarCompany";
import SidebarNavigation from "./Sidebar";

const ServiceList = () => {
  const [newService, setNewService] = useState({
    serviceId: '',
    serviceName: '',
    price: '',
    description: ''
  });

  const [services, setServices] = useState([
    { serviceId: '1', serviceName: 'Service 1', price: '10', description: 'Description 1' },
    { serviceId: '2', serviceName: 'Service 2', price: '20', description: 'Description 2' },
    // Add more services as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const addService = () => {
    if (!newService.serviceId || !newService.serviceName || !newService.price || !newService.description) {
      setError('Please fill in all fields.');
      return;
    }

    setServices([...services, { ...newService }]);
    setNewService({
      serviceId: '',
      serviceName: '',
      price: '',
      description: ''
    });
    setError('');
  };

  const deleteService = (serviceId) => {
    setServices(services.filter((service) => service.serviceId !== serviceId));
  };

  const updateService = (serviceId) => {
    setServices(
      services.map((service) =>
        service.serviceId === serviceId ? { ...newService, serviceId: service.serviceId } : service
      )
    );
    setNewService({
      serviceId: '',
      serviceName: '',
      price: '',
      description: ''
    });
  };

  const filteredServices = services.filter(
    (service) =>
      service.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.serviceId.toLowerCase().includes(searchTerm.toLowerCase())
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
              label="Service ID"
              variant="outlined"
              name="serviceId"
              value={newService.serviceId}
              onChange={handleInputChange}
              required
              sx={{ mr: 2 }}
            />
            <TextField
              label="Service Name"
              variant="outlined"
              name="serviceName"
              value={newService.serviceName}
              onChange={handleInputChange}
              required
              sx={{ mr: 2 }}
            />
            <TextField
              label="Price"
              variant="outlined"
              name="price"
              value={newService.price}
              onChange={handleInputChange}
              required
              sx={{ mr: 2 }}
            />
            <TextField
              label="Description"
              variant="outlined"
              name="description"
              value={newService.description}
              onChange={handleInputChange}
              required
              sx={{ mr: 2 }}
            />
            <Button variant="contained" onClick={addService} sx={{ ml: 'auto', mb: 2 }}>Add</Button>
          </Box>
          {error && <Typography color="error">{error}</Typography>}
          <Typography variant="h5" gutterBottom>Service Details</Typography>
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Service ID</TableCell>
                  <TableCell>Service Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredServices.map((service, index) => (
                  <TableRow key={index} onClick={() => setNewService(service)}>
                    <TableCell>{service.serviceId}</TableCell>
                    <TableCell>{service.serviceName}</TableCell>
                    <TableCell>{service.price}</TableCell>
                    <TableCell>{service.description}</TableCell>
                    <TableCell>
                      <Button variant="contained" onClick={() => deleteService(service.serviceId)}>Delete</Button>
                      <Button variant="contained" onClick={() => updateService(service.serviceId)} sx={{ ml: 1 }}>Update</Button>
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

export default ServiceList;
