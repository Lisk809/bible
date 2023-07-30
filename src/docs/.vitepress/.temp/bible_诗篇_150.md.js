import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/150.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/150.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>150:1 你们要赞美耶和华，在　神的圣所赞美他，在他显能力的穹苍赞美他！</p><p><a id="2"></a>150:2 要因他大能的作为赞美他，按著他极美的大德赞美他。</p><p><a id="3"></a>150:3 要用角声赞美他，鼓瑟、弹琴赞美他。</p><p><a id="4"></a>150:4 击鼓、跳舞赞美他，用丝弦的乐器和箫的声音赞美他。</p><p><a id="5"></a>150:5 用大响的钹赞美他，用高声的钹赞美他。</p><p><a id="6"></a>150:6 凡有气息的，都要赞美耶和华！你们要赞美耶和华！?</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/150.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _150 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _150 as default
};
