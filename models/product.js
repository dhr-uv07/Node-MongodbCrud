const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Product extends Model { }
    Product.init({
        prodName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Category',
                key: 'id',
            },
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        countInStock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Product',
        freezeTableName: true,
    });
    return Product;
};