import { BoxContainerToBeRemoved, BoxToBeRemoved, TodoTitle, TodoWrapper } from "./Todo.styles";

export const Todo = (): JSX.Element => {
  return (
    <TodoWrapper>
      <TodoTitle>Coucou test Piou Piou</TodoTitle>
      <BoxContainerToBeRemoved>
        <BoxToBeRemoved color="black" />
        <BoxToBeRemoved color="blue" />
        <BoxToBeRemoved color="gray" />
        <BoxToBeRemoved color="white" />
      </BoxContainerToBeRemoved>
    </TodoWrapper>
  )
};
