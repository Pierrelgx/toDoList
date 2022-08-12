import { Todo } from "components/Todo";
import { useMemo } from "react";
import { TodolistWrapper } from "./Todolist.styles";
import type { Item } from "components/Todo"

export const Todolist = (): JSX.Element => {


  const todoItems: Item[] = useMemo(() => [
    {
      id: 1,
      name: "one"
    },
    {
      id: 2,
      name: "two"
    },
    {
      id: 3,
      name: "three"
    },
    {
      id: 4,
      name: "four"
    }
  ], []);

  return (
    <TodolistWrapper>
      {todoItems.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
    </TodolistWrapper>
  )
};