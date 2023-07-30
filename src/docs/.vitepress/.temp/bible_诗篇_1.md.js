import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/1.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>1:1 不从恶人的计谋，不站罪人的道路，不坐亵慢人的座位。</p><p><a id="2"></a>1:2 惟喜爱耶和华的律法，昼夜思想，这人便为有福！</p><p><a id="3"></a>1:3 他要像一棵树栽在溪水旁，按时候结果子，叶子也不枯乾。凡他所做的尽都顺利。</p><p><a id="4"></a>1:4 恶人并不是这样，乃像糠秕被风吹散。</p><p><a id="5"></a>1:5 因此当审判的时候，恶人必站立不住；罪人在义人的会中也是如此。</p><p><a id="6"></a>1:6 因为耶和华知道义人的道路，恶人的道路却必灭亡。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1 as default
};
