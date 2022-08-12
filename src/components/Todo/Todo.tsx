import { useCallback } from "react";
import { ArrowRight, TodoWrapper, TodoInnerWrapper, TodoTitleWrapper, TodoTitle, TodoDescription  } from "./Todo.styles";

export interface Item {
  id: number;
  name: string
}

interface TodoProps {
  item: Item
}

export const Todo = ({
  item
}: TodoProps): JSX.Element => {

  const handleOnClick = useCallback(() => {
    console.log("clicked todo")
  }, []);

  return (
    <TodoWrapper onClick={handleOnClick}>
      <TodoInnerWrapper>
        <input type="checkbox" id="scales" name="scales" />
        <TodoTitleWrapper>
          <TodoTitle>{item.name}</TodoTitle>
          <TodoDescription>Description ici...</TodoDescription>
        </TodoTitleWrapper>
      </TodoInnerWrapper>
      <ArrowRight />
    </TodoWrapper>
  )
};
