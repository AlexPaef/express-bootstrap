// External dependencies
const express = require('express');

const app = express();
const path = require('path');
require('dotenv').config();

// Internal dependencies
const { sequelize } = require('../db/models');
const renderTemplate = require('./utils/renderTemplate');
const Home = require('./views/Home');
const todosRoute = require('./routes/todos.route');
const isAdminCheck = require('./middleware/auth.middleware');
const PrivatePage = require('./views/PrivatePage');

const PORT = process.env.PORT ?? 3001;

app.use((req, res, next) => {
  console.log('Middleware');
  req.isAdmin = true;
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/')));

app.get('/', (req, res) => {
  renderTemplate(Home, {}, res);
});

app.get('/private', isAdminCheck, (req, res) => {
  renderTemplate(PrivatePage, {}, res);
});

app.use('/todos', todosRoute);

app.listen(PORT, async () => {
  console.log(`Server starting on PORT => ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Connect sequelize');
  } catch (error) {
    console.error(error);
  }
});
