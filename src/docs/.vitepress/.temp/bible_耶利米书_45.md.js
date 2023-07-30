import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/耶利米书/45.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/耶利米书/45.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>45:1 犹大王约西亚的儿子约雅敬第四年，尼利亚的儿子巴录将先知耶利米口中所说的话写在书上。耶利米说：</p><p><a id="2"></a>45:2 “巴录啊，耶和华以色列的　神说：</p><p><a id="3"></a>45:3 巴录（注：原文作“你”）曾说：‘哀哉！耶和华将忧愁加在我的痛苦上，我因唉哼而困乏，不得安歇。’</p><p><a id="4"></a>45:4 你要这样告诉他，耶和华如此说：‘我所建立的，我必拆毁；我所栽植的，我必拔出。在全地我都如此行。</p><p><a id="5"></a>45:5 你为自己图谋大事吗？不要图谋！我必使灾祸临到凡有血气的。但你无论往哪里去，我必使你以自己的命为掠物。’”这是耶和华说的。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/耶利米书/45.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _45 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _45 as default
};
