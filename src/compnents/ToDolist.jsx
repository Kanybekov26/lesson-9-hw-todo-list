import styled from "styled-components";
import React from "react";
const ToDolist = ({ todos, deleteTodo,toggleHandler,editHandler }) => {
  return (
    <Ul>
      {todos.map((element) => (
        <Li  key={element.id}>
         <StyledTitle className={`${element.completed ? "todo" : "todoss"} `} >{element.title}</StyledTitle> 
          <div>
          <StyledButton onClick={() => deleteTodo(element.id)}>❌</StyledButton>
          <StyledBtn  onClick={()=>toggleHandler(element.id)}>❗</StyledBtn>
          <button onClick={()=>editHandler(element.title,element.id)}>edit</button>
          </div>
        </Li>
      ))}
    </Ul>
  );
};

export default ToDolist;

const Li = styled.li`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 5px;
  margin-bottom:20px;

  .todo {
    text-decoration: line-through;
opacity: 0.5;
  }

`;

const Ul = styled.ul`
  padding: 0;
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
  padding: 5px 20px;
  transition: all 200ms;

  &:hover {
    background-color: #afe6c3;
    transform: scale(1.05);
  }
`



const StyledBtn = styled.button`
  background-color: #c2fbd7;
  border-radius: 10px;
  border-width: 0;
  box-shadow: rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0;
  color: #008000;
  cursor: pointer;

  font-size: 1em;
  /* height: 50px; */
  padding: 5px 20px;
  transition: all 200ms;

  &:hover {
    background-color: #afe6c3;
    transform: scale(1.05);
  }
`;

const StyledTitle = styled.p`
  color: white;

  
`