import { createClient } from "@supabase/supabase-js";

const baseSupabaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const baseSupabaseKey = process.env.NEXT_PUBLIC_BASE_KEY;

export async function BaseClient(
  accesskey: string,
  accesssecret: string,
  accessurl: string
) {
  const supabase = createClient(baseSupabaseUrl, baseSupabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  // Access auth admin api
  const adminAuthClient = supabase.auth.admin;

  const checkKey = await supabase
    .from("validated_server")
    .select("*")
    .eq("url", accessurl)
    .limit(1)
    .single();
  if (
    checkKey.accesskey === accesskey &&
    checkKey.accesssecret === accesssecret
  ) {
    return supabase;
  } else {
    return new Error();
  }
}
