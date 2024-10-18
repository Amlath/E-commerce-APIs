const { Order } = require('../models/models');

getAllOrder = () => {
  return new Promise((resolve, reject) => {
    Order.findAll().then(orders => {
      resolve(orders);
    }).catch(error => {
      reject(error);
    })
  })
}

getOrderById = (id) => {
  return new Promise((resolve, reject) => {
    Order.findByPk(id).then(order => {
      resolve(order);
    }).catch(error => {
      reject(error);
    })
  })
}

checkOrderExists = (id) => {
  return new Promise((resolve, reject) => {
    Order.findByPk(id).then(data => {
      resolve(true);
    }).catch(error => {
      resolve(false);
    })
  })  
}

createOrder = (customer_id, product_id, quantity, order_date, order_delivery_date, status, price) => {
  return new Promise((resolve, reject) => {
    Order.create({customer_id, product_id, quantity, order_date, order_delivery_date, status, price}).then(data => {
      resolve(true);
    }).catch(error => {
      reject(error);
    })
  })
}

updateOrder = (id, status) => {
  return new Promise((resolve, reject) => {
    Order.update(
      {status: status}, 
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

deleteOrder = (id) => {
  return new Promise((resolve, reject) => {
    Order.destroy(
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
  getAllOrder,
  getOrderById,
  createOrder,
  checkOrderExists,
  updateOrder,
  deleteOrder
}