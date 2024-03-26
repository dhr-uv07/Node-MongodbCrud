const db = require('../models/index');
const Product = db.product;
const Category = db.category;

const createProduct = async(req, res) =>{
    try{
        const {prodName, description, categoryId, brand, price, countInStock, rating } = req.body;
        const data ={
            prodName,
            description,
            categoryId,
            brand,
            price,
            countInStock,
            rating,
        }
        const product = await Product.create(data);
        if(product){
            res.status(200).send('Product created Successfully');
        }else{
            res.status(404).send('Something went wrong');
        }
    }
    catch(error){
        console.log(error);
    }
};

const updateProduct = async(req, res) =>{
    try{
        const productId = req.params.id;
        const product = await Product.update(req.body,{
            where:{
                id: productId,
            }
        })
        if(product){
            res.status(200).send('Product updated Successfully');
        }else{
            res.status(400).send('Something Went Wrong');
        }
    }catch(error){
        console.log(error);
    }
};

const deleteProduct = async(req, res) =>{
    try{
        const productId = req.params.id;
        const product = await Product.findOne({
            where:{
                id: productId,
            }
        })
        if(category){
            await Product.destroy({
                where:{
                    id: productId,
                }
            });
            res.status(200).send('Product Deleted successfully');
        }else{
            res.status(404).send('Something went wrong');
        }
    }catch(error){
        console.log(error);
    }
}

const getProductsAndCategories = async (req, res) => {
    try {
      const products = await Product.findAll({
        include: [{
            model: Category,
            as: 'category',
            attributes: ['catName'],
          }],
      })
      return res.status(200).json(products);
    } catch (error) {
      console.error('Error fetching products with categories:', error);
      return res.status(500).send('Internal Server Error');
    }
  };
  



module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProductsAndCategories,
}


