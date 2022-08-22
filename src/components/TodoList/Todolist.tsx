import { Todo } from "components/Todo";
import { useMemo } from "react";
import type { Item } from "components/Todo"
import { Container } from "components/Container";
import mockData from "mock/mockData.json";


export const TodoList = (): JSX.Element => {

  const todoItems = useMemo(() => mockData as Item[], [])

  return (
    <Container>
      {todoItems.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
    </Container>
  )
};