import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/111.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/111.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>111:1 你们要赞美耶和华！我要在正直人的大会中，并公会中，一心称谢耶和华。</p><p><a id="2"></a>111:2 耶和华的作为本为大，凡喜爱的都必考察。</p><p><a id="3"></a>111:3 他所行的是尊荣和威严；他的公义存到永远。</p><p><a id="4"></a>111:4 他行了奇事，使人记念；耶和华有恩惠，有怜悯。</p><p><a id="5"></a>111:5 他赐粮食给敬畏他的人；他必永远记念他的约。</p><p><a id="6"></a>111:6 他向百姓显出大能的作为，把外邦的地赐给他们为业。</p><p><a id="7"></a>111:7 他手所行的是诚实公平，他的训词都是确实的，</p><p><a id="8"></a>111:8 是永永远远坚定的，是按诚实正直设立的。</p><p><a id="9"></a>111:9 他向百姓施行救赎，命定他的约，直到永远；他的名圣而可畏。</p><p><a id="10"></a>111:10 敬畏耶和华是智慧的开端；凡遵行他命令的是聪明人。耶和华是永远当赞美的！</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/111.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _111 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _111 as default
};
