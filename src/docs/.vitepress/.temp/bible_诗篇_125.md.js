import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/125.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/125.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>125:1 倚靠耶和华的人好像锡安山，永不动摇。</p><p><a id="2"></a>125:2 众山怎样围绕耶路撒冷，耶和华也照样围绕他的百姓，从今时直到永远。</p><p><a id="3"></a>125:3 恶人的杖不常落在义人的分上，免得义人伸手作恶。</p><p><a id="4"></a>125:4 耶和华啊，求你善待那些为善和心里正直的人。</p><p><a id="5"></a>125:5 至于那偏行弯曲道路的人，耶和华必使他和作恶的人一同出去受刑。愿平安归于以色列！〔上行之诗。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/125.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _125 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _125 as default
};
