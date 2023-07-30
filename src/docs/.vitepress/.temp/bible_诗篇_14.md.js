import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/14.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/14.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>14:1 愚顽人心里说：“没有　神。”他们都是邪恶，行了可憎恶的事；没有一个人行善。</p><p><a id="2"></a>14:2 耶和华从天上垂看世人，要看有明白的没有，有寻求　神的没有。</p><p><a id="3"></a>14:3 他们都偏离正路，一同变为污秽；并没有行善的，连一个也没有!</p><p><a id="4"></a>14:4 作孽的都没有知识吗？他们吞吃我的百姓如同吃饭一样，并不求告耶和华。</p><p><a id="5"></a>14:5 他们在那里大大地害怕，因为　神在义人的族类中。</p><p><a id="6"></a>14:6 你们叫困苦人的谋算变为羞辱，然而耶和华是他的避难所。</p><p><a id="7"></a>14:7 但愿以色列的救恩从锡安而出，耶和华救回他被掳的子民。那时，雅各要快乐，以色列要欢喜。〔大卫的诗。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/14.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _14 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _14 as default
};
