const { getPriceByProductId } = require("../repositories/product-repositories")

calculatePrice = async(id, quantity) => {
  const price = await getPriceByProductId(id);
  const order_price = price * quantity;
  return order_price;
}

module.exports = calculatePrice;