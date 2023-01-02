import { j as json } from "../../../../chunks/index2.js";
async function POST({ request }) {
  const { a, b } = await request.json();
  return json({ sum: a + b });
}
export {
  POST
};
