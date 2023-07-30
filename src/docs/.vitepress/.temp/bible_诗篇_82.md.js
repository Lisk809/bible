import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/82.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/82.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>82:1 神站在有权力者的会中，在诸神中行审判，</p><p><a id="2"></a>82:2 说：“你们审判不秉公义，徇恶人的情面，要到几时呢？〔细拉〕</p><p><a id="3"></a>82:3 你们当为贫寒的人和孤儿伸冤，当为困苦和穷乏的人施行公义。</p><p><a id="4"></a>82:4 当保护贫寒和穷乏的人，救他们脱离恶人的手。</p><p><a id="5"></a>82:5 你们仍不知道，也不明白，在黑暗中走来走去；地的根基都摇动了。</p><p><a id="6"></a>82:6 我曾说：‘你们是神，都是至高者的儿子。’</p><p><a id="7"></a>82:7 然而你们要死，与世人一样；要仆倒，像王子中的一位。”</p><p><a id="8"></a>82:8 神啊，求你起来审判世界，因为你要得万邦为业。〔亚萨的诗歌。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/82.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _82 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _82 as default
};
