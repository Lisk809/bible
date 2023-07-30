import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/98.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/98.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>98:1 你们要向耶和华唱新歌！因为他行过奇妙的事，他的右手和圣臂施行救恩。</p><p><a id="2"></a>98:2 耶和华发明了他的救恩，在列邦人眼前显出公义。</p><p><a id="3"></a>98:3 记念他向以色列家所发的慈爱，所凭的信实；地的四极都看见我们　神的救恩。</p><p><a id="4"></a>98:4 全地都要向耶和华欢乐，要发起大声，欢呼歌颂！</p><p><a id="5"></a>98:5 要用琴歌颂耶和华，用琴和诗歌的声音歌颂他！</p><p><a id="6"></a>98:6 用号和角声，在大君王耶和华面前欢呼！</p><p><a id="7"></a>98:7 愿海和其中所充满的澎湃，世界和住在其间的也要发声。</p><p><a id="8"></a>98:8 愿大水拍手，愿诸山在耶和华面前一同欢呼。</p><p><a id="9"></a>98:9 因为他来要审判遍地，他要按公义审判世界，按公正审判万民。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/98.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _98 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _98 as default
};
