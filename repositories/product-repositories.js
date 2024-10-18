const { Product } = require('../models/models');

getAllProduct = () => {
  return new Promise((resolve, reject) => {
    Product.findAll().then(products => {
      resolve(products);
    }).catch(error => {
      reject(error);
    })
  })
}

getProductById = (id) => {
  return new Promise((resolve, reject) => {
    Product.findByPk(id).then(product => {
      resolve(product);
    }).catch(error => {
      reject(error);
    })
  })
}

getPriceByProductId = (id) => {
  return new Promise((resolve, reject) => {
    Product.findByPk(id).then(price => {
      resolve(price.price);
    }).catch(error => {
      reject(error);
    })
  })
}

createProduct = (name, category_id, brand_id, price, offer_price) => {
  return new Promise((resolve, reject) => {
    Product.create({name, category_id, brand_id, price, offer_price}).then(data => {
      resolve(true);
    }).catch(error => {
      reject(error);
    })
  })
}

checkProductExists = (id) => {
  return new Promise((resolve, reject) => {
    Product.findByPk(id).then(data => {
      resolve(true);
    }).catch(error => {
      resolve(false);
    })
  })  
}

updateProduct = (id, name, category, brand, price, offerprice) => {
  return new Promise((resolve, reject) => {
    Product.update(
      {name: name, category_id: category, brand_id: brand, price: price, offer_price: offerprice},      
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

deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    Product.destroy(
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
  getAllProduct,
  getProductById,
  createProduct,
  checkProductExists,
  updateProduct,
  deleteProduct,
  getPriceByProductId
}