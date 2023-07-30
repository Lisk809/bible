import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/134.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/134.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>134:1 耶和华的仆人，夜间站在耶和华殿中的，你们当称颂耶和华！</p><p><a id="2"></a>134:2 你们当向圣所举手，称颂耶和华！</p><p><a id="3"></a>134:3 愿造天地的耶和华，从锡安赐福给你们。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/134.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _134 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _134 as default
};
