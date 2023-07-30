import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/8.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/8.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>8:1 耶和华我们的主啊，你的名在全地何其美！你将你的荣耀彰显于天。</p><p><a id="2"></a>8:2 你因敌人的缘故，从婴孩和吃奶的口中建立了能力，使仇敌和报仇的闭口无言。</p><p><a id="3"></a>8:3 我观看你指头所造的天，并你所陈设的月亮星宿，</p><p><a id="4"></a>8:4 便说，人算甚么，你竟顾念他？世人算甚么，你竟眷顾他？</p><p><a id="5"></a>8:5 你叫他比天使（注：或作“　神”）微小一点，并赐他荣耀尊贵为冠冕。</p><p><a id="6,7,8"></a>8:6,7,8 你派他管理你手所造的，使万物，就是一切的牛羊、田野的兽、空中的鸟、海里的鱼，凡经行海道的，都服在他的脚下。</p><p><a id="9"></a>8:9 耶和华我们的主啊，你的名在全地何其美！〔大卫的诗，交与伶长。调用“慕拉便”。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/8.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _8 as default
};
