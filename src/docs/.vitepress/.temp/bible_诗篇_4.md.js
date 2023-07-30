import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/4.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/4.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>4:1 显我为义的　神啊，我呼吁的时候，求你应允我！我在困苦中，你曾使我宽广；现在求你怜恤我，听我的祷告。</p><p><a id="2"></a>4:2 你们这上流人哪，你们将我的尊荣变为羞辱要到几时呢？你们喜爱虚妄、寻找虚假要到几时呢？〔细拉〕</p><p><a id="3"></a>4:3 你们要知道，耶和华已经分别虔诚人归他自己。我求告耶和华，他必听我。</p><p><a id="4"></a>4:4 你们应当畏惧，不可犯罪；在床上的时候，要心里思想，并要肃静。〔细拉〕</p><p><a id="5"></a>4:5 当献上公义的祭，又当倚靠耶和华。</p><p><a id="6"></a>4:6 有许多人说：“谁能指示我们甚么好处？”耶和华啊，求你仰起脸来，光照我们！</p><p><a id="7"></a>4:7 你使我心里快乐，胜过那丰收五谷新酒的人。</p><p><a id="8"></a>4:8 我必安然躺下睡觉，因为独有你耶和华使我安然居住。〔大卫的诗，交与伶长。用吹的乐器。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/4.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _4 as default
};
