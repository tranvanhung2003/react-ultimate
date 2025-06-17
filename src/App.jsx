import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";

const App = () => {
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
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default App;
