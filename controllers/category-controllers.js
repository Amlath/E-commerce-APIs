const categoryRepositories = require('../repositories/category-repositories');
const asyncHandler = require('../middlewares/async-handler');
const ErrorResponse = require('../utils/error-response');

const getAllCategory = asyncHandler(async(req, res, next) => {
  const categories = await categoryRepositories.getAllCategory();
  res.status(200).json({success: true, data: categories});
})

const getCategoryById = asyncHandler(async(req, res, next) => {
  const id = req.params.id;
  const category = await categoryRepositories.getCategoryById(id);
  res.status(200).json({success: true, data: category});
})

const createCategory = asyncHandler(async(req, res, next) => {
  const name = req.body.name;
  const created = await categoryRepositories.createCategory(name);
  if(created)
    res.status(201).json({success: true, data: {message: "New category added"}});
})

const updateCategory = asyncHandler(async(req, res, next) => {
  const id = req.params.id;  
  const category_exists = await categoryRepositories.getCategoryById(id);
  if(category_exists) {
    const name = req.body.name;
    await categoryRepositories.updateCategory(id, name);
    res.status(200).json({message: "Updated category"});
  } else next(new ErrorResponse(`Category doesn't exist with id ${id}`, 404));
})

const deleteCategory = asyncHandler(async(req, res, next) => {
  const id = req.params.id;
  const category_exists = await categoryRepositories.checkCategoryExists(id);  
  if(category_exists) {
    await categoryRepositories.deleteCategory(id);
    res.status(200).json({message: "Deleted category"});
  } else next(new ErrorResponse(`Category doesn't exist with id ${id}`, 404));
})

module.exports = {
  getAllCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
}