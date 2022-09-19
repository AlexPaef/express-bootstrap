const React = require('react');
const Layout = require('./Layout');

module.exports = function TodoEdit({ todo }) {
  return (
    <Layout>
      <a href='/todos'>Назад</a>
      <h1>Задача # {todo.id}</h1>
      <form action='/todos/edit' method='POST'>
        <input type='hidden' name='id' value={todo.id} />
        <div className='mb-3'>
          <label htmlFor='input1' className='form-label'>
            Название
          </label>
          <input
            name='title'
            type='text'
            className='form-control'
            id='input1'
            value={todo.title}
          />
          <label htmlFor='input2' className='form-label'>
            Описание
          </label>
          <textarea
            name='description'
            type='text'
            className='form-control'
            id='input2'
            value={todo.description}
          />
        </div>
        <button className='btn btn-primary mb-3' type='submit'>
          Изменить
        </button>
      </form>
    </Layout>
  );
};
