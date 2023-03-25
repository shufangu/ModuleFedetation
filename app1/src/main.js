import { render as HeaderRender } from "./header";
import { render as ContentRender } from "./content";

const el = document.querySelector('#app');

console.log("hahaha", el);
HeaderRender(el);
ContentRender(el);