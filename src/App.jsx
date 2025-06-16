import reactLogo from "./assets/react.svg";
import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";

const App = () => {
  const myName = "John Doe";
  const myAge = 30;
  const data = {
    address: "123 Main St",
    country: "USA",
  };

  const addNewTodo = (name) => {
    alert(`New todo added: ${name}`);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData name={myName} age={myAge} data={data} />
      <div className="todo-image">
        <img className="logo" src={reactLogo} />
      </div>
    </div>
  );
};

export default App;
