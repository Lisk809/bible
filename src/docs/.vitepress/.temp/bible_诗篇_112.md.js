import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/112.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/112.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>112:1 你们要赞美耶和华！敬畏耶和华，甚喜爱他命令的，这人便为有福！</p><p><a id="2"></a>112:2 他的后裔在世必强盛，正直人的后代必要蒙福。</p><p><a id="3"></a>112:3 他家中有货物，有钱财；他的公义存到永远！</p><p><a id="4"></a>112:4 正直人在黑暗中，有光向他发现。他有恩惠，有怜悯，有公义。</p><p><a id="5"></a>112:5 施恩与人、借贷与人的，这人事情顺利；他被审判的时候，要诉明自己的冤。</p><p><a id="6"></a>112:6 他永不动摇。义人被记念，直到永远。</p><p><a id="7"></a>112:7 他必不怕凶恶的信息；他心坚定，倚靠耶和华。</p><p><a id="8"></a>112:8 他心确定，总不惧怕，直到他看见敌人遭报。</p><p><a id="9"></a>112:9 他施舍钱财，周济贫穷；他的仁义存到永远。他的角必被高举，大有荣耀。</p><p><a id="10"></a>112:10 恶人看见便恼恨，必咬牙而消化；恶人的心愿要归灭绝。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/112.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _112 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _112 as default
};
