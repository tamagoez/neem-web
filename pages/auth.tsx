import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function Login() {
  return (
    <>
      <p>This is login page.</p>
      <div style={{ width: "80%" }}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input variant="flushed" placeholder="Flushed" type="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input variant="flushed" placeholder="Flushed" type="password" />
        </FormControl>
      </div>
    </>
  );
}
