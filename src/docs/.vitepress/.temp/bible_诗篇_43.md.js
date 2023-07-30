import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/43.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/43.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>43:1 神啊，求你伸我的冤，向不虔诚的国为我辨屈；求你救我脱离诡诈不义的人。</p><p><a id="2"></a>43:2 因为你是赐我力量的　神，为何丢弃我呢？我为何因仇敌的欺压时常哀痛呢？</p><p><a id="3"></a>43:3 求你发出你的亮光和真实，好引导我，带我到你的圣山，到你的居所。</p><p><a id="4"></a>43:4 我就走到　神的祭坛，到我最喜乐的　神那里。　神啊，我的　神！我要弹琴称赞你！</p><p><a id="5"></a>43:5 我的心哪，你为何忧闷？为何在我里面烦躁？应当仰望　神，因我还要称赞他。他是我脸上的光荣（注：原文作“帮助”），是我的　神。〔可拉后裔的训诲诗，交与伶长。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/43.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _43 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _43 as default
};
