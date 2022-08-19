import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  padding: 0 16px;
  width: 100%;

  /* Desktop */
  @media (min-width: 768px) {
    width: 600px; 
  }
`;