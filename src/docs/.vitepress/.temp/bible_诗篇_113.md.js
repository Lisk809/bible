import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/113.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/113.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>113:1 你们要赞美耶和华！耶和华的仆人哪，你们要赞美，赞美耶和华的名！</p><p><a id="2"></a>113:2 耶和华的名是应当称颂的，从今时直到永远！</p><p><a id="3"></a>113:3 从日出之地到日落之处，耶和华的名是应当赞美的！</p><p><a id="4"></a>113:4 耶和华超乎万民之上，他的荣耀高过诸天！</p><p><a id="5"></a>113:5 谁像耶和华我们的　神呢？他坐在至高之处，</p><p><a id="6"></a>113:6 自己谦卑，观看天上地下的事。</p><p><a id="7"></a>113:7 他从灰尘里抬举贫寒人，从粪堆中提拔穷乏人，</p><p><a id="8"></a>113:8 使他们与王子同坐，就是与本国的王子同坐。</p><p><a id="9"></a>113:9 他使不能生育的妇人安居家中，为多子的乐母。你们要赞美耶和华！</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/113.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _113 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _113 as default
};
