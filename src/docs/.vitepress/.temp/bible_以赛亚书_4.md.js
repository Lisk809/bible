import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/以赛亚书/4.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/以赛亚书/4.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>4:1 在那日，七个女人必拉住一个男人说：“我们吃自己的食物，穿自己的衣服，但求你许我们归你名下，求你除掉我们的羞耻。”</p><p><a id="2"></a>4:2 到那日，耶和华发生的苗必华美尊荣，地的出产必为以色列逃脱的人显为荣华茂盛。</p><p><a id="3,4"></a>4:3,4 主以公义的灵和焚烧的灵，将锡安女子的污秽洗去，又将耶路撒冷中杀人的血除净。那时，剩在锡安、留在耶路撒冷的，就是一切住耶路撒冷、在生命册上记名的，必称为圣。</p><p><a id="5"></a>4:5 耶和华也必在锡安全山，并各会众以上，使白日有烟云，黑夜有火焰的光，因为在全荣耀之上必有遮蔽。</p><p><a id="6"></a>4:6 必有亭子，白日可以得荫避暑，也可以作为藏身之处，躲避狂风暴雨。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/以赛亚书/4.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _4 as default
};
