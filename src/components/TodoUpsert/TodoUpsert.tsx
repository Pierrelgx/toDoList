import { Container } from "components/Container";
import { WrapTitle, WrapInput } from "./TodoUpsert.styles";

/**
 * 1. Create edit page with an accessible form (with the correct semantic elements)
 * 2. Create form validation (KISS - Keep it simple stupid)
 * 3. On submit console.log("submitted", { name, description, date }) and show any errors for now (red text under field + red border if field is in error)
 */
export const TodoUpsert = (): JSX.Element => {
  return (
    <>
      <Container>

        <form>
          <WrapTitle>
            <label>Name <br /></label> 
          </WrapTitle>

          <WrapInput>
            <input type="text" placeholder="Title de la tâche" required />
          </WrapInput>
          
          <WrapTitle>
            <label>Details <br /></label>
          </WrapTitle>

          <WrapInput>
            <input type="text" placeholder="Description de la tâche" required />
          </WrapInput>

          <WrapTitle>
            <label>Quand <br /></label>
          </WrapTitle>

          <WrapInput>
            <input type="date" required />
          </WrapInput>


        </form>
      </Container>
    </>
  )
}