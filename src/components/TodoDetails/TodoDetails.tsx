// import { Todo } from "components/Todo";
// import { TodoDescription } from "components/Todo/Todo.styles";
import { TodoDetailsWrapper, TodoDetailsColumn, TodoDescription, TodoTask, TodoTitle } from "components/TodoDetails/TodoDetails.styles";



/**
 * 1. Create details page as seen in app from Florian (title with label, description with label in a 2 column grid)
 * 2. Labels to the left of the grid and values to the right (initially with placeholder data)
 * 3. Add actual data from a todo through props (see Todo component)
 * 
 */

export const TodoDetails = (): JSX.Element => {
    
  return (
    <>
      {/* Here we put the details page with the todo details */}
      <TodoDetailsWrapper>
      <TodoTitle>test</TodoTitle>
        
        <TodoDetailsColumn>
          <TodoTask>Tâches</TodoTask>
          <TodoDescription>TitleDescription</TodoDescription>
        </TodoDetailsColumn>
      </TodoDetailsWrapper>
    </>
  )
}