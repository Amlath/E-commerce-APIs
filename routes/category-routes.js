const express = require('express');
const { getAllCategory, getCategoryById, createCategory, updateCategory, deleteCategory } = require('../controllers/category-controllers');

const router = express.Router();

router.route('/').get(getAllCategory).post(createCategory);
router.route('/:id').get(getCategoryById).put(updateCategory).delete(deleteCategory);

module.exports = router;