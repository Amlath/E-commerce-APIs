const express = require('express');
const { getAllBrand, createBrand, getBrandById, updateBrand, deleteBrand } = require('../controllers/brand-controllers');

const router = express.Router();

router.route('/').get(getAllBrand).post(createBrand);
router.route('/:id').get(getBrandById).put(updateBrand).delete(deleteBrand);

module.exports = router;