import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  Text,
  Flex,
} from "@chakra-ui/react";

export default function AlertaEndGame({ endGame, setEndGame }) {
  return (
    <AlertDialog
      isOpen={endGame}
      onClose={() => setEndGame(false)}
      size="3xl"
      autoFocus={true}
      motionPreset="scale"
      isCentered={true}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>
            <Text p={"4px"} fontSize={"3xl"}>
              Game Over
            </Text>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text mb={4} fontSize={"3xl"}>
              Congratulations! You {"'"}ve completed the game.
            </Text>
            <Text mb={4} fontSize={"3xl"}>
              Do you want to play again?
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Flex justifyContent={"space-between"} gap={30}>
              <Button
                fontSize={"2xl"}
                colorScheme="whatsapp"
                onClick={() => setEndGame(false)}
              >
                <a href="/">Play</a>
              </Button>
              <Button
                fontSize={"2xl"}
                colorScheme="whatsapp"
                onClick={() => setEndGame(false)}
              >
                Close
              </Button>
            </Flex>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
