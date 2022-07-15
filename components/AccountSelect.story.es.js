import { __vitePreload } from "./mapping.es.js";
import { resolveComponent, openBlock, createBlock, withCtx, createVNode, createBaseVNode, defineAsyncComponent, reactive } from "./vendor.es.js";
import { EVENT_SEND } from "./const.es.js";
import { _export_sfc } from "./plugin-vue_export-helper.es.js";
async function hstEvent(name, argument) {
  var _a;
  console.log("[histoire] Event fired", { name, argument });
  const event = {
    name,
    argument: JSON.parse(stringifyEvent(argument))
  };
  if (location.href.includes("__sandbox")) {
    (_a = window.parent) == null ? void 0 : _a.postMessage({
      type: EVENT_SEND,
      event
    });
  } else {
    const { useEventsStore } = await __vitePreload(() => import("./events.es.js"), true ? ["events.es.js","vendor.es.js","story.es.js","mapping.es.js"] : void 0);
    useEventsStore().addEvent(event);
  }
}
function stringifyEvent(e) {
  const obj = {};
  for (const k in e) {
    obj[k] = e[k];
  }
  return JSON.stringify(obj, (k, v) => {
    if (v instanceof Node)
      return "Node";
    if (v instanceof Window)
      return "Window";
    return v;
  }, " ");
}
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "p-2 flex flex-col gap-4" }, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Account/Select",
    icon: "la:list"
  }, {
    controls: withCtx(() => [
      _hoisted_1
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Round" }, {
        default: withCtx(() => [
          createVNode($setup["AccountSelect"], {
            pub: $setup.state.pub,
            "onUpdate:pub": [
              _cache[0] || (_cache[0] = ($event) => $setup.state.pub = $event),
              _cache[1] || (_cache[1] = ($event) => $setup.hstEvent("update:pub", $event))
            ]
          }, null, 8, ["pub"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var block0 = (Comp) => {
  Comp.doc = '<h3 id="select-a-user-among-current-room-guests" tabindex="-1">Select a user among current room guests <a class="header-anchor" href="#select-a-user-among-current-room-guests" aria-hidden="true">#</a></h3>\n';
};
const _sfc_main = {
  __name: "AccountSelect.story",
  setup(__props, { expose }) {
    expose();
    const AccountSelect = defineAsyncComponent(() => __vitePreload(() => import("./AccountSelect.es.js"), true ? ["AccountSelect.es.js","useDraw.es.js","vendor.es.js","useGuests.es.js","AccountBadge.es.js","AccountAvatar.es.js","plugin-vue_export-helper.es.js","times.es.js"] : void 0));
    const state = reactive({
      pub: ""
    });
    const __returned__ = { AccountSelect, state, defineAsyncComponent, reactive, hstEvent };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
if (typeof block0 === "function")
  block0(_sfc_main);
_sfc_main.__file = "src/account/AccountSelect.story.vue";
var AccountSelect_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/account/AccountSelect.story.vue"]]);
export { AccountSelect_story as default };
