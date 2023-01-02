import { j as json } from './index2-bebb4fa4.js';

async function POST({ request }) {
  const { a, b } = await request.json();
  return json({ sum: a + b });
}

export { POST };
//# sourceMappingURL=_server-a8c16f7b.js.map
