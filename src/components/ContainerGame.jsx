import { useContext } from "react";
import { Questions } from "../context/QuestionsContext";
import GameQuizz from "./GameQuizz";
import Hero from "./Hero";
import { Center} from "@chakra-ui/react";

export default function ContainerGame() {
  const { question } = useContext(Questions);

  return (
    <Center justifyContent="center"  >
      {question.length === 0 && <Hero />}
      {question.length > 0 && <GameQuizz />}
    </Center>
  );
}
