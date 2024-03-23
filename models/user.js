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









/*
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Example using SQLite, adjust for your database
---------------------------------------------------
class User extends Model {}

User.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

// Now the model is defined and can be used
------------------------------------------------------------
class User extends Model {
  // Instance level method
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Class level method
  static findByFullName(name) {
    const [firstName, lastName] = name.split(' ');
    return this.findOne({ where: { firstName, lastName } });
  }
}

// Remember to initialize the model as shown previously
------------------------------------------------------------
User.init({
  // attributes
}, {
  sequelize,
  modelName: 'User',
  hooks: {
    beforeCreate: (user, options) => {
      // Some logic before a user is created
    },
  }
});
--------------------------------------------------------
(async () => {
  await sequelize.sync({ force: true }); // Sync models with the database
  const user = await User.create({ firstName: 'Jane', lastName: 'Doe' });
  console.log(user.getFullName()); // "Jane Doe"
  const userByName = await User.findByFullName('Jane Doe');
  console.log(userByName.firstName); // "Jane"
})();
--------------------------------------------------


*/
