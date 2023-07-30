import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/133.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/133.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>133:1 看哪，弟兄和睦同居，是何等的善，何等的美！</p><p><a id="2"></a>133:2 这好比那贵重的油浇在亚伦的头上，流到胡须，又流到他的衣襟。</p><p><a id="3"></a>133:3 又好比黑门的甘露降在锡安山，因为在那里有耶和华所命定的福，就是永远的生命。〔上行之诗。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/133.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _133 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _133 as default
};
