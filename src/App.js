import './App.css';
import {Header} from './MyComponent/Header';
import Footer from './MyComponent/Footer';
import {Todos} from './MyComponent/Todos';
import { AddTodo } from './MyComponent/AddTodo';
import { About } from './MyComponent/About';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete=(todo)=>{
    console.log("I am OnDELETE", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo=(title,desc)=>{
    console.log("I am adding Todo");
    let sno;
    if(todos.length===0){
      sno=0;
    }else{
      sno=todos[todos.length-1].sno+1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const toggleComplete = (todo) => {
  const updatedTodos = todos.map((t) =>
    t.sno === todo.sno ? { ...t, completed: !t.completed } : t
  );
  setTodos(updatedTodos);
};

  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <>
    <Router>
      <Header searchBar={false}/>
      <Routes>
        {/* <Route exact path='/' render={()=>{
          return (
          <>
            <h2>Testing content is visible</h2>
          </>
          )
        }}>
        </Route> */}
       <Route exact path="/" element={
    <>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} toggleComplete={toggleComplete}/>
    </>
  }
/>

    <Route path="/about" element={<About />} />

      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
