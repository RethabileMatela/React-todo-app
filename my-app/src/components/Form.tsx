import React from "react";
import styles from "../style.module.css";
import shortid from "shortid";

// 4) accept props in the form component and destructure them, then set type to any
function Form({ todo, setTodo, todoList, setTodoList }: any) {
  // 7) write handlechange function which will accept an event as a prop
  // 8) whenever an event is fired we need to get the value of the input field by event.target.value,
  // 9) when we get that value we make use of setTodo function in order to set the value of todo
  const handleChange = (event: any) => {
    // 8) whenever an event is fired we need to get the value of the input field by event.target.value,
    // 9) when we get that value we make use of setTodo function in order to set the value of todo
    setTodo(event.target.value);
  };

  // 11) add todo item to todolist
  const handleSubmit = (event: any) => {
    // 13) prevent default refreshing of the page when the add button is clicked
    event.preventDefault();
    // 12) use spread operator to add todo items into the todoList
    // add new items in setTodoList by getting old todolist as well as add new item
    // spread operator spreads elements across the array - will take all items inside the todolist and add it to the array
    // add new to do item which is todo
    // with this approach todo items wont have a unique id
    // in simple you create a new array which is going to contain old todolist elements as well as newly added element from input field

    // setTodoList([...todoList, todo]);
    // d) to give todo a unique id  convert it to an object
    // e) generate an id for todo object using shortid in parent folder , npm install shortid
    setTodoList([...todoList, { name: todo, id: shortid.generate() }]);
    setTodo("") // empty input after submission
    console.log(todoList);
  };
  return (
    <div>
      {/* 10)whenever we want to submit a value using the form and submit button  we capture todo value and add it to todolist  */}
      <form onSubmit={handleSubmit} className={styles.todoForm}>
        {/* 5) assign value todo state to the input field 
            6) add an onchange method */}
        <input
          value={todo}
          onChange={handleChange}
          className={styles.todoInput}
          placeholder="Add Todo Item"
        ></input>
        <button type="submit" className={styles.todoButton}>
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
