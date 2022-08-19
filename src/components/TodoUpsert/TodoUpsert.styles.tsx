import styled from "styled-components";

export const WrapTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    color: ${(props) => props.theme.colors.cultured};

`;

export const WrapInput = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #5a5a5a;
    margin-bottom: 16px;
    color: ${(props) => props.theme.colors.cultured};
    padding: 8px 16px;
    border-radius: 6px;
    width: 100%;
`;

