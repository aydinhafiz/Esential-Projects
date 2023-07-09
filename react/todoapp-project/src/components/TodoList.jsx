import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const data = [
  { description: "Einkaufen", dones: true },
  { description: "Sport", dones: false },
  { description: "Programmieren", dones: false },
];

function TodoList() {
  const [openCount, countOpenTodos] = useState(0);
  const [todos, setTodos] = useState(data);

  const countOpen = function () {
    const donteTodos = data.filter(function (item) {
      return !item.dones;
    });
    countOpenTodos(donteTodos.length);
  };

  const changeTodo = function (index) {
    const newTodos = [...todos];
    if (newTodos[index].dones) {
      newTodos[index].dones = false;
    } else {
      newTodos[index].dones = true;
    }
    setTodos(newTodos);
  };

  function deleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  useEffect(
    function () {
      countOpen();
    },
    [todos]
  );

  return (
    <div className="shadow-sm hover:shadow-lg">
      <div className="text-center bg-gray-900 text-white text-3xl py-4 font-semibold">
        <h1>TodoList</h1>
        <h2> Offene Todos:{openCount}</h2>
      </div>
      {data.map(function (todos, i) {
        return (
          <Todo
            onChangeTodo={changeTodo}
            index={i}
            description={todos.description}
            done={todos.dones}
            key={i}
            onDeleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
