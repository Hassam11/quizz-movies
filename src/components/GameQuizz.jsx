import { useContext, useState } from "react";
import { Questions } from "../context/QuestionsContext";
import {
  Box,
  Center,
  Text,
  Button,
  Flex,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import AlertaEndGame from "./AlertaEndGame";

export default function GameQuizz() {
  const { question } = useContext(Questions);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const questionInfo = question[questionIndex];
  const bgColor = useColorModeValue("wite", "gray.800");
  const txtColor = useColorModeValue("gray.500", "gray.300");
  const btnColor = useColorModeValue("gray.100");
  const boxShadow = useColorModeValue("xl", "dark-lg");
  const toast = useToast();

  const isLastQuestion = question.length - 1;
  // const color = useColorModeValue("","")

  const NextQuestion = () => {
    if (questionIndex < question.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const BackQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  const QuestionSelectIndex = (index) => {
    if (index == questionInfo.correctOption) {
      if (questionIndex < question.length - 1) {
        setQuestionIndex(questionIndex + 1);
        toast({
          title: `Answer Correct`,
          status: "success",
          isClosable: true,
          position: "top-right",
          duration: 1000,
        });
      } else {
        setEndGame(true);
      }
    } else {
      toast({
        title: `Answer Incorrect`,
        status: "error",
        isClosable: true,
        position: "top-right",
        duration: 1500,
      });
    }
  };

  return (
    <>
      <Box
        boxShadow={boxShadow}
        w="80%"
        p={6}
        mt={10}
        bg={bgColor}
        rounded="md"
        justifyContent={"center"}
      >
        <Flex justify={"space-between"}>
          <Button
            fontSize={"4xl"}
            h={"12"}
            w={"14"}
            onClick={BackQuestion}
            isDisabled={questionIndex === 0}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            fontSize={"4xl"}
            h={"12"}
            w={"14"}
            onClick={NextQuestion}
            isDisabled={questionIndex === isLastQuestion}
          >
            <ChevronRightIcon />
          </Button>
        </Flex>
        <Center>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={"800"}
            fontSize={"5xl"}
            textAlign={"center"}
            pt={"5"}
          >
            {questionInfo.question}
            {endGame && (
              <AlertaEndGame endGame={endGame} setEndGame={setEndGame} />
            )}
          </Text>
        </Center>
        <Flex justify={"space-between"} pt={"5"} p={4}>
          <Text
            color={txtColor}
            textTransform={"uppercase"}
            fontWeight={"600"}
            fontSize={"sm"}
          >
            {" "}
            {questionInfo.genre}
          </Text>
          <Flex alignItems={"center"} flexDirection={"row"} gap={3}>
            <Text
              textAlign={"center"}
              fontWeight={"bold"}
              fontSize={"1xl"}
              textTransform={"uppercase"}
            >
              {questionInfo.title}
            </Text>
            <Text
              color={"gray.500"}
              textTransform={"uppercase"}
              fontWeight={"600"}
              fontSize={"sm"}
              mx={"auto"}
            >
              {questionInfo.year}
            </Text>
          </Flex>
        </Flex>

        <Box justify={"space-between"} align="center" pb={"5"}>
          {questionInfo.options.map((option, index) => (
            <Button
              key={index}
              w={"60%"}
              p={"10"}
              mt={6}
              rounded={"md"}
              bg={btnColor}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              onClick={() => QuestionSelectIndex(index)}
            >
              <Text fontSize={"3xl"} textAlign={"left"}>
                {" "}
                {option}
              </Text>
            </Button>
          ))}
        </Box>
      </Box>
    </>
  );
}
