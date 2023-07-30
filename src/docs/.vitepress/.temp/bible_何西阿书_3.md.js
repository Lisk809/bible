import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/何西阿书/3.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/何西阿书/3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>3:1 耶和华对我说：“你再去爱一个淫妇，就是她情人所爱的；好像以色列人，虽然偏向别神，喜爱葡萄饼，耶和华还是爱他们。”</p><p><a id="2"></a>3:2 我便用银子十五舍客勒，大麦一贺梅珥半，买她归我。</p><p><a id="3"></a>3:3 我对她说：“你当多日为我独居，不可行淫，不可归别人为妻，我向你也必这样。”</p><p><a id="4"></a>3:4 以色列人也必多日独居，无君王、无首领、无祭祀、无柱像、无以弗得、无家中的神像。</p><p><a id="5"></a>3:5 后来以色列人必归回（注：或作“回心转意”），寻求他们的　神耶和华和他们的王大卫。在末后的日子，必以敬畏的心归向耶和华，领受他的恩惠。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/何西阿书/3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _3 as default
};
