"use client";

import { deleteCookie, getCookie } from "cookies-next";

import { useRouter } from "next/navigation";
import { authLoginWithEmailPassword } from "../../scripts/database/auth/signin";
import { useEffect, useState } from "react";
import { baseUrl } from "../../utils/globalvar";
import { useSearchParams } from "next/navigation";

// import { useToggle, upperFirst } from "@mantine/hooks";
import { UseFormReturnType, useForm } from "@mantine/form";
import {
  Anchor,
  Button,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";

export default function Auth() {
  // const router = useRouter();
  const [authmode, setAuthmode] = useState("login");

  function toggle() {
    const newAuthmode = authmode === "login" ? "signup" : "login";
    setAuthmode(newAuthmode);
    window.history.replaceState(null, "", `/${newAuthmode}`);
  }

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },
    validate: {
      email: (val) =>
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          val
        )
          ? null
          : "Invalid email",
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  useEffect(() => {
    const cookieAuthmode = getCookie("authmode") ?? "login";
    console.log(cookieAuthmode)
    setAuthmode(cookieAuthmode);
    window.history.replaceState(null, "", `/${cookieAuthmode}`);
    setTimeout(() => {
      deleteCookie("authmode");
    }, 0);
  }, []);

  return (
    <>
      <div>
        <Paper radius="md" p="xl" withBorder>
          <Text size="lg">
            Welcome to Neem
            <br />
            {authmode}
          </Text>
          <Divider label="Continue with email" labelPosition="center" my="lg" />

          <form onSubmit={form.onSubmit(() => {})}>
            <Stack>
              {authmode === "login" ? (
                <LoginComponent form={form} />
              ) : (
                <SignupComponent />
              )}
            </Stack>
            <Group mt="xl">
              <Anchor
                component="button"
                type="button"
                color="dimmed"
                onClick={() => toggle()}
                size="xs"
              >
                {authmode === "signup"
                  ? "Already have an account? Login"
                  : "Don't have an account? Register"}
              </Anchor>
            </Group>
          </form>
        </Paper>
      </div>
    </>
  );
}

function LoginComponent({
  form,
}: {
  form: UseFormReturnType<
    {
      email: string;
      name: string;
      password: string;
      terms: boolean;
    },
    (values: {
      email: string;
      name: string;
      password: string;
      terms: boolean;
    }) => {
      email: string;
      name: string;
      password: string;
      terms: boolean;
    }
  >;
}) {
  return (
    <>
      <TextInput
        required
        label="Email"
        placeholder="your@email.addr"
        value={form.values.email}
        onChange={(event) =>
          form.setFieldValue("email", event.currentTarget.value)
        }
        error={form.errors.email && "Invalid email"}
        radius="md"
      />

      <PasswordInput
        required
        label="Password"
        placeholder="Your password"
        value={form.values.password}
        onChange={(event) =>
          form.setFieldValue("password", event.currentTarget.value)
        }
        error={
          form.errors.password &&
          "Password should include at least 6 characters"
        }
        radius="md"
      />

      <Button type="submit" radius="xl">
        Login
      </Button>
    </>
  );
}

function SignupComponent() {
  // URL送信
  async function handleSignup() {
    new Error();
  }
  return (
    <>
      <Text>
        neem・neml共通サーバーのアカウントを新規作成しましょう！
        <br />
        費用は一切かかりません。
        <br />
        作成したアカウントは、neem・neml共通サーバー以外で利用することはできません。
      </Text>
      <Button
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan" }}
        onClick={() => handleSignup()}
      >
        neem・neml共通アカウントを新規作成
      </Button>
    </>
  );
}
