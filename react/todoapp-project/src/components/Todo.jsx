const Todo = (props) => {
  const { description, done, index, onChangeTodo, onDeleteTodo } = props;

  return (
    <>
      <div
        className={
          done
            ? "flex justify-between p-2 items-center bg-green-600 text-white"
            : "flex justify-between p-2 items-center bg-red-500 text-white"
        }
      >
        <h1
          onClick={() => {
            onChangeTodo(index);
          }}
          className="text-lg cursor-pointer"
        >
          {description}
        </h1>
        <button
          onClick={() => {
            onDeleteTodo(index);
          }}
          className="text-lg bg-gray-400 p-2 cursor-pointer text-white"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Todo;