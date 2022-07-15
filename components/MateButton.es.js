import { openBlock, createElementBlock, createBaseVNode, toDisplayString, createCommentVNode, createVNode, withCtx, normalizeStyle, computed, createBlock, TransitionGroup, Fragment, renderList, Transition, ref, withDirectives, vModelText, withModifiers } from "./vendor.es.js";
import { useColor, user, useUser } from "./useDraw.es.js";
import { isEmoji, useMates, useMate } from "./useMates.es.js";
import __unplugin_components_2$1 from "./AccountBadge.es.js";
import { _export_sfc } from "./plugin-vue_export-helper.es.js";
import { usePrivateChatCount } from "./usePrivate.es.js";
import { __unplugin_components_2 as __unplugin_components_2$2 } from "./times.es.js";
import { __unplugin_components_1 as __unplugin_components_1$3 } from "./plus.es.js";
const _hoisted_1$6 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M4.219 10.781L2.78 12.22l12.5 12.5l.719.687l.719-.687l12.5-12.5l-1.438-1.438L16 22.562z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$5
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$3);
}
var __unplugin_components_0$1 = { name: "la-angle-down", render: render$6 };
const _hoisted_1$5 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m16 6.594l-.719.687l-12.5 12.5L4.22 21.22L16 9.437L27.781 21.22l1.438-1.438l-12.5-12.5z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$4
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$2);
}
var __unplugin_components_1$2 = { name: "la-angle-up", render: render$5 };
const _hoisted_1$4 = {
  key: 0,
  class: "px-2 text-2xl"
};
const _hoisted_2$3 = {
  key: 0,
  class: "pr-2 text-xl"
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_account_badge = __unplugin_components_2$1;
  return openBlock(), createElementBlock("div", {
    class: "flex cursor-pointer items-center rounded-full m-1 shadow-sm hover_shadow-md transition duration-200ms ease-out filter grayscale-10 hover_grayscale-0 justify-between",
    style: normalizeStyle({ backgroundColor: $setup.colorDeep.hex($props.from) + "33" })
  }, [
    $setup.isEmoji($props.emoji) ? (openBlock(), createElementBlock("div", _hoisted_1$4, toDisplayString($props.emoji), 1)) : createCommentVNode("v-if", true),
    createVNode(_component_account_badge, {
      class: "shadow-md",
      selectable: true,
      pub: $props.to
    }, {
      default: withCtx(() => [
        $props.back ? (openBlock(), createElementBlock("div", _hoisted_2$3, toDisplayString($props.back), 1)) : createCommentVNode("v-if", true)
      ]),
      _: 1
    }, 8, ["pub"])
  ], 4);
}
const _sfc_main$3 = {
  __name: "MateLink",
  props: {
    emoji: String,
    from: String,
    to: String,
    back: String
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const colorDeep = useColor("deep");
    const __returned__ = { colorDeep, props, isEmoji, useColor, computed };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$3.__file = "src/mate/MateLink.vue";
var __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", render$4], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/mate/MateLink.vue"]]);
const _hoisted_1$3 = {
  key: 0,
  class: "flex flex-col"
};
const _hoisted_2$2 = { class: "text-lg font-bold" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
const _hoisted_4 = { class: "mr-2 font-bold" };
const _hoisted_5 = {
  key: 0,
  class: "flex flex-wrap bg-light-500 rounded-xl p-2"
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_la_angle_down = __unplugin_components_0$1;
  const _component_la_angle_up = __unplugin_components_1$2;
  const _component_mate_link = __unplugin_components_2;
  return Object.keys($setup.mates).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("div", {
      class: "flex p-4 bg-light-900 rounded-xl mb-2 items-center cursor-pointer shadow-sm hover_shadow-md transition",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.open = !$setup.open)
    }, [
      createBaseVNode("div", _hoisted_2$2, toDisplayString($props.pub == $setup.user.pub ? "My mates" : "Mates"), 1),
      _hoisted_3$1,
      createBaseVNode("div", _hoisted_4, toDisplayString(Object.keys($setup.mates).length), 1),
      !$setup.open ? (openBlock(), createBlock(_component_la_angle_down, { key: 0 })) : (openBlock(), createBlock(_component_la_angle_up, { key: 1 }))
    ]),
    createVNode(Transition, { name: "fade" }, {
      default: withCtx(() => [
        $setup.open ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createVNode(TransitionGroup, { name: "fade" }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.mates, (link, linkPub) => {
                return openBlock(), createBlock(_component_mate_link, {
                  key: linkPub,
                  emoji: link.emoji,
                  back: link.back,
                  to: linkPub,
                  from: $props.pub,
                  onClick: ($event) => _ctx.$emit("browse", linkPub)
                }, null, 8, ["emoji", "back", "to", "from", "onClick"]);
              }), 128))
            ]),
            _: 1
          })
        ])) : createCommentVNode("v-if", true)
      ]),
      _: 1
    })
  ])) : createCommentVNode("v-if", true);
}
const _sfc_main$2 = {
  __name: "MateList",
  props: {
    pub: { type: String, default: "" }
  },
  emits: ["browse"],
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const colorDeep = useColor("pale");
    const mates = useMates(props.pub);
    const open = ref(true);
    const __returned__ = { props, colorDeep, mates, open, computed, ref, useColor, useMates, isEmoji, user };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$2.__file = "src/mate/MateList.vue";
var __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", render$3], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/mate/MateList.vue"]]);
const _hoisted_1$2 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M230 96a14 14 0 0 0-14-14h-34V48a14 14 0 0 0-14-14H40a14 14 0 0 0-14 14v128a6 6 0 0 0 3.4 5.4a5.8 5.8 0 0 0 2.6.6a6.7 6.7 0 0 0 3.8-1.3L73.7 150h.3v34a14 14 0 0 0 14 14h94.3l37.9 30.7a6.7 6.7 0 0 0 3.8 1.3a5.8 5.8 0 0 0 2.6-.6a6 6 0 0 0 3.4-5.4ZM71.6 138a6.5 6.5 0 0 0-3.8 1.3L38 163.4V48a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v88a2 2 0 0 1-2 2Zm116.6 49.3a6.5 6.5 0 0 0-3.8-1.3H88a2 2 0 0 1-2-2v-34h82a14 14 0 0 0 14-14V94h34a2 2 0 0 1 2 2v115.4Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2$1
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3);
}
var __unplugin_components_0 = { name: "ph-chats-light", render: render$2 };
const _hoisted_1$1 = { class: "font-bold text-lg mx-2" };
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ph_chats_light = __unplugin_components_0;
  return openBlock(), createElementBlock("div", {
    class: "pl-2 flex items-center bg-light-200 rounded-xl cursor-pointer",
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("chat")),
    style: normalizeStyle({ opacity: $setup.available ? 1 : 0.1 })
  }, [
    createVNode(_component_ph_chats_light, { class: "text-xl" }),
    createBaseVNode("div", _hoisted_1$1, toDisplayString($setup.count), 1)
  ], 4);
}
const _sfc_main$1 = {
  __name: "ChatPrivateCount",
  props: {
    pub: String
  },
  emits: ["chat"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const { count, available } = usePrivateChatCount(props.pub);
    const __returned__ = { props, emit, count, available, usePrivateChatCount };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$1.__file = "src/chat/private/ChatPrivateCount.vue";
var __unplugin_components_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/chat/private/ChatPrivateCount.vue"]]);
const _hoisted_1 = {
  key: 0,
  class: "flex items-center"
};
const _hoisted_2 = {
  key: 0,
  class: "p-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_account_badge = __unplugin_components_2$1;
  const _component_la_plus = __unplugin_components_1$3;
  const _component_la_times = __unplugin_components_2$2;
  return $setup.user.is && $setup.user.pub != $props.pub ? (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("button", {
      class: "flex items-center rounded-2xl shadow-xl px-2 text-3xl bg-light-500",
      onClick: _cache[2] || (_cache[2] = ($event) => $setup.toggleMate()),
      style: normalizeStyle({ backgroundColor: $setup.isMate ? $setup.colorDeep.hex($props.pub) : "" })
    }, [
      createVNode(_component_account_badge, {
        pub: $setup.user.pub,
        showName: false
      }, null, 8, ["pub"]),
      $setup.isMate ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString($setup.isMate), 1)) : createCommentVNode("v-if", true),
      !$setup.isMate ? withDirectives((openBlock(), createElementBlock("input", {
        key: 1,
        class: "mx-1 rounded-2xl w-46px p-2 rounded-lg shadow-inner text-center",
        type: "text",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.emoji = $event),
        placeholder: "",
        onClick: _cache[1] || (_cache[1] = withModifiers(() => {
        }, ["stop", "prevent"]))
      }, null, 512)), [
        [vModelText, $setup.emoji]
      ]) : createCommentVNode("v-if", true),
      !$setup.isMate ? (openBlock(), createBlock(_component_la_plus, { key: 2 })) : (openBlock(), createBlock(_component_la_times, { key: 3 }))
    ], 4)
  ])) : createCommentVNode("v-if", true);
}
const _sfc_main = {
  __name: "MateButton",
  props: {
    pub: { type: String, default: "" }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const { user: user2 } = useUser();
    const colorDeep = useColor("deep");
    const { emoji, isMate, toggleMate } = useMate(props.pub);
    const __returned__ = { props, user: user2, colorDeep, emoji, isMate, toggleMate, useUser, useMate, useColor };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/mate/MateButton.vue";
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/mate/MateButton.vue"]]);
export { __unplugin_components_0$1 as __unplugin_components_0, __unplugin_components_1$2 as __unplugin_components_1, __unplugin_components_1 as __unplugin_components_1$1, __unplugin_components_1$1 as __unplugin_components_1$2, __unplugin_components_6 };
