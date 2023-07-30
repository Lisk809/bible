import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/61.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/61.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>61:1 神啊，求你听我的呼求，侧耳听我的祷告。</p><p><a id="2"></a>61:2 我心里发昏的时候，我要从地极求告你，求你领我到那比我更高的磐石。</p><p><a id="3"></a>61:3 因为你作过我的避难所，作过我的坚固台，脱离仇敌。</p><p><a id="4"></a>61:4 我要永远住在你的帐幕里，我要投靠在你翅膀下的隐密处！〔细拉〕</p><p><a id="5"></a>61:5 神啊，你原是听了我所许的愿。你将产业赐给敬畏你名的人。</p><p><a id="6"></a>61:6 你要加添王的寿数，他的年岁必存到世世。</p><p><a id="7"></a>61:7 他必永远坐在　神面前。愿你预备慈爱和诚实保佑他。</p><p><a id="8"></a>61:8 这样，我要歌颂你的名，直到永远，好天天还我所许的愿。〔大卫的诗，照耶杜顿的作法，交与伶长。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/61.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _61 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _61 as default
};
