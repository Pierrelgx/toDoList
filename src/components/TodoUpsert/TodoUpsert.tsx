import { Container } from "components/Container";

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
          <label>Name</label><br />
          <input type="text" placeholder="Title de la tâche" required />
          <label>Details</label>
          <input type="text" placeholder="Description de la tâche" required />
        </form>
      </Container>
    </>
  )
}