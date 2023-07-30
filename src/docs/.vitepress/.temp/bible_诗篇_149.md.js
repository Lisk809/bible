import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/149.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/149.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>149:1 你们要赞美耶和华！向耶和华唱新歌，在圣民的会中赞美他！</p><p><a id="2"></a>149:2 愿以色列因造他的主欢喜；愿锡安的民因他们的王快乐。</p><p><a id="3"></a>149:3 愿他们跳舞赞美他的名，击鼓、弹琴歌颂他！</p><p><a id="4"></a>149:4 因为耶和华喜爱他的百姓，他要用救恩当作谦卑人的妆饰。</p><p><a id="5"></a>149:5 愿圣民因所得的荣耀高兴，愿他们在床上欢呼！</p><p><a id="6"></a>149:6 愿他们口中称赞　神为高，手里有两刃的刀，</p><p><a id="7"></a>149:7 为要报复列邦，刑罚万民。</p><p><a id="8"></a>149:8 要用链子捆他们的君王，用铁镣锁他们的大臣，</p><p><a id="9"></a>149:9 要在他们身上施行所记录的审判。他的圣民都有这荣耀。你们要赞美耶和华！</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/149.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _149 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _149 as default
};
