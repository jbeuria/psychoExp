import { json } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
 // console.log(JSON.stringify(request))
  const { a, b } = await request.json();
  return json({sum:a + b});
}
