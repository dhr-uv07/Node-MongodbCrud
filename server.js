const express = require('express');
const db = require('./models/index');
const sequelize = db.sequelize;
const catRoutes = require('./routes/categoryRoutes');
const proRoutes = require('./routes/productRoutes');
const PORT = 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ alter: true, match: /product_management$/ }).then(() => {
  console.log('db has been synced');
}).catch((err) => {
  console.log(err);
});

app.use('/api/category/', catRoutes);
app.use('/api/product/', proRoutes); 

app.listen(PORT, () => {
  console.log(`Application is listening on port ${PORT}`);
});