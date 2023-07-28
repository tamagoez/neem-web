import { Box, Button, Input } from "@chakra-ui/react";

export default function Login() {
  return (
    <>
      <Box>
        <Button colorScheme="teal" variant="outline">
          Login with neemBase
        </Button>
        <Input variant="flushed" placeholder="Flushed" />
        <Input variant="flushed" placeholder="Flushed" />
        <Button>Login</Button>
        <Button>Signup</Button>
      </Box>
    </>
  );
}
