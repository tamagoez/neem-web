"use client";

import { useRouter } from "next/navigation";
import { authLoginWithEmailPassword } from "../../scripts/database/auth/signin";
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
  const router = useRouter();
  const [authmode, setAuthmode] = useState<"login" | "signup" | undefined>(
    undefined
  );

  return (
    <>
      <style jsx>{`
        .auth_modal {
          disply: fixed;
          insert: 0;
        }
      `}</style>
      <Container
        maxW="md"
        boxShadow="lg"
        className="auth_modal"
        borderRadius="14px"
      >
        {authmode === "signup" ? <></> : <LoginComponent />}

        <Button
          onClick={() => {
            if (authmode === "login") setAuthmode("signup");
            else setAuthmode("login");
          }}
        >
          {authmode === "login" ? "新規登録" : "ログイン"}
        </Button>
      </Container>
    </>
  );
}

function LoginComponent({}: {}) {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    const loginstatus = await authLoginWithEmailPassword(email, password);
    if (loginstatus) router.replace("/auth/callback");
  };
  const isEmailError =
    !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPasswordError = password === "";
  return (
    <>
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
      <Button onClick={handleLogin}>ログイン</Button>
    </>
  );
}
