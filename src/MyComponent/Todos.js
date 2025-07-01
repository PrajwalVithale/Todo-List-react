import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
  const myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  };

  return (
    <div className='container' style={myStyle}>
      <h3 className="text-center">Todos List</h3>
      {props.todos.length === 0 ? (
  <div className="text-center text-muted my-5">
    <img
      src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
      alt="No Todos"
      style={{ width: "120px", opacity: 0.5 }}
    />
    <p className="mt-3">No tasks to show. Add your first todo!</p>
  </div>
) : (
  props.todos.map((todo) => (
    <React.Fragment key={todo.sno}>
      <TodoItem todo={todo} onDelete={props.onDelete}  toggleComplete={props.toggleComplete}/>
    </React.Fragment>
  ))
)}

    </div>
  );
};
