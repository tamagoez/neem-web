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
  Center,
  Text,
} from "../common/chakra-ui";
import { useState } from "react";
import { baseUrl } from "../../utils/globalvar";
import { issueSignupServer } from "./issue";

export default function Auth() {
  const router = useRouter();
  const [authmode, setAuthmode] = useState<"login" | "signup" | undefined>(
    "login"
  );

  return (
    <>
      <style jsx>{`
        .auth_modal {
          position: fixed;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      `}</style>
      <div
        className="auth_modal"
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translateX(-50%) translateY(-50%)",
        }}
      >
        <Container maxW="lg" boxShadow="xl" borderRadius="14px">
          <Center>
            <Text fontSize="md" fontWeight="bold">
              {authmode === "login" ? "ログイン" : "新規登録"}
            </Text>
          </Center>
          {authmode === "signup" ? <SignupComponent /> : <LoginComponent />}

          <Button
            onClick={() => {
              if (authmode === "login") setAuthmode("signup");
              else setAuthmode("login");
            }}
          >
            {authmode === "login" ? "新規登録" : "ログイン"}に切り替え
          </Button>
        </Container>
      </div>
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
      <Button onClick={handleLogin} colorScheme="teal">
        ログイン
      </Button>
    </>
  );
}

function SignupComponent() {
  // URL送信
  const handleSignup = async () => {
    try {
      const requestId = await issueSignupServer();
      location.href = baseUrl + "connect/signup?requestId=" + requestId;
    } catch (error) {
      alert("エラーが発生したようです...\n管理者にご連絡いただけると幸いです");
    }
  };
  return (
    <>
      <Text>
        NeemsBaseアカウントと連携して新規登録
        <br />
        連携後はNeemsBaseを介さずにログイン可能になります
      </Text>
      <Button colorScheme="teal" onClick={() => handleSignup()}>
        NeemsBaseでログイン
      </Button>
    </>
  );
}
