import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Skeleton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { checkOnetimeID } from "../../scripts/base/validate";

export default function SignUp() {
  const router = useRouter();
  const [onetimeId, setOnetimeId] = useState(router.query.onetimeid);
  const [isPermit, setPermit] = useState(false);

  useEffect(() => {
    checkOnetime(onetimeId);
  }, [onetimeId]);
  async function checkOnetime(otId) {
    const validatereturn = await checkOnetimeID(otId, 1);
    setPermit(validatereturn);
  }
  return (
    <>
      <Heading size="md">NeemBaseにアカウントを登録</Heading>
      <p style={{ fontSize: "12px" }}>
        Neemでは分散型SNSを意識していますが、あなたのサーバーとNeem-Baseにアカウントを登録します。
        <br />
        これは色々なサーバーに引っ越ししたり、なりすましを防ぐために役立ちます。
      </p>
      <Skeleton isLoaded={isPermit}>
        <div style={{ width: "80%", marginTop: "20px" }}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              variant="flushed"
              placeholder="メールアドレス"
              type="email"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input variant="flushed" placeholder="パスワード" type="password" />
          </FormControl>
          <Checkbox>利用規約に同意する</Checkbox>
          <Button>新規登録する</Button>
        </div>
      </Skeleton>
    </>
  );
}
