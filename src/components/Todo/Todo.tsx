import { useCallback } from "react";
import { ArrowRight, TodoWrapper, TodoInnerWrapper, TodoTitleWrapper, TodoTitle, TodoDescription  } from "./Todo.styles";

export interface Item {
  id: number;
  name: string;
  description: string
}

interface TodoProps {
  item: Item
}

export const Todo = ({
  item
}: TodoProps): JSX.Element => {

  const { name, description } = item;

  const handleOnClick = useCallback(() => {
    console.log("clicked todo")
  }, []);

  return (
    <TodoWrapper onClick={handleOnClick}>
      <TodoInnerWrapper>
        <input type="checkbox" id="scales" name="scales" />
        <TodoTitleWrapper>
          <TodoTitle>{!!name.length ? name[0]?.toUpperCase() + name.substring(1) : "No title"}</TodoTitle>
          <TodoDescription>{description || "N/A"}</TodoDescription>
        </TodoTitleWrapper>
      </TodoInnerWrapper>
      <ArrowRight />
    </TodoWrapper>
  )
};
