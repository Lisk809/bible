import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/131.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/131.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>131:1 耶和华啊，我的心不狂傲，我的眼不高大，重大和测不透的事，我也不敢行。</p><p><a id="2"></a>131:2 我的心平稳安静，好像断过奶的孩子在他母亲的怀中；我的心在我里面真像断过奶的孩子。</p><p><a id="3"></a>131:3 以色列啊，你当仰望耶和华，从今时直到永远！ 〔上行之诗。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/131.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _131 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _131 as default
};
