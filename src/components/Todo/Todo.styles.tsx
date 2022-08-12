import styled from "styled-components";

export const TodoWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TodoTitle = styled.h1`
  margin: 0;
  color: black;
`;

export const BoxContainerToBeRemoved = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

export const BoxToBeRemoved = styled.div<{
  color: "gray" | "white" | "black" | "blue"
}>`
  width: 60px;
  height: 60px;
  background-color: ${(props ) => {
    switch (props.color) {
      case "gray": {
        return props.theme.colors.spanishGray
      }
      case "blue": {
        return props.theme.colors.royalBlue
      }
      case "black": {
        return props.theme.colors.eerieBlack
      }
      case "white": {
        return props.theme.colors.cultured
      }
    }
  }};
`;