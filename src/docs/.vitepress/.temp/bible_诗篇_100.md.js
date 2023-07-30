import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/100.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/100.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>100:1 普天下当向耶和华欢呼！</p><p><a id="2"></a>100:2 你们当乐意事奉耶和华，当来向他歌唱！</p><p><a id="3"></a>100:3 你们当晓得耶和华是　神。我们是他造的，也是属他的；我们是他的民，也是他草场的羊。</p><p><a id="4"></a>100:4 当称谢进入他的门，当赞美进入他的院；当感谢他，称颂他的名。</p><p><a id="5"></a>100:5 因为耶和华本为善，他的慈爱存到永远，他的信实直到万代！〔大卫的诗〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/100.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _100 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _100 as default
};
