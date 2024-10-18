const { Category } = require('../models/models');

getAllCategory = () => {
  return new Promise((resolve, reject) => {
    Category.findAll().then(categories => {
      resolve(categories);
    }).catch(error => {
      reject(error);
    })
  })
}

getCategoryById = (id) => {
  return new Promise((resolve, reject) => {
    Category.findByPk(id).then(category => {
      resolve(category);
    }).catch(error => {
      reject(error);
    })
  })
}

createCategory = (name) => {
  return new Promise((resolve, reject) => {
    Category.create({name}).then(data => {
      resolve(true);
    }).catch(error => {
      reject(error);
    })
  })
}

checkCategoryExists = (id) => {
  return new Promise((resolve, reject) => {
    Category.findByPk(id).then(data => {
      resolve(true);
    }).catch(error => {
      resolve(false);
    })
  })  
}

updateCategory = (id, name) => {
  return new Promise((resolve, reject) => {
    Category.update(
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

deleteCategory = (id) => {
  return new Promise((resolve, reject) => {
    Category.destroy(
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
  getAllCategory,
  getCategoryById,
  createCategory,
  checkCategoryExists,
  updateCategory,
  deleteCategory
}