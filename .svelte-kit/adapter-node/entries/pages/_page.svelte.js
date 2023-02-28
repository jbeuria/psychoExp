import { c as create_ssr_component } from "../../chunks/index.js";
import { initJsPsych } from "jspsych";
import htmlKeyboardResponse from "@jspsych/plugin-html-keyboard-response";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const jsPsych = initJsPsych();
  const trial = {
    type: htmlKeyboardResponse,
    stimulus: "Hello world!"
  };
  jsPsych.run([trial]);
  return `<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation</p>`;
});
export {
  Page as default
};
