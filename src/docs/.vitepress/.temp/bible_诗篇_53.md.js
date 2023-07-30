import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/53.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/53.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>53:1 愚顽人心里说：“没有　神！”他们都是邪恶，行了可憎恶的罪孽，没有一个人行善。</p><p><a id="2"></a>53:2 神从天上垂看世人，要看有明白的没有，有寻求他的没有。</p><p><a id="3"></a>53:3 他们各人都退后，一同变为污秽；并没有行善的，连一个也没有！</p><p><a id="4"></a>53:4 作孽的没有知识吗？他们吞吃我的百姓如同吃饭一样，并不求告　神。</p><p><a id="5"></a>53:5 他们在无可惧怕之处，就大大害怕，因为　神把那安营攻击你之人的骨头散开了。你使他们蒙羞，因为　神弃绝了他们。</p><p><a id="6"></a>53:6 但愿以色列的救恩从锡安而出，　神救回他被掳的子民。那时，雅各要快乐，以色列要欢喜。〔西弗人来对扫罗说：“大卫岂不是在我们那里藏身吗？”那时，大卫作这训诲诗，交与伶长。用丝弦的乐器。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/53.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _53 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _53 as default
};
