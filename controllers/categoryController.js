const db = require('../models/index');
const Category = db.category;
const Product = db.product;

const createCategory = async(req, res) =>{
    try{
        const { catName } = req.body;
        const data ={
            catName,
        }
        const category = await Category.create(data);
        if(category){
            res.status(200).send('Category Created successfully');
        }else{
            res.status(404).send('Something went wrong');
        }
    }
    catch(error){
        console.log(error);
    }
};

const deleteCategory = async(req, res) =>{
    try{
        const categoryId = req.params.id;
        const category = await Category.findOne({
            where:{
                id: categoryId,
            }
        })
        if(category){
            await Category.destroy({
                where:{
                    id: categoryId,
                }
            });
            res.status(200).send('Category Deleted successfully');
        }else{
            res.status(404).send('Something went wrong');
        }
    }catch(error){
        console.log(error);
    }
}

const getCategoryWiseProducts = async (req, res) => {
  try {
    const categoriesWithProducts = await Category.findAll({
      include: [{
        model: Product,
        as: 'products',
        attributes: ['prodName','description', 'brand', 'rating', 'price'], 
      }],
      order: [
        ['catName', 'ASC'], 
        // [{ model: Product, as: 'products' }, 'prodName', 'ASC'],
      ],
    });
    return res.status(200).json(categoriesWithProducts);
  } catch (error) {
    console.error('Error fetching category-wise products:', error);
    return res.status(500).send('Internal Server Error');
  }
};



module.exports = {
    createCategory,
    deleteCategory,
    getCategoryWiseProducts,
}