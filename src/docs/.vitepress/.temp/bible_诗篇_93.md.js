import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/93.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/93.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>93:1 耶和华作王，他以威严为衣穿上。耶和华以能力为衣，以能力束腰，世界就坚定，不得动摇。</p><p><a id="2"></a>93:2 你的宝座从太初立定，你从亘古就有。</p><p><a id="3"></a>93:3 耶和华啊，大水扬起，大水发声，波浪澎湃。</p><p><a id="4"></a>93:4 耶和华在高处大有能力，胜过诸水的响声，洋海的大浪。</p><p><a id="5"></a>93:5 耶和华啊，你的法度最的确；你的殿永称为圣，是合宜的。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/93.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _93 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _93 as default
};
