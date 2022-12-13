import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { delete_todo, read_todo } from '../api/todo.api';
function ShowTodo() {
  const [todos, setTodos] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    const fetching = async () => {
      const result = await read_todo();
      setTodos(result);
    };
    fetching();
  }, [currentId]);

  async function deleteTodo(id) {
    await delete_todo(id);
    alert('the record is deleted');
    clearField();
  }
  const clearField = () => {
    setCurrentId(0);
  };
  const free = {
    border: 'none',
    backgroundColor: 'transparent',
    color: 'green',
  };
  return (
    <div className="container mt-4">
      <h3>Todo List</h3>
      {todos.length < 1 ? (
        <div className="text-center">
          <h4> Not Registered Todo</h4>
          <Link to="/create">
            <button className="btn btn-secondary">Create One</button>
          </Link>
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">text</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo._id}>
                <td>{todo.text}</td>
                <td>
                  <Link to={`/update/${todo._id}`}>
                    {' '}
                    <i className="bi bi-pencil"></i>{' '}
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() =>
                      setCurrentId(todo._id) + deleteTodo(todo._id)
                    }
                    style={free}
                  >
                    <i className="bi bi-trash"></i>{' '}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default ShowTodo;
