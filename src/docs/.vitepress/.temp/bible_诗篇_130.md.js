import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/130.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/130.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>130:1 耶和华啊，我从深处向你求告。</p><p><a id="2"></a>130:2 主啊，求你听我的声音，愿你侧耳听我恳求的声音！</p><p><a id="3"></a>130:3 主耶和华啊，你若究察罪孽，谁能站得住呢？</p><p><a id="4"></a>130:4 但在你有赦免之恩，要叫人敬畏你。</p><p><a id="5"></a>130:5 我等候耶和华，我的心等候，我也仰望他的话。</p><p><a id="6"></a>130:6 我的心等候主，胜于守夜的等候天亮，胜于守夜的等候天亮。</p><p><a id="7"></a>130:7 以色列啊，你当仰望耶和华！因他有慈爱，有丰盛的救恩。</p><p><a id="8"></a>130:8 他必救赎以色列脱离一切的罪孽。〔大卫上行之诗。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/130.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _130 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _130 as default
};
