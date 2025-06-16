import PropTypes from "prop-types";

const TodoData = () => {
  return (
    <div className="todo-data">
      <div>Learning React</div>
      <div>Learning JavaScript</div>
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
};

export default TodoData;
