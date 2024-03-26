const {Sequelize, DataTypes} = require('sequelize');
const category = require('./category');
const product = require('./product');

const sequelize = new Sequelize(`postgres://postgres:31102000@localhost:5432/product_management`, {dialect: 'postgres'});

const connection = async(sequelize) =>{
    try{
    await sequelize.authenticate();
    console.log('Database Connected Successfully');
    }catch(error){
    console.log('Unable to connect', error);
    }
}

connection(sequelize);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.category = category(sequelize, Sequelize);
db.product = product(sequelize, Sequelize);
db.category.hasMany(db.product, { foreignKey: 'categoryId', as: 'products' });
db.product.belongsTo(db.category, { foreignKey: 'categoryId', as: 'category' });

module.exports = db;

