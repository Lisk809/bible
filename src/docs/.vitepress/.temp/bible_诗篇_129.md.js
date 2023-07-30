import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/129.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/129.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>129:1 以色列当说：“从我幼年以来，敌人屡次苦害我。</p><p><a id="2"></a>129:2 从我幼年以来，敌人屡次苦害我，却没有胜了我。</p><p><a id="3"></a>129:3 如同扶犁的在我背上扶怼蹴耕的跫舰狻魿”</p><p><a id="4"></a>129:4 耶和华是公义的，他砍断了恶人的绳索。</p><p><a id="5"></a>129:5 愿恨恶锡安的都蒙羞退后。</p><p><a id="6"></a>129:6 愿他们像房顶上的草，未长成而枯乾。</p><p><a id="7"></a>129:7 收割的不够一把，捆禾的也不满怀；</p><p><a id="8"></a>129:8 过路的也不说：“愿耶和华所赐的福归与你们；我们奉耶和华的名给你们祝福。”〔上行之诗。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/129.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _129 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _129 as default
};
