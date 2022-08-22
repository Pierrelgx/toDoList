import { createTitle } from "helpers/string";
import { ArrowRight, TodoWrapper, TodoInnerWrapper, TodoTitleWrapper, TodoTitle, TodoDescription  } from "./Todo.styles";

export interface Item {
  id: string;
  name: string;
  description: string
}

interface TodoProps {
  item: Item
}

export const Todo = ({item }: TodoProps): JSX.Element => {

  const { name, description, id } = item;

  return (
    <TodoWrapper to={`details/${id}`}>
      <TodoInnerWrapper>
        <input type="checkbox" id="scales" name="scales" />
        <TodoTitleWrapper>
          <TodoTitle>{createTitle(name)}</TodoTitle>
          <TodoDescription>{description || "N/A"}</TodoDescription>
        </TodoTitleWrapper>
      </TodoInnerWrapper>
      <ArrowRight />
    </TodoWrapper>
  )
};
