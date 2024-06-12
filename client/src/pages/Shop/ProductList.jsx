// import React, { useState } from 'react';
// import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
// import AppbarCompany from "./AppbarCompany";
// import SidebarNavigation from "./Sidebar";

// const typeOptions = ['PCR Tires', 'Bike Tires', 'Batteries'];

// const sizeOptions = {
//   'PCR Tires': ['195-15', '185-14', '195-14', '165-14', '145-70-12', '145-80-12', '155-12', '155-80-12', '155-70-12', '155-65-13', '165-65-13', '165-80-13', '185-70-14', '175-70-14', '175-70-13', '175-70-13', '175-65-15', '185-65-15', '185-65-15', '195-65-15', '175-65-15', '185-55-16', '165-70-14', '155-70-12', '155-80-13', '165-70-13', '155-70-13', '155-65-14', '155-65-14', '165-55-14', '165-55-14', '165-13', '155-65-13'],
//   'Bike Tires': ['130-90-15', '140-60-17', '90-90-17', '100-90-10', '100-90-18', '100-90-17', '300-18', '300-18', '275-18', '120-80-17', '120-80-16', '90-90-17', '110/80/10', '275-17', '140-70-17', '300-17', '110-80-17', '110-80-12', '100-80-12', '250-17', '225-17', '275-14', '275-18', '300-17', '300-17', '275-17', '90/90/12', '140-60-17', '130-70-17', '100-90-18', '300-17', '90-90-18', '275-18', '100-80-17', '120/70/13', '130/70/13', '100-90-14', '90-90-14'],
//   'Batteries': ['500 ML W/B', '1 L', 'Acid  1 L', 'Acid  750', 'Acid 500', '65 AH', '12v4  MF', 'Utz-5s', '6N6- 3B', 'YB5L-BS', 'UTZ-7L-BS', 'YB7B-BS', 'YB2-5L-BS', 'UTX5L-BS', '12N9-BS', 'UTX9-BS', 'UTX7A-BS']
// };

// const ProductList = () => {
//   const [newProduct, setNewProduct] = useState({
//     productId: '',
//     supplier: '',
//     purchasePrice: '',
//     salePrice: '',
//     type: '',
//     size: '',
//     availableQuantity: ''
//   });

//   const [products, setProducts] = useState([
//     // { productId: '1', supplier: 'Supplier 1', purchasePrice: '10', salePrice: '20', type: 'PCR Tires', size: '195-15', availableQuantity: '100' },
//     // { productId: '2', supplier: 'Supplier 2', purchasePrice: '20', salePrice: '30', type: 'Bike Tires', size: '130-90-15', availableQuantity: '200' },
//     // Add more products as needed
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [error, setError] = useState('');
//   const [editMode, setEditMode] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleTypeChange = (e) => {
//     const { value } = e.target;
//     setNewProduct((prevState) => ({
//       ...prevState,
//       type: value,
//       size: '' // Reset size when type changes
//     }));
//   };

//   const addProduct = () => {
//     if (!newProduct.productId || !newProduct.supplier || !newProduct.purchasePrice || !newProduct.salePrice || !newProduct.type || !newProduct.size || !newProduct.availableQuantity) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (editMode) {
//       setProducts(
//         products.map((product) =>
//           product.productId === newProduct.productId ? newProduct : product
//         )
//       );
//       setEditMode(false);
//     } else {
//       setProducts([...products, { ...newProduct }]);
//     }

//     setNewProduct({
//       productId: '',
//       supplier: '',
//       purchasePrice: '',
//       salePrice: '',
//       type: '',
//       size: '',
//       availableQuantity: ''
//     });
//     setError('');
//   };

//   const deleteProduct = (productId) => {
//     setProducts(products.filter((product) => product.productId !== productId));
//   };

//   const updateProduct = (product) => {
//     setNewProduct(product);
//     setEditMode(true);
//   };

