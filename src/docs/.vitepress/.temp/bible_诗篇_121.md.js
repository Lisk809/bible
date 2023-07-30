import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/121.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/121.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>121:1 我要向山举目，我的帮助从何而来？</p><p><a id="2"></a>121:2 我的帮助从造天地的耶和华而来。</p><p><a id="3"></a>121:3 他必不叫你的脚摇动，保护你的必不打盹！</p><p><a id="4"></a>121:4 保护以色列的，也不打盹，也不睡觉。</p><p><a id="5"></a>121:5 保护你的是耶和华，耶和华在你右边荫庇你。</p><p><a id="6"></a>121:6 白日，太阳必不伤你；夜间，月亮必不害你。</p><p><a id="7"></a>121:7 耶和华要保护你，免受一切的灾害。他要保护你的性命。</p><p><a id="8"></a>121:8 你出你入，耶和华要保护你，从今时直到永远。〔大卫上行之诗。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/121.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _121 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _121 as default
};
