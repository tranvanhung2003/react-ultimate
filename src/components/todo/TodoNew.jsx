import PropTypes from "prop-types";

const TodoNew = ({ addNewTodo }) => {
  return (
    <div className="todo-new">
      <input type="text" />
      <button>Add</button>
    </div>
  );
};

TodoNew.propTypes = {
  addNewTodo: PropTypes.func,
};

export default TodoNew;
