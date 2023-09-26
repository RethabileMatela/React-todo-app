import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // 1) create state to accept single todo item along with setTodo function which will change the todo item
  const [todo, setTodo] = useState("");
  // 2) create todolist as well which is an array
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App"> 
      <Header></Header>
      {/* 3) pass todo and todoList to form component as properties  */}
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      ></Form>
      <TodoList todoList={todoList}></TodoList>
    </div>
  );
}

export default App;
