import styled from "styled-components";

export const Background = styled.div`
  background-color: #323232;
  width: 300px;
  height: 60px;
  padding-left: 10px;
`;

export const TodoWrapper = styled.div`
  display: flex;
  margin-top: 25px;
  gap: 16px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TodoTitle = styled.h1`
  color: #ffffff;
  display: flex;
  text-align: center;
  align-items: center;
  margin-left: 40px;
  margin-top: -28px;
  font-weight: normal;
`;

export const TodoText = styled.h2`
  color: #9c9c9c;
  font-size: 12px;
  margin-left: 40px;
  margin-top: 10px;
  font-weight: normal;
  
`;

export const ArrowRight = styled.div`
  display: flex;
  position: absolute;
  color: #9c9c9c;
  font-size: 12px;
  margin-left: 270px;
  margin-top: -22px;
`;
