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

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
const component = async () => (await import('./_page.svelte-d71838a1.js')).default;
const file = '_app/immutable/components/pages/about/_page.svelte-5779eb96.js';
const imports = ["_app/immutable/components/pages/about/_page.svelte-5779eb96.js","_app/immutable/chunks/index-7f3551f2.js","_app/immutable/modules/pages/about/_page.js-7937ff43.js","_app/immutable/chunks/_page-83fabbe9.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal };
//# sourceMappingURL=3-78df03b4.js.map
