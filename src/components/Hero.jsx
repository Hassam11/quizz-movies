import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import InitialGame from "./InitialGame";
import play from "../assets/PlayPerson.svg";

export default function Hero() {
  return (
    <Box align="center" pt={"20"} direction={"column"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Test your{" "}
          <Text as={"span"} color={"green.400"}>
            movie knowledge!
          </Text>
        </Heading>
        <Text
          color={"gray.500"}
          maxW={"3xl"}
          fontSize={{ base: "3xl", sm: "xl", md: "1xl" }}
        >
          Test your movie knowledge with our exciting movie quiz. Show how much
          you know about your favorite films. Have fun and challenge your movie
          buff skills!
        </Text>
        <img src={play} width={400} />
      </Stack>
      <Box pt={"14"}>
        <InitialGame />
      </Box>
    </Box>
  );
}
