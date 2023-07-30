import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/120.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/120.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>120:1 我在急难中求告耶和华，他就应允我。</p><p><a id="2"></a>120:2 耶和华啊，求你救我脱离说谎的嘴唇和诡诈的舌头。</p><p><a id="3"></a>120:3 诡诈的舌头啊，要给你甚么呢？要拿甚么加给你呢？</p><p><a id="4"></a>120:4 就是勇士的利箭和罗腾（注：小树名，松类）木的炭火。</p><p><a id="5"></a>120:5 我寄居在米设，住在基达帐棚之中有祸了！</p><p><a id="6"></a>120:6 我与那恨恶和睦的人许久同住。</p><p><a id="7"></a>120:7 我愿和睦，但我发言，他们就要争战。〔上行之诗。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/120.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _120 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _120 as default
};
