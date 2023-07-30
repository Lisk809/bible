import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/20.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/20.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>20:1 愿耶和华在你遭难的日子应允你，愿名为雅各　神的高举你。</p><p><a id="2"></a>20:2 愿他从圣所救助你，从锡安坚固你。</p><p><a id="3"></a>20:3 记念你的一切供献，悦纳你的燔祭。〔细拉〕</p><p><a id="4"></a>20:4 将你心所愿的赐给你，成就你的一切筹算。</p><p><a id="5"></a>20:5 我们要因你的救恩夸胜，要奉我们　神的名竖立旌旗。愿耶和华成就你一切所求的。</p><p><a id="6"></a>20:6 现在我知道耶和华救护他的受膏者，必从他的圣天上应允他，用右手的能力救护他。</p><p><a id="7"></a>20:7 有人靠车，有人靠马，但我们要提到耶和华我们　神的名。</p><p><a id="8"></a>20:8 他们都屈身仆倒；我们却起来，立得正直。</p><p><a id="9"></a>20:9 求耶和华施行拯救；我们呼求的时候，愿王应允我们！〔大卫的诗，交与伶长。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/20.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _20 as default
};
