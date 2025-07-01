import React from 'react';

export const TodoItem = ({ todo, onDelete, toggleComplete }) => {
  const textStyle = {
    textDecoration: todo.completed ? 'line-through' : 'none',
    color: todo.completed ? 'gray' : 'black',
    opacity: todo.completed ? 0.6 : 1,
  };

  return (
    <div className="card my-2 shadow-sm">
      <div className="card-body d-flex align-items-center">
        <input
          className="form-check-input me-3"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo)}
        />
        <div style={{ flexGrow: 1 }}>
          <h5 className="card-title" style={textStyle}>{todo.title}</h5>
          <p className="card-text" style={textStyle}>{todo.desc}</p>
        </div>
        <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>
          Delete
        </button>
      </div>
    </div>
  );
};


