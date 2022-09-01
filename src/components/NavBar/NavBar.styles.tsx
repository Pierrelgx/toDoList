import styled from "styled-components";


export const Linky = styled.div`
   display: flex;
   flex-direction: row;
    justify-content: space-around;
    gap: 16px;
    padding: 8px 16px;
    background-color: white;

    /* Desktop */
    @media (min-width: 768px) {
    width: 600px; 
  }
`;