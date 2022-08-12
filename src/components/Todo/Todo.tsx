import { useCallback } from "react";
import { ArrowRight, TodoWrapper, TodoInnerWrapper, TodoTitleWrapper, TodoTitle, TodoDescription  } from "./Todo.styles";

export const Todo = (): JSX.Element => {

  const handleOnClick = useCallback(() => {
    console.log("clicked todo")
  }, []);

  return (
    <TodoWrapper onClick={handleOnClick}>
      <TodoInnerWrapper>
        <input type="checkbox" id="scales" name="scales" />
        <TodoTitleWrapper>
          <TodoTitle>Title</TodoTitle>
          <TodoDescription>Description ici...</TodoDescription>
        </TodoTitleWrapper>
      </TodoInnerWrapper>
      <ArrowRight />
    </TodoWrapper>
  )
};
