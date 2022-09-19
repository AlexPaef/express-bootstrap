const React = require('react');
const Layout = require('./Layout');

module.exports = function Todos({ todos }) {
  return (
    <Layout>
      <h1>Список задач</h1>
      <form action='/todos/add' method='POST'>
        <div className='mb-3'>
          <label htmlFor='input1' className='form-label'>
            Название
          </label>
          <input
            name='title'
            type='text'
            className='form-control'
            id='input1'
          />
          <label htmlFor='input2' className='form-label'>
            Описание
          </label>
          <textarea
            name='description'
            type='text'
            className='form-control'
            id='input2'
          />
        </div>
        <button className='btn btn-primary mb-3' type='submit'>
          Добавить
        </button>
      </form>
      {todos.map((el) => (
        <div key={el.id} className='card mb-3'>
          <div className='card-body'>
            <h5 className='card-title'>{el.title}</h5>
            <p className='card-text'>{el.description}</p>
            <div className='row'>
              <div className='col-2'>
                <a className='btn btn-secondary' href={`/todos/${el.id}`}>
                  Подробнее
                </a>
              </div>
              <div className='col-2'>
                <a className='btn btn-warning' href={`/todos/edit/${el.id}`}>
                  Изменить
                </a>
              </div>
              <div className='col'>
                <form action='/todos/delete' method='POST'>
                  <input type='hidden' name='id' value={el.id} />
                  <button className='btn btn-danger' type='submit'>
                    Удалить
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Layout>
  );
};
