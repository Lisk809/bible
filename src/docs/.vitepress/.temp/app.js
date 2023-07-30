import { defineComponent, mergeProps, useSSRContext, shallowRef, inject, computed, ref, onUnmounted, reactive, markRaw, readonly, nextTick, h, watchEffect, onMounted, watch, resolveComponent, unref, createVNode, resolveDynamicComponent, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList, provide, onUpdated, toHandlers, withKeys, watchPostEffect, useSlots, createSSRApp } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderVNode, ssrRenderList, ssrRenderClass, renderToString } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
import { useMediaQuery, useWindowScroll } from "@vueuse/core";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
const fonts = "";
const vars = "";
const base = "";
const utils = "";
const customBlock = "";
const vpCode = "";
const vpCodeGroup = "";
const vpDoc = "";
const vpSponsor = "";
const _sfc_main$1f = /* @__PURE__ */ defineComponent({
  __name: "VPBadge",
  __ssrInlineRender: true,
  props: {
    text: null,
    type: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["VPBadge", __props.type ?? "tip"]
      }, _attrs))} data-v-350d3852>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const VPBadge_vue_vue_type_style_index_0_scoped_350d3852_lang = "";
const _sfc_setup$1f = _sfc_main$1f.setup;
_sfc_main$1f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPBadge.vue");
  return _sfc_setup$1f ? _sfc_setup$1f(props, ctx) : void 0;
};
const VPBadge = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["__scopeId", "data-v-350d3852"]]);
function deserializeFunctions(value) {
  if (Array.isArray(value)) {
    return value.map(deserializeFunctions);
  } else if (typeof value === "object" && value !== null) {
    return Object.keys(value).reduce((acc, key) => {
      acc[key] = deserializeFunctions(value[key]);
      return acc;
    }, {});
  } else if (typeof value === "string" && value.startsWith("_vp-fn_")) {
    return new Function(`return ${value.slice(7)}`)();
  } else {
    return value;
  }
}
const siteData = deserializeFunctions(JSON.parse('{"lang":"zh-CN","dir":"ltr","title":"Holy Bible","description":"the Holy Bible for Web","base":"/","head":[],"appearance":true,"themeConfig":{"logo":"","nav":[{"text":"文档","link":"/intro"},{"text":"找我","items":[{"items":[{"text":"GitHub","link":"https://github.com/Lisk809"},{"text":"QQ","link":"https://qm.qq.com/cgi-bin/qm/qr?k=z_MhzXU1RM0HEnIOBmXiERGNuDxpHglV&noverify=0"}]}]}],"sidebar":[{"text":"开始","collapsible":true,"items":[{"text":"简介","link":"/intro"}]},{"text":"bible","collapsible":true,"items":[{"text":"以弗所书","collapsible":true,"items":[{"text":"第1章","link":"/bible/以弗所书/1.md"},{"text":"第2章","link":"/bible/以弗所书/2.md"},{"text":"第3章","link":"/bible/以弗所书/3.md"},{"text":"第4章","link":"/bible/以弗所书/4.md"},{"text":"第5章","link":"/bible/以弗所书/5.md"},{"text":"第6章","link":"/bible/以弗所书/6.md"}]},{"text":"以斯帖记","collapsible":true,"items":[{"text":"第1章","link":"/bible/以斯帖记/1.md"},{"text":"第10章","link":"/bible/以斯帖记/10.md"},{"text":"第2章","link":"/bible/以斯帖记/2.md"},{"text":"第3章","link":"/bible/以斯帖记/3.md"},{"text":"第4章","link":"/bible/以斯帖记/4.md"},{"text":"第5章","link":"/bible/以斯帖记/5.md"},{"text":"第6章","link":"/bible/以斯帖记/6.md"},{"text":"第7章","link":"/bible/以斯帖记/7.md"},{"text":"第8章","link":"/bible/以斯帖记/8.md"},{"text":"第9章","link":"/bible/以斯帖记/9.md"}]},{"text":"以斯拉记","collapsible":true,"items":[{"text":"第1章","link":"/bible/以斯拉记/1.md"},{"text":"第10章","link":"/bible/以斯拉记/10.md"},{"text":"第2章","link":"/bible/以斯拉记/2.md"},{"text":"第3章","link":"/bible/以斯拉记/3.md"},{"text":"第4章","link":"/bible/以斯拉记/4.md"},{"text":"第5章","link":"/bible/以斯拉记/5.md"},{"text":"第6章","link":"/bible/以斯拉记/6.md"},{"text":"第7章","link":"/bible/以斯拉记/7.md"},{"text":"第8章","link":"/bible/以斯拉记/8.md"},{"text":"第9章","link":"/bible/以斯拉记/9.md"}]},{"text":"以西结书","collapsible":true,"items":[{"text":"第1章","link":"/bible/以西结书/1.md"},{"text":"第10章","link":"/bible/以西结书/10.md"},{"text":"第11章","link":"/bible/以西结书/11.md"},{"text":"第12章","link":"/bible/以西结书/12.md"},{"text":"第13章","link":"/bible/以西结书/13.md"},{"text":"第14章","link":"/bible/以西结书/14.md"},{"text":"第15章","link":"/bible/以西结书/15.md"},{"text":"第16章","link":"/bible/以西结书/16.md"},{"text":"第17章","link":"/bible/以西结书/17.md"},{"text":"第18章","link":"/bible/以西结书/18.md"},{"text":"第19章","link":"/bible/以西结书/19.md"},{"text":"第2章","link":"/bible/以西结书/2.md"},{"text":"第20章","link":"/bible/以西结书/20.md"},{"text":"第21章","link":"/bible/以西结书/21.md"},{"text":"第22章","link":"/bible/以西结书/22.md"},{"text":"第23章","link":"/bible/以西结书/23.md"},{"text":"第24章","link":"/bible/以西结书/24.md"},{"text":"第25章","link":"/bible/以西结书/25.md"},{"text":"第26章","link":"/bible/以西结书/26.md"},{"text":"第27章","link":"/bible/以西结书/27.md"},{"text":"第28章","link":"/bible/以西结书/28.md"},{"text":"第29章","link":"/bible/以西结书/29.md"},{"text":"第3章","link":"/bible/以西结书/3.md"},{"text":"第30章","link":"/bible/以西结书/30.md"},{"text":"第31章","link":"/bible/以西结书/31.md"},{"text":"第32章","link":"/bible/以西结书/32.md"},{"text":"第33章","link":"/bible/以西结书/33.md"},{"text":"第34章","link":"/bible/以西结书/34.md"},{"text":"第35章","link":"/bible/以西结书/35.md"},{"text":"第36章","link":"/bible/以西结书/36.md"},{"text":"第37章","link":"/bible/以西结书/37.md"},{"text":"第38章","link":"/bible/以西结书/38.md"},{"text":"第39章","link":"/bible/以西结书/39.md"},{"text":"第4章","link":"/bible/以西结书/4.md"},{"text":"第40章","link":"/bible/以西结书/40.md"},{"text":"第41章","link":"/bible/以西结书/41.md"},{"text":"第42章","link":"/bible/以西结书/42.md"},{"text":"第43章","link":"/bible/以西结书/43.md"},{"text":"第44章","link":"/bible/以西结书/44.md"},{"text":"第45章","link":"/bible/以西结书/45.md"},{"text":"第46章","link":"/bible/以西结书/46.md"},{"text":"第47章","link":"/bible/以西结书/47.md"},{"text":"第48章","link":"/bible/以西结书/48.md"},{"text":"第5章","link":"/bible/以西结书/5.md"},{"text":"第6章","link":"/bible/以西结书/6.md"},{"text":"第7章","link":"/bible/以西结书/7.md"},{"text":"第8章","link":"/bible/以西结书/8.md"},{"text":"第9章","link":"/bible/以西结书/9.md"}]},{"text":"以赛亚书","collapsible":true,"items":[{"text":"第1章","link":"/bible/以赛亚书/1.md"},{"text":"第10章","link":"/bible/以赛亚书/10.md"},{"text":"第11章","link":"/bible/以赛亚书/11.md"},{"text":"第12章","link":"/bible/以赛亚书/12.md"},{"text":"第13章","link":"/bible/以赛亚书/13.md"},{"text":"第14章","link":"/bible/以赛亚书/14.md"},{"text":"第15章","link":"/bible/以赛亚书/15.md"},{"text":"第16章","link":"/bible/以赛亚书/16.md"},{"text":"第17章","link":"/bible/以赛亚书/17.md"},{"text":"第18章","link":"/bible/以赛亚书/18.md"},{"text":"第19章","link":"/bible/以赛亚书/19.md"},{"text":"第2章","link":"/bible/以赛亚书/2.md"},{"text":"第20章","link":"/bible/以赛亚书/20.md"},{"text":"第21章","link":"/bible/以赛亚书/21.md"},{"text":"第22章","link":"/bible/以赛亚书/22.md"},{"text":"第23章","link":"/bible/以赛亚书/23.md"},{"text":"第24章","link":"/bible/以赛亚书/24.md"},{"text":"第25章","link":"/bible/以赛亚书/25.md"},{"text":"第26章","link":"/bible/以赛亚书/26.md"},{"text":"第27章","link":"/bible/以赛亚书/27.md"},{"text":"第28章","link":"/bible/以赛亚书/28.md"},{"text":"第29章","link":"/bible/以赛亚书/29.md"},{"text":"第3章","link":"/bible/以赛亚书/3.md"},{"text":"第30章","link":"/bible/以赛亚书/30.md"},{"text":"第31章","link":"/bible/以赛亚书/31.md"},{"text":"第32章","link":"/bible/以赛亚书/32.md"},{"text":"第33章","link":"/bible/以赛亚书/33.md"},{"text":"第34章","link":"/bible/以赛亚书/34.md"},{"text":"第35章","link":"/bible/以赛亚书/35.md"},{"text":"第36章","link":"/bible/以赛亚书/36.md"},{"text":"第37章","link":"/bible/以赛亚书/37.md"},{"text":"第38章","link":"/bible/以赛亚书/38.md"},{"text":"第39章","link":"/bible/以赛亚书/39.md"},{"text":"第4章","link":"/bible/以赛亚书/4.md"},{"text":"第40章","link":"/bible/以赛亚书/40.md"},{"text":"第41章","link":"/bible/以赛亚书/41.md"},{"text":"第42章","link":"/bible/以赛亚书/42.md"},{"text":"第43章","link":"/bible/以赛亚书/43.md"},{"text":"第44章","link":"/bible/以赛亚书/44.md"},{"text":"第45章","link":"/bible/以赛亚书/45.md"},{"text":"第46章","link":"/bible/以赛亚书/46.md"},{"text":"第47章","link":"/bible/以赛亚书/47.md"},{"text":"第48章","link":"/bible/以赛亚书/48.md"},{"text":"第49章","link":"/bible/以赛亚书/49.md"},{"text":"第5章","link":"/bible/以赛亚书/5.md"},{"text":"第50章","link":"/bible/以赛亚书/50.md"},{"text":"第51章","link":"/bible/以赛亚书/51.md"},{"text":"第52章","link":"/bible/以赛亚书/52.md"},{"text":"第53章","link":"/bible/以赛亚书/53.md"},{"text":"第54章","link":"/bible/以赛亚书/54.md"},{"text":"第55章","link":"/bible/以赛亚书/55.md"},{"text":"第56章","link":"/bible/以赛亚书/56.md"},{"text":"第57章","link":"/bible/以赛亚书/57.md"},{"text":"第58章","link":"/bible/以赛亚书/58.md"},{"text":"第59章","link":"/bible/以赛亚书/59.md"},{"text":"第6章","link":"/bible/以赛亚书/6.md"},{"text":"第60章","link":"/bible/以赛亚书/60.md"},{"text":"第61章","link":"/bible/以赛亚书/61.md"},{"text":"第62章","link":"/bible/以赛亚书/62.md"},{"text":"第63章","link":"/bible/以赛亚书/63.md"},{"text":"第64章","link":"/bible/以赛亚书/64.md"},{"text":"第65章","link":"/bible/以赛亚书/65.md"},{"text":"第66章","link":"/bible/以赛亚书/66.md"},{"text":"第7章","link":"/bible/以赛亚书/7.md"},{"text":"第8章","link":"/bible/以赛亚书/8.md"},{"text":"第9章","link":"/bible/以赛亚书/9.md"}]},{"text":"传道书","collapsible":true,"items":[{"text":"第1章","link":"/bible/传道书/1.md"},{"text":"第10章","link":"/bible/传道书/10.md"},{"text":"第11章","link":"/bible/传道书/11.md"},{"text":"第12章","link":"/bible/传道书/12.md"},{"text":"第2章","link":"/bible/传道书/2.md"},{"text":"第3章","link":"/bible/传道书/3.md"},{"text":"第4章","link":"/bible/传道书/4.md"},{"text":"第5章","link":"/bible/传道书/5.md"},{"text":"第6章","link":"/bible/传道书/6.md"},{"text":"第7章","link":"/bible/传道书/7.md"},{"text":"第8章","link":"/bible/传道书/8.md"},{"text":"第9章","link":"/bible/传道书/9.md"}]},{"text":"但以理书","collapsible":true,"items":[{"text":"第1章","link":"/bible/但以理书/1.md"},{"text":"第10章","link":"/bible/但以理书/10.md"},{"text":"第11章","link":"/bible/但以理书/11.md"},{"text":"第12章","link":"/bible/但以理书/12.md"},{"text":"第2章","link":"/bible/但以理书/2.md"},{"text":"第3章","link":"/bible/但以理书/3.md"},{"text":"第4章","link":"/bible/但以理书/4.md"},{"text":"第5章","link":"/bible/但以理书/5.md"},{"text":"第6章","link":"/bible/但以理书/6.md"},{"text":"第7章","link":"/bible/但以理书/7.md"},{"text":"第8章","link":"/bible/但以理书/8.md"},{"text":"第9章","link":"/bible/但以理书/9.md"}]},{"text":"何西阿书","collapsible":true,"items":[{"text":"第1章","link":"/bible/何西阿书/1.md"},{"text":"第10章","link":"/bible/何西阿书/10.md"},{"text":"第11章","link":"/bible/何西阿书/11.md"},{"text":"第12章","link":"/bible/何西阿书/12.md"},{"text":"第13章","link":"/bible/何西阿书/13.md"},{"text":"第14章","link":"/bible/何西阿书/14.md"},{"text":"第2章","link":"/bible/何西阿书/2.md"},{"text":"第3章","link":"/bible/何西阿书/3.md"},{"text":"第4章","link":"/bible/何西阿书/4.md"},{"text":"第5章","link":"/bible/何西阿书/5.md"},{"text":"第6章","link":"/bible/何西阿书/6.md"},{"text":"第7章","link":"/bible/何西阿书/7.md"},{"text":"第8章","link":"/bible/何西阿书/8.md"},{"text":"第9章","link":"/bible/何西阿书/9.md"}]},{"text":"使徒行传","collapsible":true,"items":[{"text":"第1章","link":"/bible/使徒行传/1.md"},{"text":"第10章","link":"/bible/使徒行传/10.md"},{"text":"第11章","link":"/bible/使徒行传/11.md"},{"text":"第12章","link":"/bible/使徒行传/12.md"},{"text":"第13章","link":"/bible/使徒行传/13.md"},{"text":"第14章","link":"/bible/使徒行传/14.md"},{"text":"第15章","link":"/bible/使徒行传/15.md"},{"text":"第16章","link":"/bible/使徒行传/16.md"},{"text":"第17章","link":"/bible/使徒行传/17.md"},{"text":"第18章","link":"/bible/使徒行传/18.md"},{"text":"第19章","link":"/bible/使徒行传/19.md"},{"text":"第2章","link":"/bible/使徒行传/2.md"},{"text":"第20章","link":"/bible/使徒行传/20.md"},{"text":"第21章","link":"/bible/使徒行传/21.md"},{"text":"第22章","link":"/bible/使徒行传/22.md"},{"text":"第23章","link":"/bible/使徒行传/23.md"},{"text":"第24章","link":"/bible/使徒行传/24.md"},{"text":"第25章","link":"/bible/使徒行传/25.md"},{"text":"第26章","link":"/bible/使徒行传/26.md"},{"text":"第27章","link":"/bible/使徒行传/27.md"},{"text":"第28章","link":"/bible/使徒行传/28.md"},{"text":"第3章","link":"/bible/使徒行传/3.md"},{"text":"第4章","link":"/bible/使徒行传/4.md"},{"text":"第5章","link":"/bible/使徒行传/5.md"},{"text":"第6章","link":"/bible/使徒行传/6.md"},{"text":"第7章","link":"/bible/使徒行传/7.md"},{"text":"第8章","link":"/bible/使徒行传/8.md"},{"text":"第9章","link":"/bible/使徒行传/9.md"}]},{"text":"俄巴底亚书","collapsible":true,"items":[{"text":"第1章","link":"/bible/俄巴底亚书/1.md"}]},{"text":"出埃及记","collapsible":true,"items":[{"text":"第1章","link":"/bible/出埃及记/1.md"},{"text":"第10章","link":"/bible/出埃及记/10.md"},{"text":"第11章","link":"/bible/出埃及记/11.md"},{"text":"第12章","link":"/bible/出埃及记/12.md"},{"text":"第13章","link":"/bible/出埃及记/13.md"},{"text":"第14章","link":"/bible/出埃及记/14.md"},{"text":"第15章","link":"/bible/出埃及记/15.md"},{"text":"第16章","link":"/bible/出埃及记/16.md"},{"text":"第17章","link":"/bible/出埃及记/17.md"},{"text":"第18章","link":"/bible/出埃及记/18.md"},{"text":"第19章","link":"/bible/出埃及记/19.md"},{"text":"第2章","link":"/bible/出埃及记/2.md"},{"text":"第20章","link":"/bible/出埃及记/20.md"},{"text":"第21章","link":"/bible/出埃及记/21.md"},{"text":"第22章","link":"/bible/出埃及记/22.md"},{"text":"第23章","link":"/bible/出埃及记/23.md"},{"text":"第24章","link":"/bible/出埃及记/24.md"},{"text":"第25章","link":"/bible/出埃及记/25.md"},{"text":"第26章","link":"/bible/出埃及记/26.md"},{"text":"第27章","link":"/bible/出埃及记/27.md"},{"text":"第28章","link":"/bible/出埃及记/28.md"},{"text":"第29章","link":"/bible/出埃及记/29.md"},{"text":"第3章","link":"/bible/出埃及记/3.md"},{"text":"第30章","link":"/bible/出埃及记/30.md"},{"text":"第31章","link":"/bible/出埃及记/31.md"},{"text":"第32章","link":"/bible/出埃及记/32.md"},{"text":"第33章","link":"/bible/出埃及记/33.md"},{"text":"第34章","link":"/bible/出埃及记/34.md"},{"text":"第35章","link":"/bible/出埃及记/35.md"},{"text":"第36章","link":"/bible/出埃及记/36.md"},{"text":"第37章","link":"/bible/出埃及记/37.md"},{"text":"第38章","link":"/bible/出埃及记/38.md"},{"text":"第39章","link":"/bible/出埃及记/39.md"},{"text":"第4章","link":"/bible/出埃及记/4.md"},{"text":"第40章","link":"/bible/出埃及记/40.md"},{"text":"第5章","link":"/bible/出埃及记/5.md"},{"text":"第6章","link":"/bible/出埃及记/6.md"},{"text":"第7章","link":"/bible/出埃及记/7.md"},{"text":"第8章","link":"/bible/出埃及记/8.md"},{"text":"第9章","link":"/bible/出埃及记/9.md"}]},{"text":"列王记(上)","collapsible":true,"items":[{"text":"第1章","link":"/bible/列王记(上)/1.md"},{"text":"第10章","link":"/bible/列王记(上)/10.md"},{"text":"第11章","link":"/bible/列王记(上)/11.md"},{"text":"第12章","link":"/bible/列王记(上)/12.md"},{"text":"第13章","link":"/bible/列王记(上)/13.md"},{"text":"第14章","link":"/bible/列王记(上)/14.md"},{"text":"第15章","link":"/bible/列王记(上)/15.md"},{"text":"第16章","link":"/bible/列王记(上)/16.md"},{"text":"第17章","link":"/bible/列王记(上)/17.md"},{"text":"第18章","link":"/bible/列王记(上)/18.md"},{"text":"第19章","link":"/bible/列王记(上)/19.md"},{"text":"第2章","link":"/bible/列王记(上)/2.md"},{"text":"第20章","link":"/bible/列王记(上)/20.md"},{"text":"第21章","link":"/bible/列王记(上)/21.md"},{"text":"第22章","link":"/bible/列王记(上)/22.md"},{"text":"第3章","link":"/bible/列王记(上)/3.md"},{"text":"第4章","link":"/bible/列王记(上)/4.md"},{"text":"第5章","link":"/bible/列王记(上)/5.md"},{"text":"第6章","link":"/bible/列王记(上)/6.md"},{"text":"第7章","link":"/bible/列王记(上)/7.md"},{"text":"第8章","link":"/bible/列王记(上)/8.md"},{"text":"第9章","link":"/bible/列王记(上)/9.md"}]},{"text":"列王记(下)","collapsible":true,"items":[{"text":"第1章","link":"/bible/列王记(下)/1.md"},{"text":"第10章","link":"/bible/列王记(下)/10.md"},{"text":"第11章","link":"/bible/列王记(下)/11.md"},{"text":"第12章","link":"/bible/列王记(下)/12.md"},{"text":"第13章","link":"/bible/列王记(下)/13.md"},{"text":"第14章","link":"/bible/列王记(下)/14.md"},{"text":"第15章","link":"/bible/列王记(下)/15.md"},{"text":"第16章","link":"/bible/列王记(下)/16.md"},{"text":"第17章","link":"/bible/列王记(下)/17.md"},{"text":"第18章","link":"/bible/列王记(下)/18.md"},{"text":"第19章","link":"/bible/列王记(下)/19.md"},{"text":"第2章","link":"/bible/列王记(下)/2.md"},{"text":"第20章","link":"/bible/列王记(下)/20.md"},{"text":"第21章","link":"/bible/列王记(下)/21.md"},{"text":"第22章","link":"/bible/列王记(下)/22.md"},{"text":"第23章","link":"/bible/列王记(下)/23.md"},{"text":"第24章","link":"/bible/列王记(下)/24.md"},{"text":"第25章","link":"/bible/列王记(下)/25.md"},{"text":"第3章","link":"/bible/列王记(下)/3.md"},{"text":"第4章","link":"/bible/列王记(下)/4.md"},{"text":"第5章","link":"/bible/列王记(下)/5.md"},{"text":"第6章","link":"/bible/列王记(下)/6.md"},{"text":"第7章","link":"/bible/列王记(下)/7.md"},{"text":"第8章","link":"/bible/列王记(下)/8.md"},{"text":"第9章","link":"/bible/列王记(下)/9.md"}]},{"text":"创世记","collapsible":true,"items":[{"text":"第1章","link":"/bible/创世记/1.md"},{"text":"第10章","link":"/bible/创世记/10.md"},{"text":"第11章","link":"/bible/创世记/11.md"},{"text":"第12章","link":"/bible/创世记/12.md"},{"text":"第13章","link":"/bible/创世记/13.md"},{"text":"第14章","link":"/bible/创世记/14.md"},{"text":"第15章","link":"/bible/创世记/15.md"},{"text":"第16章","link":"/bible/创世记/16.md"},{"text":"第17章","link":"/bible/创世记/17.md"},{"text":"第18章","link":"/bible/创世记/18.md"},{"text":"第19章","link":"/bible/创世记/19.md"},{"text":"第2章","link":"/bible/创世记/2.md"},{"text":"第20章","link":"/bible/创世记/20.md"},{"text":"第21章","link":"/bible/创世记/21.md"},{"text":"第22章","link":"/bible/创世记/22.md"},{"text":"第23章","link":"/bible/创世记/23.md"},{"text":"第24章","link":"/bible/创世记/24.md"},{"text":"第25章","link":"/bible/创世记/25.md"},{"text":"第26章","link":"/bible/创世记/26.md"},{"text":"第27章","link":"/bible/创世记/27.md"},{"text":"第28章","link":"/bible/创世记/28.md"},{"text":"第29章","link":"/bible/创世记/29.md"},{"text":"第3章","link":"/bible/创世记/3.md"},{"text":"第30章","link":"/bible/创世记/30.md"},{"text":"第31章","link":"/bible/创世记/31.md"},{"text":"第32章","link":"/bible/创世记/32.md"},{"text":"第33章","link":"/bible/创世记/33.md"},{"text":"第34章","link":"/bible/创世记/34.md"},{"text":"第35章","link":"/bible/创世记/35.md"},{"text":"第36章","link":"/bible/创世记/36.md"},{"text":"第37章","link":"/bible/创世记/37.md"},{"text":"第38章","link":"/bible/创世记/38.md"},{"text":"第39章","link":"/bible/创世记/39.md"},{"text":"第4章","link":"/bible/创世记/4.md"},{"text":"第40章","link":"/bible/创世记/40.md"},{"text":"第41章","link":"/bible/创世记/41.md"},{"text":"第42章","link":"/bible/创世记/42.md"},{"text":"第43章","link":"/bible/创世记/43.md"},{"text":"第44章","link":"/bible/创世记/44.md"},{"text":"第45章","link":"/bible/创世记/45.md"},{"text":"第46章","link":"/bible/创世记/46.md"},{"text":"第47章","link":"/bible/创世记/47.md"},{"text":"第48章","link":"/bible/创世记/48.md"},{"text":"第49章","link":"/bible/创世记/49.md"},{"text":"第5章","link":"/bible/创世记/5.md"},{"text":"第50章","link":"/bible/创世记/50.md"},{"text":"第6章","link":"/bible/创世记/6.md"},{"text":"第7章","link":"/bible/创世记/7.md"},{"text":"第8章","link":"/bible/创世记/8.md"},{"text":"第9章","link":"/bible/创世记/9.md"}]},{"text":"利未记","collapsible":true,"items":[{"text":"第1章","link":"/bible/利未记/1.md"},{"text":"第10章","link":"/bible/利未记/10.md"},{"text":"第11章","link":"/bible/利未记/11.md"},{"text":"第12章","link":"/bible/利未记/12.md"},{"text":"第13章","link":"/bible/利未记/13.md"},{"text":"第14章","link":"/bible/利未记/14.md"},{"text":"第15章","link":"/bible/利未记/15.md"},{"text":"第16章","link":"/bible/利未记/16.md"},{"text":"第17章","link":"/bible/利未记/17.md"},{"text":"第18章","link":"/bible/利未记/18.md"},{"text":"第19章","link":"/bible/利未记/19.md"},{"text":"第2章","link":"/bible/利未记/2.md"},{"text":"第20章","link":"/bible/利未记/20.md"},{"text":"第21章","link":"/bible/利未记/21.md"},{"text":"第22章","link":"/bible/利未记/22.md"},{"text":"第23章","link":"/bible/利未记/23.md"},{"text":"第24章","link":"/bible/利未记/24.md"},{"text":"第25章","link":"/bible/利未记/25.md"},{"text":"第26章","link":"/bible/利未记/26.md"},{"text":"第27章","link":"/bible/利未记/27.md"},{"text":"第3章","link":"/bible/利未记/3.md"},{"text":"第4章","link":"/bible/利未记/4.md"},{"text":"第5章","link":"/bible/利未记/5.md"},{"text":"第6章","link":"/bible/利未记/6.md"},{"text":"第7章","link":"/bible/利未记/7.md"},{"text":"第8章","link":"/bible/利未记/8.md"},{"text":"第9章","link":"/bible/利未记/9.md"}]},{"text":"加拉太书","collapsible":true,"items":[{"text":"第1章","link":"/bible/加拉太书/1.md"},{"text":"第2章","link":"/bible/加拉太书/2.md"},{"text":"第3章","link":"/bible/加拉太书/3.md"},{"text":"第4章","link":"/bible/加拉太书/4.md"},{"text":"第5章","link":"/bible/加拉太书/5.md"},{"text":"第6章","link":"/bible/加拉太书/6.md"}]},{"text":"历代志(上)","collapsible":true,"items":[{"text":"第1章","link":"/bible/历代志(上)/1.md"},{"text":"第10章","link":"/bible/历代志(上)/10.md"},{"text":"第11章","link":"/bible/历代志(上)/11.md"},{"text":"第12章","link":"/bible/历代志(上)/12.md"},{"text":"第13章","link":"/bible/历代志(上)/13.md"},{"text":"第14章","link":"/bible/历代志(上)/14.md"},{"text":"第15章","link":"/bible/历代志(上)/15.md"},{"text":"第16章","link":"/bible/历代志(上)/16.md"},{"text":"第17章","link":"/bible/历代志(上)/17.md"},{"text":"第18章","link":"/bible/历代志(上)/18.md"},{"text":"第19章","link":"/bible/历代志(上)/19.md"},{"text":"第2章","link":"/bible/历代志(上)/2.md"},{"text":"第20章","link":"/bible/历代志(上)/20.md"},{"text":"第21章","link":"/bible/历代志(上)/21.md"},{"text":"第22章","link":"/bible/历代志(上)/22.md"},{"text":"第23章","link":"/bible/历代志(上)/23.md"},{"text":"第24章","link":"/bible/历代志(上)/24.md"},{"text":"第25章","link":"/bible/历代志(上)/25.md"},{"text":"第26章","link":"/bible/历代志(上)/26.md"},{"text":"第27章","link":"/bible/历代志(上)/27.md"},{"text":"第28章","link":"/bible/历代志(上)/28.md"},{"text":"第29章","link":"/bible/历代志(上)/29.md"},{"text":"第3章","link":"/bible/历代志(上)/3.md"},{"text":"第4章","link":"/bible/历代志(上)/4.md"},{"text":"第5章","link":"/bible/历代志(上)/5.md"},{"text":"第6章","link":"/bible/历代志(上)/6.md"},{"text":"第7章","link":"/bible/历代志(上)/7.md"},{"text":"第8章","link":"/bible/历代志(上)/8.md"},{"text":"第9章","link":"/bible/历代志(上)/9.md"}]},{"text":"历代志(下)","collapsible":true,"items":[{"text":"第1章","link":"/bible/历代志(下)/1.md"},{"text":"第10章","link":"/bible/历代志(下)/10.md"},{"text":"第11章","link":"/bible/历代志(下)/11.md"},{"text":"第12章","link":"/bible/历代志(下)/12.md"},{"text":"第13章","link":"/bible/历代志(下)/13.md"},{"text":"第14章","link":"/bible/历代志(下)/14.md"},{"text":"第15章","link":"/bible/历代志(下)/15.md"},{"text":"第16章","link":"/bible/历代志(下)/16.md"},{"text":"第17章","link":"/bible/历代志(下)/17.md"},{"text":"第18章","link":"/bible/历代志(下)/18.md"},{"text":"第19章","link":"/bible/历代志(下)/19.md"},{"text":"第2章","link":"/bible/历代志(下)/2.md"},{"text":"第20章","link":"/bible/历代志(下)/20.md"},{"text":"第21章","link":"/bible/历代志(下)/21.md"},{"text":"第22章","link":"/bible/历代志(下)/22.md"},{"text":"第23章","link":"/bible/历代志(下)/23.md"},{"text":"第24章","link":"/bible/历代志(下)/24.md"},{"text":"第25章","link":"/bible/历代志(下)/25.md"},{"text":"第26章","link":"/bible/历代志(下)/26.md"},{"text":"第27章","link":"/bible/历代志(下)/27.md"},{"text":"第28章","link":"/bible/历代志(下)/28.md"},{"text":"第29章","link":"/bible/历代志(下)/29.md"},{"text":"第3章","link":"/bible/历代志(下)/3.md"},{"text":"第30章","link":"/bible/历代志(下)/30.md"},{"text":"第31章","link":"/bible/历代志(下)/31.md"},{"text":"第32章","link":"/bible/历代志(下)/32.md"},{"text":"第33章","link":"/bible/历代志(下)/33.md"},{"text":"第34章","link":"/bible/历代志(下)/34.md"},{"text":"第35章","link":"/bible/历代志(下)/35.md"},{"text":"第36章","link":"/bible/历代志(下)/36.md"},{"text":"第4章","link":"/bible/历代志(下)/4.md"},{"text":"第5章","link":"/bible/历代志(下)/5.md"},{"text":"第6章","link":"/bible/历代志(下)/6.md"},{"text":"第7章","link":"/bible/历代志(下)/7.md"},{"text":"第8章","link":"/bible/历代志(下)/8.md"},{"text":"第9章","link":"/bible/历代志(下)/9.md"}]},{"text":"启示录","collapsible":true,"items":[{"text":"第1章","link":"/bible/启示录/1.md"},{"text":"第10章","link":"/bible/启示录/10.md"},{"text":"第11章","link":"/bible/启示录/11.md"},{"text":"第12章","link":"/bible/启示录/12.md"},{"text":"第13章","link":"/bible/启示录/13.md"},{"text":"第14章","link":"/bible/启示录/14.md"},{"text":"第15章","link":"/bible/启示录/15.md"},{"text":"第16章","link":"/bible/启示录/16.md"},{"text":"第17章","link":"/bible/启示录/17.md"},{"text":"第18章","link":"/bible/启示录/18.md"},{"text":"第19章","link":"/bible/启示录/19.md"},{"text":"第2章","link":"/bible/启示录/2.md"},{"text":"第20章","link":"/bible/启示录/20.md"},{"text":"第21章","link":"/bible/启示录/21.md"},{"text":"第22章","link":"/bible/启示录/22.md"},{"text":"第3章","link":"/bible/启示录/3.md"},{"text":"第4章","link":"/bible/启示录/4.md"},{"text":"第5章","link":"/bible/启示录/5.md"},{"text":"第6章","link":"/bible/启示录/6.md"},{"text":"第7章","link":"/bible/启示录/7.md"},{"text":"第8章","link":"/bible/启示录/8.md"},{"text":"第9章","link":"/bible/启示录/9.md"}]},{"text":"哈巴谷书","collapsible":true,"items":[{"text":"第1章","link":"/bible/哈巴谷书/1.md"},{"text":"第2章","link":"/bible/哈巴谷书/2.md"},{"text":"第3章","link":"/bible/哈巴谷书/3.md"}]},{"text":"哈该书","collapsible":true,"items":[{"text":"第1章","link":"/bible/哈该书/1.md"},{"text":"第2章","link":"/bible/哈该书/2.md"}]},{"text":"哥林多前书","collapsible":true,"items":[{"text":"第1章","link":"/bible/哥林多前书/1.md"},{"text":"第10章","link":"/bible/哥林多前书/10.md"},{"text":"第11章","link":"/bible/哥林多前书/11.md"},{"text":"第12章","link":"/bible/哥林多前书/12.md"},{"text":"第13章","link":"/bible/哥林多前书/13.md"},{"text":"第14章","link":"/bible/哥林多前书/14.md"},{"text":"第15章","link":"/bible/哥林多前书/15.md"},{"text":"第16章","link":"/bible/哥林多前书/16.md"},{"text":"第2章","link":"/bible/哥林多前书/2.md"},{"text":"第4章","link":"/bible/哥林多前书/4.md"},{"text":"第5章","link":"/bible/哥林多前书/5.md"},{"text":"第6章","link":"/bible/哥林多前书/6.md"},{"text":"第7章","link":"/bible/哥林多前书/7.md"},{"text":"第8章","link":"/bible/哥林多前书/8.md"},{"text":"第9章","link":"/bible/哥林多前书/9.md"}]},{"text":"哥林多后书","collapsible":true,"items":[{"text":"第1章","link":"/bible/哥林多后书/1.md"},{"text":"第10章","link":"/bible/哥林多后书/10.md"},{"text":"第11章","link":"/bible/哥林多后书/11.md"},{"text":"第12章","link":"/bible/哥林多后书/12.md"},{"text":"第13章","link":"/bible/哥林多后书/13.md"},{"text":"第2章","link":"/bible/哥林多后书/2.md"},{"text":"第3章","link":"/bible/哥林多后书/3.md"},{"text":"第4章","link":"/bible/哥林多后书/4.md"},{"text":"第5章","link":"/bible/哥林多后书/5.md"},{"text":"第6章","link":"/bible/哥林多后书/6.md"},{"text":"第7章","link":"/bible/哥林多后书/7.md"},{"text":"第8章","link":"/bible/哥林多后书/8.md"},{"text":"第9章","link":"/bible/哥林多后书/9.md"}]},{"text":"士师记","collapsible":true,"items":[{"text":"第1章","link":"/bible/士师记/1.md"},{"text":"第10章","link":"/bible/士师记/10.md"},{"text":"第11章","link":"/bible/士师记/11.md"},{"text":"第12章","link":"/bible/士师记/12.md"},{"text":"第13章","link":"/bible/士师记/13.md"},{"text":"第14章","link":"/bible/士师记/14.md"},{"text":"第15章","link":"/bible/士师记/15.md"},{"text":"第16章","link":"/bible/士师记/16.md"},{"text":"第17章","link":"/bible/士师记/17.md"},{"text":"第18章","link":"/bible/士师记/18.md"},{"text":"第19章","link":"/bible/士师记/19.md"},{"text":"第2章","link":"/bible/士师记/2.md"},{"text":"第20章","link":"/bible/士师记/20.md"},{"text":"第21章","link":"/bible/士师记/21.md"},{"text":"第3章","link":"/bible/士师记/3.md"},{"text":"第4章","link":"/bible/士师记/4.md"},{"text":"第5章","link":"/bible/士师记/5.md"},{"text":"第6章","link":"/bible/士师记/6.md"},{"text":"第7章","link":"/bible/士师记/7.md"},{"text":"第8章","link":"/bible/士师记/8.md"},{"text":"第9章","link":"/bible/士师记/9.md"}]},{"text":"尼希米记","collapsible":true,"items":[{"text":"第1章","link":"/bible/尼希米记/1.md"},{"text":"第10章","link":"/bible/尼希米记/10.md"},{"text":"第11章","link":"/bible/尼希米记/11.md"},{"text":"第12章","link":"/bible/尼希米记/12.md"},{"text":"第13章","link":"/bible/尼希米记/13.md"},{"text":"第2章","link":"/bible/尼希米记/2.md"},{"text":"第3章","link":"/bible/尼希米记/3.md"},{"text":"第4章","link":"/bible/尼希米记/4.md"},{"text":"第5章","link":"/bible/尼希米记/5.md"},{"text":"第6章","link":"/bible/尼希米记/6.md"},{"text":"第7章","link":"/bible/尼希米记/7.md"},{"text":"第8章","link":"/bible/尼希米记/8.md"},{"text":"第9章","link":"/bible/尼希米记/9.md"}]},{"text":"希伯来书","collapsible":true,"items":[{"text":"第1章","link":"/bible/希伯来书/1.md"},{"text":"第10章","link":"/bible/希伯来书/10.md"},{"text":"第11章","link":"/bible/希伯来书/11.md"},{"text":"第12章","link":"/bible/希伯来书/12.md"},{"text":"第13章","link":"/bible/希伯来书/13.md"},{"text":"第2章","link":"/bible/希伯来书/2.md"},{"text":"第3章","link":"/bible/希伯来书/3.md"},{"text":"第4章","link":"/bible/希伯来书/4.md"},{"text":"第5章","link":"/bible/希伯来书/5.md"},{"text":"第6章","link":"/bible/希伯来书/6.md"},{"text":"第7章","link":"/bible/希伯来书/7.md"},{"text":"第8章","link":"/bible/希伯来书/8.md"},{"text":"第9章","link":"/bible/希伯来书/9.md"}]},{"text":"帖撒罗尼迦前书","collapsible":true,"items":[{"text":"第1章","link":"/bible/帖撒罗尼迦前书/1.md"},{"text":"第2章","link":"/bible/帖撒罗尼迦前书/2.md"},{"text":"第3章","link":"/bible/帖撒罗尼迦前书/3.md"},{"text":"第4章","link":"/bible/帖撒罗尼迦前书/4.md"},{"text":"第5章","link":"/bible/帖撒罗尼迦前书/5.md"}]},{"text":"帖撒罗尼迦后书","collapsible":true,"items":[{"text":"第1章","link":"/bible/帖撒罗尼迦后书/1.md"},{"text":"第2章","link":"/bible/帖撒罗尼迦后书/2.md"},{"text":"第3章","link":"/bible/帖撒罗尼迦后书/3.md"}]},{"text":"弥迦书","collapsible":true,"items":[{"text":"第1章","link":"/bible/弥迦书/1.md"},{"text":"第2章","link":"/bible/弥迦书/2.md"},{"text":"第3章","link":"/bible/弥迦书/3.md"},{"text":"第4章","link":"/bible/弥迦书/4.md"},{"text":"第5章","link":"/bible/弥迦书/5.md"},{"text":"第6章","link":"/bible/弥迦书/6.md"},{"text":"第7章","link":"/bible/弥迦书/7.md"}]},{"text":"彼得前书","collapsible":true,"items":[{"text":"第1章","link":"/bible/彼得前书/1.md"},{"text":"第2章","link":"/bible/彼得前书/2.md"},{"text":"第3章","link":"/bible/彼得前书/3.md"},{"text":"第4章","link":"/bible/彼得前书/4.md"},{"text":"第5章","link":"/bible/彼得前书/5.md"}]},{"text":"彼得后书","collapsible":true,"items":[{"text":"第1章","link":"/bible/彼得后书/1.md"},{"text":"第2章","link":"/bible/彼得后书/2.md"},{"text":"第3章","link":"/bible/彼得后书/3.md"}]},{"text":"提多书","collapsible":true,"items":[{"text":"第1章","link":"/bible/提多书/1.md"},{"text":"第2章","link":"/bible/提多书/2.md"},{"text":"第3章","link":"/bible/提多书/3.md"}]},{"text":"提摩太前书","collapsible":true,"items":[{"text":"第1章","link":"/bible/提摩太前书/1.md"},{"text":"第2章","link":"/bible/提摩太前书/2.md"},{"text":"第3章","link":"/bible/提摩太前书/3.md"},{"text":"第4章","link":"/bible/提摩太前书/4.md"},{"text":"第5章","link":"/bible/提摩太前书/5.md"},{"text":"第6章","link":"/bible/提摩太前书/6.md"}]},{"text":"提摩太后书","collapsible":true,"items":[{"text":"第1章","link":"/bible/提摩太后书/1.md"},{"text":"第2章","link":"/bible/提摩太后书/2.md"},{"text":"第3章","link":"/bible/提摩太后书/3.md"},{"text":"第4章","link":"/bible/提摩太后书/4.md"}]},{"text":"撒母耳记(上)","collapsible":true,"items":[{"text":"第1章","link":"/bible/撒母耳记(上)/1.md"},{"text":"第10章","link":"/bible/撒母耳记(上)/10.md"},{"text":"第11章","link":"/bible/撒母耳记(上)/11.md"},{"text":"第12章","link":"/bible/撒母耳记(上)/12.md"},{"text":"第13章","link":"/bible/撒母耳记(上)/13.md"},{"text":"第14章","link":"/bible/撒母耳记(上)/14.md"},{"text":"第15章","link":"/bible/撒母耳记(上)/15.md"},{"text":"第16章","link":"/bible/撒母耳记(上)/16.md"},{"text":"第17章","link":"/bible/撒母耳记(上)/17.md"},{"text":"第18章","link":"/bible/撒母耳记(上)/18.md"},{"text":"第19章","link":"/bible/撒母耳记(上)/19.md"},{"text":"第2章","link":"/bible/撒母耳记(上)/2.md"},{"text":"第20章","link":"/bible/撒母耳记(上)/20.md"},{"text":"第21章","link":"/bible/撒母耳记(上)/21.md"},{"text":"第22章","link":"/bible/撒母耳记(上)/22.md"},{"text":"第23章","link":"/bible/撒母耳记(上)/23.md"},{"text":"第24章","link":"/bible/撒母耳记(上)/24.md"},{"text":"第25章","link":"/bible/撒母耳记(上)/25.md"},{"text":"第26章","link":"/bible/撒母耳记(上)/26.md"},{"text":"第27章","link":"/bible/撒母耳记(上)/27.md"},{"text":"第28章","link":"/bible/撒母耳记(上)/28.md"},{"text":"第29章","link":"/bible/撒母耳记(上)/29.md"},{"text":"第3章","link":"/bible/撒母耳记(上)/3.md"},{"text":"第30章","link":"/bible/撒母耳记(上)/30.md"},{"text":"第31章","link":"/bible/撒母耳记(上)/31.md"},{"text":"第4章","link":"/bible/撒母耳记(上)/4.md"},{"text":"第5章","link":"/bible/撒母耳记(上)/5.md"},{"text":"第6章","link":"/bible/撒母耳记(上)/6.md"},{"text":"第7章","link":"/bible/撒母耳记(上)/7.md"},{"text":"第8章","link":"/bible/撒母耳记(上)/8.md"},{"text":"第9章","link":"/bible/撒母耳记(上)/9.md"}]},{"text":"撒母耳记(下)","collapsible":true,"items":[{"text":"第1章","link":"/bible/撒母耳记(下)/1.md"},{"text":"第10章","link":"/bible/撒母耳记(下)/10.md"},{"text":"第11章","link":"/bible/撒母耳记(下)/11.md"},{"text":"第12章","link":"/bible/撒母耳记(下)/12.md"},{"text":"第13章","link":"/bible/撒母耳记(下)/13.md"},{"text":"第14章","link":"/bible/撒母耳记(下)/14.md"},{"text":"第15章","link":"/bible/撒母耳记(下)/15.md"},{"text":"第16章","link":"/bible/撒母耳记(下)/16.md"},{"text":"第17章","link":"/bible/撒母耳记(下)/17.md"},{"text":"第18章","link":"/bible/撒母耳记(下)/18.md"},{"text":"第19章","link":"/bible/撒母耳记(下)/19.md"},{"text":"第2章","link":"/bible/撒母耳记(下)/2.md"},{"text":"第20章","link":"/bible/撒母耳记(下)/20.md"},{"text":"第21章","link":"/bible/撒母耳记(下)/21.md"},{"text":"第22章","link":"/bible/撒母耳记(下)/22.md"},{"text":"第23章","link":"/bible/撒母耳记(下)/23.md"},{"text":"第24章","link":"/bible/撒母耳记(下)/24.md"},{"text":"第3章","link":"/bible/撒母耳记(下)/3.md"},{"text":"第4章","link":"/bible/撒母耳记(下)/4.md"},{"text":"第5章","link":"/bible/撒母耳记(下)/5.md"},{"text":"第6章","link":"/bible/撒母耳记(下)/6.md"},{"text":"第7章","link":"/bible/撒母耳记(下)/7.md"},{"text":"第8章","link":"/bible/撒母耳记(下)/8.md"},{"text":"第9章","link":"/bible/撒母耳记(下)/9.md"}]},{"text":"撒迦利亚书","collapsible":true,"items":[{"text":"第1章","link":"/bible/撒迦利亚书/1.md"},{"text":"第10章","link":"/bible/撒迦利亚书/10.md"},{"text":"第11章","link":"/bible/撒迦利亚书/11.md"},{"text":"第12章","link":"/bible/撒迦利亚书/12.md"},{"text":"第13章","link":"/bible/撒迦利亚书/13.md"},{"text":"第14章","link":"/bible/撒迦利亚书/14.md"},{"text":"第2章","link":"/bible/撒迦利亚书/2.md"},{"text":"第3章","link":"/bible/撒迦利亚书/3.md"},{"text":"第4章","link":"/bible/撒迦利亚书/4.md"},{"text":"第5章","link":"/bible/撒迦利亚书/5.md"},{"text":"第6章","link":"/bible/撒迦利亚书/6.md"},{"text":"第7章","link":"/bible/撒迦利亚书/7.md"},{"text":"第8章","link":"/bible/撒迦利亚书/8.md"},{"text":"第9章","link":"/bible/撒迦利亚书/9.md"}]},{"text":"新约.马太福音","collapsible":true,"items":[{"text":"第1章","link":"/bible/新约.马太福音/1.md"},{"text":"第10章","link":"/bible/新约.马太福音/10.md"},{"text":"第11章","link":"/bible/新约.马太福音/11.md"},{"text":"第12章","link":"/bible/新约.马太福音/12.md"},{"text":"第13章","link":"/bible/新约.马太福音/13.md"},{"text":"第14章","link":"/bible/新约.马太福音/14.md"},{"text":"第15章","link":"/bible/新约.马太福音/15.md"},{"text":"第16章","link":"/bible/新约.马太福音/16.md"},{"text":"第17章","link":"/bible/新约.马太福音/17.md"},{"text":"第18章","link":"/bible/新约.马太福音/18.md"},{"text":"第19章","link":"/bible/新约.马太福音/19.md"},{"text":"第2章","link":"/bible/新约.马太福音/2.md"},{"text":"第20章","link":"/bible/新约.马太福音/20.md"},{"text":"第21章","link":"/bible/新约.马太福音/21.md"},{"text":"第22章","link":"/bible/新约.马太福音/22.md"},{"text":"第23章","link":"/bible/新约.马太福音/23.md"},{"text":"第24章","link":"/bible/新约.马太福音/24.md"},{"text":"第25章","link":"/bible/新约.马太福音/25.md"},{"text":"第26章","link":"/bible/新约.马太福音/26.md"},{"text":"第27章","link":"/bible/新约.马太福音/27.md"},{"text":"第28章","link":"/bible/新约.马太福音/28.md"},{"text":"第3章","link":"/bible/新约.马太福音/3.md"},{"text":"第4章","link":"/bible/新约.马太福音/4.md"},{"text":"第5章","link":"/bible/新约.马太福音/5.md"},{"text":"第6章","link":"/bible/新约.马太福音/6.md"},{"text":"第7章","link":"/bible/新约.马太福音/7.md"},{"text":"第8章","link":"/bible/新约.马太福音/8.md"},{"text":"第9章","link":"/bible/新约.马太福音/9.md"}]},{"text":"歌罗西书","collapsible":true,"items":[{"text":"第1章","link":"/bible/歌罗西书/1.md"},{"text":"第2章","link":"/bible/歌罗西书/2.md"},{"text":"第3章","link":"/bible/歌罗西书/3.md"},{"text":"第4章","link":"/bible/歌罗西书/4.md"}]},{"text":"民数记","collapsible":true,"items":[{"text":"第1章","link":"/bible/民数记/1.md"},{"text":"第10章","link":"/bible/民数记/10.md"},{"text":"第11章","link":"/bible/民数记/11.md"},{"text":"第12章","link":"/bible/民数记/12.md"},{"text":"第13章","link":"/bible/民数记/13.md"},{"text":"第14章","link":"/bible/民数记/14.md"},{"text":"第15章","link":"/bible/民数记/15.md"},{"text":"第16章","link":"/bible/民数记/16.md"},{"text":"第17章","link":"/bible/民数记/17.md"},{"text":"第18章","link":"/bible/民数记/18.md"},{"text":"第19章","link":"/bible/民数记/19.md"},{"text":"第2章","link":"/bible/民数记/2.md"},{"text":"第20章","link":"/bible/民数记/20.md"},{"text":"第21章","link":"/bible/民数记/21.md"},{"text":"第22章","link":"/bible/民数记/22.md"},{"text":"第23章","link":"/bible/民数记/23.md"},{"text":"第24章","link":"/bible/民数记/24.md"},{"text":"第25章","link":"/bible/民数记/25.md"},{"text":"第26章","link":"/bible/民数记/26.md"},{"text":"第27章","link":"/bible/民数记/27.md"},{"text":"第28章","link":"/bible/民数记/28.md"},{"text":"第29章","link":"/bible/民数记/29.md"},{"text":"第3章","link":"/bible/民数记/3.md"},{"text":"第30章","link":"/bible/民数记/30.md"},{"text":"第31章","link":"/bible/民数记/31.md"},{"text":"第32章","link":"/bible/民数记/32.md"},{"text":"第33章","link":"/bible/民数记/33.md"},{"text":"第34章","link":"/bible/民数记/34.md"},{"text":"第35章","link":"/bible/民数记/35.md"},{"text":"第36章","link":"/bible/民数记/36.md"},{"text":"第4章","link":"/bible/民数记/4.md"},{"text":"第5章","link":"/bible/民数记/5.md"},{"text":"第6章","link":"/bible/民数记/6.md"},{"text":"第7章","link":"/bible/民数记/7.md"},{"text":"第8章","link":"/bible/民数记/8.md"},{"text":"第9章","link":"/bible/民数记/9.md"}]},{"text":"犹大书","collapsible":true,"items":[{"text":"第1章","link":"/bible/犹大书/1.md"}]},{"text":"玛拉基书","collapsible":true,"items":[{"text":"第1章","link":"/bible/玛拉基书/1.md"},{"text":"第2章","link":"/bible/玛拉基书/2.md"},{"text":"第3章","link":"/bible/玛拉基书/3.md"},{"text":"第4章","link":"/bible/玛拉基书/4.md"}]},{"text":"申命记","collapsible":true,"items":[{"text":"第1章","link":"/bible/申命记/1.md"},{"text":"第10章","link":"/bible/申命记/10.md"},{"text":"第11章","link":"/bible/申命记/11.md"},{"text":"第12章","link":"/bible/申命记/12.md"},{"text":"第13章","link":"/bible/申命记/13.md"},{"text":"第14章","link":"/bible/申命记/14.md"},{"text":"第15章","link":"/bible/申命记/15.md"},{"text":"第16章","link":"/bible/申命记/16.md"},{"text":"第17章","link":"/bible/申命记/17.md"},{"text":"第18章","link":"/bible/申命记/18.md"},{"text":"第19章","link":"/bible/申命记/19.md"},{"text":"第2章","link":"/bible/申命记/2.md"},{"text":"第20章","link":"/bible/申命记/20.md"},{"text":"第21章","link":"/bible/申命记/21.md"},{"text":"第22章","link":"/bible/申命记/22.md"},{"text":"第23章","link":"/bible/申命记/23.md"},{"text":"第24章","link":"/bible/申命记/24.md"},{"text":"第25章","link":"/bible/申命记/25.md"},{"text":"第26章","link":"/bible/申命记/26.md"},{"text":"第27章","link":"/bible/申命记/27.md"},{"text":"第28章","link":"/bible/申命记/28.md"},{"text":"第29章","link":"/bible/申命记/29.md"},{"text":"第3章","link":"/bible/申命记/3.md"},{"text":"第30章","link":"/bible/申命记/30.md"},{"text":"第31章","link":"/bible/申命记/31.md"},{"text":"第32章","link":"/bible/申命记/32.md"},{"text":"第33章","link":"/bible/申命记/33.md"},{"text":"第34章","link":"/bible/申命记/34.md"},{"text":"第4章","link":"/bible/申命记/4.md"},{"text":"第5章","link":"/bible/申命记/5.md"},{"text":"第6章","link":"/bible/申命记/6.md"},{"text":"第7章","link":"/bible/申命记/7.md"},{"text":"第8章","link":"/bible/申命记/8.md"},{"text":"第9章","link":"/bible/申命记/9.md"}]},{"text":"箴言","collapsible":true,"items":[{"text":"第1章","link":"/bible/箴言/1.md"},{"text":"第10章","link":"/bible/箴言/10.md"},{"text":"第11章","link":"/bible/箴言/11.md"},{"text":"第12章","link":"/bible/箴言/12.md"},{"text":"第13章","link":"/bible/箴言/13.md"},{"text":"第14章","link":"/bible/箴言/14.md"},{"text":"第15章","link":"/bible/箴言/15.md"},{"text":"第16章","link":"/bible/箴言/16.md"},{"text":"第17章","link":"/bible/箴言/17.md"},{"text":"第18章","link":"/bible/箴言/18.md"},{"text":"第19章","link":"/bible/箴言/19.md"},{"text":"第2章","link":"/bible/箴言/2.md"},{"text":"第20章","link":"/bible/箴言/20.md"},{"text":"第21章","link":"/bible/箴言/21.md"},{"text":"第22章","link":"/bible/箴言/22.md"},{"text":"第23章","link":"/bible/箴言/23.md"},{"text":"第24章","link":"/bible/箴言/24.md"},{"text":"第25章","link":"/bible/箴言/25.md"},{"text":"第26章","link":"/bible/箴言/26.md"},{"text":"第27章","link":"/bible/箴言/27.md"},{"text":"第28章","link":"/bible/箴言/28.md"},{"text":"第29章","link":"/bible/箴言/29.md"},{"text":"第3章","link":"/bible/箴言/3.md"},{"text":"第30章","link":"/bible/箴言/30.md"},{"text":"第31章","link":"/bible/箴言/31.md"},{"text":"第4章","link":"/bible/箴言/4.md"},{"text":"第5章","link":"/bible/箴言/5.md"},{"text":"第6章","link":"/bible/箴言/6.md"},{"text":"第7章","link":"/bible/箴言/7.md"},{"text":"第8章","link":"/bible/箴言/8.md"},{"text":"第9章","link":"/bible/箴言/9.md"}]},{"text":"约书亚记","collapsible":true,"items":[{"text":"第1章","link":"/bible/约书亚记/1.md"},{"text":"第10章","link":"/bible/约书亚记/10.md"},{"text":"第11章","link":"/bible/约书亚记/11.md"},{"text":"第12章","link":"/bible/约书亚记/12.md"},{"text":"第13章","link":"/bible/约书亚记/13.md"},{"text":"第14章","link":"/bible/约书亚记/14.md"},{"text":"第15章","link":"/bible/约书亚记/15.md"},{"text":"第16章","link":"/bible/约书亚记/16.md"},{"text":"第17章","link":"/bible/约书亚记/17.md"},{"text":"第18章","link":"/bible/约书亚记/18.md"},{"text":"第19章","link":"/bible/约书亚记/19.md"},{"text":"第2章","link":"/bible/约书亚记/2.md"},{"text":"第20章","link":"/bible/约书亚记/20.md"},{"text":"第21章","link":"/bible/约书亚记/21.md"},{"text":"第22章","link":"/bible/约书亚记/22.md"},{"text":"第23章","link":"/bible/约书亚记/23.md"},{"text":"第24章","link":"/bible/约书亚记/24.md"},{"text":"第3章","link":"/bible/约书亚记/3.md"},{"text":"第4章","link":"/bible/约书亚记/4.md"},{"text":"第5章","link":"/bible/约书亚记/5.md"},{"text":"第6章","link":"/bible/约书亚记/6.md"},{"text":"第7章","link":"/bible/约书亚记/7.md"},{"text":"第8章","link":"/bible/约书亚记/8.md"},{"text":"第9章","link":"/bible/约书亚记/9.md"}]},{"text":"约伯记","collapsible":true,"items":[{"text":"第1章","link":"/bible/约伯记/1.md"},{"text":"第10章","link":"/bible/约伯记/10.md"},{"text":"第11章","link":"/bible/约伯记/11.md"},{"text":"第12章","link":"/bible/约伯记/12.md"},{"text":"第13章","link":"/bible/约伯记/13.md"},{"text":"第14章","link":"/bible/约伯记/14.md"},{"text":"第15章","link":"/bible/约伯记/15.md"},{"text":"第16章","link":"/bible/约伯记/16.md"},{"text":"第17章","link":"/bible/约伯记/17.md"},{"text":"第18章","link":"/bible/约伯记/18.md"},{"text":"第19章","link":"/bible/约伯记/19.md"},{"text":"第2章","link":"/bible/约伯记/2.md"},{"text":"第20章","link":"/bible/约伯记/20.md"},{"text":"第21章","link":"/bible/约伯记/21.md"},{"text":"第22章","link":"/bible/约伯记/22.md"},{"text":"第23章","link":"/bible/约伯记/23.md"},{"text":"第24章","link":"/bible/约伯记/24.md"},{"text":"第25章","link":"/bible/约伯记/25.md"},{"text":"第26章","link":"/bible/约伯记/26.md"},{"text":"第27章","link":"/bible/约伯记/27.md"},{"text":"第28章","link":"/bible/约伯记/28.md"},{"text":"第29章","link":"/bible/约伯记/29.md"},{"text":"第3章","link":"/bible/约伯记/3.md"},{"text":"第30章","link":"/bible/约伯记/30.md"},{"text":"第31章","link":"/bible/约伯记/31.md"},{"text":"第32章","link":"/bible/约伯记/32.md"},{"text":"第33章","link":"/bible/约伯记/33.md"},{"text":"第34章","link":"/bible/约伯记/34.md"},{"text":"第35章","link":"/bible/约伯记/35.md"},{"text":"第36章","link":"/bible/约伯记/36.md"},{"text":"第37章","link":"/bible/约伯记/37.md"},{"text":"第38章","link":"/bible/约伯记/38.md"},{"text":"第39章","link":"/bible/约伯记/39.md"},{"text":"第4章","link":"/bible/约伯记/4.md"},{"text":"第40章","link":"/bible/约伯记/40.md"},{"text":"第41章","link":"/bible/约伯记/41.md"},{"text":"第42章","link":"/bible/约伯记/42.md"},{"text":"第5章","link":"/bible/约伯记/5.md"},{"text":"第6章","link":"/bible/约伯记/6.md"},{"text":"第7章","link":"/bible/约伯记/7.md"},{"text":"第8章","link":"/bible/约伯记/8.md"},{"text":"第9章","link":"/bible/约伯记/9.md"}]},{"text":"约拿书","collapsible":true,"items":[{"text":"第1章","link":"/bible/约拿书/1.md"},{"text":"第2章","link":"/bible/约拿书/2.md"},{"text":"第3章","link":"/bible/约拿书/3.md"},{"text":"第4章","link":"/bible/约拿书/4.md"}]},{"text":"约珥书","collapsible":true,"items":[{"text":"第1章","link":"/bible/约珥书/1.md"},{"text":"第2章","link":"/bible/约珥书/2.md"},{"text":"第3章","link":"/bible/约珥书/3.md"}]},{"text":"约翰一书","collapsible":true,"items":[{"text":"第1章","link":"/bible/约翰一书/1.md"},{"text":"第2章","link":"/bible/约翰一书/2.md"},{"text":"第3章","link":"/bible/约翰一书/3.md"},{"text":"第4章","link":"/bible/约翰一书/4.md"},{"text":"第5章","link":"/bible/约翰一书/5.md"}]},{"text":"约翰三书","collapsible":true,"items":[{"text":"第1章","link":"/bible/约翰三书/1.md"}]},{"text":"约翰二书","collapsible":true,"items":[{"text":"第1章","link":"/bible/约翰二书/1.md"}]},{"text":"约翰福音","collapsible":true,"items":[{"text":"第1章","link":"/bible/约翰福音/1.md"},{"text":"第10章","link":"/bible/约翰福音/10.md"},{"text":"第11章","link":"/bible/约翰福音/11.md"},{"text":"第12章","link":"/bible/约翰福音/12.md"},{"text":"第13章","link":"/bible/约翰福音/13.md"},{"text":"第14章","link":"/bible/约翰福音/14.md"},{"text":"第15章","link":"/bible/约翰福音/15.md"},{"text":"第16章","link":"/bible/约翰福音/16.md"},{"text":"第17章","link":"/bible/约翰福音/17.md"},{"text":"第18章","link":"/bible/约翰福音/18.md"},{"text":"第19章","link":"/bible/约翰福音/19.md"},{"text":"第2章","link":"/bible/约翰福音/2.md"},{"text":"第20章","link":"/bible/约翰福音/20.md"},{"text":"第21章","link":"/bible/约翰福音/21.md"},{"text":"第3章","link":"/bible/约翰福音/3.md"},{"text":"第4章","link":"/bible/约翰福音/4.md"},{"text":"第5章","link":"/bible/约翰福音/5.md"},{"text":"第6章","link":"/bible/约翰福音/6.md"},{"text":"第7章","link":"/bible/约翰福音/7.md"},{"text":"第8章","link":"/bible/约翰福音/8.md"},{"text":"第9章","link":"/bible/约翰福音/9.md"}]},{"text":"罗马书","collapsible":true,"items":[{"text":"第1章","link":"/bible/罗马书/1.md"},{"text":"第10章","link":"/bible/罗马书/10.md"},{"text":"第11章","link":"/bible/罗马书/11.md"},{"text":"第12章","link":"/bible/罗马书/12.md"},{"text":"第13章","link":"/bible/罗马书/13.md"},{"text":"第14章","link":"/bible/罗马书/14.md"},{"text":"第15章","link":"/bible/罗马书/15.md"},{"text":"第16章","link":"/bible/罗马书/16.md"},{"text":"第2章","link":"/bible/罗马书/2.md"},{"text":"第3章","link":"/bible/罗马书/3.md"},{"text":"第4章","link":"/bible/罗马书/4.md"},{"text":"第5章","link":"/bible/罗马书/5.md"},{"text":"第6章","link":"/bible/罗马书/6.md"},{"text":"第7章","link":"/bible/罗马书/7.md"},{"text":"第8章","link":"/bible/罗马书/8.md"},{"text":"第9章","link":"/bible/罗马书/9.md"}]},{"text":"耶利米书","collapsible":true,"items":[{"text":"第1章","link":"/bible/耶利米书/1.md"},{"text":"第10章","link":"/bible/耶利米书/10.md"},{"text":"第11章","link":"/bible/耶利米书/11.md"},{"text":"第12章","link":"/bible/耶利米书/12.md"},{"text":"第13章","link":"/bible/耶利米书/13.md"},{"text":"第14章","link":"/bible/耶利米书/14.md"},{"text":"第15章","link":"/bible/耶利米书/15.md"},{"text":"第16章","link":"/bible/耶利米书/16.md"},{"text":"第17章","link":"/bible/耶利米书/17.md"},{"text":"第18章","link":"/bible/耶利米书/18.md"},{"text":"第19章","link":"/bible/耶利米书/19.md"},{"text":"第2章","link":"/bible/耶利米书/2.md"},{"text":"第20章","link":"/bible/耶利米书/20.md"},{"text":"第21章","link":"/bible/耶利米书/21.md"},{"text":"第22章","link":"/bible/耶利米书/22.md"},{"text":"第23章","link":"/bible/耶利米书/23.md"},{"text":"第24章","link":"/bible/耶利米书/24.md"},{"text":"第25章","link":"/bible/耶利米书/25.md"},{"text":"第26章","link":"/bible/耶利米书/26.md"},{"text":"第27章","link":"/bible/耶利米书/27.md"},{"text":"第28章","link":"/bible/耶利米书/28.md"},{"text":"第29章","link":"/bible/耶利米书/29.md"},{"text":"第3章","link":"/bible/耶利米书/3.md"},{"text":"第30章","link":"/bible/耶利米书/30.md"},{"text":"第31章","link":"/bible/耶利米书/31.md"},{"text":"第32章","link":"/bible/耶利米书/32.md"},{"text":"第33章","link":"/bible/耶利米书/33.md"},{"text":"第34章","link":"/bible/耶利米书/34.md"},{"text":"第35章","link":"/bible/耶利米书/35.md"},{"text":"第36章","link":"/bible/耶利米书/36.md"},{"text":"第37章","link":"/bible/耶利米书/37.md"},{"text":"第38章","link":"/bible/耶利米书/38.md"},{"text":"第39章","link":"/bible/耶利米书/39.md"},{"text":"第4章","link":"/bible/耶利米书/4.md"},{"text":"第40章","link":"/bible/耶利米书/40.md"},{"text":"第41章","link":"/bible/耶利米书/41.md"},{"text":"第42章","link":"/bible/耶利米书/42.md"},{"text":"第43章","link":"/bible/耶利米书/43.md"},{"text":"第44章","link":"/bible/耶利米书/44.md"},{"text":"第45章","link":"/bible/耶利米书/45.md"},{"text":"第46章","link":"/bible/耶利米书/46.md"},{"text":"第47章","link":"/bible/耶利米书/47.md"},{"text":"第48章","link":"/bible/耶利米书/48.md"},{"text":"第49章","link":"/bible/耶利米书/49.md"},{"text":"第5章","link":"/bible/耶利米书/5.md"},{"text":"第50章","link":"/bible/耶利米书/50.md"},{"text":"第51章","link":"/bible/耶利米书/51.md"},{"text":"第52章","link":"/bible/耶利米书/52.md"},{"text":"第6章","link":"/bible/耶利米书/6.md"},{"text":"第7章","link":"/bible/耶利米书/7.md"},{"text":"第8章","link":"/bible/耶利米书/8.md"},{"text":"第9章","link":"/bible/耶利米书/9.md"}]},{"text":"耶利米哀歌","collapsible":true,"items":[{"text":"第1章","link":"/bible/耶利米哀歌/1.md"},{"text":"第2章","link":"/bible/耶利米哀歌/2.md"},{"text":"第3章","link":"/bible/耶利米哀歌/3.md"},{"text":"第4章","link":"/bible/耶利米哀歌/4.md"},{"text":"第5章","link":"/bible/耶利米哀歌/5.md"}]},{"text":"腓利门书","collapsible":true,"items":[{"text":"第1章","link":"/bible/腓利门书/1.md"}]},{"text":"腓立比书","collapsible":true,"items":[{"text":"第1章","link":"/bible/腓立比书/1.md"},{"text":"第2章","link":"/bible/腓立比书/2.md"},{"text":"第3章","link":"/bible/腓立比书/3.md"},{"text":"第4章","link":"/bible/腓立比书/4.md"}]},{"text":"西番雅书","collapsible":true,"items":[{"text":"第1章","link":"/bible/西番雅书/1.md"},{"text":"第2章","link":"/bible/西番雅书/2.md"},{"text":"第3章","link":"/bible/西番雅书/3.md"}]},{"text":"诗篇","collapsible":true,"items":[{"text":"第1章","link":"/bible/诗篇/1.md"},{"text":"第10章","link":"/bible/诗篇/10.md"},{"text":"第100章","link":"/bible/诗篇/100.md"},{"text":"第101章","link":"/bible/诗篇/101.md"},{"text":"第102章","link":"/bible/诗篇/102.md"},{"text":"第103章","link":"/bible/诗篇/103.md"},{"text":"第104章","link":"/bible/诗篇/104.md"},{"text":"第105章","link":"/bible/诗篇/105.md"},{"text":"第106章","link":"/bible/诗篇/106.md"},{"text":"第107章","link":"/bible/诗篇/107.md"},{"text":"第108章","link":"/bible/诗篇/108.md"},{"text":"第109章","link":"/bible/诗篇/109.md"},{"text":"第11章","link":"/bible/诗篇/11.md"},{"text":"第110章","link":"/bible/诗篇/110.md"},{"text":"第111章","link":"/bible/诗篇/111.md"},{"text":"第112章","link":"/bible/诗篇/112.md"},{"text":"第113章","link":"/bible/诗篇/113.md"},{"text":"第114章","link":"/bible/诗篇/114.md"},{"text":"第115章","link":"/bible/诗篇/115.md"},{"text":"第116章","link":"/bible/诗篇/116.md"},{"text":"第117章","link":"/bible/诗篇/117.md"},{"text":"第118章","link":"/bible/诗篇/118.md"},{"text":"第119章","link":"/bible/诗篇/119.md"},{"text":"第12章","link":"/bible/诗篇/12.md"},{"text":"第120章","link":"/bible/诗篇/120.md"},{"text":"第121章","link":"/bible/诗篇/121.md"},{"text":"第122章","link":"/bible/诗篇/122.md"},{"text":"第123章","link":"/bible/诗篇/123.md"},{"text":"第124章","link":"/bible/诗篇/124.md"},{"text":"第125章","link":"/bible/诗篇/125.md"},{"text":"第126章","link":"/bible/诗篇/126.md"},{"text":"第127章","link":"/bible/诗篇/127.md"},{"text":"第128章","link":"/bible/诗篇/128.md"},{"text":"第129章","link":"/bible/诗篇/129.md"},{"text":"第13章","link":"/bible/诗篇/13.md"},{"text":"第130章","link":"/bible/诗篇/130.md"},{"text":"第131章","link":"/bible/诗篇/131.md"},{"text":"第132章","link":"/bible/诗篇/132.md"},{"text":"第133章","link":"/bible/诗篇/133.md"},{"text":"第134章","link":"/bible/诗篇/134.md"},{"text":"第135章","link":"/bible/诗篇/135.md"},{"text":"第136章","link":"/bible/诗篇/136.md"},{"text":"第137章","link":"/bible/诗篇/137.md"},{"text":"第138章","link":"/bible/诗篇/138.md"},{"text":"第139章","link":"/bible/诗篇/139.md"},{"text":"第14章","link":"/bible/诗篇/14.md"},{"text":"第140章","link":"/bible/诗篇/140.md"},{"text":"第141章","link":"/bible/诗篇/141.md"},{"text":"第142章","link":"/bible/诗篇/142.md"},{"text":"第143章","link":"/bible/诗篇/143.md"},{"text":"第144章","link":"/bible/诗篇/144.md"},{"text":"第145章","link":"/bible/诗篇/145.md"},{"text":"第146章","link":"/bible/诗篇/146.md"},{"text":"第147章","link":"/bible/诗篇/147.md"},{"text":"第148章","link":"/bible/诗篇/148.md"},{"text":"第149章","link":"/bible/诗篇/149.md"},{"text":"第15章","link":"/bible/诗篇/15.md"},{"text":"第150章","link":"/bible/诗篇/150.md"},{"text":"第16章","link":"/bible/诗篇/16.md"},{"text":"第17章","link":"/bible/诗篇/17.md"},{"text":"第18章","link":"/bible/诗篇/18.md"},{"text":"第19章","link":"/bible/诗篇/19.md"},{"text":"第2章","link":"/bible/诗篇/2.md"},{"text":"第20章","link":"/bible/诗篇/20.md"},{"text":"第21章","link":"/bible/诗篇/21.md"},{"text":"第22章","link":"/bible/诗篇/22.md"},{"text":"第23章","link":"/bible/诗篇/23.md"},{"text":"第24章","link":"/bible/诗篇/24.md"},{"text":"第25章","link":"/bible/诗篇/25.md"},{"text":"第26章","link":"/bible/诗篇/26.md"},{"text":"第27章","link":"/bible/诗篇/27.md"},{"text":"第28章","link":"/bible/诗篇/28.md"},{"text":"第29章","link":"/bible/诗篇/29.md"},{"text":"第3章","link":"/bible/诗篇/3.md"},{"text":"第30章","link":"/bible/诗篇/30.md"},{"text":"第31章","link":"/bible/诗篇/31.md"},{"text":"第32章","link":"/bible/诗篇/32.md"},{"text":"第33章","link":"/bible/诗篇/33.md"},{"text":"第34章","link":"/bible/诗篇/34.md"},{"text":"第35章","link":"/bible/诗篇/35.md"},{"text":"第36章","link":"/bible/诗篇/36.md"},{"text":"第37章","link":"/bible/诗篇/37.md"},{"text":"第38章","link":"/bible/诗篇/38.md"},{"text":"第39章","link":"/bible/诗篇/39.md"},{"text":"第4章","link":"/bible/诗篇/4.md"},{"text":"第40章","link":"/bible/诗篇/40.md"},{"text":"第41章","link":"/bible/诗篇/41.md"},{"text":"第42章","link":"/bible/诗篇/42.md"},{"text":"第43章","link":"/bible/诗篇/43.md"},{"text":"第44章","link":"/bible/诗篇/44.md"},{"text":"第45章","link":"/bible/诗篇/45.md"},{"text":"第46章","link":"/bible/诗篇/46.md"},{"text":"第47章","link":"/bible/诗篇/47.md"},{"text":"第48章","link":"/bible/诗篇/48.md"},{"text":"第49章","link":"/bible/诗篇/49.md"},{"text":"第5章","link":"/bible/诗篇/5.md"},{"text":"第50章","link":"/bible/诗篇/50.md"},{"text":"第51章","link":"/bible/诗篇/51.md"},{"text":"第52章","link":"/bible/诗篇/52.md"},{"text":"第53章","link":"/bible/诗篇/53.md"},{"text":"第54章","link":"/bible/诗篇/54.md"},{"text":"第55章","link":"/bible/诗篇/55.md"},{"text":"第56章","link":"/bible/诗篇/56.md"},{"text":"第57章","link":"/bible/诗篇/57.md"},{"text":"第58章","link":"/bible/诗篇/58.md"},{"text":"第59章","link":"/bible/诗篇/59.md"},{"text":"第6章","link":"/bible/诗篇/6.md"},{"text":"第60章","link":"/bible/诗篇/60.md"},{"text":"第61章","link":"/bible/诗篇/61.md"},{"text":"第62章","link":"/bible/诗篇/62.md"},{"text":"第63章","link":"/bible/诗篇/63.md"},{"text":"第64章","link":"/bible/诗篇/64.md"},{"text":"第65章","link":"/bible/诗篇/65.md"},{"text":"第66章","link":"/bible/诗篇/66.md"},{"text":"第67章","link":"/bible/诗篇/67.md"},{"text":"第68章","link":"/bible/诗篇/68.md"},{"text":"第69章","link":"/bible/诗篇/69.md"},{"text":"第7章","link":"/bible/诗篇/7.md"},{"text":"第70章","link":"/bible/诗篇/70.md"},{"text":"第71章","link":"/bible/诗篇/71.md"},{"text":"第72章","link":"/bible/诗篇/72.md"},{"text":"第73章","link":"/bible/诗篇/73.md"},{"text":"第74章","link":"/bible/诗篇/74.md"},{"text":"第75章","link":"/bible/诗篇/75.md"},{"text":"第76章","link":"/bible/诗篇/76.md"},{"text":"第77章","link":"/bible/诗篇/77.md"},{"text":"第78章","link":"/bible/诗篇/78.md"},{"text":"第79章","link":"/bible/诗篇/79.md"},{"text":"第8章","link":"/bible/诗篇/8.md"},{"text":"第80章","link":"/bible/诗篇/80.md"},{"text":"第81章","link":"/bible/诗篇/81.md"},{"text":"第82章","link":"/bible/诗篇/82.md"},{"text":"第83章","link":"/bible/诗篇/83.md"},{"text":"第84章","link":"/bible/诗篇/84.md"},{"text":"第85章","link":"/bible/诗篇/85.md"},{"text":"第86章","link":"/bible/诗篇/86.md"},{"text":"第87章","link":"/bible/诗篇/87.md"},{"text":"第88章","link":"/bible/诗篇/88.md"},{"text":"第89章","link":"/bible/诗篇/89.md"},{"text":"第9章","link":"/bible/诗篇/9.md"},{"text":"第90章","link":"/bible/诗篇/90.md"},{"text":"第91章","link":"/bible/诗篇/91.md"},{"text":"第92章","link":"/bible/诗篇/92.md"},{"text":"第93章","link":"/bible/诗篇/93.md"},{"text":"第94章","link":"/bible/诗篇/94.md"},{"text":"第95章","link":"/bible/诗篇/95.md"},{"text":"第96章","link":"/bible/诗篇/96.md"},{"text":"第97章","link":"/bible/诗篇/97.md"},{"text":"第98章","link":"/bible/诗篇/98.md"},{"text":"第99章","link":"/bible/诗篇/99.md"}]},{"text":"路加福音","collapsible":true,"items":[{"text":"第1章","link":"/bible/路加福音/1.md"},{"text":"第10章","link":"/bible/路加福音/10.md"},{"text":"第11章","link":"/bible/路加福音/11.md"},{"text":"第12章","link":"/bible/路加福音/12.md"},{"text":"第13章","link":"/bible/路加福音/13.md"},{"text":"第14章","link":"/bible/路加福音/14.md"},{"text":"第15章","link":"/bible/路加福音/15.md"},{"text":"第16章","link":"/bible/路加福音/16.md"},{"text":"第17章","link":"/bible/路加福音/17.md"},{"text":"第18章","link":"/bible/路加福音/18.md"},{"text":"第19章","link":"/bible/路加福音/19.md"},{"text":"第2章","link":"/bible/路加福音/2.md"},{"text":"第20章","link":"/bible/路加福音/20.md"},{"text":"第21章","link":"/bible/路加福音/21.md"},{"text":"第22章","link":"/bible/路加福音/22.md"},{"text":"第23章","link":"/bible/路加福音/23.md"},{"text":"第24章","link":"/bible/路加福音/24.md"},{"text":"第3章","link":"/bible/路加福音/3.md"},{"text":"第4章","link":"/bible/路加福音/4.md"},{"text":"第5章","link":"/bible/路加福音/5.md"},{"text":"第6章","link":"/bible/路加福音/6.md"},{"text":"第7章","link":"/bible/路加福音/7.md"},{"text":"第8章","link":"/bible/路加福音/8.md"},{"text":"第9章","link":"/bible/路加福音/9.md"}]},{"text":"路得记","collapsible":true,"items":[{"text":"第1章","link":"/bible/路得记/1.md"},{"text":"第2章","link":"/bible/路得记/2.md"},{"text":"第3章","link":"/bible/路得记/3.md"},{"text":"第4章","link":"/bible/路得记/4.md"}]},{"text":"那鸿书","collapsible":true,"items":[{"text":"第1章","link":"/bible/那鸿书/1.md"},{"text":"第2章","link":"/bible/那鸿书/2.md"},{"text":"第3章","link":"/bible/那鸿书/3.md"}]},{"text":"阿摩司书","collapsible":true,"items":[{"text":"第1章","link":"/bible/阿摩司书/1.md"},{"text":"第2章","link":"/bible/阿摩司书/2.md"},{"text":"第3章","link":"/bible/阿摩司书/3.md"},{"text":"第4章","link":"/bible/阿摩司书/4.md"},{"text":"第5章","link":"/bible/阿摩司书/5.md"},{"text":"第6章","link":"/bible/阿摩司书/6.md"},{"text":"第7章","link":"/bible/阿摩司书/7.md"},{"text":"第8章","link":"/bible/阿摩司书/8.md"},{"text":"第9章","link":"/bible/阿摩司书/9.md"}]},{"text":"雅各书","collapsible":true,"items":[{"text":"第1章","link":"/bible/雅各书/1.md"},{"text":"第2章","link":"/bible/雅各书/2.md"},{"text":"第3章","link":"/bible/雅各书/3.md"},{"text":"第4章","link":"/bible/雅各书/4.md"},{"text":"第5章","link":"/bible/雅各书/5.md"}]},{"text":"雅歌","collapsible":true,"items":[{"text":"第1章","link":"/bible/雅歌/1.md"},{"text":"第2章","link":"/bible/雅歌/2.md"},{"text":"第3章","link":"/bible/雅歌/3.md"},{"text":"第4章","link":"/bible/雅歌/4.md"},{"text":"第5章","link":"/bible/雅歌/5.md"},{"text":"第6章","link":"/bible/雅歌/6.md"},{"text":"第7章","link":"/bible/雅歌/7.md"},{"text":"第8章","link":"/bible/雅歌/8.md"}]},{"text":"马可福音","collapsible":true,"items":[{"text":"第1章","link":"/bible/马可福音/1.md"},{"text":"第10章","link":"/bible/马可福音/10.md"},{"text":"第11章","link":"/bible/马可福音/11.md"},{"text":"第12章","link":"/bible/马可福音/12.md"},{"text":"第13章","link":"/bible/马可福音/13.md"},{"text":"第14章","link":"/bible/马可福音/14.md"},{"text":"第15章","link":"/bible/马可福音/15.md"},{"text":"第16章","link":"/bible/马可福音/16.md"},{"text":"第2章","link":"/bible/马可福音/2.md"},{"text":"第3章","link":"/bible/马可福音/3.md"},{"text":"第4章","link":"/bible/马可福音/4.md"},{"text":"第5章","link":"/bible/马可福音/5.md"},{"text":"第6章","link":"/bible/马可福音/6.md"},{"text":"第7章","link":"/bible/马可福音/7.md"},{"text":"第8章","link":"/bible/马可福音/8.md"},{"text":"第9章","link":"/bible/马可福音/9.md"}]}]}],"outline":2,"outlineTitle":"大纲","socialLinks":[{"icon":"github","link":"https://github.com/Lisk809/Lisk"}],"footer":{"message":"<a href=\\"https://github.com/Lisk809/bible\\">the Project</a>使用 <a href=\\"https://github.com/KiviBotLab/docs/blob/main/LICENSE\\">MIT</a> 协议开放源代码\\nPower by <a href=\\"https://vitepress.docschina.org/\\">VitePress</a><br>Made with Love❤️and confidence.","copyright":"Copyright © 2022-PRESENT <a href=\\"https://github.com/Lisk809\\">Lisk</a>"},"lastUpdatedText":"上次更新","docFooter":{"prev":"上一页","next":"下一页"},"editLink":{"pattern":"https://github.com/Lisk809/bible/edit/main/src/docs/:path","text":"在 GitHub 上编辑"}},"locales":{},"scrollOffset":90,"cleanUrls":false}'));
const EXTERNAL_URL_RE = /^[a-z]+:/i;
const PATHNAME_PROTOCOL_RE = /^pathname:\/\//;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;
const inBrowser = typeof document !== "undefined";
const notFoundPageData = {
  relativePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0,
  isNotFound: true
};
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return (inBrowser ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  var _a, _b, _c, _d, _e, _f, _g;
  const localeIndex = Object.keys(siteData2.locales).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, true)) || "root";
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a = siteData2.locales[localeIndex]) == null ? void 0 : _a.lang) ?? siteData2.lang,
    dir: ((_b = siteData2.locales[localeIndex]) == null ? void 0 : _b.dir) ?? siteData2.dir,
    title: ((_c = siteData2.locales[localeIndex]) == null ? void 0 : _c.title) ?? siteData2.title,
    titleTemplate: ((_d = siteData2.locales[localeIndex]) == null ? void 0 : _d.titleTemplate) ?? siteData2.titleTemplate,
    description: ((_e = siteData2.locales[localeIndex]) == null ? void 0 : _e.description) ?? siteData2.description,
    head: mergeHead(siteData2.head, ((_f = siteData2.locales[localeIndex]) == null ? void 0 : _f.head) ?? []),
    themeConfig: {
      ...siteData2.themeConfig,
      ...(_g = siteData2.locales[localeIndex]) == null ? void 0 : _g.themeConfig
    }
  });
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title;
  const template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(siteData);
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    params: computed(() => route.data.params),
    lang: computed(() => site.value.lang),
    dir: computed(() => site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => {
      return createTitle(site.value, route.data);
    }),
    description: computed(() => {
      return route.data.description || site.value.description;
    }),
    isDark: ref(false)
  };
}
function useData$1() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base2, path) {
  return `${base2}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || path.startsWith(".") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser) {
      const base2 = "/";
      pagePath = sanitizeFileName(pagePath.slice(base2.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      pagePath = `${base2}assets/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
let contentUpdatedCallbacks = [];
function onContentUpdated(fn) {
  contentUpdatedCallbacks.push(fn);
  onUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter((f) => f !== fn);
  });
}
const RouterSymbol = Symbol();
const fakeHost = `http://a.com`;
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser ? location.href : "/") {
    var _a, _b;
    await ((_a = router.onBeforeRouteChange) == null ? void 0 : _a.call(router, href));
    const url = new URL(href, fakeHost);
    if (!siteDataRef.value.cleanUrls) {
      if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html")) {
        url.pathname += ".html";
        href = url.pathname + url.search + url.hash;
      }
    }
    if (inBrowser && href !== location.href) {
      history.replaceState({ scrollPosition: window.scrollY }, document.title);
      history.pushState(null, "", href);
    }
    await loadPage(href);
    await ((_b = router.onAfterRouteChanged) == null ? void 0 : _b.call(router, href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        if (inBrowser) {
          nextTick(() => {
            let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/")) {
              actualPathname += ".html";
            }
            if (actualPathname !== targetLoc.pathname) {
              targetLoc.pathname = actualPathname;
              href = actualPathname + targetLoc.search + targetLoc.hash;
              history.replaceState(null, "", href);
            }
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.querySelector(decodeURIComponent(targetLoc.hash));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        route.data = notFoundPageData;
      }
    }
  }
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (button)
        return;
      const link2 = e.target.closest("a");
      if (link2 && !link2.closest(".vp-raw") && (link2 instanceof SVGElement || !link2.download)) {
        const { target } = link2;
        const { href, origin, pathname, hash, search } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const currentUrl = window.location;
        const extMatch = pathname.match(/\.\w+$/);
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && target !== `_blank` && origin === currentUrl.origin && // don't intercept if non-html extension is present
        !(extMatch && extMatch[0] !== ".html")) {
          e.preventDefault();
          if (pathname === currentUrl.pathname && search === currentUrl.search) {
            if (hash && hash !== currentUrl.hash) {
              history.pushState(null, "", hash);
              window.dispatchEvent(new Event("hashchange"));
              scrollTo(link2, hash, link2.classList.contains("header-anchor"));
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", (e) => {
      loadPage(location.href, e.state && e.state.scrollPosition || 0);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.querySelector(decodeURIComponent(hash));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    const scrollOffset = siteDataRef.value.scrollOffset;
    let offset = 0;
    if (typeof scrollOffset === "number") {
      offset = scrollOffset;
    } else if (typeof scrollOffset === "string") {
      offset = tryOffsetSelector(scrollOffset);
    } else if (Array.isArray(scrollOffset)) {
      for (const selector of scrollOffset) {
        const res = tryOffsetSelector(selector);
        if (res) {
          offset = res;
          break;
        }
      }
    }
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - offset + targetPadding;
    if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight) {
      window.scrollTo(0, targetTop);
    } else {
      window.scrollTo({
        left: 0,
        top: targetTop,
        behavior: "smooth"
      });
    }
  }
}
function tryOffsetSelector(selector) {
  const el = document.querySelector(selector);
  if (!el)
    return 0;
  const bot = el.getBoundingClientRect().bottom;
  if (bot < 0)
    return 0;
  return bot + 24;
}
const runCbs = () => contentUpdatedCallbacks.forEach((fn) => fn());
const Content = defineComponent({
  name: "VitePressContent",
  props: {
    as: { type: [Object, String], default: "div" }
  },
  setup(props) {
    const route = useRoute();
    return () => h(props.as, { style: { position: "relative" } }, [
      route.component ? h(route.component, {
        onVnodeMounted: runCbs,
        onVnodeUpdated: runCbs
      }) : "404 Page Not Found"
    ]);
  }
});
const useData = useData$1;
function throttleAndDebounce(fn, delay) {
  let timeoutId;
  let called = false;
  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (!called) {
      fn();
      called = true;
      setTimeout(() => {
        called = false;
      }, delay);
    } else {
      timeoutId = setTimeout(fn, delay);
    }
  };
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalizeLink$1(url) {
  if (isExternal(url)) {
    return url.replace(PATHNAME_PROTOCOL_RE, "");
  }
  const { site } = useData();
  const { pathname, search, hash } = new URL(url, "http://example.com");
  const normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? "" : ".html")}${search}${hash}`);
  return withBase(normalizedPath);
}
function getSidebar(sidebar, path) {
  if (Array.isArray(sidebar)) {
    return sidebar;
  }
  if (sidebar == null) {
    return [];
  }
  path = ensureStartingSlash(path);
  const dir = Object.keys(sidebar).sort((a, b) => {
    return b.split("/").length - a.split("/").length;
  }).find((dir2) => {
    return path.startsWith(ensureStartingSlash(dir2));
  });
  return dir ? sidebar[dir] : [];
}
function getSidebarGroups(sidebar) {
  const groups = [];
  let lastGroupIndex = 0;
  for (const index2 in sidebar) {
    const item = sidebar[index2];
    if (item.items) {
      lastGroupIndex = groups.push(item);
      continue;
    }
    if (!groups[lastGroupIndex]) {
      groups.push({ items: [] });
    }
    groups[lastGroupIndex].items.push(item);
  }
  return groups;
}
function getFlatSideBarLinks(sidebar) {
  const links = [];
  function recursivelyExtractLinks(items) {
    for (const item of items) {
      if (item.text && item.link) {
        links.push({ text: item.text, link: item.link });
      }
      if (item.items) {
        recursivelyExtractLinks(item.items);
      }
    }
  }
  recursivelyExtractLinks(sidebar);
  return links;
}
function hasActiveLink(path, items) {
  if (Array.isArray(items)) {
    return items.some((item) => hasActiveLink(path, item));
  }
  return isActive(path, items.link) ? true : items.items ? hasActiveLink(path, items.items) : false;
}
function useSidebar() {
  const route = useRoute();
  const { theme: theme2, frontmatter } = useData();
  const is960 = useMediaQuery("(min-width: 960px)");
  const isOpen = ref(false);
  const sidebar = computed(() => {
    const sidebarConfig = theme2.value.sidebar;
    const relativePath = route.data.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== "home";
  });
  const leftAside = computed(() => {
    if (hasAside)
      return frontmatter.value.aside == null ? theme2.value.aside === "left" : frontmatter.value.aside === "left";
    return false;
  });
  const hasAside = computed(() => {
    if (frontmatter.value.layout === "home")
      return false;
    if (frontmatter.value.aside != null)
      return !!frontmatter.value.aside;
    if (theme2.value.aside === false)
      return false;
    return true;
  });
  const isSidebarEnabled = computed(() => hasSidebar.value && is960.value);
  const sidebarGroups = computed(() => {
    return hasSidebar.value ? getSidebarGroups(sidebar.value) : [];
  });
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    sidebarGroups,
    hasSidebar,
    hasAside,
    leftAside,
    isSidebarEnabled,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  });
  onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }
}
function useSidebarControl(item) {
  const { page } = useData();
  const collapsed = ref(false);
  const collapsible = computed(() => {
    return item.value.collapsed != null;
  });
  const isLink = computed(() => {
    return !!item.value.link;
  });
  const isActiveLink = computed(() => {
    return isActive(page.value.relativePath, item.value.link);
  });
  const hasActiveLink$1 = computed(() => {
    if (isActiveLink.value) {
      return true;
    }
    return item.value.items ? hasActiveLink(page.value.relativePath, item.value.items) : false;
  });
  const hasChildren = computed(() => {
    return !!(item.value.items && item.value.items.length);
  });
  watchEffect(() => {
    collapsed.value = !!(collapsible.value && item.value.collapsed);
  });
  watchEffect(() => {
    (isActiveLink.value || hasActiveLink$1.value) && (collapsed.value = false);
  });
  function toggle() {
    if (collapsible.value) {
      collapsed.value = !collapsed.value;
    }
  }
  return {
    collapsed,
    collapsible,
    isLink,
    isActiveLink,
    hasActiveLink: hasActiveLink$1,
    hasChildren,
    toggle
  };
}
const _sfc_main$1e = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span tabindex="-1" data-v-c8616af1></span><a href="#VPContent" class="VPSkipLink visually-hidden" data-v-c8616af1> Skip to content </a><!--]-->`);
    };
  }
});
const VPSkipLink_vue_vue_type_style_index_0_scoped_c8616af1_lang = "";
const _sfc_setup$1e = _sfc_main$1e.setup;
_sfc_main$1e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSkipLink.vue");
  return _sfc_setup$1e ? _sfc_setup$1e(props, ctx) : void 0;
};
const VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["__scopeId", "data-v-c8616af1"]]);
const _sfc_main$1d = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPBackdrop" }, _attrs))} data-v-c79a1216></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPBackdrop_vue_vue_type_style_index_0_scoped_c79a1216_lang = "";
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPBackdrop.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["__scopeId", "data-v-c79a1216"]]);
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  const route = useRoute();
  watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
