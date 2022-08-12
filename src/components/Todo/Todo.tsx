import { TodoTitle, TodoWrapper, TodoText, ArrowRight, Background } from "./Todo.styles";

export const Todo = (): JSX.Element => {
  return (
    <>
    <Background> 
    <TodoWrapper><input type="checkbox" id="scales" name="scales"></input></TodoWrapper>
    <TodoTitle>Coucou test Piou Piou</TodoTitle>
    <TodoText>Ceci est l'aperçu du message...</TodoText>
    <ArrowRight>＞</ArrowRight>
    </Background>
    </>
  )
};
