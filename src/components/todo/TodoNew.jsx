import PropTypes from "prop-types";
import { useState } from "react";

const TodoNew = () => {
  const [valueInput, setValueInput] = useState("");

  const handleClick = () => {
    console.log(`>>> check valueInput: ${valueInput}`);
  };

  const handleOnChange = (name) => {
    setValueInput(name);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
      <div>My text input is: {valueInput}</div>
    </div>
  );
};

TodoNew.propTypes = {
  addNewTodo: PropTypes.func,
};

export default TodoNew;