function useLangs({ removeCurrent = true, correspondingLink = false } = {}) {
  const { site, localeIndex, page, theme: theme2 } = useData();
  const currentLang = computed(() => {
    var _a, _b;
    return {
      label: (_a = site.value.locales[localeIndex.value]) == null ? void 0 : _a.label,
      link: ((_b = site.value.locales[localeIndex.value]) == null ? void 0 : _b.link) || (localeIndex.value === "root" ? "/" : `/${localeIndex.value}/`)
    };
  });
  const localeLinks = computed(() => Object.entries(site.value.locales).flatMap(([key, value]) => removeCurrent && currentLang.value.label === value.label ? [] : {
    text: value.label,
    link: normalizeLink(value.link || (key === "root" ? "/" : `/${key}/`), theme2.value.i18nRouting !== false && correspondingLink, page.value.relativePath.slice(currentLang.value.link.length - 1), !site.value.cleanUrls)
  }));
  return { localeLinks, currentLang };
}
function normalizeLink(link2, addPath, path, addExt) {
  return addPath ? link2.replace(/\/$/, "") + ensureStartingSlash(path.replace(/(^|\/)?index.md$/, "$1").replace(/\.md$/, addExt ? ".html" : "")) : link2;
}
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$1c = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "VPImage",
  __ssrInlineRender: true,
  props: {
    image: null,
    alt: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPImage = resolveComponent("VPImage", true);
      if (__props.image) {
        _push(`<!--[-->`);
        if (typeof __props.image === "string" || "src" in __props.image) {
          _push(`<img${ssrRenderAttrs(mergeProps({ class: "VPImage" }, typeof __props.image === "string" ? _ctx.$attrs : { ...__props.image, ..._ctx.$attrs }, {
            src: unref(withBase)(typeof __props.image === "string" ? __props.image : __props.image.src),
            alt: __props.alt ?? (typeof __props.image === "string" ? "" : __props.image.alt || "")
          }))} data-v-6db2186b>`);
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "dark",
            image: __props.image.dark,
            alt: __props.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "light",
            image: __props.image.light,
            alt: __props.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPImage_vue_vue_type_style_index_0_scoped_6db2186b_lang = "";
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPImage.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["__scopeId", "data-v-6db2186b"]]);
const _sfc_main$1b = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    const { currentLang } = useLangs();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBarTitle", { "has-sidebar": unref(hasSidebar) }]
      }, _attrs))} data-v-f4ef19a3><a class="title"${ssrRenderAttr("href", unref(normalizeLink$1)(unref(currentLang).link))} data-v-f4ef19a3>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push, _parent);
      if (unref(theme2).logo) {
        _push(ssrRenderComponent(VPImage, {
          class: "logo",
          image: unref(theme2).logo
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(theme2).siteTitle) {
        _push(`<!--[-->${ssrInterpolate(unref(theme2).siteTitle)}<!--]-->`);
      } else if (unref(theme2).siteTitle === void 0) {
        _push(`<!--[-->${ssrInterpolate(unref(site).title)}<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push, _parent);
      _push(`</a></div>`);
    };
  }
});
const VPNavBarTitle_vue_vue_type_style_index_0_scoped_f4ef19a3_lang = "";
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarTitle.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["__scopeId", "data-v-f4ef19a3"]]);
const style = "";
const _sfc_main$1a = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const VPAlgoliaSearchBox = () => null;
    const { theme: theme2, localeIndex } = useData();
    const loaded = ref(false);
    const metaKey = ref(`'Meta'`);
    const buttonText = computed(
      () => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return ((_e = (_d = (_c = (_b = (_a = theme2.value.algolia) == null ? void 0 : _a.locales) == null ? void 0 : _b[localeIndex.value]) == null ? void 0 : _c.translations) == null ? void 0 : _d.button) == null ? void 0 : _e.buttonText) || ((_h = (_g = (_f = theme2.value.algolia) == null ? void 0 : _f.translations) == null ? void 0 : _g.button) == null ? void 0 : _h.buttonText) || "Search";
      }
    );
    const preconnect = () => {
      const id = "VPAlgoliaPreconnect";
      const rIC = window.requestIdleCallback || setTimeout;
      rIC(() => {
        const preconnect2 = document.createElement("link");
        preconnect2.id = id;
        preconnect2.rel = "preconnect";
        preconnect2.href = `https://${theme2.value.algolia.appId}-dsn.algolia.net`;
        preconnect2.crossOrigin = "";
        document.head.appendChild(preconnect2);
      });
    };
    onMounted(() => {
      if (!theme2.value.algolia) {
        return;
      }
      preconnect();
      metaKey.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? `'⌘'` : `'Ctrl'`;
      const handleSearchHotKey = (e) => {
        if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          load();
          remove();
        }
      };
      const remove = () => {
        window.removeEventListener("keydown", handleSearchHotKey);
      };
      window.addEventListener("keydown", handleSearchHotKey);
      onUnmounted(remove);
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
        setTimeout(poll, 16);
      }
    }
    function poll() {
      const e = new Event("keydown");
      e.key = "k";
      e.metaKey = true;
      window.dispatchEvent(e);
      setTimeout(() => {
        if (!document.querySelector(".DocSearch-Modal")) {
          poll();
        }
      }, 16);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--673bc564": metaKey.value
      } };
      if (unref(theme2).algolia) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarSearch" }, _attrs, _cssVars))}>`);
        if (loaded.value) {
          _push(ssrRenderComponent(unref(VPAlgoliaSearchBox), {
            algolia: unref(theme2).algolia
          }, null, _parent));
        } else {
          _push(`<div id="docsearch"><button type="button" class="DocSearch DocSearch-Button" aria-label="Search"><span class="DocSearch-Button-Container"><svg class="DocSearch-Search-Icon" width="20" height="20" viewBox="0 0 20 20" aria-label="search icon"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">${ssrInterpolate(unref(buttonText))}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarSearch_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearch.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
const _sfc_main$19 = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px"
  }, _attrs))}><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path></svg>`);
}
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconExternalLink.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const VPIconExternalLink = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$18 = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  __ssrInlineRender: true,
  props: {
    tag: null,
    href: null,
    noIcon: { type: Boolean },
    target: null,
    rel: null
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => props.tag ?? props.href ? "a" : "span");
    const isExternal2 = computed(() => props.href && EXTERNAL_URL_RE.test(props.href));
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(tag)), mergeProps({
        class: ["VPLink", { link: __props.href }],
        href: __props.href ? unref(normalizeLink$1)(__props.href) : void 0,
        target: __props.target || (unref(isExternal2) ? "_blank" : void 0),
        rel: __props.rel || (unref(isExternal2) ? "noreferrer" : void 0)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (unref(isExternal2) && !__props.noIcon) {
              _push2(ssrRenderComponent(VPIconExternalLink, { class: "icon" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true),
              unref(isExternal2) && !__props.noIcon ? (openBlock(), createBlock(VPIconExternalLink, {
                key: 0,
                class: "icon"
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const VPLink_vue_vue_type_style_index_0_scoped_8f4dc553_lang = "";
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPLink.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const VPLink = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["__scopeId", "data-v-8f4dc553"]]);
const _sfc_main$17 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  __ssrInlineRender: true,
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPLink, mergeProps({
        class: {
          VPNavBarMenuLink: true,
          active: unref(isActive)(
            unref(page).relativePath,
            __props.item.activeMatch || __props.item.link,
            !!__props.item.activeMatch
          )
        },
        href: __props.item.link,
        target: __props.item.target,
        rel: __props.item.rel,
        tabindex: "0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavBarMenuLink_vue_vue_type_style_index_0_scoped_37adc828_lang = "";
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["__scopeId", "data-v-37adc828"]]);
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFlyout(options) {
  const focus = ref(false);
  if (inBrowser) {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a, _b, _c;
      if (el === options.el.value || ((_a = options.el.value) == null ? void 0 : _a.contains(el))) {
        focus.value = true;
        (_b = options.onFocus) == null ? void 0 : _b.call(options);
      } else {
        focus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main$16 = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path></svg>`);
}
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconChevronDown.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const VPIconChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$15 = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle><circle cx="5" cy="12" r="2"></circle></svg>`);
}
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMoreHorizontal.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const VPIconMoreHorizontal = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$14 = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  __ssrInlineRender: true,
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuLink" }, _attrs))} data-v-d2c93bab>`);
      _push(ssrRenderComponent(VPLink, {
        class: { active: unref(isActive)(unref(page).relativePath, __props.item.activeMatch || __props.item.link, !!__props.item.activeMatch) },
        href: __props.item.link,
        target: __props.item.target,
        rel: __props.item.rel
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const VPMenuLink_vue_vue_type_style_index_0_scoped_d2c93bab_lang = "";
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPMenuLink.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["__scopeId", "data-v-d2c93bab"]]);
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuGroup" }, _attrs))} data-v-69e747b5>`);
      if (__props.text) {
        _push(`<p class="title" data-v-69e747b5>${ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPMenuGroup_vue_vue_type_style_index_0_scoped_69e747b5_lang = "";
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPMenuGroup.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-69e747b5"]]);
const _sfc_main$12 = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  __ssrInlineRender: true,
  props: {
    items: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenu" }, _attrs))} data-v-e7ea1737>`);
      if (__props.items) {
        _push(`<div class="items" data-v-e7ea1737><!--[-->`);
        ssrRenderList(__props.items, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(VPMenuGroup, {
              text: item.text,
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPMenu_vue_vue_type_style_index_0_scoped_e7ea1737_lang = "";
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPMenu.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["__scopeId", "data-v-e7ea1737"]]);
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  __name: "VPFlyout",
  __ssrInlineRender: true,
  props: {
    icon: null,
    button: null,
    label: null,
    items: null
  },
  setup(__props) {
    const open = ref(false);
    const el = ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPFlyout",
        ref_key: "el",
        ref: el
      }, _attrs))} data-v-764effdf><button type="button" class="button" aria-haspopup="true"${ssrRenderAttr("aria-expanded", open.value)}${ssrRenderAttr("aria-label", __props.label)} data-v-764effdf>`);
      if (__props.button || __props.icon) {
        _push(`<span class="text" data-v-764effdf>`);
        if (__props.icon) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.icon), { class: "option-icon" }, null), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(__props.button)} `);
        _push(ssrRenderComponent(VPIconChevronDown, { class: "text-icon" }, null, _parent));
        _push(`</span>`);
      } else {
        _push(ssrRenderComponent(VPIconMoreHorizontal, { class: "icon" }, null, _parent));
      }
      _push(`</button><div class="menu" data-v-764effdf>`);
      _push(ssrRenderComponent(VPMenu, { items: __props.items }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const VPFlyout_vue_vue_type_style_index_0_scoped_764effdf_lang = "";
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPFlyout.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__scopeId", "data-v-764effdf"]]);
const _sfc_main$10 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  __ssrInlineRender: true,
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPFlyout, mergeProps({
        class: {
          VPNavBarMenuGroup: true,
          active: unref(isActive)(
            unref(page).relativePath,
            __props.item.activeMatch,
            !!__props.item.activeMatch
          )
        },
        button: __props.item.text,
        items: __props.item.items
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          "aria-labelledby": "main-nav-aria-label",
          class: "VPNavBarMenu"
        }, _attrs))} data-v-7f418b0f><span id="main-nav-aria-label" class="visually-hidden" data-v-7f418b0f>Main Navigation</span><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavBarMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(_sfc_main$10, { item }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarMenu_vue_vue_type_style_index_0_scoped_7f418b0f_lang = "";
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenu.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["__scopeId", "data-v-7f418b0f"]]);
const _sfc_main$_ = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M0 0h24v24H0z" fill="none"></path><path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " class="css-c4d79v"></path></svg>`);
}
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconLanguages.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const VPIconLanguages = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarTranslations",
          icon: VPIconLanguages,
          label: unref(theme2).langMenuLabel || "Change language"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="items" data-v-74abcbb9${_scopeId}><p class="title" data-v-74abcbb9${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
              ssrRenderList(unref(localeLinks), (locale) => {
                _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "items" }, [
                  createVNode("p", { class: "title" }, toDisplayString(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarTranslations_vue_vue_type_style_index_0_scoped_74abcbb9_lang = "";
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarTranslations.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["__scopeId", "data-v-74abcbb9"]]);
const VPSwitch_vue_vue_type_style_index_0_scoped_f3c41672_lang = "";
const _sfc_main$Y = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "VPSwitch",
    type: "button",
    role: "switch"
  }, _attrs))} data-v-f3c41672><span class="check" data-v-f3c41672>`);
  if (_ctx.$slots.default) {
    _push(`<span class="icon" data-v-f3c41672>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span></button>`);
}
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSwitch.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-f3c41672"]]);
const _sfc_main$X = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>`);
}
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconSun.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const VPIconSun = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$W = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path></svg>`);
}
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMoon.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const VPIconMoon = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, isDark } = useData();
    const checked = ref(false);
    const toggle = typeof localStorage !== "undefined" ? useAppearance() : () => {
    };
    onMounted(() => {
      checked.value = document.documentElement.classList.contains("dark");
    });
    function useAppearance() {
      const query = window.matchMedia("(prefers-color-scheme: dark)");
      const classList = document.documentElement.classList;
      let userPreference = localStorage.getItem(APPEARANCE_KEY);
      let isDark2 = site.value.appearance === "dark" && userPreference == null || (userPreference === "auto" || userPreference == null ? query.matches : userPreference === "dark");
      query.onchange = (e) => {
        if (userPreference === "auto") {
          setClass(isDark2 = e.matches);
        }
      };
      function toggle2() {
        setClass(isDark2 = !isDark2);
        userPreference = isDark2 ? query.matches ? "auto" : "dark" : query.matches ? "light" : "auto";
        localStorage.setItem(APPEARANCE_KEY, userPreference);
      }
      function setClass(dark) {
        const css = document.createElement("style");
        css.type = "text/css";
        css.appendChild(
          document.createTextNode(
            `:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`
          )
        );
        document.head.appendChild(css);
        checked.value = dark;
        classList[dark ? "add" : "remove"]("dark");
        window.getComputedStyle(css).opacity;
        document.head.removeChild(css);
      }
      return toggle2;
    }
    watch(checked, (newIsDark) => {
      isDark.value = newIsDark;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ title: "toggle dark mode" }, _attrs))} data-v-a9c8afb8>`);
      _push(ssrRenderComponent(VPSwitch, {
        class: "VPSwitchAppearance",
        "aria-checked": checked.value,
        onClick: unref(toggle)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VPIconSun, { class: "sun" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VPIconMoon, { class: "moon" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VPIconSun, { class: "sun" }),
              createVNode(VPIconMoon, { class: "moon" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</label>`);
    };
  }
});
const VPSwitchAppearance_vue_vue_type_style_index_0_scoped_a9c8afb8_lang = "";
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["__scopeId", "data-v-a9c8afb8"]]);
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarAppearance" }, _attrs))} data-v-f6a63727>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarAppearance_vue_vue_type_style_index_0_scoped_f6a63727_lang = "";
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarAppearance.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__scopeId", "data-v-f6a63727"]]);
const icons = {
  discord: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
  facebook: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  github: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  instagram: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
  linkedin: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  mastodon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
  slack: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
  twitter: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
  youtube: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
};
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  __ssrInlineRender: true,
  props: {
    icon: null,
    link: null
  },
  setup(__props) {
    const props = __props;
    const svg = computed(() => {
      if (typeof props.icon === "object")
        return props.icon.svg;
      return icons[props.icon];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "VPSocialLink",
        href: __props.link,
        "aria-label": typeof __props.icon === "string" ? __props.icon : "",
        target: "_blank",
        rel: "noopener"
      }, _attrs))} data-v-c530cc0a>${unref(svg)}</a>`);
    };
  }
});
const VPSocialLink_vue_vue_type_style_index_0_scoped_c530cc0a_lang = "";
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSocialLink.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-c530cc0a"]]);
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  __ssrInlineRender: true,
  props: {
    links: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPSocialLinks" }, _attrs))} data-v-f6988cfb><!--[-->`);
      ssrRenderList(__props.links, ({ link: link2, icon }) => {
        _push(ssrRenderComponent(VPSocialLink, {
          key: link2,
          icon,
          link: link2
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPSocialLinks_vue_vue_type_style_index_0_scoped_f6988cfb_lang = "";
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSocialLinks.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-f6988cfb"]]);
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavBarSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarSocialLinks_vue_vue_type_style_index_0_scoped_0394ad82_lang = "";
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarSocialLinks.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-0394ad82"]]);
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const hasExtraContent = computed(
      () => localeLinks.value.length && currentLang.value.label || site.value.appearance || theme2.value.socialLinks
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasExtraContent)) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarExtra",
          label: "extra navigation"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(localeLinks).length && unref(currentLang).label) {
                _push2(`<div class="group translations" data-v-40855f84${_scopeId}><p class="trans-title" data-v-40855f84${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
                ssrRenderList(unref(localeLinks), (locale) => {
                  _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(site).appearance) {
                _push2(`<div class="group" data-v-40855f84${_scopeId}><div class="item appearance" data-v-40855f84${_scopeId}><p class="label" data-v-40855f84${_scopeId}>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p><div class="appearance-action" data-v-40855f84${_scopeId}>`);
                _push2(ssrRenderComponent(VPSwitchAppearance, null, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(theme2).socialLinks) {
                _push2(`<div class="group" data-v-40855f84${_scopeId}><div class="item social-links" data-v-40855f84${_scopeId}>`);
                _push2(ssrRenderComponent(VPSocialLinks, {
                  class: "social-links-list",
                  links: unref(theme2).socialLinks
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "group translations"
                }, [
                  createVNode("p", { class: "trans-title" }, toDisplayString(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])) : createCommentVNode("", true),
                unref(site).appearance ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "group"
                }, [
                  createVNode("div", { class: "item appearance" }, [
                    createVNode("p", { class: "label" }, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
                    createVNode("div", { class: "appearance-action" }, [
                      createVNode(VPSwitchAppearance)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                unref(theme2).socialLinks ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "group"
                }, [
                  createVNode("div", { class: "item social-links" }, [
                    createVNode(VPSocialLinks, {
                      class: "social-links-list",
                      links: unref(theme2).socialLinks
                    }, null, 8, ["links"])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarExtra_vue_vue_type_style_index_0_scoped_40855f84_lang = "";
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarExtra.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-40855f84"]]);
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: ["VPNavBarHamburger", { active: __props.active }],
        "aria-label": "mobile navigation",
        "aria-expanded": __props.active,
        "aria-controls": "VPNavScreen"
      }, _attrs))} data-v-e5dd9c1c><span class="container" data-v-e5dd9c1c><span class="top" data-v-e5dd9c1c></span><span class="middle" data-v-e5dd9c1c></span><span class="bottom" data-v-e5dd9c1c></span></span></button>`);
    };
  }
});
const VPNavBarHamburger_vue_vue_type_style_index_0_scoped_e5dd9c1c_lang = "";
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarHamburger.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-e5dd9c1c"]]);
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  __ssrInlineRender: true,
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const { y } = useWindowScroll();
    const { hasSidebar } = useSidebar();
    const classes = computed(() => ({
      "has-sidebar": hasSidebar.value,
      fill: y.value > 0
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBar", unref(classes)]
      }, _attrs))} data-v-1d30fa41><div class="container" data-v-1d30fa41><div class="title" data-v-1d30fa41>`);
      _push(ssrRenderComponent(VPNavBarTitle, null, {
        "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div><div class="content" data-v-1d30fa41><div class="curtain" data-v-1d30fa41></div><div class="content-body" data-v-1d30fa41>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$1a, { class: "search" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarMenu, { class: "menu" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarTranslations, { class: "translations" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarAppearance, { class: "appearance" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarSocialLinks, { class: "social-links" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarExtra, { class: "extra" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPNavBarHamburger, {
        class: "hamburger",
        active: __props.isScreenOpen,
        onClick: ($event) => _ctx.$emit("toggle-screen")
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const VPNavBar_vue_vue_type_style_index_0_scoped_1d30fa41_lang = "";
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBar.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__scopeId", "data-v-1d30fa41"]]);
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  __ssrInlineRender: true,
  props: {
    text: null,
    link: null
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPLink, mergeProps({
        class: "VPNavScreenMenuLink",
        href: __props.link,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavScreenMenuLink_vue_vue_type_style_index_0_scoped_c328f34f_lang = "";
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuLink.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-c328f34f"]]);
const _sfc_main$M = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"></path></svg>`);
}
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconPlus.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const VPIconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  __ssrInlineRender: true,
  props: {
    text: null,
    link: null
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPLink, mergeProps({
        class: "VPNavScreenMenuGroupLink",
        href: __props.link,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavScreenMenuGroupLink_vue_vue_type_style_index_0_scoped_3d20956d_lang = "";
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupLink.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-3d20956d"]]);
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  __ssrInlineRender: true,
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenuGroupSection" }, _attrs))} data-v-7478538b>`);
      if (__props.text) {
        _push(`<p class="title" data-v-7478538b>${ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(ssrRenderComponent(VPNavScreenMenuGroupLink, {
          key: item.text,
          text: item.text,
          link: item.link
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPNavScreenMenuGroupSection_vue_vue_type_style_index_0_scoped_7478538b_lang = "";
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupSection.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-7478538b"]]);
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavScreenMenuGroup", { open: isOpen.value }]
      }, _attrs))} data-v-a9a19324><button class="button"${ssrRenderAttr("aria-controls", unref(groupId))}${ssrRenderAttr("aria-expanded", isOpen.value)} data-v-a9a19324><span class="button-text" data-v-a9a19324>${ssrInterpolate(__props.text)}</span>`);
      _push(ssrRenderComponent(VPIconPlus, { class: "button-icon" }, null, _parent));
      _push(`</button><div${ssrRenderAttr("id", unref(groupId))} class="items" data-v-a9a19324><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(`<div class="item" data-v-a9a19324>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupLink, {
            text: item.text,
            link: item.link
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="group" data-v-a9a19324>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupSection, {
            text: item.text,
            items: item.items
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const VPNavScreenMenuGroup_vue_vue_type_style_index_0_scoped_a9a19324_lang = "";
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-a9a19324"]]);
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenu" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavScreenMenuLink, {
              text: item.text,
              link: item.link
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(VPNavScreenMenuGroup, {
              text: item.text || "",
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenu.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenAppearance" }, _attrs))} data-v-add8f686><p class="text" data-v-add8f686>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreenAppearance_vue_vue_type_style_index_0_scoped_add8f686_lang = "";
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenAppearance.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-add8f686"]]);
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["VPNavScreenTranslations", { open: isOpen.value }]
        }, _attrs))} data-v-d72aa483><button class="title" data-v-d72aa483>`);
        _push(ssrRenderComponent(VPIconLanguages, { class: "icon lang" }, null, _parent));
        _push(` ${ssrInterpolate(unref(currentLang).label)} `);
        _push(ssrRenderComponent(VPIconChevronDown, { class: "icon chevron" }, null, _parent));
        _push(`</button><ul class="list" data-v-d72aa483><!--[-->`);
        ssrRenderList(unref(localeLinks), (locale) => {
          _push(`<li class="item" data-v-d72aa483>`);
          _push(ssrRenderComponent(VPLink, {
            class: "link",
            href: locale.link
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(locale.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(locale.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreenTranslations_vue_vue_type_style_index_0_scoped_d72aa483_lang = "";
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenTranslations.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const VPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-d72aa483"]]);
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavScreenSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenSocialLinks.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.open) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "VPNavScreen",
          ref_key: "screen",
          ref: screen
        }, _attrs))} data-v-724636ae><div class="container" data-v-724636ae>`);
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push, _parent);
        _push(ssrRenderComponent(_sfc_main$I, { class: "menu" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenTranslations, { class: "translations" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenAppearance, { class: "appearance" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$F, { class: "social-links" }, null, _parent));
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreen_vue_vue_type_style_index_0_scoped_724636ae_lang = "";
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreen.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-724636ae"]]);
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    provide("close-screen", closeScreen);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "VPNav" }, _attrs))} data-v-7e5bc4a5>`);
      _push(ssrRenderComponent(VPNavBar, {
        "is-screen-open": unref(isScreenOpen),
        onToggleScreen: unref(toggleScreen)
      }, {
        "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(VPNavScreen, { open: unref(isScreenOpen) }, {
        "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
            ];
          }
        }),
        "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</header>`);
    };
  }
});
const VPNav_vue_vue_type_style_index_0_scoped_7e5bc4a5_lang = "";
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNav.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-7e5bc4a5"]]);
const _sfc_main$C = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"></path><path d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"></path><path d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"></path><path d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"></path></svg>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconAlignLeft.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const VPIconAlignLeft = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$5]]);
function useAside() {
  const { hasSidebar } = useSidebar();
  const is960 = useMediaQuery("(min-width: 960px)");
  const is1280 = useMediaQuery("(min-width: 1280px)");
  const isAsideEnabled = computed(() => {
    if (!is1280.value && !is960.value) {
      return false;
    }
    return hasSidebar.value ? is1280.value : is960.value;
  });
  return {
    isAsideEnabled
  };
}
const PAGE_OFFSET = 71;
function resolveTitle(theme2) {
  return typeof theme2.outline === "object" && !Array.isArray(theme2.outline) && theme2.outline.label || theme2.outlineTitle || "On this page";
}
function getHeaders(range) {
  const headers = [...document.querySelectorAll(".VPDoc h2,h3,h4,h5,h6")].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      title: serializeHeader(el),
      link: "#" + el.id,
      level
    };
  });
  return resolveHeaders(headers, range);
}
function serializeHeader(h2) {
  let ret = "";
  for (const node of h2.childNodes) {
    if (node.nodeType === 1) {
      if (node.classList.contains("VPBadge") || node.classList.contains("header-anchor")) {
        continue;
      }
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
function resolveHeaders(headers, range) {
  if (range === false) {
    return [];
  }
  const levelsRange = (typeof range === "object" && !Array.isArray(range) ? range.level : range) || 2;
  const [high, low] = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  headers = headers.filter((h2) => h2.level >= high && h2.level <= low);
  const ret = [];
  outer:
    for (let i = 0; i < headers.length; i++) {
      const cur = headers[i];
      if (i === 0) {
        ret.push(cur);
      } else {
        for (let j = i - 1; j >= 0; j--) {
          const prev = headers[j];
          if (prev.level < cur.level) {
            (prev.children || (prev.children = [])).push(cur);
            continue outer;
          }
        }
        ret.push(cur);
      }
    }
  return ret;
}
function useActiveAnchor(container, marker) {
  const { isAsideEnabled } = useAside();
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const links = [].slice.call(container.value.querySelectorAll(".outline-link"));
    const anchors = [].slice.call(document.querySelectorAll(".content .header-anchor")).filter((anchor) => {
      return links.some((link2) => {
        return link2.hash === anchor.hash && anchor.offsetParent !== null;
      });
    });
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    if (anchors.length && isBottom) {
      activateLink(anchors[anchors.length - 1].hash);
      return;
    }
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const nextAnchor = anchors[i + 1];
      const [isActive2, hash] = isAnchorActive(i, anchor, nextAnchor);
      if (isActive2) {
        activateLink(hash);
        return;
      }
    }
  }
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    if (hash !== null) {
      prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.top = activeLink.offsetTop + 33 + "px";
      marker.value.style.opacity = "1";
    } else {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
}
function getAnchorTop(anchor) {
  return anchor.parentElement.offsetTop - PAGE_OFFSET;
}
function isAnchorActive(index2, anchor, nextAnchor) {
  const scrollTop = window.scrollY;
  if (index2 === 0 && scrollTop === 0) {
    return [true, null];
  }
  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null];
  }
  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, anchor.hash];
  }
  return [false, null];
}
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineItem",
  __ssrInlineRender: true,
  props: {
    headers: null,
    root: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPDocOutlineItem = resolveComponent("VPDocOutlineItem", true);
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: __props.root ? "root" : "nested"
      }, _attrs))} data-v-8f12e865><!--[-->`);
      ssrRenderList(__props.headers, ({ children, link: link2, title }) => {
        _push(`<li data-v-8f12e865><a class="outline-link"${ssrRenderAttr("href", link2)} data-v-8f12e865>${ssrInterpolate(title)}</a>`);
        if (children == null ? void 0 : children.length) {
          _push(ssrRenderComponent(_component_VPDocOutlineItem, { headers: children }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const VPDocOutlineItem_vue_vue_type_style_index_0_scoped_8f12e865_lang = "";
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocOutlineItem.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const VPDocOutlineItem = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-8f12e865"]]);
const _sfc_main$A = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"></path></svg>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconChevronRight.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const VPIconChevronRight = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNavOutlineDropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const open = ref(false);
    const vh = ref(0);
    ref();
    onContentUpdated(() => {
      open.value = false;
    });
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(
        frontmatter.value.outline ?? theme2.value.outline
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPLocalNavOutlineDropdown",
        style: { "--vp-vh": vh.value + "px" }
      }, _attrs))} data-v-079b16a8>`);
      if (unref(headers).length > 0) {
        _push(`<button class="${ssrRenderClass({ open: open.value })}" data-v-079b16a8>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))} `);
        _push(ssrRenderComponent(VPIconChevronRight, { class: "icon" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<button data-v-079b16a8>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</button>`);
      }
      if (open.value) {
        _push(`<div class="items" data-v-079b16a8><a class="top-link" href="#" data-v-079b16a8>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</a>`);
        _push(ssrRenderComponent(VPDocOutlineItem, { headers: unref(headers) }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const VPLocalNavOutlineDropdown_vue_vue_type_style_index_0_scoped_079b16a8_lang = "";
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPLocalNavOutlineDropdown.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const VPLocalNavOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-079b16a8"]]);
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasSidebar)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPLocalNav" }, _attrs))} data-v-f5a2ca58><button class="menu"${ssrRenderAttr("aria-expanded", __props.open)} aria-controls="VPSidebarNav" data-v-f5a2ca58>`);
        _push(ssrRenderComponent(VPIconAlignLeft, { class: "menu-icon" }, null, _parent));
        _push(`<span class="menu-text" data-v-f5a2ca58>${ssrInterpolate(unref(theme2).sidebarMenuLabel || "Menu")}</span></button>`);
        _push(ssrRenderComponent(VPLocalNavOutlineDropdown, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPLocalNav_vue_vue_type_style_index_0_scoped_f5a2ca58_lang = "";
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPLocalNav.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-f5a2ca58"]]);
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  __ssrInlineRender: true,
  props: {
    item: null,
    depth: null
  },
  setup(__props) {
    const props = __props;
    const {
      collapsed,
      collapsible,
      isLink,
      isActiveLink,
      hasActiveLink: hasActiveLink2,
      hasChildren,
      toggle
    } = useSidebarControl(computed(() => props.item));
    const sectionTag = computed(() => hasChildren.value ? "section" : `div`);
    const linkTag = computed(() => isLink.value ? "a" : "div");
    const textTag = computed(() => {
      return !hasChildren.value ? "p" : props.depth + 2 === 7 ? "p" : `h${props.depth + 2}`;
    });
    const itemRole = computed(() => isLink.value ? void 0 : "button");
    const classes = computed(() => [
      [`level-${props.depth}`],
      { collapsible: collapsible.value },
      { collapsed: collapsed.value },
      { "is-link": isLink.value },
      { "is-active": isActiveLink.value },
      { "has-active": hasActiveLink2.value }
    ]);
    function onItemInteraction(e) {
      if ("key" in e && e.key !== "Enter") {
        return;
      }
      !props.item.link && toggle();
    }
    function onCaretClick() {
      props.item.link && toggle();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(sectionTag)), mergeProps({
        class: ["VPSidebarItem", unref(classes)]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.item.text) {
              _push2(`<div class="item"${ssrRenderAttr("role", unref(itemRole))}${ssrRenderAttr("tabindex", __props.item.items && 0)} data-v-c4656e6d${_scopeId}><div class="indicator" data-v-c4656e6d${_scopeId}></div>`);
              if (__props.item.link) {
                _push2(ssrRenderComponent(VPLink, {
                  tag: unref(linkTag),
                  class: "link",
                  href: __props.item.link
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(unref(textTag)), { class: "text" }, null), _parent3, _scopeId2);
                    } else {
                      return [
                        (openBlock(), createBlock(resolveDynamicComponent(unref(textTag)), {
                          class: "text",
                          innerHTML: __props.item.text
                        }, null, 8, ["innerHTML"]))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(textTag)), { class: "text" }, null), _parent2, _scopeId);
              }
              if (__props.item.collapsed != null) {
                _push2(`<div class="caret" role="button" aria-label="toggle section" tabindex="0" data-v-c4656e6d${_scopeId}>`);
                _push2(ssrRenderComponent(VPIconChevronRight, { class: "caret-icon" }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.item.items && __props.item.items.length) {
              _push2(`<div class="items" data-v-c4656e6d${_scopeId}>`);
              if (__props.depth < 5) {
                _push2(`<!--[-->`);
                ssrRenderList(__props.item.items, (i) => {
                  _push2(ssrRenderComponent(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: __props.depth + 1
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.item.text ? (openBlock(), createBlock("div", mergeProps({
                key: 0,
                class: "item",
                role: unref(itemRole)
              }, toHandlers(__props.item.items ? { click: onItemInteraction, keydown: onItemInteraction } : {}, true), {
                tabindex: __props.item.items && 0
              }), [
                createVNode("div", { class: "indicator" }),
                __props.item.link ? (openBlock(), createBlock(VPLink, {
                  key: 0,
                  tag: unref(linkTag),
                  class: "link",
                  href: __props.item.link
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(textTag)), {
                      class: "text",
                      innerHTML: __props.item.text
                    }, null, 8, ["innerHTML"]))
                  ]),
                  _: 1
                }, 8, ["tag", "href"])) : (openBlock(), createBlock(resolveDynamicComponent(unref(textTag)), {
                  key: 1,
                  class: "text",
                  innerHTML: __props.item.text
                }, null, 8, ["innerHTML"])),
                __props.item.collapsed != null ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "caret",
                  role: "button",
                  "aria-label": "toggle section",
                  onClick: onCaretClick,
                  onKeydown: withKeys(onCaretClick, ["enter"]),
                  tabindex: "0"
                }, [
                  createVNode(VPIconChevronRight, { class: "caret-icon" })
                ], 40, ["onKeydown"])) : createCommentVNode("", true)
              ], 16, ["role", "tabindex"])) : createCommentVNode("", true),
              __props.item.items && __props.item.items.length ? (openBlock(), createBlock("div", {
                key: 1,
                class: "items"
              }, [
                __props.depth < 5 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(__props.item.items, (i) => {
                  return openBlock(), createBlock(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: __props.depth + 1
                  }, null, 8, ["item", "depth"]);
                }), 128)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const VPSidebarItem_vue_vue_type_style_index_0_scoped_c4656e6d_lang = "";
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSidebarItem.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-c4656e6d"]]);
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { sidebarGroups, hasSidebar } = useSidebar();
    let navEl = ref(null);
    function lockBodyScroll() {
      disableBodyScroll(navEl.value, { reserveScrollBarGap: true });
    }
    function unlockBodyScroll() {
      clearAllBodyScrollLocks();
    }
    watchPostEffect(async () => {
      var _a;
      if (props.open) {
        lockBodyScroll();
        (_a = navEl.value) == null ? void 0 : _a.focus();
      } else {
        unlockBodyScroll();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasSidebar)) {
        _push(`<aside${ssrRenderAttrs(mergeProps({
          class: ["VPSidebar", { open: __props.open }],
          ref_key: "navEl",
          ref: navEl
        }, _attrs))} data-v-139a1f1d><div class="curtain" data-v-139a1f1d></div><nav class="nav" id="VPSidebarNav" aria-labelledby="sidebar-aria-label" tabindex="-1" data-v-139a1f1d><span class="visually-hidden" id="sidebar-aria-label" data-v-139a1f1d> Sidebar Navigation </span>`);
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push, _parent);
        _push(`<!--[-->`);
        ssrRenderList(unref(sidebarGroups), (item) => {
          _push(`<div class="group" data-v-139a1f1d>`);
          _push(ssrRenderComponent(VPSidebarItem, {
            item,
            depth: 0
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push, _parent);
        _push(`</nav></aside>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPSidebar_vue_vue_type_style_index_0_scoped_139a1f1d_lang = "";
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSidebar.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-139a1f1d"]]);
const _sfc_main$v = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_Content = resolveComponent("Content");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPPage" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Content, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPPage.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  __ssrInlineRender: true,
  props: {
    tag: null,
    size: null,
    theme: null,
    text: null,
    href: null
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [
      props.size ?? "medium",
      props.theme ?? "brand"
    ]);
    const isExternal2 = computed(() => props.href && EXTERNAL_URL_RE.test(props.href));
    const component = computed(() => {
      if (props.tag) {
        return props.tag;
      }
      return props.href ? "a" : "button";
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), mergeProps({
        class: ["VPButton", unref(classes)],
        href: __props.href ? unref(normalizeLink$1)(__props.href) : void 0,
        target: unref(isExternal2) ? "_blank" : void 0,
        rel: unref(isExternal2) ? "noreferrer" : void 0
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const VPButton_vue_vue_type_style_index_0_scoped_567ba664_lang = "";
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPButton.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-567ba664"]]);
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "VPHero",
  __ssrInlineRender: true,
  props: {
    name: null,
    text: null,
    tagline: null,
    image: null,
    actions: null
  },
  setup(__props) {
    const heroImageSlotExists = inject("hero-image-slot-exists");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPHero", { "has-image": __props.image || unref(heroImageSlotExists) }]
      }, _attrs))} data-v-fd2650d5><div class="container" data-v-fd2650d5><div class="main" data-v-fd2650d5>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, () => {
        if (__props.name) {
          _push(`<h1 class="name" data-v-fd2650d5><span class="clip" data-v-fd2650d5>${ssrInterpolate(__props.name)}</span></h1>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.text) {
          _push(`<p class="text" data-v-fd2650d5>${ssrInterpolate(__props.text)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.tagline) {
          _push(`<p class="tagline" data-v-fd2650d5>${ssrInterpolate(__props.tagline)}</p>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      if (__props.actions) {
        _push(`<div class="actions" data-v-fd2650d5><!--[-->`);
        ssrRenderList(__props.actions, (action) => {
          _push(`<div class="action" data-v-fd2650d5>`);
          _push(ssrRenderComponent(VPButton, {
            tag: "a",
            size: "medium",
            theme: action.theme,
            text: action.text,
            href: action.link
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.image || unref(heroImageSlotExists)) {
        _push(`<div class="image" data-v-fd2650d5><div class="image-container" data-v-fd2650d5><div class="image-bg" data-v-fd2650d5></div>`);
        ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, () => {
          if (__props.image) {
            _push(ssrRenderComponent(VPImage, {
              class: "image-src",
              image: __props.image
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const VPHero_vue_vue_type_style_index_0_scoped_fd2650d5_lang = "";
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHero.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const VPHero = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-fd2650d5"]]);
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).hero) {
        _push(ssrRenderComponent(VPHero, mergeProps({
          class: "VPHomeHero",
          name: unref(fm).hero.name,
          text: unref(fm).hero.text,
          tagline: unref(fm).hero.tagline,
          image: unref(fm).hero.image,
          actions: unref(fm).hero.actions
        }, _attrs), {
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info")
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHomeHero.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"></path></svg>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconArrowRight.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const VPIconArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPFeature",
  __ssrInlineRender: true,
  props: {
    icon: null,
    title: null,
    details: null,
    link: null,
    linkText: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPLink, mergeProps({
        class: "VPFeature",
        href: __props.link,
        "no-icon": true
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="box" data-v-837f6cca${_scopeId}>`);
            if (typeof __props.icon === "object") {
              _push2(ssrRenderComponent(VPImage, {
                image: __props.icon,
                alt: __props.icon.alt,
                height: __props.icon.height,
                width: __props.icon.width
              }, null, _parent2, _scopeId));
            } else if (__props.icon) {
              _push2(`<div class="icon" data-v-837f6cca${_scopeId}>${__props.icon}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h2 class="title" data-v-837f6cca${_scopeId}>${__props.title}</h2>`);
            if (__props.details) {
              _push2(`<p class="details" data-v-837f6cca${_scopeId}>${__props.details}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.linkText) {
              _push2(`<div class="link-text" data-v-837f6cca${_scopeId}><p class="link-text-value" data-v-837f6cca${_scopeId}>${ssrInterpolate(__props.linkText)} `);
              _push2(ssrRenderComponent(VPIconArrowRight, { class: "link-text-icon" }, null, _parent2, _scopeId));
              _push2(`</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</article>`);
          } else {
            return [
              createVNode("article", { class: "box" }, [
                typeof __props.icon === "object" ? (openBlock(), createBlock(VPImage, {
                  key: 0,
                  image: __props.icon,
                  alt: __props.icon.alt,
                  height: __props.icon.height,
                  width: __props.icon.width
                }, null, 8, ["image", "alt", "height", "width"])) : __props.icon ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "icon",
                  innerHTML: __props.icon
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                createVNode("h2", {
                  class: "title",
                  innerHTML: __props.title
                }, null, 8, ["innerHTML"]),
                __props.details ? (openBlock(), createBlock("p", {
                  key: 2,
                  class: "details",
                  innerHTML: __props.details
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                __props.linkText ? (openBlock(), createBlock("div", {
                  key: 3,
                  class: "link-text"
                }, [
                  createVNode("p", { class: "link-text-value" }, [
                    createTextVNode(toDisplayString(__props.linkText) + " ", 1),
                    createVNode(VPIconArrowRight, { class: "link-text-icon" })
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPFeature_vue_vue_type_style_index_0_scoped_837f6cca_lang = "";
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPFeature.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const VPFeature = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-837f6cca"]]);
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "VPFeatures",
  __ssrInlineRender: true,
  props: {
    features: null
  },
  setup(__props) {
    const props = __props;
    const grid = computed(() => {
      const length = props.features.length;
      if (!length) {
        return;
      } else if (length === 2) {
        return "grid-2";
      } else if (length === 3) {
        return "grid-3";
      } else if (length % 3 === 0) {
        return "grid-6";
      } else if (length % 2 === 0) {
        return "grid-4";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.features) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPFeatures" }, _attrs))} data-v-6816157f><div class="container" data-v-6816157f><div class="items" data-v-6816157f><!--[-->`);
        ssrRenderList(__props.features, (feature) => {
          _push(`<div class="${ssrRenderClass([[unref(grid)], "item"])}" data-v-6816157f>`);
          _push(ssrRenderComponent(VPFeature, {
            icon: feature.icon,
            title: feature.title,
            details: feature.details,
            link: feature.link,
            "link-text": feature.linkText
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPFeatures_vue_vue_type_style_index_0_scoped_6816157f_lang = "";
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPFeatures.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const VPFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-6816157f"]]);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).features) {
        _push(ssrRenderComponent(VPFeatures, mergeProps({
          class: "VPHomeFeatures",
          features: unref(fm).features
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHomeFeatures.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPHome" }, _attrs))} data-v-d82743a8>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$s, null, {
        "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
            ];
          }
        }),
        "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$o, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const VPHome_vue_vue_type_style_index_0_scoped_d82743a8_lang = "";
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHome.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-d82743a8"]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(
        frontmatter.value.outline ?? theme2.value.outline
      );
    });
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDocAsideOutline", { "has-outline": unref(headers).length > 0 }],
        ref_key: "container",
        ref: container
      }, _attrs))} data-v-ff0f39c8><div class="content" data-v-ff0f39c8><div class="outline-marker" data-v-ff0f39c8></div><div class="outline-title" data-v-ff0f39c8>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))}</div><nav aria-labelledby="doc-outline-aria-label" data-v-ff0f39c8><span class="visually-hidden" id="doc-outline-aria-label" data-v-ff0f39c8> Table of Contents for current page </span>`);
      _push(ssrRenderComponent(VPDocOutlineItem, {
        headers: unref(headers),
        root: true
      }, null, _parent));
      _push(`</nav></div></div>`);
    };
  }
});
const VPDocAsideOutline_vue_vue_type_style_index_0_scoped_ff0f39c8_lang = "";
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-ff0f39c8"]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  __ssrInlineRender: true,
  props: {
    carbonAds: null
  },
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideCarbonAds" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VPCarbonAds), { "carbon-ads": __props.carbonAds }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocAsideCarbonAds.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAside" }, _attrs))} data-v-3f215769>`);
      ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPDocAsideOutline, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push, _parent);
      _push(`<div class="spacer" data-v-3f215769></div>`);
      ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push, _parent);
      if (unref(theme2).carbonAds) {
        _push(ssrRenderComponent(_sfc_main$l, {
          "carbon-ads": unref(theme2).carbonAds
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPDocAside_vue_vue_type_style_index_0_scoped_3f215769_lang = "";
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocAside.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-3f215769"]]);
function useEditLink() {
  const { theme: theme2, page } = useData();
  return computed(() => {
    const { text = "Edit this page", pattern = "" } = theme2.value.editLink || {};
    const { relativePath } = page.value;
    let url;
    if (typeof pattern === "function") {
      url = pattern({ relativePath });
    } else {
      url = pattern.replace(/:path/g, relativePath);
    }
    return { url, text };
  });
}
function usePrevNext() {
  const { page, theme: theme2, frontmatter } = useData();
  return computed(() => {
    var _a, _b, _c, _d;
    const sidebar = getSidebar(theme2.value.sidebar, page.value.relativePath);
    const candidates = getFlatSideBarLinks(sidebar);
    const index2 = candidates.findIndex((link2) => {
      return isActive(page.value.relativePath, link2.link);
    });
    return {
      prev: frontmatter.value.prev === false ? void 0 : {
        text: (typeof frontmatter.value.prev === "string" ? frontmatter.value.prev : typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.text : void 0) ?? ((_a = candidates[index2 - 1]) == null ? void 0 : _a.text),
        link: (typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.link : void 0) ?? ((_b = candidates[index2 - 1]) == null ? void 0 : _b.link)
      },
      next: frontmatter.value.next === false ? void 0 : {
        text: (typeof frontmatter.value.next === "string" ? frontmatter.value.next : typeof frontmatter.value.next === "object" ? frontmatter.value.next.text : void 0) ?? ((_c = candidates[index2 + 1]) == null ? void 0 : _c.text),
        link: (typeof frontmatter.value.next === "object" ? frontmatter.value.next.link : void 0) ?? ((_d = candidates[index2 + 1]) == null ? void 0 : _d.link)
      }
    };
  });
}
const _sfc_main$j = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"></path><path d="M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"></path></svg>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconEdit.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const VPIconEdit = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooterLastUpdated",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, lang } = useData();
    const date = computed(() => new Date(page.value.lastUpdated));
    const isoDatetime = computed(() => date.value.toISOString());
    const datetime = ref("");
    onMounted(() => {
      watchEffect(() => {
        datetime.value = date.value.toLocaleString(lang.value);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({ class: "VPLastUpdated" }, _attrs))} data-v-7b3ebfe1>${ssrInterpolate(unref(theme2).lastUpdatedText || "Last updated")}: <time${ssrRenderAttr("datetime", unref(isoDatetime))} data-v-7b3ebfe1>${ssrInterpolate(datetime.value)}</time></p>`);
    };
  }
});
const VPDocFooterLastUpdated_vue_vue_type_style_index_0_scoped_7b3ebfe1_lang = "";
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocFooterLastUpdated.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const VPDocFooterLastUpdated = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-7b3ebfe1"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, frontmatter } = useData();
    const editLink = useEditLink();
    const control = usePrevNext();
    const hasEditLink = computed(() => {
      return theme2.value.editLink && frontmatter.value.editLink !== false;
    });
    const hasLastUpdated = computed(() => {
      return page.value.lastUpdated && frontmatter.value.lastUpdated !== false;
    });
    const showFooter = computed(() => {
      return hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      if (unref(showFooter)) {
        _push(`<footer${ssrRenderAttrs(mergeProps({ class: "VPDocFooter" }, _attrs))} data-v-face870a>`);
        ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push, _parent);
        if (unref(hasEditLink) || unref(hasLastUpdated)) {
          _push(`<div class="edit-info" data-v-face870a>`);
          if (unref(hasEditLink)) {
            _push(`<div class="edit-link" data-v-face870a>`);
            _push(ssrRenderComponent(VPLink, {
              class: "edit-link-button",
              href: unref(editLink).url,
              "no-icon": true
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(VPIconEdit, {
                    class: "edit-link-icon",
                    "aria-label": "edit icon"
                  }, null, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(unref(editLink).text)}`);
                } else {
                  return [
                    createVNode(VPIconEdit, {
                      class: "edit-link-icon",
                      "aria-label": "edit icon"
                    }),
                    createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(hasLastUpdated)) {
            _push(`<div class="last-updated" data-v-face870a>`);
            _push(ssrRenderComponent(VPDocFooterLastUpdated, null, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (((_a = unref(control).prev) == null ? void 0 : _a.link) || ((_b = unref(control).next) == null ? void 0 : _b.link)) {
          _push(`<div class="prev-next" data-v-face870a><div class="pager" data-v-face870a>`);
          if ((_c = unref(control).prev) == null ? void 0 : _c.link) {
            _push(`<a class="pager-link prev"${ssrRenderAttr("href", unref(normalizeLink$1)(unref(control).prev.link))} data-v-face870a><span class="desc" data-v-face870a>${((_d = unref(theme2).docFooter) == null ? void 0 : _d.prev) || "Previous page"}</span><span class="title" data-v-face870a>${unref(control).prev.text}</span></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="${ssrRenderClass([{ "has-prev": (_e = unref(control).prev) == null ? void 0 : _e.link }, "pager"])}" data-v-face870a>`);
          if ((_f = unref(control).next) == null ? void 0 : _f.link) {
            _push(`<a class="pager-link next"${ssrRenderAttr("href", unref(normalizeLink$1)(unref(control).next.link))} data-v-face870a><span class="desc" data-v-face870a>${((_g = unref(theme2).docFooter) == null ? void 0 : _g.next) || "Next page"}</span><span class="title" data-v-face870a>${unref(control).next.text}</span></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPDocFooter_vue_vue_type_style_index_0_scoped_face870a_lang = "";
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocFooter.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-face870a"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineDropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const open = ref(false);
    onContentUpdated(() => {
      open.value = false;
    });
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(
        frontmatter.value.outline ?? theme2.value.outline
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(headers).length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocOutlineDropdown" }, _attrs))} data-v-2edece88><button class="${ssrRenderClass({ open: open.value })}" data-v-2edece88>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))} `);
        _push(ssrRenderComponent(VPIconChevronRight, { class: "icon" }, null, _parent));
        _push(`</button>`);
        if (open.value) {
          _push(`<div class="items" data-v-2edece88>`);
          _push(ssrRenderComponent(VPDocOutlineItem, { headers: unref(headers) }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPDocOutlineDropdown_vue_vue_type_style_index_0_scoped_2edece88_lang = "";
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocOutlineDropdown.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const VPDocOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-2edece88"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { hasSidebar, hasAside, leftAside } = useSidebar();
    const pageName = computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDoc", { "has-sidebar": unref(hasSidebar), "has-aside": unref(hasAside) }]
      }, _attrs))} data-v-c4b0d3cf>`);
      ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push, _parent);
      _push(`<div class="container" data-v-c4b0d3cf>`);
      if (unref(hasAside)) {
        _push(`<div class="${ssrRenderClass([{ "left-aside": unref(leftAside) }, "aside"])}" data-v-c4b0d3cf><div class="aside-curtain" data-v-c4b0d3cf></div><div class="aside-container" data-v-c4b0d3cf><div class="aside-content" data-v-c4b0d3cf>`);
        _push(ssrRenderComponent(VPDocAside, null, {
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content" data-v-c4b0d3cf><div class="content-container" data-v-c4b0d3cf>`);
      ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPDocOutlineDropdown, null, null, _parent));
      _push(`<main class="main" data-v-c4b0d3cf>`);
      _push(ssrRenderComponent(_component_Content, {
        class: ["vp-doc", unref(pageName)]
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(VPDocFooter, null, {
        "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push, _parent);
      _push(`</div></div></div>`);
      ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPDoc_vue_vue_type_style_index_0_scoped_c4b0d3cf_lang = "";
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDoc.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-c4b0d3cf"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    const { localeLinks } = useLangs({ removeCurrent: false });
    const root = ref("/");
    onMounted(() => {
      var _a;
      const path = window.location.pathname.replace(site.value.base, "").replace(/(^.*?\/).*$/, "/$1");
      if (localeLinks.value.length) {
        root.value = ((_a = localeLinks.value.find(({ link: link2 }) => link2.startsWith(path))) == null ? void 0 : _a.link) || localeLinks.value[0].link;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "NotFound" }, _attrs))} data-v-c70503b8><p class="code" data-v-c70503b8>404</p><h1 class="title" data-v-c70503b8>PAGE NOT FOUND</h1><div class="divider" data-v-c70503b8></div><blockquote class="quote" data-v-c70503b8> But if you don&#39;t change your direction, and if you keep looking, you may end up where you are heading. </blockquote><div class="action" data-v-c70503b8><a class="link"${ssrRenderAttr("href", unref(withBase)(root.value))} aria-label="go to home" data-v-c70503b8> Take me home </a></div></div>`);
    };
  }
});
const NotFound_vue_vue_type_style_index_0_scoped_c70503b8_lang = "";
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/NotFound.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const NotFound$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-c70503b8"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  __ssrInlineRender: true,
  setup(__props) {
    const { page, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPContent", {
          "has-sidebar": unref(hasSidebar),
          "is-home": unref(frontmatter).layout === "home"
        }],
        id: "VPContent"
      }, _attrs))} data-v-a494bd1d>`);
      if (unref(page).isNotFound) {
        ssrRenderSlot(_ctx.$slots, "not-found", {}, () => {
          _push(ssrRenderComponent(NotFound$1, null, null, _parent));
        }, _push, _parent);
      } else if (unref(frontmatter).layout === "page") {
        _push(ssrRenderComponent(VPPage, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (unref(frontmatter).layout === "home") {
        _push(ssrRenderComponent(VPHome, null, {
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(ssrRenderComponent(VPDoc, null, {
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const VPContent_vue_vue_type_style_index_0_scoped_a494bd1d_lang = "";
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPContent.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-a494bd1d"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).footer) {
        _push(`<footer${ssrRenderAttrs(mergeProps({
          class: ["VPFooter", { "has-sidebar": unref(hasSidebar) }]
        }, _attrs))} data-v-2f86ebd2><div class="container" data-v-2f86ebd2>`);
        if (unref(theme2).footer.message) {
          _push(`<p class="message" data-v-2f86ebd2>${unref(theme2).footer.message}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(theme2).footer.copyright) {
          _push(`<p class="copyright" data-v-2f86ebd2>${unref(theme2).footer.copyright}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPFooter_vue_vue_type_style_index_0_scoped_2f86ebd2_lang = "";
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPFooter.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-2f86ebd2"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    const route = useRoute();
    watch(() => route.path, closeSidebar);
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    provide("close-sidebar", closeSidebar);
    provide("is-sidebar-open", isSidebarOpen);
    const { frontmatter } = useData();
    const slots = useSlots();
    const heroImageSlotExists = computed(() => !!slots["home-hero-image"]);
    provide("hero-image-slot-exists", heroImageSlotExists);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      if (unref(frontmatter).layout !== false) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "Layout" }, _attrs))} data-v-b2cf3e0b>`);
        ssrRenderSlot(_ctx.$slots, "layout-top", {}, null, _push, _parent);
        _push(ssrRenderComponent(VPSkipLink, null, null, _parent));
        _push(ssrRenderComponent(VPBackdrop, {
          class: "backdrop",
          show: unref(isSidebarOpen),
          onClick: unref(closeSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPNav, null, {
          "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPLocalNav, {
          open: unref(isSidebarOpen),
          onOpenMenu: unref(openSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPSidebar, { open: unref(isSidebarOpen) }, {
          "sidebar-nav-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true)
              ];
            }
          }),
          "sidebar-nav-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPContent, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "not-found", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "not-found", {}, void 0, true)
              ];
            }
          }),
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPFooter, null, null, _parent));
        ssrRenderSlot(_ctx.$slots, "layout-bottom", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_Content, _attrs, null, _parent));
      }
    };
  }
});
const Layout_vue_vue_type_style_index_0_scoped_b2cf3e0b_lang = "";
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/Layout.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-b2cf3e0b"]]);
const _sfc_main$a = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z"></path></svg>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconHeart.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const VPIconHeart = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender]]);
const GridSettings = {
  xmini: [[0, 2]],
  mini: [],
  small: [
    [920, 6],
    [768, 5],
    [640, 4],
    [480, 3],
    [0, 2]
  ],
  medium: [
    [960, 5],
    [832, 4],
    [640, 3],
    [480, 2]
  ],
  big: [
    [832, 3],
    [640, 2]
  ]
};
function useSponsorsGrid({ el, size = "medium" }) {
  const onResize = throttleAndDebounce(manage, 100);
  onMounted(() => {
    manage();
    window.addEventListener("resize", onResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });
  function manage() {
    adjustSlots(el.value, size);
  }
}
function adjustSlots(el, size) {
  const tsize = el.children.length;
  const asize = el.querySelectorAll(".vp-sponsor-grid-item:not(.empty)").length;
  const grid = setGrid(el, size, asize);
  manageSlots(el, grid, tsize, asize);
}
function setGrid(el, size, items) {
  const settings = GridSettings[size];
  const screen = window.innerWidth;
  let grid = 1;
  settings.some(([breakpoint, value]) => {
    if (screen >= breakpoint) {
      grid = items < value ? items : value;
      return true;
    }
  });
  setGridData(el, grid);
  return grid;
}
function setGridData(el, value) {
  el.dataset.vpGrid = String(value);
}
function manageSlots(el, grid, tsize, asize) {
  const diff = tsize - asize;
  const rem = asize % grid;
  const drem = rem === 0 ? rem : grid - rem;
  neutralizeSlots(el, drem - diff);
}
function neutralizeSlots(el, count) {
  if (count === 0) {
    return;
  }
  count > 0 ? addSlots(el, count) : removeSlots(el, count * -1);
}
function addSlots(el, count) {
  for (let i = 0; i < count; i++) {
    const slot = document.createElement("div");
    slot.classList.add("vp-sponsor-grid-item", "empty");
    el.append(slot);
  }
}
function removeSlots(el, count) {
  for (let i = 0; i < count; i++) {
    el.removeChild(el.lastElementChild);
  }
}
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "VPSponsorsGrid",
  __ssrInlineRender: true,
  props: {
    size: null,
    data: null
  },
  setup(__props) {
    const props = __props;
    const el = ref(null);
    useSponsorsGrid({ el, size: props.size });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsorsGrid vp-sponsor-grid", [props.size ?? "medium"]],
        ref_key: "el",
        ref: el
      }, _attrs))}><!--[-->`);
      ssrRenderList(__props.data, (sponsor) => {
        _push(`<div class="vp-sponsor-grid-item"><a class="vp-sponsor-grid-link"${ssrRenderAttr("href", sponsor.url)} target="_blank" rel="sponsored noopener"><article class="vp-sponsor-grid-box"><h4 class="visually-hidden">${ssrInterpolate(sponsor.name)}</h4><img class="vp-sponsor-grid-image"${ssrRenderAttr("src", sponsor.img)}${ssrRenderAttr("alt", sponsor.name)}></article></a></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSponsorsGrid.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "VPSponsors",
  __ssrInlineRender: true,
  props: {
    mode: null,
    tier: null,
    size: null,
    data: null
  },
  setup(__props) {
    const props = __props;
    const sponsors = computed(() => {
      const isSponsors = props.data.some((s) => {
        return "items" in s;
      });
      if (isSponsors) {
        return props.data;
      }
      return [
        { tier: props.tier, size: props.size, items: props.data }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsors vp-sponsor", [__props.mode ?? "normal"]]
      }, _attrs))}><!--[-->`);
      ssrRenderList(unref(sponsors), (sponsor, index2) => {
        _push(`<section class="vp-sponsor-section">`);
        if (sponsor.tier) {
          _push(`<h3 class="vp-sponsor-tier">${ssrInterpolate(sponsor.tier)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$9, {
          size: sponsor.size,
          data: sponsor.items
        }, null, _parent));
        _push(`</section>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSponsors.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "VPHomeSponsors",
  __ssrInlineRender: true,
  props: {
    message: null,
    actionText: null,
    actionLink: null,
    data: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "VPHomeSponsors" }, _attrs))} data-v-3c6e61c2><div class="container" data-v-3c6e61c2><div class="header" data-v-3c6e61c2><div class="love" data-v-3c6e61c2>`);
      _push(ssrRenderComponent(VPIconHeart, { class: "icon" }, null, _parent));
      _push(`</div>`);
      if (__props.message) {
        _push(`<h2 class="message" data-v-3c6e61c2>${ssrInterpolate(__props.message)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sponsors" data-v-3c6e61c2>`);
      _push(ssrRenderComponent(_sfc_main$8, { data: __props.data }, null, _parent));
      _push(`</div>`);
      if (__props.actionLink) {
        _push(`<div class="action" data-v-3c6e61c2>`);
        _push(ssrRenderComponent(VPButton, {
          theme: "sponsor",
          text: __props.actionText ?? "Become a sponsor",
          href: __props.actionLink
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const VPHomeSponsors_vue_vue_type_style_index_0_scoped_3c6e61c2_lang = "";
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHomeSponsors.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideSponsors",
  __ssrInlineRender: true,
  props: {
    tier: null,
    size: null,
    data: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideSponsors" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        mode: "aside",
        tier: __props.tier,
        size: __props.size,
        data: __props.data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocAsideSponsors.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const VPTeamPage_vue_vue_type_style_index_0_scoped_10b00018_lang = "";
const _sfc_main$5 = {};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamPage.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const VPTeamPageTitle_vue_vue_type_style_index_0_scoped_bf2cbdac_lang = "";
const _sfc_main$4 = {};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamPageTitle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const VPTeamPageSection_vue_vue_type_style_index_0_scoped_b1a88750_lang = "";
const _sfc_main$3 = {};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamPageSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembersItem",
  __ssrInlineRender: true,
  props: {
    size: null,
    member: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembersItem", [__props.size ?? "medium"]]
      }, _attrs))} data-v-1739ab5f><div class="profile" data-v-1739ab5f><figure class="avatar" data-v-1739ab5f><img class="avatar-img"${ssrRenderAttr("src", __props.member.avatar)}${ssrRenderAttr("alt", __props.member.name)} data-v-1739ab5f></figure><div class="data" data-v-1739ab5f><h1 class="name" data-v-1739ab5f>${ssrInterpolate(__props.member.name)}</h1>`);
      if (__props.member.title || __props.member.org) {
        _push(`<p class="affiliation" data-v-1739ab5f>`);
        if (__props.member.title) {
          _push(`<span class="title" data-v-1739ab5f>${ssrInterpolate(__props.member.title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.member.title && __props.member.org) {
          _push(`<span class="at" data-v-1739ab5f> @ </span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.member.org) {
          _push(ssrRenderComponent(VPLink, {
            class: ["org", { link: __props.member.orgLink }],
            href: __props.member.orgLink,
            "no-icon": ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.member.org)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.member.org), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.member.desc) {
        _push(`<p class="desc" data-v-1739ab5f>${ssrInterpolate(__props.member.desc)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.member.links) {
        _push(`<div class="links" data-v-1739ab5f>`);
        _push(ssrRenderComponent(VPSocialLinks, {
          links: __props.member.links
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (__props.member.sponsor) {
        _push(`<div class="sp" data-v-1739ab5f>`);
        _push(ssrRenderComponent(VPLink, {
          class: "sp-link",
          href: __props.member.sponsor,
          "no-icon": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VPIconHeart, { class: "sp-icon" }, null, _parent2, _scopeId));
              _push2(` Sponsor `);
            } else {
              return [
                createVNode(VPIconHeart, { class: "sp-icon" }),
                createTextVNode(" Sponsor ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const VPTeamMembersItem_vue_vue_type_style_index_0_scoped_1739ab5f_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamMembersItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const VPTeamMembersItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1739ab5f"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembers",
  __ssrInlineRender: true,
  props: {
    size: null,
    members: null
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [
      props.size ?? "medium",
      `count-${props.members.length}`
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembers", unref(classes)]
      }, _attrs))} data-v-04685dce><div class="container" data-v-04685dce><!--[-->`);
      ssrRenderList(__props.members, (member) => {
        _push(`<div class="item" data-v-04685dce>`);
        _push(ssrRenderComponent(VPTeamMembersItem, {
          size: __props.size,
          member
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const VPTeamMembers_vue_vue_type_style_index_0_scoped_04685dce_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamMembers.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", VPBadge);
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData$1();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "NotFound" }, _attrs))} data-v-2f6ebf94><p class="code" data-v-2f6ebf94>404</p><div class="divider" data-v-2f6ebf94></div><blockquote class="quote" data-v-2f6ebf94> 啊这, 踏入了神秘领域, 快回到首页 </blockquote><div class="action" data-v-2f6ebf94><a class="link"${ssrRenderAttr("href", unref(site).base)} aria-label="go to home" data-v-2f6ebf94> 返回首页 </a></div></div>`);
    };
  }
});
const NotFound_vue_vue_type_style_index_0_scoped_2f6ebf94_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/NotFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2f6ebf94"]]);
const index = "";
const RawTheme = {
  ...theme,
  NotFound,
  enhanceApp(ctx) {
    theme.enhanceApp(ctx);
  }
};
function useUpdateHead(route, siteDataByRouteRef) {
  let managedHeadTags = [];
  let isFirstUpdate = true;
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      return;
    }
    managedHeadTags.forEach((el) => document.head.removeChild(el));
    managedHeadTags = [];
    newTags.forEach((headConfig) => {
      const el = createHeadElement(headConfig);
      document.head.appendChild(el);
      managedHeadTags.push(el);
    });
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData2 = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    document.title = createTitle(siteData2, pageData);
    document.querySelector(`meta[name=description]`).setAttribute("content", pageDescription || siteData2.description);
    updateHeadTags(mergeHead(siteData2.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { target } = link2;
        const { hostname, pathname } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (
          // only prefetch same tab navigation, since a new tab will load
          // the lean js chunk instead.
          target !== `_blank` && // only prefetch inbound links
          hostname === location.hostname
        ) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap = /* @__PURE__ */ new Map();
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = (_a = el.nextElementSibling) == null ? void 0 : _a.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.className);
        let text = "";
        sibling.querySelectorAll("span.line:not(.diff.remove)").forEach((node) => text += (node.textContent || "") + "\n");
        text = text.slice(0, -1);
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, "").trim();
        }
        copyToClipboard(text).then(() => {
          el.classList.add("copied");
          clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove("copied");
            el.blur();
            timeoutIdMap.delete(el);
          }, 2e3);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function useCodeGroups() {
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      var _a, _b;
      const el = e.target;
      if (el.matches(".vp-code-group input")) {
        const group = (_a = el.parentElement) == null ? void 0 : _a.parentElement;
        const i = Array.from((group == null ? void 0 : group.querySelectorAll("input")) || []).indexOf(el);
        const current = group == null ? void 0 : group.querySelector('div[class*="language-"].active');
        const next = (_b = group == null ? void 0 : group.querySelectorAll('div[class*="language-"]:not(.language-id)')) == null ? void 0 : _b[i];
        if (current && next && current !== next) {
          current.classList.remove("active");
          next.classList.add("active");
        }
      }
    });
  }
}
function resolveThemeExtends(theme2) {
  if (theme2.extends) {
    const base2 = resolveThemeExtends(theme2.extends);
    return {
      ...base2,
      ...theme2,
      async enhanceApp(ctx) {
        if (base2.enhanceApp)
          await base2.enhanceApp(ctx);
        if (theme2.enhanceApp)
          await theme2.enhanceApp(ctx);
      }
    };
  }
  return theme2;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site } = useData$1();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = site.value.lang;
        document.documentElement.dir = site.value.dir;
      });
    });
    {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    if (isInitialPageLoad) {
      initialPath = pageFilePath;
    }
    if (isInitialPageLoad || initialPath === pageFilePath) {
      pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return import(
      /*@vite-ignore*/
      pageFilePath
    );
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
async function render(path) {
  const { app, router } = await createApp();
  await router.go(path);
  const ctx = { content: "" };
  ctx.content = await renderToString(app, ctx);
  return ctx;
}
export {
  render
};
