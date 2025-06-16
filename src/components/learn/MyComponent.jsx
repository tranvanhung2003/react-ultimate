import "./style.css";

const MyComponent = () => {
  const myName = "John Doe";

  return (
    <>
      <div>{myName}</div>
      {console.log("This is a console log message")}
      <div className="child" style={{ borderRadius: "10px" }}>
        child
      </div>
    </>
  );
};

export default MyComponent;
