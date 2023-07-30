import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/101.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/101.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>101:1 我要歌唱慈爱和公平；耶和华啊，我要向你歌颂！</p><p><a id="2"></a>101:2 我要用智慧行完全的道。你几时到我这里来呢？我要存完全的心行在我家中。</p><p><a id="3"></a>101:3 邪僻的事，我都不摆在我眼前。悖逆人所做的事，我甚恨恶，不容沾在我身上。</p><p><a id="4"></a>101:4 弯曲的心思，我必远离；一切的恶人（注：或作“恶事”），我不认识。</p><p><a id="5"></a>101:5 在暗中谗谤他邻居的，我必将他灭绝；眼目高傲、心里骄纵的，我必不容他。</p><p><a id="6"></a>101:6 我眼要看国中的诚实人，叫他们与我同住；行为完全的，他要伺候我。</p><p><a id="7"></a>101:7 行诡诈的，必不得住在我家里；说谎话的，必不得立在我眼前。</p><p><a id="8"></a>101:8 我每日早晨要灭绝国中所有的恶人，好把一切作孽的从耶和华的城里剪除。〔困苦人发昏的时候，在耶和华面前吐露苦情的祷告。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/101.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _101 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _101 as default
};
