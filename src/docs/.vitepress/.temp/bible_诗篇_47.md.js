import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/47.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/47.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>47:1 万民哪，你们都要拍掌，要用夸胜的声音向　神呼喊！</p><p><a id="2"></a>47:2 因为耶和华至高者是可畏的，他是治理全地的大君王。</p><p><a id="3"></a>47:3 他叫万民服在我们以下，又叫列邦服在我们脚下。</p><p><a id="4"></a>47:4 他为我们选择产业，就是他所爱之雅各的荣耀。〔细拉〕</p><p><a id="5"></a>47:5 神上升，有喊声相送；耶和华上升，有角声相送。</p><p><a id="6"></a>47:6 你们要向　神歌颂，歌颂!向我们王歌颂，歌颂!</p><p><a id="7"></a>47:7 因为　神是全地的王，你们要用悟性歌颂!</p><p><a id="8"></a>47:8 神作王治理万国，　神坐在他的圣宝座上。</p><p><a id="9"></a>47:9 列邦的君王聚集，要作亚伯拉罕之　神的民；因为世界的盾牌是属　神的，他为至高。〔可拉后裔的诗歌。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/47.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _47 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _47 as default
};
