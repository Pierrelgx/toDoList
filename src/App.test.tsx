import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from "styled-components";
import { theme } from "./styles";

test('renders title', () => {
  render((
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  ));
  const titleElement = screen.getByText(/titre one lol/i);
  expect(titleElement).toBeInTheDocument();
});
