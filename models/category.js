const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) =>{
    class Category extends Model{}
    Category.init({
        catName:{
            type: DataTypes.STRING,
            allowNull : false,
        },
    },{
        sequelize,
        modelName : 'Category',
        freezeTableName: true,
    });
    return Category;
};





 











/*
const { Model, DataTypes } = require('sequelize');
// const db = require('./index');
// const sequelize = db.sequelize;
module.exports = (sequelize, DataTypes) => {
  class User extends Model { }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

// models/category.js
module.exports = (sequelize, DataTypes) => {
  class Category extends sequelize.Sequelize.Model {
    static associate(models) {
      // Define association here
      this.hasMany(models.Product, { foreignKey: 'categoryId', as: 'products' });
    }
  }

  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Other attributes...
  }, {
    sequelize,
    modelName: 'Category',
  });

  return Category;
};





*/