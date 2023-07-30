import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/122.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/122.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>122:1 人对我说：“我们往耶和华的殿去”，我就欢喜。</p><p><a id="2"></a>122:2 耶路撒冷啊，我们的脚站在你的门内。</p><p><a id="3"></a>122:3 耶路撒冷被建造，如同连络整齐的一座城。</p><p><a id="4"></a>122:4 众支派，就是耶和华的支派，上那里去，按以色列的常例（注：或作“以色列的证据”）称赞耶和华的名。</p><p><a id="5"></a>122:5 因为在那里设立审判的宝座，就是大卫家的宝座。</p><p><a id="6"></a>122:6 你们要为耶路撒冷求平安。 耶路撒冷啊，爱你的人必然兴旺。</p><p><a id="7"></a>122:7 愿你城中平安，愿你宫内兴旺！</p><p><a id="8"></a>122:8 因我弟兄和同伴的缘故，我要说： “愿平安在你中间！”</p><p><a id="9"></a>122:9 因耶和华我们　神殿的缘故，我要为你求福。〔上行之诗。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/122.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _122 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _122 as default
};
