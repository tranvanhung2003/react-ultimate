import PropTypes from "prop-types";

const TodoData = ({ name, age }) => {
  return (
    <div className="todo-data">
      <div>Learning React</div>
      <div>Learning JavaScript</div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
    </div>
  );
};

TodoData.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default TodoData;
