import { Container } from "components/Container";
import { Input, TodoUpsertLabel, TodoForm } from "./TodoUpsert.styles";

/**
 * 1. add code that will get the id from url
 * 2. console log the details associated with that id.
 */
export const TodoUpsert = (): JSX.Element => {
  return (
    <>
      <Container>
        <TodoForm>
        
          <TodoUpsertLabel>
            Name
            <Input type="text"  required />
          </TodoUpsertLabel>

          <TodoUpsertLabel>
            Details
            <Input type="text"  required />
          </TodoUpsertLabel>

          <TodoUpsertLabel>
            Quand
            <Input type="date" required />
          </TodoUpsertLabel>

        
        </TodoForm>
      </Container>
    </>
  )
}