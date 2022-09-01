import { Container } from "components/Container";
import { TodoTitle } from "components/Todo/Todo.styles";
import { TodoDescription } from "components/Todo/Todo.styles";
import { Input, TodoUpsertLabel, TodoForm } from "./TodoUpsert.styles";
import { NavBar } from "components/NavBar";

/**
 * 1. add code that will get the id from url
 * 2. console log the details associated with that id.
 */
export const TodoUpsert = (): JSX.Element => {



  return (
    <>

    <NavBar />
      <Container>
        <TodoForm>
        
          <TodoUpsertLabel>
            Name
            <Input type="text" placeholder={'./edit/' + TodoTitle} required />
          </TodoUpsertLabel>

          <TodoUpsertLabel>
            Details
            <Input type="text" placeholder={'./edit/' + TodoDescription}  required />
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