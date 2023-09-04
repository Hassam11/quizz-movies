import { Container} from "@chakra-ui/react";
import QuestionsContext from "./context/QuestionsContext";
import Layout from "./components/Layout";

function App() {
  return (
    <QuestionsContext>
      <Container maxW={"6xl"}>
          <Layout/>
      </Container>
    </QuestionsContext>
  );
}

export default App;
