import { Todo } from "components/Todo";
import { useMemo } from "react";
import type { Item } from "components/Todo"
import { Container } from "components/Container";


export const TodoList = (): JSX.Element => {


  const todoItems: Item[] = useMemo(() => [
    {
      id: 1,
      name: "titre one lol",
      description: "description one"
    },
    {
      id: 2,
      name: "",
      description: "description two"
    },
    {
      id: 3,
      name: "three",
      description: "description three"
    },
    {
      id: 4,
      name: "four",
      description: "description four"
    }
    
  ], []);

  return (
    <Container>
      {todoItems.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
    </Container>
  )
};