/** @type {import('./$types').PageLoad} */

export async function load({ params,url,fetch }) {

    const res = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
            a:1,
            b:2
        })
    })
    let result = await res.json();
   

  const res2 = await fetch('/api/records/insert', {
      method: 'POST',
      body: JSON.stringify({
          id:1,
          info:'this is a demo text'
      })
  })
  let resp2= await res2.json();
  
  console.log(resp2);

    return {
      post: {
        title: `Title for ${url.searchParams.get('slug') } goes here`,
      },
      item:result.sum
    };
  }