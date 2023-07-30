import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/99.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/99.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>99:1 耶和华作王，万民当战抖！他坐在二基路伯上，地当动摇！</p><p><a id="2"></a>99:2 耶和华在锡安为大，他超乎万民之上。</p><p><a id="3"></a>99:3 他们当称赞他大而可畏的名，他本为圣！</p><p><a id="4"></a>99:4 王有能力，喜爱公平，坚立公正，在雅各中施行公平和公义。</p><p><a id="5"></a>99:5 你们当尊崇耶和华我们的　神，在他脚凳前下拜；他本为圣！</p><p><a id="6"></a>99:6 在他的祭司中有摩西和亚伦，在求告他名的人中有撒母耳。他们求告耶和华，他就应允他们。</p><p><a id="7"></a>99:7 他在云柱中对他们说话；他们遵守他的法度和他所赐给他们的律例。</p><p><a id="8"></a>99:8 耶和华我们的　神啊，你应允他们。你是赦免他们的　神，却按他们所行的报应他们。</p><p><a id="9"></a>99:9 你们要尊崇耶和华我们的　神，在他的圣山下拜，因为耶和华我们的　神本为圣。〔称谢诗。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/99.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _99 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _99 as default
};
