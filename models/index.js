const Sequelize = require('sequelize');
const User = require('./user');
const sequelize = new Sequelize(`postgres://postgres:31102000@localhost:5432/practwo`, { dailect: 'postgres' });

sequelize.authenticate().then(() => {
  console.log('Database Connected');
}).catch((error) => {
  console.log('Unable to Connect', error);
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = User(sequelize, Sequelize);


module.exports = db;