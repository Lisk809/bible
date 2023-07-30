import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/以赛亚书/12.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/以赛亚书/12.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>12:1 到那日，你必说：“耶和华啊，我要称谢你！因为你虽然向我发怒，你的怒气却已转消，你又安慰了我。</p><p><a id="2"></a>12:2 看哪！　神是我的拯救，我要倚靠他，并不惧怕；因为主耶和华是我的力量，是我的诗歌，他也成了我的拯救。”</p><p><a id="3"></a>12:3 所以，你们必从救恩的泉源欢然取水。</p><p><a id="4"></a>12:4 在那日，你们要说：“当称谢耶和华，求告他的名，将他所行的传扬在万民中，提说他的名已被尊崇。</p><p><a id="5"></a>12:5 你们要向耶和华唱歌，因他所行的甚是美好！但愿这事普传天下。</p><p><a id="6"></a>12:6 锡安的居民哪，当扬声欢呼，因为在你们中间的以色列圣者乃为至大。”</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/以赛亚书/12.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _12 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _12 as default
};
