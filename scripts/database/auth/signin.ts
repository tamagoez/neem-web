import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

export async function authLoginWithEmailPassword(
  email: string,
  password: string
) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    return false;
  } else {
    return true;
  }
}
