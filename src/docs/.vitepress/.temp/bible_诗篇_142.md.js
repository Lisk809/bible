import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/142.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/142.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>142:1 我发声哀告耶和华，发声恳求耶和华。</p><p><a id="2"></a>142:2 我在他面前吐露我的苦情，陈说我的患难。</p><p><a id="3"></a>142:3 我的灵在我里面发昏的时候，你知道我的道路。在我行的路上，敌人为我暗设网罗。</p><p><a id="4"></a>142:4 求你向我右边观看，因为没有人认识我。我无处避难，也没有人眷顾我。</p><p><a id="5"></a>142:5 耶和华啊，我曾向你哀求，我说：“你是我的避难所，在活人之地，你是我的福分。”</p><p><a id="6"></a>142:6 求你侧耳听我的呼求，因我落到极卑之地；求你救我脱离逼迫我的人，因为他们比我强盛。</p><p><a id="7"></a>142:7 求你领我出离被囚之地，我好称赞你的名。义人必环绕我，因为你是用厚恩待我。〔大卫的诗。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/142.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _142 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _142 as default
};
