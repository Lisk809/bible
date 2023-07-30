import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/138.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/138.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>138:1 我要一心称谢你，在诸神面前歌颂你！</p><p><a id="2"></a>138:2 我要向你的圣殿下拜，为你的慈爱和诚实称赞你的名；因你使你的话显为大，过于你所应许的（注：或作“超乎你的名声”）。</p><p><a id="3"></a>138:3 我呼求的日子，你就应允我，鼓励我，使我心里有能力。</p><p><a id="4"></a>138:4 耶和华啊，地上的君王都要称谢你，因他们听见了你口中的言语。</p><p><a id="5"></a>138:5 他们要歌颂耶和华的作为，因耶和华大有荣耀。</p><p><a id="6"></a>138:6 耶和华虽高，仍看顾低微的人；他却从远处看出骄傲的人。</p><p><a id="7"></a>138:7 我虽行在患难中，你必将我救活；我的仇敌发怒，你必伸手抵挡他们，你的右手也必救我。</p><p><a id="8"></a>138:8 耶和华必成全关乎我的事。耶和华啊，你的慈爱永远长存！求你不要离弃你手所造的。〔大卫的诗，交与伶长。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/138.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _138 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _138 as default
};
