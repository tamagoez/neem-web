"use client";

import {
  Container,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  FormHelperText,
  FormErrorMessage,
  Button,
} from "../common/chakra-ui";
import { useState } from "react";

export default function Auth() {
  const [authmode, setAuthmode] = useState<"login" | "signup" | undefined>(
    undefined
  );
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const isEmailError =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPasswordError = password === "";

  return (
    <>
      <VStack>
        <Container
          maxW="md"
          borderColor="gray"
          borderWidth="1px"
          dropShadow="sm"
        >
          <FormControl isInvalid={isEmailError}>
            <FormLabel textColor="black">Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!isEmailError ? (
              <></>
            ) : (
              <FormErrorMessage>メールを入力してください</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={isPasswordError}>
            <FormLabel textColor="black">Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!isPasswordError ? (
              <></>
            ) : (
              <FormErrorMessage>パスワードを入力してください</FormErrorMessage>
            )}
          </FormControl>
          <Button>ログイン</Button>
          <Button>アカウント作成・連携</Button>
        </Container>
      </VStack>
    </>
  );
}
