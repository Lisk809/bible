import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/13.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/13.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>13:1 耶和华啊，你忘记我要到几时呢？要到永远吗？你掩面不顾我要到几时呢？</p><p><a id="2"></a>13:2 我心里筹算，终日愁苦要到几时呢？我的仇敌升高压制我要到几时呢？</p><p><a id="3"></a>13:3 耶和华我的　神啊，求你看顾我，应允我，使我眼目光明，免得我沉睡至死；</p><p><a id="4"></a>13:4 免得我的仇敌说：“我胜了他”；免得我的敌人在我摇动的时候喜乐。</p><p><a id="5"></a>13:5 但我倚靠你的慈爱，我的心因你的救恩快乐。</p><p><a id="6"></a>13:6 我要向耶和华歌唱，因他用厚恩待我。〔大卫的诗，交与伶长。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/13.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _13 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _13 as default
};
