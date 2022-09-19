const route = require('express').Router();

const { Todo } = require('../../db/models');
const renderTemplate = require('../utils/renderTemplate');

const Todos = require('../views/Todos');
const TodoDetail = require('../views/TodoDetail');
const TodoEdit = require('../views/TodoEdit');

route.get('/', async (req, res) => {
  const todos = await Todo.findAll({ raw: true });
  renderTemplate(Todos, { todos }, res);
});

route.post('/add', async (req, res) => {
  const { title, description } = req.body;
  try {
    await Todo.create({ title, description });
  } catch (error) {
    console.log(error);
  }

  res.redirect('/todos');
});

route.post('/delete', async (req, res) => {
  const { id } = req.body;
  try {
    await Todo.destroy({ where: { id: id } });
  } catch (error) {
    console.log(error);
  }

  res.redirect('/todos');
});

route.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id, { raw: true });
    renderTemplate(TodoDetail, { todo }, res);
  } catch (error) {
    console.log(error);
  }
});

route.get('/edit/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id, { raw: true });
    renderTemplate(TodoEdit, { todo }, res);
  } catch (error) {
    console.log(error);
  }
});

route.post('/edit', async (req, res) => {
  const { id, title, description } = req.body;
  try {
    await Todo.update(
      {
        title: title,
        description: description,
      },
      { where: { id: id } }
    );
  } catch (error) {
    console.log(error);
  }

  res.redirect('/todos');
});

module.exports = route;
