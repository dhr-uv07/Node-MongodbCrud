const express = require('express');
const db = require('./models/index');
const PORT = 8000;
const userRoutes = require('./routes/userRoutes');
const sequelize = db.sequelize;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ alter: true }).then(() => {
  console.log('db has been synced');
}).catch((error) => {
  console.log(error);
});

app.use('/api/user/', userRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