//   const filteredProducts = products.filter(
//     (product) =>
//       product.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.productId.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <AppbarCompany />
//       <Box sx={{ display: 'flex' }}>
//         <SidebarNavigation />
//         <Box sx={{ flexGrow: 1, p: 3, ml: '5px', width: 'calc(100% - 210px)', mt: '10px' }}>
//           <TextField
//             label="Search"
//             variant="outlined"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             sx={{ mb: 2 }}
//           />
//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//             <TextField
//               label="Product ID"
//               variant="outlined"
//               name="productId"
//               value={newProduct.productId}
//               onChange={handleInputChange}
//               required
//               sx={{ mr: 2 }}
//               disabled={editMode} // Disable Product ID field when in edit mode
//             />
//             <TextField
//               label="Supplier"
//               variant="outlined"
//               name="supplier"
//               value={newProduct.supplier}
//               onChange={handleInputChange}
//               required
//               sx={{ mr: 2 }}
//             />
//             <TextField
//               label="Purchase Price"
//               variant="outlined"
//               name="purchasePrice"
//               value={newProduct.purchasePrice}
//               onChange={handleInputChange}
//               required
//               sx={{ mr: 2 }}
//             />
//             <TextField
//               label="Sale Price"
//               variant="outlined"
//               name="salePrice"
//               value={newProduct.salePrice}
//               onChange={handleInputChange}
//               required
//               sx={{ mr: 2 }}
//             />
//             <FormControl variant="outlined" sx={{ mr: 2, minWidth: 120 }}>
//               <InputLabel>Type</InputLabel>
//               <Select
//                 value={newProduct.type}
//                 onChange={handleTypeChange}
//                 label="Type"
//                 name="type"
//                 required
//               >
//                 {typeOptions.map((type, index) => (
//                   <MenuItem key={index} value={type}>{type}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//             <FormControl variant="outlined" sx={{ mr: 2, minWidth: 120 }}>
//               <InputLabel>Size</InputLabel>
//               <Select
//                 value={newProduct.size}
//                 onChange={handleInputChange}
//                 label="Size"
//                 name="size"
//                 required
//                 disabled={!newProduct.type}
//               >
//                 {(sizeOptions[newProduct.type] || []).map((size, index) => (
//                   <MenuItem key={index} value={size}>{size}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//             <TextField
//               label="Available Quantity"
//               variant="outlined"
//               name="availableQuantity"
//               value={newProduct.availableQuantity}
//               onChange={handleInputChange}
//               required
//               sx={{ mr: 2 }}
//             />
//             <Button variant="contained" onClick={addProduct} sx={{ ml: 'auto', mb: 2 }}>
//               {editMode ? 'Update' : 'Add'}
//             </Button>
//           </Box>
//           {error && <Typography color="error">{error}</Typography>}
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Product ID</TableCell>
//                   <TableCell>Supplier</TableCell>
//                   <TableCell>Purchase Price</TableCell>
//                   <TableCell>Sale Price</TableCell>
//                   <TableCell>Type</TableCell>
//                   <TableCell>Size</TableCell>
//                   <TableCell>Available Quantity</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filteredProducts.map((product) => (
//                   <TableRow key={product.productId}>
//                     <TableCell>{product.productId}</TableCell>
//                     <TableCell>{product.supplier}</TableCell>
//                     <TableCell>{product.purchasePrice}</TableCell>
//                     <TableCell>{product.salePrice}</TableCell>
//                     <TableCell>{product.type}</TableCell>
//                     <TableCell>{product.size}</TableCell>
//                     <TableCell>{product.availableQuantity}</TableCell>
//                     <TableCell>
//                       <Button onClick={() => updateProduct(product)}>Update</Button>
//                       <Button onClick={() => deleteProduct(product.productId)}>Delete</Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default ProductList;


// import React, { useState } from 'react';
// import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Typography } from '@mui/material';
// import AppbarCompany from "./AppbarCompany";
// import SidebarNavigation from "./Sidebar";
// import axios from 'axios';

