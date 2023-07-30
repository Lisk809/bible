import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"开发缘由","description":"","frontmatter":{},"headers":[],"relativePath":"intro.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "intro.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="开发缘由" tabindex="-1">开发缘由 <a class="header-anchor" href="#开发缘由" aria-label="Permalink to &quot;开发缘由&quot;">​</a></h1><p>本人是一个初来乍到的前端开发者，也是一个基督徒，开发完全是在业余时间</p><p>As this passage says:</p><blockquote><p>“With man this is impossible, but with God all things are possible.”(Matthew 19:26 NIV)</p></blockquote><p>Amen!</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("intro.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const intro = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  intro as default
};
