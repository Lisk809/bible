import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/123.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/123.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>123:1 坐在天上的主啊，我向你举目。</p><p><a id="2"></a>123:2 看哪，仆人的眼睛怎样望主人的手，使女的眼睛怎样望主母的手，我们的眼睛也照样望耶和华我们的　神，直到他怜悯我们。</p><p><a id="3"></a>123:3 耶和华啊，求你怜悯我们，怜悯我们！因为我们被藐视，已到极处。</p><p><a id="4"></a>123:4 我们被那些安逸人的讥诮和骄傲人的藐视，已到极处。〔大卫上行之诗。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/123.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _123 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _123 as default
};
