const express = require('express');
const { getAllCustomer, getCustomerById, createCustomer, updateCustomer, deleteCustomer } = require('../controllers/customer-controllers');

const router = express.Router();

router.route('/').get(getAllCustomer).post(createCustomer);
router.route('/:id').get(getCustomerById).put(updateCustomer).delete(deleteCustomer);

module.exports = router;