import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/玛拉基书/4.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/玛拉基书/4.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>4:1 万军之耶和华说：“那日临近，势如烧著的火炉，凡狂傲的和行恶的必如碎秸，在那日必被烧尽，根本枝条一无存留。</p><p><a id="2"></a>4:2 但向你们敬畏我名的人，必有公义的日头出现，其光线（注：原文作“翅膀”）有医治之能。你们必出来跳跃如圈里的肥犊。</p><p><a id="3"></a>4:3 你们必践踏恶人；在我所定的日子，他们必如灰尘在你们脚掌之下。”这是万军之耶和华说的。</p><p><a id="4"></a>4:4 “你们当记念我仆人摩西的律法，就是我在何烈山为以色列众人所吩咐他的律例典章。</p><p><a id="5"></a>4:5 看哪！耶和华大而可畏之日未到以前，我必差遣先知以利亚到你们那里去！</p><p><a id="6"></a>4:6 他必使父亲的心转向儿女，儿女的心转向父亲，免得我来咒诅遍地。”</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/玛拉基书/4.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _4 as default
};
