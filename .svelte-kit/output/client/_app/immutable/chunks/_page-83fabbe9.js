async function o({params:s,url:t,fetch:e}){let a=await(await e("/api/user",{method:"POST",body:JSON.stringify({a:1,b:2})})).json();return await e("/api/records",{method:"POST",body:JSON.stringify({id:1,info:"this is a demo text"})}),{post:{title:`Title for ${t.searchParams.get("slug")} goes here`},item:a.sum}}const i=Object.freeze(Object.defineProperty({__proto__:null,load:o},Symbol.toStringTag,{value:"Module"}));export{i as _,o as l};
