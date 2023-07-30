import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/以斯帖记/10.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/以斯帖记/10.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>10:1 亚哈随鲁王使旱地和海岛的人民都进贡。</p><p><a id="2"></a>10:2 他以权柄能力所行的，并他抬举末底改使他高升的事，岂不都写在玛代和波斯王的历史上吗？</p><p><a id="3"></a>10:3 犹大人末底改作亚哈随鲁王的宰相，在犹大人中为大，得他众弟兄的喜悦，为本族的人求好处，向他们说和平的话。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/以斯帖记/10.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _10 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _10 as default
};
