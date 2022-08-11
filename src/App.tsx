import React from 'react';
import { Todo } from 'components/Todo';
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <AppWrapper>
      <Todo />
    </AppWrapper>
  );
}

export default App;
