import { __vitePreload } from "./mapping.es.js";
import { resolveComponent, openBlock, createBlock, withCtx, createVNode, createBaseVNode, defineAsyncComponent } from "./vendor.es.js";
import { _export_sfc } from "./plugin-vue_export-helper.es.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "p-2 flex flex-col gap-4" }, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "User/Pass",
    icon: "la:passport"
  }, {
    controls: withCtx(() => [
      _hoisted_1
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Round" }, {
        default: withCtx(() => [
          createVNode($setup["UserPass"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const _sfc_main = {
  __name: "UserPass.story",
  setup(__props, { expose }) {
    expose();
    const UserPass = defineAsyncComponent(() => __vitePreload(() => import("./UserPass.es.js"), true ? ["UserPass.es.js","useDraw.es.js","vendor.es.js","eye.es.js","check.es.js","plugin-vue_export-helper.es.js"] : void 0));
    const __returned__ = { UserPass, defineAsyncComponent };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/user/UserPass.story.vue";
var UserPass_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserPass.story.vue"]]);
export { UserPass_story as default };
