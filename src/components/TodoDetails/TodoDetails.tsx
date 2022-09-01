import { useMemo } from "react";
// import { TodoDescription } from "components/Todo/Todo.styles";
import { TodoDetailsRow, TodoDescription, TodoTask, TodoTitle } from "components/TodoDetails/TodoDetails.styles";
import { Container } from "components/Container";
import mockData from "mock/mockData.json";
import { useParams } from "react-router-dom";
// import { useEdiiit} from "react-router-dom"
import { NavBar } from "components/NavBar";




export const TodoDetails = (): JSX.Element => {
  const { id } = useParams();

  const details = useMemo(() => {
    return mockData.find((element) => element.id === id);
  }, [id]);

  if (!details) {
    return <p>404 - This one doesn't exist</p>
  }

    
  return (
    <>
      {/* Here we put the details page with the todo details */}
    <NavBar />

      <Container>

        
        <TodoTitle>{details.name}</TodoTitle>
        
        <TodoDetailsRow>
          <TodoTask>Tâches</TodoTask>
          <TodoDescription>{details.name}</TodoDescription>
        </TodoDetailsRow>
        
        <TodoDetailsRow>
          <TodoTask>Description</TodoTask>
          <TodoDescription>{details.description}</TodoDescription>
        </TodoDetailsRow>

      </Container>

      {/* <Button onClick={() => {ediiit.push("./edit")}}>Editer</Button> */}
      

    </>
  )
}