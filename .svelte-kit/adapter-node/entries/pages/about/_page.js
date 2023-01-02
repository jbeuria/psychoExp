async function load({ params, url, fetch }) {
  const res = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      a: 1,
      b: 2
    })
  });
  let result = await res.json();
  await fetch("/api/records", {
    method: "POST",
    body: JSON.stringify({
      id: 1,
      info: "this is a demo text"
    })
  });
  return {
    post: {
      title: `Title for ${url.searchParams.get("slug")} goes here`
    },
    item: result.sum
  };
}
export {
  load
};
