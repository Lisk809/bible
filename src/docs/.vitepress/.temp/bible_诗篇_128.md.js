import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/128.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/128.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>128:1 凡敬畏耶和华、遵行他道的人，便为有福。</p><p><a id="2"></a>128:2 你要吃劳碌得来的，你要享福，事情顺利。</p><p><a id="3"></a>128:3 你妻子在你的内室，好像多结果子的葡萄树；你儿女围绕你的桌子，好像橄榄栽子。</p><p><a id="4"></a>128:4 看哪，敬畏耶和华的人，必要这样蒙福！</p><p><a id="5"></a>128:5 愿耶和华从锡安赐福给你；愿你一生一世看见耶路撒冷的好处。</p><p><a id="6"></a>128:6 愿你看见你儿女的儿女。愿平安归于以色列！〔上行之诗。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/128.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _128 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _128 as default
};
