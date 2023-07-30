import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/127.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/127.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>127:1 若不是耶和华建造房屋，建造的人就枉然劳力；若不是耶和华看守城池，看守的人就枉然警醒。</p><p><a id="2"></a>127:2 你们清晨早起，夜晚安歇，吃劳碌得来的饭，本是枉然；惟有耶和华所亲爱的，必叫他安然睡觉。</p><p><a id="3"></a>127:3 儿女是耶和华所赐的产业，所怀的胎是他所给的赏赐。</p><p><a id="4"></a>127:4 少年时所生的儿女，好像勇士手中的箭。</p><p><a id="5"></a>127:5 箭袋充满的人便为有福。他们在城门口和仇敌说话的时候，必不至于羞愧。〔上行之诗。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/127.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _127 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _127 as default
};
