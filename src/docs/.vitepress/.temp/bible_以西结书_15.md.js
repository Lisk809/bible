import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/以西结书/15.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/以西结书/15.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>15:1 耶和华的话临到我说：</p><p><a id="2"></a>15:2 “人子啊，葡萄树比别样树有甚么强处？葡萄枝比众树枝有甚么好处？</p><p><a id="3"></a>15:3 其上可以取木料做甚么工用？可以取来做钉子挂甚么器皿吗？</p><p><a id="4"></a>15:4 看哪！已经抛在火中当作柴烧，火既烧了两头，中间也被烧了，还有益于工用吗？</p><p><a id="5"></a>15:5 完全的时候尚且不合乎甚么工用，何况被火烧坏，还能合乎甚么工用吗？</p><p><a id="6"></a>15:6 所以主耶和华如此说：众树以内的葡萄树，我怎样使它在火中当柴，也必照样待耶路撒冷的居民。</p><p><a id="7"></a>15:7 我必向他们变脸，他们虽从火中出来，火却要烧灭他们。我向他们变脸的时候，你们就知道我是耶和华。</p><p><a id="8"></a>15:8 我必使地土荒凉，因为他们行事干犯我。这是主耶和华说的。”</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/以西结书/15.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _15 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _15 as default
};
