const brandRepositories = require('../repositories/brand-repositories');
const asyncHandler = require('../middlewares/async-handler');
const ErrorResponse = require('../utils/error-response');

const getAllBrand = asyncHandler(async (req, res, next) => {
  const brands = await brandRepositories.getAllBrand();
  res.status(200).json({success: true, data: brands});
})

const getBrandById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const brand = await brandRepositories.getBrandById(id);
  res.status(200).json({success: true, data: brand});
})

const createBrand = asyncHandler(async(req, res, next) => {
  const name = req.body.name;
  const created = await brandRepositories.createBrand(name);
  if(created)
    res.status(201).json({success: true, message: "New brand added"})
})

const updateBrand = asyncHandler(async(req, res, next) => {
  const id = req.params.id;
  const brand_exists = await brandRepositories.checkBrandExists(id);  
  if(brand_exists) {
    const name = req.body.name;
    await brandRepositories.updateBrand(id, name);
    res.status(200).json({message: "Updated brand"});
  } else next(new ErrorResponse(`Brand doesn't exist with id ${id}`, 404));
})

const deleteBrand = asyncHandler(async(req, res, next) => {
  const id = req.params.id;
  const brand_exists = await brandRepositories.checkBrandExists(id);  
  if(brand_exists) {
    await brandRepositories.deleteBrand(id);
    res.status(200).json({message: "Deleted brand"});
  } else next(new ErrorResponse(`Brand doesn't exist with id ${id}`, 404));
})

module.exports = {
  getAllBrand,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand
}