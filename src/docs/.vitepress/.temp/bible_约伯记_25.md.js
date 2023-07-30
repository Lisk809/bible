import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/约伯记/25.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/约伯记/25.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>25:1 书亚人比勒达回答说：</p><p><a id="2"></a>25:2 “神有治理之权，有威严可畏，他在高处施行和平。</p><p><a id="3"></a>25:3 他的诸军，岂能数算？他的光亮一发，谁不蒙照呢？</p><p><a id="4"></a>25:4 这样，在　神面前人怎能称义？妇人所生的怎能洁净？</p><p><a id="5"></a>25:5 在　神眼前，月亮也无光亮，星宿也不清洁，</p><p><a id="6"></a>25:6 何况如虫的人，如蛆的世人呢！”</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/约伯记/25.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _25 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _25 as default
};
