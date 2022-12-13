import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { create_todo, get_todo, update_todo } from '../api/todo.api';

export default function CreateTodo() {
  const params = useParams();
  const { id } = params;

  const [todo, setTodo] = useState({ text: '' });
  const navigate = useNavigate();

  useState(() => {
    const fetching = async (id) => {
      if (id) {
        const result = await get_todo(id);
        setTodo(result);
      }
    };
    fetching(id);
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (id) {
      await update_todo(id, todo);
    } else {
      await create_todo(todo);
    }
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h3>Create Todo Item</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group mb-3">
          <label htmlFor="text">Text:</label>
          <input
            type="text"
            value={todo.text}
            onChange={(e) => setTodo({ ...todo, text: e.target.value })}
            className="form-control mt-2"
            id="text"
          />
        </div>
        <button type="submit" className="btn btn-primary moreW">
          {id ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
}
