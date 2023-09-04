import { Flex } from "@chakra-ui/react";
import ContainerGame from "./ContainerGame";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <Flex direction={'column'} >
      <NavBar />
      <ContainerGame width="60%"/>
    </Flex>
  );
}
