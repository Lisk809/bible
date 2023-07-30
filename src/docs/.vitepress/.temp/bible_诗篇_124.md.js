import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/124.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/124.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>124:1 以色列人要说，若不是耶和华帮助我们，</p><p><a id="2"></a>124:2 若不是耶和华帮助我们，当人起来攻击我们、</p><p><a id="3"></a>124:3 向我们发怒的时候，就把我们活活地吞了。</p><p><a id="4"></a>124:4 那时，波涛必漫过我们，河水必淹没我们，</p><p><a id="5"></a>124:5 狂傲的水必淹没我们。</p><p><a id="6"></a>124:6 耶和华是应当称颂的，他没有把我们当野食交给他们吞吃（注：原文作“牙齿”）。</p><p><a id="7"></a>124:7 我们好像雀鸟，从捕鸟人的网罗里逃脱；网罗破裂，我们逃脱了。</p><p><a id="8"></a>124:8 我们得帮助，是在乎倚靠造天地之耶和华的名。〔上行之诗。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/124.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _124 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _124 as default
};
