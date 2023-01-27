import React, { useReducer, useState } from "react";
import styled from "styled-components";
import ToDolist from "./ToDolist";

const toDoReducer = (state, action) => {
  if (action.type === "ADD_TODO") {
    return [
      ...state,
      {
        title: action.payload,
        id: new Date().toString(),
        completed: false,
      },
    ];
  }
  if(action.type === "TOGGLE_TODO") {
    return state.map((item) => {
      if(item.id === action.payload){
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item
    })
  }

  if (action.type === "DELETE_TODO") {
    return state.filter((todo) => todo.id !== action.payload);
  }

};

const Todo = () => {
  const [enteredToDoState, setEnteredtoDoDispatch] = useReducer(
    toDoReducer,
    []
  );
  const [enteredText, setState] = useState("");

  console.log(enteredToDoState);

  const changeHandlerInput = (event) => {
    setState(event.target.value);
  };

  const addButtonHandler = () => {
    setEnteredtoDoDispatch({ type: "ADD_TODO", payload: enteredText });

    setState("");
  };
  const deleteTodo = (id) => {
    setEnteredtoDoDispatch({ type: "DELETE_TODO", payload: id });
  };

  const toggleHandler = (id)=> {
    setEnteredtoDoDispatch({type:"TOGGLE_TODO",payload:id})
  }

  const editHandler = (element,id) => {
    setState(element)
    deleteTodo(id)
  }

  // const enabled = enteredText.trim().length > 0

  return (
    <Container>
      <StyledInput
        type="text" 
        placeholder="write your text"
        onChange={changeHandlerInput}
        value={enteredText}
      />
      <StyledButton onClick={addButtonHandler} >ADD☑️</StyledButton>
      <ToDolist todos={enteredToDoState} deleteTodo={deleteTodo} toggleHandler={toggleHandler}editHandler={editHandler} />
    </Container>
  );
};

export default Todo;

const Container = styled.div`
  margin: auto;
  background-color: red;
  box-sizing: border-box;
  padding: 30px 30px;
  width: 400px;
`;

const StyledInput = styled.input`
  width: 200px;
  border: 2px solid blue;
  border-radius: 10px;
  padding: 10px;
  /* margin-left:20px; */
`;

const StyledButton = styled.button`
  background-color: #c2fbd7;
  border-radius: 10px;
  border-width: 0;
  box-shadow: rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0;
  color: #008000;
  cursor: pointer;

  font-size: 1em;
  /* height: 50px; */
  padding: 5px 10px;
  transition: all 200ms;

  &:hover {
    background-color: #afe6c3;
    transform: scale(1.05);
  }
`;
