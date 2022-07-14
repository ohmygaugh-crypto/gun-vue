import { __vitePreload } from "./mapping.es.js";
import { resolveComponent, openBlock, createBlock, withCtx, createVNode, createBaseVNode, defineAsyncComponent, onMounted, reactive, ref, watch, watchEffect, computedAsync } from "./vendor.es.js";
import { _export_sfc } from "./plugin-vue_export-helper.es.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "p-2 flex flex-col gap-4" }, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Gift/List" }, {
    controls: withCtx(() => [
      _hoisted_1
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Round" }, {
        default: withCtx(() => [
          createVNode($setup["GiftList"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const _sfc_main = {
  __name: "GiftList.story",
  setup(__props, { expose }) {
    expose();
    const GiftList = defineAsyncComponent(() => __vitePreload(() => import("./GiftList.es.js"), true ? ["GiftList.es.js","useDraw.es.js","vendor.es.js","useGifts.es.js","GiftCard.es.js","AccountAvatar.es.js","plugin-vue_export-helper.es.js"] : void 0));
    const __returned__ = { GiftList, defineAsyncComponent, onMounted, reactive, ref, watch, watchEffect, computedAsync };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/gift/GiftList.story.vue";
var GiftList_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/gift/GiftList.story.vue"]]);
export { GiftList_story as default };
