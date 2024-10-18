const { Customer } = require('../models/models');

getAllCustomer = () => {
  return new Promise((resolve, reject) => {
    Customer.findAll().then(customers => {
      resolve(customers);
    }).catch(error => {
      reject(error);
    })
  })
}

getCustomerById = (id) => {
  return new Promise((resolve, reject) => {
    Customer.findByPk(id).then(customer => {
      resolve(customer);
    }).catch(error => {
      reject(error);
    })
  })
}

createCustomer = (name, email, password) => {
  return new Promise((resolve, reject) => {
    Customer.create({name, email, password}).then(data => {
      resolve(true);
    }).catch(error => {
      reject(error);
    })
  })
}

checkCustomerExists = (id) => {
  return new Promise((resolve, reject) => {
    Customer.findByPk(id).then(data => {
      resolve(true);
    }).catch(error => {
      resolve(false);
    })
  })  
}

updateCustomer = (id, name, email, password) => {
  return new Promise((resolve, reject) => {
    Customer.update(
      {name: name, email: email, password: password}, 
      {where: 
        {id: id},
      },
    ).then(data => {
      resolve(true);
    }).catch(error => {
      reject(error);
    })
  })
}

deleteCustomer = (id) => {
  return new Promise((resolve, reject) => {
    Customer.destroy(
      {where: 
        {id: id},
      },
    ).then(data => {
      resolve(true);
    }).catch(error => {
      reject(error);
    })
  })
}

module.exports = {
  getAllCustomer,
  getCustomerById,
  createCustomer,
  checkCustomerExists,
  updateCustomer,
  deleteCustomer
}