const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
//http://localhost:3001/api/users
router.use('/users', userRoutes); 
//http://localhost:3001/api/products
router.use('/products', productRoutes);

module.exports = router;
 