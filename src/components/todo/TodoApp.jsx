import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import "./todo.css";
import TodoData from "./TodoData";
import TodoNew from "./TodoNew";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (name) => {
    if (!name) {
      return;
    }

    const newTodo = {
      id: randomIntFromInterval(4, 1_000_000),
      name: name,
    };

    setTodoList([...todoList, newTodo]);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      {todoList.length > 0 ? (
        <TodoData todoList={todoList} deleteTodo={deleteTodo} />
      ) : (
        <div className="todo-image">
          <img className="logo" src={reactLogo} alt="React Logo" />
        </div>
      )}
    </div>
  );
};

export default TodoApp;
