import { __vitePreload } from "./mapping.es.js";
import { resolveComponent, openBlock, createBlock, withCtx, createVNode, createBaseVNode, withDirectives, vModelText, normalizeProps, guardReactiveProps, defineAsyncComponent, reactive } from "./vendor.es.js";
const _hoisted_1 = { class: "p-2" };
const _hoisted_2 = { class: "flex gap-2" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("label", { for: "size" }, "Size", -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Account Avatar" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Round" }, {
        controls: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              _hoisted_3,
              withDirectives(createBaseVNode("input", {
                id: "size",
                type: "range",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.size = $event),
                min: 40,
                max: 500
              }, null, 512), [
                [vModelText, $setup.state.size]
              ])
            ])
          ])
        ]),
        default: withCtx(() => [
          createVNode($setup["AccountAvatar"], normalizeProps(guardReactiveProps($setup.state)), null, 16)
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  __name: "AccountAvatar.story",
  setup(__props, { expose }) {
    expose();
    const AccountAvatar = defineAsyncComponent(() => __vitePreload(() => import("./Avatar.es.js"), true ? ["Avatar.es.js","vendor.es.js","mapping.es.js"] : void 0));
    const state = reactive({
      pub: "We2MxFrbFH37008fNmreSk9hdHLJNMVhrSMIIbOO5Ao.FbNrdt118-TCYzGYRo94Xa8EUWwwV-7DIopXSE9OZD8",
      size: 200
    });
    const __returned__ = { AccountAvatar, state, defineAsyncComponent, reactive };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/account/AccountAvatar.story.vue";
var AccountAvatar_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/account/AccountAvatar.story.vue"]]);
var AccountAvatar_story$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": AccountAvatar_story
}, Symbol.toStringTag, { value: "Module" }));
export { AccountAvatar_story$1 as AccountAvatar_story, _export_sfc };
//# sourceMappingURL=AccountAvatar.story.es.js.map
