import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"bible/诗篇/12.md","lastUpdated":1690730860000}');
const _sfc_main = { name: "bible/诗篇/12.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a id="1"></a>12:1 耶和华啊，求你帮助！因虔诚人断绝了，世人中间的忠信人没有了。</p><p><a id="2"></a>12:2 人人向邻舍说谎；他们说话，是嘴唇油滑，心口不一。</p><p><a id="3"></a>12:3 凡油滑的嘴唇和夸大的舌头，耶和华必要剪除。</p><p><a id="4"></a>12:4 他们曾说：“我们必能以舌头得胜，我们的嘴唇是我们自己的，谁能作我们的主呢？”</p><p><a id="5"></a>12:5 耶和华说：“因为困苦人的冤屈和贫穷人的叹息，我现在要起来，把他安置在他所切慕的稳妥之地。”</p><p><a id="6"></a>12:6 耶和华的言语是纯净的言语，如同银子在泥炉中炼过七次。</p><p><a id="7"></a>12:7 耶和华啊，你必保护他们，你必保佑他们永远脱离这世代的人。</p><p><a id="8"></a>12:8 下流人在世人中升高，就有恶人到处游行。〔大卫的诗，交与伶长。〕</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bible/诗篇/12.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _12 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _12 as default
};
