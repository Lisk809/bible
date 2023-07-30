import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/约翰一书/1.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/约翰一书/1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>1:1 论到从起初原有的生命之道，就是我们所听见、所看见、亲眼看过、亲手摸过的。</p><p><a id="2"></a>1:2 （这生命已经显现出来，我们也看见过，现在又作见证，将原与父同在，且显现与我们那永远的生命传给你们。）</p><p><a id="3"></a>1:3 我们将所看见、所听见的传给你们，使你们与我们相交。我们乃是与父并他儿子耶稣基督相交的。</p><p><a id="4"></a>1:4 我们将这些话写给你们，使你们（注：有古卷作“我们”）的喜乐充足。</p><p><a id="5"></a>1:5 神就是光，在他毫无黑暗！这是我们从主所听见、又报给你们的信息。</p><p><a id="6"></a>1:6 我们若说是与　神相交，却仍在黑暗里行，就是说谎话，不行真理了。</p><p><a id="7"></a>1:7 我们若在光明中行，如同　神在光明中，就彼此相交，他儿子耶稣的血也洗净我们一切的罪。</p><p><a id="8"></a>1:8 我们若说自己无罪，便是自欺，真理不在我们心里了；</p><p><a id="9"></a>1:9 我们若认自己的罪，　神是信实的，是公义的，必要赦免我们的罪，洗净我们一切的不义；</p><p><a id="10"></a>1:10 我们若说自己没有犯过罪，便是以　神为说谎的，他的道也不在我们心里了。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/约翰一书/1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1 as default
};
