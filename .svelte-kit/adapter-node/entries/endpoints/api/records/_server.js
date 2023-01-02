import { createClient } from "@supabase/supabase-js";
import { j as json } from "../../../../chunks/index2.js";
const supabase = createClient("https://resspknweoftwhnyohgm.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlc3Nwa253ZW9mdHdobnlvaGdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI2MzY2MTEsImV4cCI6MTk4ODIxMjYxMX0.wsYevfubpmlD2t7ppqoqPEpDSfX7c64Y_cUkMqx53bI");
const insert = async (model, params) => {
  const { data, error } = await supabase.from(model).insert([params.data]);
  const resp = await supabase.from(model).select();
  console.log(resp);
  if (error) {
    return console.error(error);
  }
  console.log(data);
};
const db = { insert };
async function POST({ request }) {
  const { info } = await request.json();
  console.log("from server", info);
  let resp = await db.insert("records", { data: { info } });
  return json(resp);
}
export {
  POST
};
