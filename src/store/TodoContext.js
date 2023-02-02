import { createContext, useReducer, useState } from "react";

export const TodoContext = createContext();

const toDoReducer = (state, action) => {
  if (action.type === "CHANGE_INPUT_VALUE") {
    return {
      ...state,
      enteredText: action.payload,
    };
  }
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          title: action.payload,
          id: new Date().toString(),
          completed: false,
        },
      ],
      enteredText: "",
    };
  }
  if (action.type === "TOGGLE_TODO") {
    return {
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      ),
    };
  }

  if (action.type === "DELETE_TODO") {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    };
  }
};

const initialState = { todos: [], enteredText: "" };

export const TodoContextProvaider = ({ children }) => {
  const [enteredToDoState, setEnteredtoDoDispatch] = useReducer(
    toDoReducer,
    initialState
  );

  const changeInputValue = (enteredText) => {
    setEnteredtoDoDispatch({
      type: "CHANGE_INPUT_VALUE",
      payload: enteredText,
    });
  };

  const addButtonHandler = (newTodo) => {
    setEnteredtoDoDispatch({ type: "ADD_TODO", payload: newTodo });
  };
  const deleteTodo = (id) => {
    setEnteredtoDoDispatch({ type: "DELETE_TODO", payload: id });
  };

  const toggleHandler = (id) => {
    setEnteredtoDoDispatch({ type: "TOGGLE_TODO", payload: id });
  };

  //   const editHandler = (title, id) => {
  //     setEnteredText(title);
  //     deleteTodo(id);
  //   };

  const value = {
    enteredText: enteredToDoState.enteredText,
    todos: enteredToDoState.todos,
    // setEnteredtoDoDispatch,
    changeInputValue,
    addButtonHandler,
    toggleHandler,
    deleteTodo,
    // editHandler
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
