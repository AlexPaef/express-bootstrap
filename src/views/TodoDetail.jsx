const React = require('react');
const Layout = require('./Layout');

module.exports = function TodoDetail({ todo }) {
  return (
    <Layout>
      <a href='/todos'>Назад</a>
      <h1>Задача # {todo.id}</h1>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
    </Layout>
  );
};
