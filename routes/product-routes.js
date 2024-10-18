const express = require('express');
const { getAllProduct, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/product-controllers');

const router = express.Router();

router.route('/').get(getAllProduct).post(createProduct);
router.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);

module.exports = router;