import React from "react";
import Todo from "./Todo";

function TodoList({ todoList, setTodoList }: any) {
  return (
    // a) to get access to each item in the todolist you need to map through each and every item
    // use a callback function to get access to each todo item, once you have access to each todo item
    // use todo component and pass the todo item from the callback
    <div>
      {todoList.map((todoItem: any) => (
        // g) assign key to each todo item
        // h) to delete todo item pass todolist to Todo component as a prop , Pass todolist from app.js to todolist.js to todo.js
        <Todo key={todoItem.id} todoItem={todoItem} todoList={todoList} setTodoList={setTodoList}></Todo>
      ))}
    </div>
  );
}

export default TodoList;
