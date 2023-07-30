import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/54.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/54.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>54:1 神啊，求你以你的名救我，凭你的大能为我伸冤。</p><p><a id="2"></a>54:2 神啊，求你听我的祷告，留心听我口中的言语。</p><p><a id="3"></a>54:3 因为外人起来攻击我，强暴人寻索我的命。他们眼中没有　神。〔细拉〕</p><p><a id="4"></a>54:4 神是帮助我的，是扶持我命的。</p><p><a id="5"></a>54:5 他要报应我仇敌所行的恶，求你凭你的诚实灭绝他们。</p><p><a id="6"></a>54:6 我要把甘心祭献给你；耶和华啊，我要称赞你的名，这名本为美好。</p><p><a id="7"></a>54:7 他从一切的急难中把我救出来，我的眼睛也看见了我仇敌遭报。〔大卫的训诲诗，交与伶长。用丝弦的乐器。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/54.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _54 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _54 as default
};
