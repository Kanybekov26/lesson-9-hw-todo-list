import './App.css';
import Todo from './compnents/Todo';
import styled from 'styled-components';
import { TodoContextProvaider } from './store/TodoContext';
function App() {

  return (
    <>
    <TodoContextProvaider>
      <H1>🌅 Todo app  🌇</H1>
     <Todo/>
     </TodoContextProvaider>
    </>
  );
}

export default App;


const H1 = styled.h1`
text-align:center;
/* margin:auto; */
/* background-color:red; */

`