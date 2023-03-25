import {render as HeaderRender} from "app1/Header";
import { render as FooterRender } from "./footer";
import { render as ContentRender } from "./content";

const el = document.querySelector('#app');

HeaderRender(el);
ContentRender(el);
FooterRender(el);
