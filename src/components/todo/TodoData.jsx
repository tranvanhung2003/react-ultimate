import PropTypes from "prop-types";

const TodoData = ({ name, age, data }) => {
  return (
    <div className="todo-data">
      <div>Learning React</div>
      <div>Learning JavaScript</div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Address: {data.address}</div>
      <div>Country: {data.country}</div>
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
