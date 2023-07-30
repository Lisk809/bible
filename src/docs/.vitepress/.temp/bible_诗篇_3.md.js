import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/3.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>3:1 耶和华啊，我的敌人何其加增！有许多人起来攻击我；</p><p><a id="2"></a>3:2 有许多人议论我说：“他得不著　神的帮助。”〔细拉〕</p><p><a id="3"></a>3:3 但你耶和华是我四围的盾牌，是我的荣耀，又是叫我抬起头来的。</p><p><a id="4"></a>3:4 我用我的声音求告耶和华，他就从他的圣山上应允我。〔细拉〕</p><p><a id="5"></a>3:5 我躺下睡觉，我醒著，耶和华都保佑我。</p><p><a id="6"></a>3:6 虽有成万的百姓来周围攻击我，我也不怕。</p><p><a id="7"></a>3:7 耶和华啊，求你起来！我的　神啊，求你救我！因为你打了我一切仇敌的腮骨，敲碎了恶人的牙齿。</p><p><a id="8"></a>3:8 救恩属乎耶和华，愿你赐福给你的百姓。〔细拉〕〔大卫的诗，交与伶长。用丝弦的乐器。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _3 as default
};
