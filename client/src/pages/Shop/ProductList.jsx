// import React, { useState } from 'react';
// import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Typography } from '@mui/material';
// import AppbarCompany from "./AppbarCompany";
// import SidebarNavigation from "./Sidebar";

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

//   const addProduct = () => {
//     if (!newProduct.productId || !newProduct.supplier || !newProduct.purchasePrice || !newProduct.salePrice || !newProduct.type || !newProduct.size) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     setProducts([...products, { ...newProduct }]);
//     setNewProduct({
//       productId: '',
//       supplier: '',
//       purchasePrice: '',
//       salePrice: '',
//       type: '',
//       size: ''
//     });
//     setError('');
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

import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Typography } from '@mui/material';
import AppbarCompany from "./AppbarCompany";
import SidebarNavigation from "./Sidebar";
import axios from 'axios';

const ProductList = () => {
  const [newProduct, setNewProduct] = useState({
    productId: '',
    supplier: '',
    purchasePrice: '',
    salePrice: '',
    type: '',
    size: ''
  });

  const [products, setProducts] = useState([
    { productId: '1', supplier: 'Supplier 1', purchasePrice: '10', salePrice: '20', type: 'Type 1', size: 'Size 1' },
    { productId: '2', supplier: 'Supplier 2', purchasePrice: '20', salePrice: '30', type: 'Type 2', size: 'Size 2' },
    // Add more products as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const addProduct = async () => {
    if (!newProduct.productId || !newProduct.supplier || !newProduct.purchasePrice || !newProduct.salePrice || !newProduct.type || !newProduct.size) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      await axios.post('http://localhost:8000/api/product/addProductController', newProduct);
      setProducts([...products, { ...newProduct }]);
      setNewProduct({
        productId: '',
        supplier: '',
        purchasePrice: '',
        salePrice: '',
        type: '',
        size: ''
      });
      setError('');
    } catch (err) {
      setError('Failed to add product.');
    }
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.productId !== productId));
  };

  const updateProduct = (productId) => {
    setProducts(
      products.map((product) =>
        product.productId === productId ? { ...newProduct, productId: product.productId } : product
      )
    );
    setNewProduct({
      productId: '',
      supplier: '',
      purchasePrice: '',
      salePrice: '',
      type: '',
      size: ''
    });
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
            <TextField
              label="Type"
              variant="outlined"
              name="type"
              value={newProduct.type}
              onChange={handleInputChange}
              required
              sx={{ mr: 2 }}
            />
            <TextField
              label="Size"
              variant="outlined"
              name="size"
              value={newProduct.size}
              onChange={handleInputChange}
              required
              sx={{ mr: 2 }}
            />
            <Button variant="contained" onClick={addProduct} sx={{ ml: 'auto', mb: 2 }}>Add</Button>
          </Box>
          {error && <Typography color="error">{error}</Typography>}
          <Typography variant="h5" gutterBottom>Product Details</Typography>
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product ID</TableCell>
                  <TableCell>Supplier</TableCell>
                  <TableCell>Purchase Price</TableCell>
                  <TableCell>Sale Price</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProducts.map((product, index) => (
                  <TableRow key={index} onClick={() => setNewProduct(product)}>
                    <TableCell>{product.productId}</TableCell>
                    <TableCell>{product.supplier}</TableCell>
                    <TableCell>{product.purchasePrice}</TableCell>
                    <TableCell>{product.salePrice}</TableCell>
                    <TableCell>{product.type}</TableCell>
                    <TableCell>{product.size}</TableCell>
                    <TableCell>
                      <Button variant="contained" onClick={() => deleteProduct(product.productId)}>Delete</Button>
                      <Button variant="contained" onClick={() => updateProduct(product.productId)} sx={{ ml: 1 }}>Update</Button>
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
