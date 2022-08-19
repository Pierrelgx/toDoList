// import { Todo } from "components/Todo";
// import { TodoDescription } from "components/Todo/Todo.styles";
import { TodoDetailsRow, TodoDescription, TodoTask, TodoTitle } from "components/TodoDetails/TodoDetails.styles";
import { Container } from "components/Container";



/**
 * 1. Create details page as seen in app from Florian (title with label, description with label in a 2 column grid)
 * 2. Labels to the left of the grid and values to the right (initially with placeholder data)
 * 3. Add actual data from a todo through props (see Todo component)
 * 
 */

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