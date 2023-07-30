import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","titleTemplate":"Holy Bible","description":"the Holy Bible for Web","frontmatter":{"layout":"home","titleTemplate":"Holy Bible","description":"the Holy Bible for Web","head":[["meta",{"name":"description","content":"网上圣经"}],["meta",{"name":"keywords","content":"Bible, 圣经"}]],"hero":{"name":"Holy Bible","text":"the Holy Bible for Web","tagline":"Man shall not live on bread alone, but on every word that comes from the mouth of God.(Matthew 4:4 NIV)","actions":[{"theme":"brand","text":"开始","link":"/intro"},{"theme":"alt","text":"GitHub","link":"https://github.com/Lisk809/bible"}]},"features":[{"title":"还没想好","details":"none"}]},"headers":[],"relativePath":"index.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
