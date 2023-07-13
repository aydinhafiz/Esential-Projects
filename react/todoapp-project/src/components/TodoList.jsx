import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [openCount, countOpenTodos] = useState(0);
  const [todos, setTodos] = useState(() => {
    const items = localStorage.getItem("items");
    const parsedItems = JSON.parse(items);
    return parsedItems;
  });
  const [textinput, setextInput] = useState("");

  function changeText(event) {
    setextInput(event.target.value);
  }

  const submit = (e) => {
    e.preventDefault();
    const newTodos = [...todos, { description: textinput, done: false }];
    setTodos(newTodos);
  };

  function countOpen() {
    const doneTodos = todos.filter(function (item) {
      return !item.done;
    });
    countOpenTodos(doneTodos.length);
  }

  function changeTodo(index) {
    const newTodos = [...todos];
    if (newTodos[index].done) {
      newTodos[index].done = false;
    } else newTodos[index].done = true;
    setTodos(newTodos);
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  useEffect(
    function () {
      countOpen();
      localStorage.setItem("items", JSON.stringify(todos));
    },
    [todos]
  );

  return (
    <div className="shawod-sm hover:shadow-lg">
      <div className="text-center bg-gray-900 text-white text-3xl py-4 font-semibold">
        <h1 className="text-3xl">Unsere Todos</h1>
        <h2> Last {openCount} to do left </h2>
        <form className="grid grid-cols-3 py-2" action="">
          <input
            onChange={changeText}
            value={textinput}
            className="col-span-2 py-2 text-gray-900 onfocus:none "
            type="text"
            placeholder="Add Todo.."
          />
          <input
            onClick={submit}
            className="col-span-1 text-lg bg-gray-400 p-2 cursor-pointer text-gray-900 cursor-pointer"
            type="submit"
            value={"Add todo"}
          />
        </form>
      </div>

      {todos.map(function (todo, index) {
        return (
          <Todo
            key={index}
            index={index}
            onDeleteTodo={deleteTodo}
            description={todo.description}
            done={todo.done}
            onChangeTodo={changeTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
