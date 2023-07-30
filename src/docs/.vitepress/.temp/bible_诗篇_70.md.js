import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/70.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/70.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>70:1 神啊，求你快快搭救我！耶和华啊，求你速速帮助我！</p><p><a id="2"></a>70:2 愿那些寻索我命的，抱愧蒙羞；愿那些喜悦我遭害的，退后受辱！</p><p><a id="3"></a>70:3 愿那些对我说“阿哈！阿哈！”的，因羞愧退后。</p><p><a id="4"></a>70:4 愿一切寻求你的，因你高兴欢喜；愿那些喜爱你救恩的常说：“当尊　神为大！”</p><p><a id="5"></a>70:5 但我是困苦穷乏的。　神啊，求你速速到我这里来！你是帮助我的，搭救我的。耶和华啊，求你不要耽延！</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/70.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _70 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _70 as default
};
