import React, { useContext } from "react";
import styled from "styled-components";
import { TodoContext} from "../store/TodoContext";
import ToDolist from "./ToDolist";

const Todo = () => {
  const {addButtonHandler, enteredText,changeInputValue} = useContext(TodoContext);

  // const changeHandlerInput = (event) => {
  //   cnx.setState(event.target.value);
  // };

  // const addButtonHandler = () => {
  //   cnx.setEnteredtoDoDispatch({ type: "ADD_TODO", payload: cnx.enteredText });

  //   cnx.setState("");
  // };
  // const deleteTodo = (id) => {
  //   cnx.setEnteredtoDoDispatch({ type: "DELETE_TODO", payload: id });
  // };

  // const toggleHandler = (id) => {
  //   cnx.setEnteredtoDoDispatch({ type: "TOGGLE_TODO", payload: id });
  // };

  // const editHandler = (element, id) => {
  //   cnx.setState(element);
  //   deleteTodo(id);
  // };

  // const enabled = enteredText.trim().length > 0;
  // console.log(cnx);

  return (
 
    <Container>
      <StyledInput
        type="text"
        placeholder="write your text"
        onChange={(e) => changeInputValue(e.target.value)}
        value={enteredText}
      />
      <StyledButton onClick={() => addButtonHandler(enteredText)}>
        ADD☑️
      </StyledButton>
      <ToDolist
        // deleteTodo={deleteTodo}
        // toggleHandler={toggleHandler}
        // editHandler={editHandler}
      />
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
