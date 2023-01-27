import './App.css';
import Todo from './compnents/Todo';
import styled from 'styled-components';
function App() {

  return (
    <>
      <H1>🌅Todo app 🌇</H1>
     <Todo/>
    </>
  );
}

export default App;


const H1 = styled.h1`
text-align:center;
/* margin:auto; */
/* background-color:red; */

`