// const ProductList = () => {
//   const [newProduct, setNewProduct] = useState({
//     supplier_id: '',
//     purchase_price: '',
//     sale_price: '',
//     type: '',
//     size: ''
//   });

//   const [products, setProducts] = useState([
//     { productId: '1', supplier: 'Supplier 1', purchasePrice: '10', salePrice: '20', type: 'Type 1', size: 'Size 1' },
//     { productId: '2', supplier: 'Supplier 2', purchasePrice: '20', salePrice: '30', type: 'Type 2', size: 'Size 2' },
//     // Add more products as needed
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const addProduct = async () => {
//     if (!newProduct.supplier_id || !newProduct.purchase_price || !newProduct.sale_price || !newProduct.type || !newProduct.size) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     try {
//       const response = await axios.post('/api/products', newProduct);
//       if (response.status === 200) {
//         setProducts([...products, { ...newProduct, productId: response.data.productId }]);
//         setNewProduct({
//           supplier_id: '',
//           purchase_price: '',
//           sale_price: '',
//           type: '',
//           size: ''
//         });
//         setError('');
//       }
//     } catch (err) {
//       setError('Failed to add product.');
//     }
//   };

//   const deleteProduct = (productId) => {
//     setProducts(products.filter((product) => product.productId !== productId));
//   };

//   const updateProduct = (productId) => {
//     setProducts(
//       products.map((product) =>
//         product.productId === productId ? { ...newProduct, productId: product.productId } : product
//       )
//     );
//     setNewProduct({
//       supplier_id: '',
//       purchase_price: '',
//       sale_price: '',
//       type: '',
//       size: ''
//     });
//   };

//   const filteredProducts = products.filter(
//     (product) =>
//       product.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.productId.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <AppbarCompany />
//       <Box sx={{ display: 'flex' }}>
//         <SidebarNavigation />
//         <Box sx={{ flexGrow: 1, p: 3, ml: '5px', width: 'calc(100% - 210px)', mt: '10px' }}>
//           <TextField
//             label="Search"
//             variant="outlined"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             sx={{ mb: 2 }}
//           />
//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//             <TextField
//               label="Supplier"
//               variant="outlined"
//               name="supplier_id"
//               value={newProduct.supplier_id}
//               onChange={handleInputChange}
//               required
//               sx={{ mr: 2 }}
//             />
//             <TextField
//               label="Purchase Price"
//               variant="outlined"
//               name="purchase_price"
//               value={newProduct.purchase_price}
//               onChange={handleInputChange}
//               required
//               sx={{ mr: 2 }}
//             />
//             <TextField
//               label="Sale Price"
//               variant="outlined"
//               name="sale_price"
//               value={newProduct.sale_price}
//               onChange={handleInputChange}
//               required
//               sx={{ mr: 2 }}
//             />
//             <TextField
//               label="Type"
//               variant="outlined"
//               name="type"
//               value={newProduct.type}
//               onChange={handleInputChange}
//               required
//               sx={{ mr: 2 }}
//             />
//             <TextField
//               label="Size"
//               variant="outlined"
//               name="size"
//               value={newProduct.size}
//               onChange={handleInputChange}
//               required
//               sx={{ mr: 2 }}
//             />
//             <Button variant="contained" onClick={addProduct} sx={{ ml: 'auto', mb: 2 }}>Add</Button>
//           </Box>
//           {error && <Typography color="error">{error}</Typography>}
//           <Typography variant="h5" gutterBottom>Product Details</Typography>
//           <TableContainer component={Paper} sx={{ mt: 2 }}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Product ID</TableCell>
//                   <TableCell>Supplier</TableCell>
//                   <TableCell>Purchase Price</TableCell>
//                   <TableCell>Sale Price</TableCell>
//                   <TableCell>Type</TableCell>
//                   <TableCell>Size</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filteredProducts.map((product, index) => (
//                   <TableRow key={index} onClick={() => setNewProduct(product)}>
//                     <TableCell>{product.productId}</TableCell>
//                     <TableCell>{product.supplier}</TableCell>
//                     <TableCell>{product.purchasePrice}</TableCell>
//                     <TableCell>{product.salePrice}</TableCell>
//                     <TableCell>{product.type}</TableCell>
//                     <TableCell>{product.size}</TableCell>
//                     <TableCell>
//                       <Button variant="contained" onClick={() => deleteProduct(product.productId)}>Delete</Button>
//                       <Button variant="contained" onClick={() => updateProduct(product.productId)} sx={{ ml: 1 }}>Update</Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default ProductList;

// import React, { useState } from 'react';
// import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Typography } from '@mui/material';
// import AppbarCompany from "./AppbarCompany";
// import SidebarNavigation from "./Sidebar";
// import axios from 'axios';

// const ProductList = () => {
//   const [newProduct, setNewProduct] = useState({
//     productId: '',
//     supplier: '',
//     purchasePrice: '',
//     salePrice: '',
//     type: '',
//     size: ''
//   });

//   const [products, setProducts] = useState([
//     { productId: '1', supplier: 'Supplier 1', purchasePrice: '10', salePrice: '20', type: 'Type 1', size: 'Size 1' },
//     { productId: '2', supplier: 'Supplier 2', purchasePrice: '20', salePrice: '30', type: 'Type 2', size: 'Size 2' },
//     // Add more products as needed
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const addProduct = async () => {
//     if (!newProduct.productId || !newProduct.supplier || !newProduct.purchasePrice || !newProduct.salePrice || !newProduct.type || !newProduct.size) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:8000/api/product/addProductController', newProduct);
//       setProducts([...products, { ...newProduct }]);
//       setNewProduct({
//         productId: '',
//         supplier: '',
//         purchasePrice: '',
//         salePrice: '',
//         type: '',
//         size: ''
//       });
//       setError('');
//     } catch (err) {
//       setError('Failed to add product.');
//     }
//   };

//   const deleteProduct = (productId) => {
//     setProducts(products.filter((product) => product.productId !== productId));
//   };

//   const updateProduct = (productId) => {
//     setProducts(
//       products.map((product) =>
//         product.productId === productId ? { ...newProduct, productId: product.productId } : product
//       )
//     );
//     setNewProduct({
//       productId: '',
//       supplier: '',
//       purchasePrice: '',
//       salePrice: '',
//       type: '',
//       size: ''
//     });
//   };

//   const filteredProducts = products.filter(
//     (product) =>
//       product.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.productId.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <AppbarCompany />
//       <Box sx={{ display: 'flex' }}>
//         <SidebarNavigation />
//         <Box sx={{ flexGrow: 1, p: 3, ml: '5px', width: 'calc(100% - 210px)', mt: '10px' }}>
//           <TextField
//             label="Search"
//             variant="outlined"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             sx={{ mb: 2 }}
//           />
//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//             <TextField
//               label="Product ID"
//               variant="outlined"
//               name="productId"
//               value={newProduct.productId}
//               onChange={handleInputChange}
//               required
//               sx={{ mr: 2 }}
//             />
//             <TextField
//               label="Supplier"
//               variant="outlined"
//               name="supplier"
//               value={newProduct.supplier}
//               onChange={handleInputChange}
//               required
//               sx={{ mr: 2 }}
//             />
//             <TextField
//               label="Purchase Price"
//               variant="outlined"
//               name="purchasePrice"
//               value={newProduct.purchasePrice}
//               onChange={handleInputChange}
//               required
//               sx={{ mr: 2 }}
//             />
//             <TextField
//               label="Sale Price"
//               variant="outlined"
//               name="salePrice"
//               value={newProduct.salePrice}
//               onChange={handleInputChange}
//               required
//               sx={{ mr: 2 }}
//             />
//             <TextField
//               label="Type"
//               variant="outlined"
//               name="type"
//               value={newProduct.type}
//               onChange={handleInputChange}
//               required
//               sx={{ mr: 2 }}
//             />
//             <TextField
//               label="Size"
//               variant="outlined"
//               name="size"
//               value={newProduct.size}
//               onChange={handleInputChange}
//               required
//               sx={{ mr: 2 }}
//             />
//             <Button variant="contained" onClick={addProduct} sx={{ ml: 'auto', mb: 2 }}>Add</Button>
//           </Box>
//           {error && <Typography color="error">{error}</Typography>}
//           <Typography variant="h5" gutterBottom>Product Details</Typography>
//           <TableContainer component={Paper} sx={{ mt: 2 }}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Product ID</TableCell>
//                   <TableCell>Supplier</TableCell>
//                   <TableCell>Purchase Price</TableCell>
//                   <TableCell>Sale Price</TableCell>
//                   <TableCell>Type</TableCell>
//                   <TableCell>Size</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filteredProducts.map((product, index) => (
//                   <TableRow key={index} onClick={() => setNewProduct(product)}>
//                     <TableCell>{product.productId}</TableCell>
//                     <TableCell>{product.supplier}</TableCell>
//                     <TableCell>{product.purchasePrice}</TableCell>
//                     <TableCell>{product.salePrice}</TableCell>
//                     <TableCell>{product.type}</TableCell>
//                     <TableCell>{product.size}</TableCell>
//                     <TableCell>
//                       <Button variant="contained" onClick={() => deleteProduct(product.productId)}>Delete</Button>
//                       <Button variant="contained" onClick={() => updateProduct(product.productId)} sx={{ ml: 1 }}>Update</Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default ProductList;


import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import AppbarCompany from "./AppbarCompany";
import SidebarNavigation from "./Sidebar";
import axios from 'axios';

const typeOptions = ['PCR Tires', 'Bike Tires', 'Batteries'];

const sizeOptions = {
  'PCR Tires': ['195-15', '185-14', '195-14', '165-14', '145-70-12', '145-80-12', '155-12', '155-80-12', '155-70-12', '155-65-13', '165-65-13', '165-80-13', '185-70-14', '175-70-14', '175-70-13', '175-70-13', '175-65-15', '185-65-15', '185-65-15', '195-65-15', '175-65-15', '185-55-16', '165-70-14', '155-70-12', '155-80-13', '165-70-13', '155-70-13', '155-65-14', '155-65-14', '165-55-14', '165-55-14', '165-13', '155-65-13'],
  'Bike Tires': ['130-90-15', '140-60-17', '90-90-17', '100-90-10', '100-90-18', '100-90-17', '300-18', '300-18', '275-18', '120-80-17', '120-80-16', '90-90-17', '110/80/10', '275-17', '140-70-17', '300-17', '110-80-17', '110-80-12', '100-80-12', '250-17', '225-17', '275-14', '275-18', '300-17', '300-17', '275-17', '90/90/12', '140-60-17', '130-70-17', '100-90-18', '300-17', '90-90-18', '275-18', '100-80-17', '120/70/13', '130/70/13', '100-90-14', '90-90-14'],
  'Batteries': ['500 ML W/B', '1 L', 'Acid 1 L', 'Acid 750', 'Acid 500', '65 AH', '12v4 MF', 'Utz-5s', '6N6- 3B', 'YB5L-BS', 'UTZ-7L-BS', 'YB7B-BS', 'YB2-5L-BS', 'UTX5L-BS', '12N9-BS', 'UTX9-BS', 'UTX7A-BS']
};

const ProductList = () => {
  const [newProduct, setNewProduct] = useState({
    productId: '',
    supplier: '',
    purchasePrice: '',
    salePrice: '',
    type: '',
    size: '',
    availableQuantity: ''
  });

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleTypeChange = (e) => {
    const { value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      type: value,
      size: '' // Reset size when type changes
    }));
  };

  const addProduct = async () => {
    if (!newProduct.productId || !newProduct.supplier || !newProduct.purchasePrice || !newProduct.salePrice || !newProduct.type || !newProduct.size || !newProduct.availableQuantity) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      if (editMode) {
        await axios.put(`/api/products/${newProduct.productId}`, newProduct);
        setEditMode(false);
      } else {
        await axios.post('/api/products', newProduct);
      }

      fetchProducts();
      setNewProduct({
        productId: '',
        supplier: '',
        purchasePrice: '',
        salePrice: '',
        type: '',
        size: '',
        availableQuantity: ''
      });
      setError('');
    } catch (error) {
      console.error('Error saving product:', error);
      setError('Error saving product. Please try again.');
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      setError('Error deleting product. Please try again.');
    }
  };

  const updateProduct = (product) => {
    setNewProduct(product);
    setEditMode(true);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.productId.toLowerCase().includes(searchTerm.toLowerCase())
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
              label="Product ID"
              variant="outlined"
              name="productId"
              value={newProduct.productId}
              onChange={handleInputChange}
              required
              sx={{ mr: 2 }}
              disabled={editMode} // Disable Product ID field when in edit mode
            />
            <TextField
              label="Supplier"
              variant="outlined"
              name="supplier"
              value={newProduct.supplier}
              onChange={handleInputChange}
              required
              sx={{ mr: 2 }}
            />
            <TextField
              label="Purchase Price"
              variant="outlined"
              name="purchasePrice"
              value={newProduct.purchasePrice}
              onChange={handleInputChange}
              required
              sx={{ mr: 2 }}
            />
            <TextField
              label="Sale Price"
              variant="outlined"
              name="salePrice"
              value={newProduct.salePrice}
              onChange={handleInputChange}
              required
              sx={{ mr: 2 }}
            />
            <FormControl variant="outlined" sx={{ mr: 2, minWidth: 120 }}>
              <InputLabel>Type</InputLabel>
              <Select
                value={newProduct.type}
                onChange={handleTypeChange}
                label="Type"
                name="type"
                required
              >
                {typeOptions.map((type, index) => (
                  <MenuItem key={index} value={type}>{type}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ mr: 2, minWidth: 120 }}>
              <InputLabel>Size</InputLabel>
              <Select
                value={newProduct.size}
                onChange={handleInputChange}
                label="Size"
                name="size"
                required
                disabled={!newProduct.type}
              >
                {(sizeOptions[newProduct.type] || []).map((size, index) => (
                  <MenuItem key={index} value={size}>{size}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Available Quantity"
              variant="outlined"
              name="availableQuantity"
              value={newProduct.availableQuantity}
              onChange={handleInputChange}
              required
              sx={{ mr: 2 }}
            />
            <Button variant="contained" onClick={addProduct} sx={{ ml: 'auto', mb: 2 }}>
              {editMode ? 'Update' : 'Add'}
            </Button>
          </Box>
          {error && <Typography color="error">{error}</Typography>}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product ID</TableCell>
                  <TableCell>Supplier</TableCell>
                  <TableCell>Purchase Price</TableCell>
                  <TableCell>Sale Price</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Available Quantity</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.productId}>
                    <TableCell>{product.productId}</TableCell>
                    <TableCell>{product.supplier}</TableCell>
                    <TableCell>{product.purchasePrice}</TableCell>
                    <TableCell>{product.salePrice}</TableCell>
                    <TableCell>{product.type}</TableCell>
                    <TableCell>{product.size}</TableCell>
                    <TableCell>{product.availableQuantity}</TableCell>
                    <TableCell>
                      <Button onClick={() => updateProduct(product)}>Update</Button>
                      <Button onClick={() => deleteProduct(product.productId)}>Delete</Button>
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

export default ProductList;
