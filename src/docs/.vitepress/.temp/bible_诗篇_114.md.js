import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/114.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/114.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>114:1 以色列出了埃及，雅各家离开说异言之民。</p><p><a id="2"></a>114:2 那时，犹大为主的圣所，以色列为他所治理的国度。</p><p><a id="3"></a>114:3 沧海看见就奔逃，约旦河也倒流。</p><p><a id="4"></a>114:4 大山踊跃如公羊，小山跳舞如羊羔。</p><p><a id="5"></a>114:5 沧海啊，你为何奔逃？约旦哪，你为何倒流？</p><p><a id="6"></a>114:6 大山哪，你为何踊跃如公羊？小山哪，你为何跳舞如羊羔？</p><p><a id="7"></a>114:7 大地啊，你因见主的面，就是雅各　神的面，便要震动。</p><p><a id="8"></a>114:8 他叫磐石变为水池，叫坚石变为泉源。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/114.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _114 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _114 as default
};
