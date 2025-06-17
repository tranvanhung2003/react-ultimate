const TodoData = ({ todoList, deleteTodo }) => {
  const handleOnClick = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="todo-data">
      {todoList.map((todo) => (
        <div key={todo.id} className="todo-item">
          <div>{todo.name}</div>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => handleOnClick(todo.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoData;
