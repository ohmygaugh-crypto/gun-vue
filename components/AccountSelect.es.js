import "./useDraw.es.js";
import { openBlock, createElementBlock, createBlock, withCtx, createVNode, createBaseVNode, toDisplayString, Fragment, renderList } from "./vendor.es.js";
import { useGuests } from "./useGuests.es.js";
import __unplugin_components_1$1 from "./AccountBadge.es.js";
import { __unplugin_components_2 } from "./times.es.js";
import { _export_sfc } from "./plugin-vue_export-helper.es.js";
import "./AccountAvatar.es.js";
const _hoisted_1 = { class: "p-4" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
const _hoisted_3 = {
  key: 1,
  class: "flex flex-col"
};
const _hoisted_4 = { class: "font-bold" };
const _hoisted_5 = { class: "flex flex-wrap gap-3" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_la_times = __unplugin_components_2;
  const _component_account_badge = __unplugin_components_1$1;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    $props.pub ? (openBlock(), createBlock(_component_account_badge, {
      key: 0,
      pub: $props.pub
    }, {
      default: withCtx(() => [
        _hoisted_2,
        createVNode(_component_la_times, {
          class: "mr-2",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:pub", ""))
        })
      ]),
      _: 1
    }, 8, ["pub"])) : (openBlock(), createElementBlock("div", _hoisted_3, [
      createBaseVNode("div", _hoisted_4, "USER SELECT OF " + toDisplayString($setup.count.total), 1),
      createBaseVNode("div", _hoisted_5, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.guests, (guest) => {
          return openBlock(), createBlock(_component_account_badge, {
            key: guest,
            onClick: ($event) => _ctx.$emit("update:pub", guest.pub),
            pub: guest.pub
          }, null, 8, ["onClick", "pub"]);
        }), 128))
      ])
    ]))
  ]);
}
const _sfc_main = {
  __name: "AccountSelect",
  props: {
    pub: { type: String, default: "" }
  },
  emits: ["update:pub"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const { guests, count } = useGuests();
    const __returned__ = { guests, count, emit, props, useGuests };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/account/AccountSelect.vue";
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/account/AccountSelect.vue"]]);
export { __unplugin_components_1 as default };
