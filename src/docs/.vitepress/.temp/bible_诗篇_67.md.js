import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/67.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/67.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>67:1 愿　神怜悯我们，赐福与我们，用脸光照我们，〔细拉〕</p><p><a id="2"></a>67:2 好叫世界得知你的道路，万国得知你的救恩。</p><p><a id="3"></a>67:3 神啊，愿列邦称赞你，愿万民都称赞你！</p><p><a id="4"></a>67:4 “愿万国都快乐欢呼，”因为你必按公正审判万民，引导世上的万国。〔细拉〕</p><p><a id="5"></a>67:5 神啊，愿列邦称赞你，愿万民都称赞你！</p><p><a id="6"></a>67:6 地已经出了土产；　神，就是我们的　神，要赐福与我们。</p><p><a id="7"></a>67:7 神要赐福与我们，地的四极都要敬畏他。〔大卫的诗歌，交与伶长。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/67.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _67 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _67 as default
};
