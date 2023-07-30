import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/126.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/126.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>126:1 当耶和华将那些被掳的带回锡安的时候，我们好像做梦的人。</p><p><a id="2"></a>126:2 我们满口喜笑、满舌欢呼的时候，外邦中就有人说：“耶和华为他们行了大事！”</p><p><a id="3"></a>126:3 耶和华果然为我们行了大事，我们就欢喜。</p><p><a id="4"></a>126:4 耶和华啊，求你使我们被掳的人归回，好像南地的河水复流！</p><p><a id="5"></a>126:5 流泪撒种的，必欢呼收割！</p><p><a id="6"></a>126:6 那带种流泪出去的，必要欢欢乐乐地带禾捆回来！〔所罗门上行之诗。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/126.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _126 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _126 as default
};
