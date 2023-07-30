import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/15.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/15.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>15:1 耶和华啊，谁能寄居你的帐幕？谁能住在你的圣山？</p><p><a id="2"></a>15:2 就是行为正直、做事公义、心里说实话的人。</p><p><a id="3"></a>15:3 他不以舌头谗谤人，不恶待朋友，也不随夥毁谤邻里。</p><p><a id="4"></a>15:4 他眼中藐视匪类，却尊重那敬畏耶和华的人。他发了誓，虽然自己吃亏，也不更改。</p><p><a id="5"></a>15:5 他不放债取利，不受贿赂以害无辜。行这些事的人必永不动摇。〔大卫的金诗。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/15.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _15 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _15 as default
};
