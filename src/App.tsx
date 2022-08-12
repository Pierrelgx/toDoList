import React from 'react';
import styled from "styled-components";
import { Todolist } from 'components/TodoList';

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
      <Todolist />
    </AppWrapper>
  );
}

export default App;
