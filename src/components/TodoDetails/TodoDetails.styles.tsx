
import styled from "styled-components";

export const TodoDetailsWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.eerieBlack};
    width: 20em;
    height: 40em;
    padding: 20px;
    border-radius: 20px;
    
`;

export const TodoDetailsColumn = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.spanishGray};
  padding-bottom: 8px;
  
`;

export const TodoTitleDetails = styled.h3`
  color: ${(props) => props.theme.colors.cultured};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.size16};
  padding-bottom: 28px;
  
`;

export const TodoTask = styled.p`
  color: white;
  font-size: ${(props) => props.theme.fontSizes.size14};
`;

export const TodoTitle = styled.h3`
  color: ${(props) => props.theme.colors.cultured};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.size16};
  padding-bottom: 28px;
  text-transform: capitalize;
  
`;

export const TodoDescription = styled.p`
  color: ${(props) => props.theme.colors.spanishGray};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.size14};
`;