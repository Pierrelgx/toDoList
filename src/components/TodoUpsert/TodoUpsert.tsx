import { Container } from "components/Container";
import { Input, TodoUpsertLabel, TodoForm } from "./TodoUpsert.styles";

/**
 * 1. Create edit page with an accessible form (with the correct semantic elements)
 * 2. Create form validation (KISS - Keep it simple stupid)
 * 3. On submit console.log("submitted", { name, description, date }) and show any errors for now (red text under field + red border if field is in error)
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