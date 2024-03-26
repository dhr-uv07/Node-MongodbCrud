const db = require('../models/index');
const Product = db.product;


const uniqueProduct = async (req, res, next) => {
  try {
    const prodName = await Product.findOne({
      where: {
        prodName: req.body.prodName,
      }
    });
    if (prodName) {
      return res.status(400).send('productName already exists');
    }
  } catch (err) {
    console.log(err);
  }
  next();
};

module.exports = {
  uniqueProduct,
}