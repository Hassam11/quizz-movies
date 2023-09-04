import { Button, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { Questions } from "../context/QuestionsContext";

export default function InitialGame() {
  const { fetchQuestion } = useContext(Questions);

  const handleClick = () => {
    fetchQuestion(7);
  };

  return (
    <>
      <Button rounded={"lg"} px={8} py={8} onClick={handleClick}>
        <Text fontSize={{ base: "3xl", sm: "xl", md: "3xl" }}>Go game</Text>
        <Text
          p={"3"}
          w="fit-content"
          fontSize={{ base: "3xl", sm: "xl", md: "1xl" }}
        >
          <ArrowForwardIcon />
        </Text>
      </Button>
    </>
  );
}
