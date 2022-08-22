import styled from "styled-components";


export const TodoUpsertLabel = styled.label`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: ${(props) => props.theme.colors.cultured};
    gap: 6px;

`;

export const Input = styled.input`
    background-color: ${(props) => props.theme.colors.spanishGray20};
    color: ${(props) => props.theme.colors.cultured};
    border-radius: 4px;
    padding: 6px;
`;

export const TodoForm = styled.form`
	display: flex;
  flex-direction: column;
	gap: 16px;
`;