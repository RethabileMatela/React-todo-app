import React from "react";
import styles from "../style.module.css";

// b) recieve the todo item from todolist
//i) accept todolist in Todo.js
function Todo({ todoItem, todoList, setTodoList }: any) {
  // j) function to delete todo item, will take todo list then delete a particular todo item 
  const deleteTodo = () => {
    // k) to delete a particular item you first need to loop through a particular list using filter to remove elements
    // filter certain elements from the todolist,keep elements whose id is NOT equal to the current id (item we are deleting)
    // filter function will return us a new array with all items except the deleted items 
 
    // l) now save the new todolist to the origional todolist using settodolist 
setTodoList(  todoList.filter((item: any) => item.id !== todoItem.id));
  };
  return (
    <div>
      <div className={styles.todoItem}>
        {/* c) display todo items on the app, each todo element should have a unique id to make delete button functional */}

        {/* <h3 className={styles.todoName}>{todoItem}</h3> */}

        {/* f) now access todoitem.name  */}
        <h3 className={styles.todoName}>{todoItem.name}</h3>
        <button onClick={deleteTodo} className={styles.deleteButton}>
          Done
        </button>
      </div>
    </div>
  ); 
}

export default Todo;
