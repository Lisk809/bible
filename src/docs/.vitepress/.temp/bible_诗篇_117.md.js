import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/117.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/117.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>117:1 万国啊，你们都当赞美耶和华！万民哪，你们都当颂赞他！</p><p><a id="2"></a>117:2 因为他向我们大施慈爱，耶和华的诚实存到永远。你们要赞美耶和华！</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/117.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _117 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _117 as default
};
