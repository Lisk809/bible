import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/11.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/11.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>11:1 我是投靠耶和华，你们怎么对我说：“你当像鸟飞往你的山去。”</p><p><a id="2"></a>11:2 看哪，恶人弯弓，把箭搭在弦上，要在暗中射那心里正直的人。</p><p><a id="3"></a>11:3 根基若毁坏，义人还能做甚么呢？”</p><p><a id="4"></a>11:4 耶和华在他的圣殿里，耶和华的宝座在天上，他的慧眼察看世人。</p><p><a id="5"></a>11:5 耶和华试验义人；惟有恶人和喜爱强暴的人，他心里恨恶。</p><p><a id="6"></a>11:6 他要向恶人密布网罗，有烈火、硫磺、热风作他们杯中的分。</p><p><a id="7"></a>11:7 因为耶和华是公义的，他喜爱公义，正直人必得见他的面。〔大卫的诗，交与伶长。调用第八。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/11.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _11 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _11 as default
};
