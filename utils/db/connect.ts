import { createClient } from "@supabase/supabase-js";

const baseSupabaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const baseSupabaseKey = process.env.NEXT_PUBLIC_BASE_KEY;

export default createClient(baseSupabaseUrl!, baseSupabaseKey!);
