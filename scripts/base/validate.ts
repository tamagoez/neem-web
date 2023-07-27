import supabase from "../../utils/db/connect";

export async function checkOnetimeID(id: string, type: number) {
  const { data, error } = await supabase
    .from("onetime")
    .select()
    .eq("id", id)
    .eq("type", type)
    .single();
  return false;
}
