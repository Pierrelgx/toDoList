
import styled from "styled-components";

export const TodoDetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid ${(props) => props.theme.colors.spanishGray};
`;

export const TodoTask = styled.p`
  color: white;
  font-size: ${(props) => props.theme.fontSizes.size14};
`;

export const TodoTitle = styled.h3`
  color: ${(props) => props.theme.colors.cultured};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.size16};
  margin-bottom: 16px;
  text-transform: capitalize;
`;

export const TodoDescription = styled.p`
  color: ${(props) => props.theme.colors.spanishGray};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.size14};
`;