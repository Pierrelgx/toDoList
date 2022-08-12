import styled from "styled-components";
import { ReactComponent as ArrowRightRaw } from "assets/icons/arrow-right.svg"

export const TodoWrapper = styled.button`
  display: flex;
  gap: 16px;
  min-width: 600px;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${(props) => props.theme.colors.cultured};
  background-color: ${(props) => props.theme.colors.darkCharcoal};
  padding: 16px;
  border-radius: 10px;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.darkLiver};
  }
`;

export const TodoInnerWrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
`;

export const TodoTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: flex-start;
`;

export const TodoTitle = styled.h3`
  color: ${(props) => props.theme.colors.cultured};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.size16};
`;

export const TodoDescription = styled.p`
  color: ${(props) => props.theme.colors.spanishGray};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.size14};
`;

export const ArrowRight = styled(ArrowRightRaw)`
  width: 24px;
  height: 24px;
  fill: ${(props) => props.theme.colors.cultured};
`;
