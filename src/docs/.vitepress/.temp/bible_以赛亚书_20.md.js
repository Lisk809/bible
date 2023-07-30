import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/以赛亚书/20.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/以赛亚书/20.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>20:1 亚述王撒珥根打发他珥探到亚实突的那年，他珥探就攻打亚实突，将城攻取。</p><p><a id="2"></a>20:2 那时，耶和华晓谕亚摩斯的儿子以赛亚说：“你去解掉你腰间的麻布，脱下你脚上的鞋。”以赛亚就这样做，露身赤脚行走。</p><p><a id="3"></a>20:3 耶和华说：“我仆人以赛亚怎样露身赤脚行走三年，作为关乎埃及和古实的预兆奇迹，</p><p><a id="4"></a>20:4 照样，亚述王也必掳去埃及人，掠去古实人，无论老少，都露身赤脚，现出下体，使埃及蒙羞。</p><p><a id="5"></a>20:5 以色列人必因所仰望的古实，所夸耀的埃及，惊惶羞愧。</p><p><a id="6"></a>20:6 那时，这沿海一带的居民必说：‘看哪，我们素所仰望的，就是我们为脱离亚述王逃往求救的，不过是如此！我们怎能逃脱呢？’”</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/以赛亚书/20.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _20 as default
};
