import { Box, Flex,  Spacer, Text } from "@chakra-ui/react";
import ButtonToggle from "./ButtonToggle";

export default function NavBar() {
  return (
    <Flex pt={"4"}>
      <Box>
        <Text as="b" p={"3"} fontSize="4xl">
          <a  href="/">Quizz Movies</a>
        </Text>
      </Box>
      <Spacer />
      <Box p={"3"}>
        <ButtonToggle />
      </Box>
    </Flex>
  );
}
