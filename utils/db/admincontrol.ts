// USE THIS ONLY FOR SERVER-SIDE CONTROL

import { createClient } from "@supabase/supabase-js";

const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const service_role_key = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabase_url, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

// Access auth admin api
const adminAuthClient = supabase.auth.admin;

type InsrtType = {
  [key: string]: any;
};
export async function adminDBInsert(
  from: string,
  insert: InsrtType,
  select: string | undefined
) {
  try {
    if (select === undefined) {
      // selectを行わない(追加のみを行う場合のコード)
      const { error } = await supabase.from(from).insert(insert);
      if (error) throw error;
    } else {
      const { data, error } = await supabase
        .from(from)
        .insert(insert)
        .select(select);
      if (error) throw error;
      return data;
    }
  } catch (error) {
    return error;
  }
}
