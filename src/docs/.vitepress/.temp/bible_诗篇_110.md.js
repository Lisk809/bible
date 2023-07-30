import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/110.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/110.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>110:1 耶和华对我主说：“你坐在我的右边，等我使你仇敌作你的脚凳。”</p><p><a id="2"></a>110:2 耶和华必使你从锡安伸出能力的杖来，你要在你仇敌中掌权。</p><p><a id="3"></a>110:3 当你掌权的日子（注：或作“行军的日子”），你的民要以圣洁的妆饰为衣（注：或作“以圣洁为妆饰”），甘心牺牲自己；你的民多如清晨的甘露（注：或作“你少年时光耀如清晨的甘露”）。</p><p><a id="4"></a>110:4 耶和华起了誓，决不后悔说：“你是照著麦基洗德的等次永远为祭司。”</p><p><a id="5"></a>110:5 在你右边的主，当他发怒日子，必打伤列王。</p><p><a id="6"></a>110:6 他要在列邦中刑罚恶人，尸首就遍满各处；他要在许多国中打破仇敌的头。</p><p><a id="7"></a>110:7 他要喝路旁的河水，因此必抬起头来。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/110.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _110 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _110 as default
};
