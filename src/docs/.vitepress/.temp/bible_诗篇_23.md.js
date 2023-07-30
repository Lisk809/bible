import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/23.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/23.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>23:1 耶和华是我的牧者，我必不至缺乏。</p><p><a id="2"></a>23:2 他使我躺卧在青草地上，领我在可安歇的水边。</p><p><a id="3"></a>23:3 他使我的灵魂苏醒，为自己的名引导我走义路。</p><p><a id="4"></a>23:4 我虽然行过死荫的幽谷，也不怕遭害，因为你与我同在；你的杖，你的竿，都安慰我。</p><p><a id="5"></a>23:5 在我敌人面前，你为我摆设筵席。你用油膏了我的头，使我的福杯满溢。</p><p><a id="6"></a>23:6 我一生一世必有恩惠慈爱随著我，我且要住在耶和华的殿中，直到永远！〔大卫的诗。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/23.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _23 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _23 as default
};
