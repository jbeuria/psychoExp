import { c as create_ssr_component, e as escape } from './index-1d92b199.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>Title: ${escape(data.post.title)}  Item: ${escape(data.item)}</h1>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d71838a1.js.map
