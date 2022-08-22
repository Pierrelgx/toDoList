import { TodoUpsert } from 'components/TodoUpsert';
import React from 'react';
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { TodoList } from 'components/TodoList';
import { TodoDetails } from 'components/TodoDetails';

const AppWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.eerieBlack};
`;

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/details/:id" element={<TodoDetails />} />
        <Route path="/details/edit/:id" element={<TodoUpsert />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
