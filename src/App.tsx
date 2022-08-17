import React from 'react';
import styled from "styled-components";
// import { TodoList } from 'components/TodoList';
import { TodoDetails } from 'components/TodoDetails';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.darkCharcoal};
`;

function App() {
  return (
    <AppWrapper>
      {/* <TodoList /> */}
      <TodoDetails/>
      {/* <TodoDetails data={{ id: 1, name: "test", description: "test2"}} /> */}
    </AppWrapper>
  );
}

export default App;
