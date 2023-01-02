import db from '$lib/server/db.js'
import { json } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request,params }) {
  const { info } = await request.json();

  console.log('API request for: '+params.model,info)

  let resp=await db.insert(params.model,{data:{info:info}})
  return json(resp);
}

