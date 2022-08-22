import { TodoDetailsRow, TodoDescription, TodoTask, TodoTitle } from "components/TodoDetails/TodoDetails.styles";
import { Container } from "components/Container";


export const TodoDetails = (): JSX.Element => {

  const title = "Task title";
  const description = "Description of the todo task";
    
  return (
    <>
      {/* Here we put the details page with the todo details */}
      <Container>
        <TodoTitle>test</TodoTitle>
        
        <TodoDetailsRow>
          <TodoTask>Tâches</TodoTask>
          <TodoDescription>{title}</TodoDescription>
        </TodoDetailsRow>
        
        <TodoDetailsRow>
          <TodoTask>Description</TodoTask>
          <TodoDescription>{description}</TodoDescription>
        </TodoDetailsRow>
      </Container>
    </>
  )
}