import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 0 16px;
  height: 100%;
  width: 100%;
  background-color: #16181d ;

  /* Desktop */
  @media (min-width: 768px) {
    width: 600px; 
  }
`;