const { Brand } = require('../models/models');

getAllBrand = () => {
  return new Promise((resolve, reject) => {
    Brand.findAll().then(brands => {
      resolve(brands);
    }).catch(error => {
      reject(error);
    })
  })
}

getBrandById = (id) => {
  return new Promise((resolve, reject) => {
    Brand.findByPk(id).then(brand => {
      resolve(brand);
    }).catch(error => {
      reject(error);
    })
  })
}

createBrand = (name) => {
  return new Promise((resolve, reject) => {
    Brand.create({name}).then(data => {
      resolve(true);
    }).catch(error => {
      reject(error);
    })
  })
}

checkBrandExists = (id) => {
  return new Promise((resolve, reject) => {
    Brand.findByPk(id).then(data => {
      resolve(true);
    }).catch(error => {
      resolve(false);
    })
  })  
}

updateBrand = (id, name) => {
  return new Promise((resolve, reject) => {
    Brand.update(
      {name: name}, 
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

deleteBrand = (id) => {
  return new Promise((resolve, reject) => {
    Brand.destroy(
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
  getAllBrand,
  getBrandById,
  createBrand,
  checkBrandExists,
  updateBrand,
  deleteBrand
}