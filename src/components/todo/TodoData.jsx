import PropTypes from "prop-types";

const TodoData = ({ todoList }) => {
  return (
    <div className="todo-data">
      {todoList.map((todo) => (
        <div key={todo.id} className="todo-item">
          <div>{todo.name}</div>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

TodoData.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  data: PropTypes.shape({
    address: PropTypes.string,
    country: PropTypes.string,
  }),
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

export default TodoData;
