import { useUser, createRoom, enterRoom, recreateRoom, updateProfile, useAccount, addProfileField, useColor, usePass, selectedUser, safeHash } from "./useDraw.es.js";
import { openBlock, createElementBlock, createBaseVNode, toDisplayString, createBlock, createVNode, withCtx, Fragment, renderList, createCommentVNode, Transition, computed, ref, SEA, withDirectives, vModelText, withKeys, urlRegex, normalizeStyle, useRefHistory, nextTick, vModelDynamic, renderSlot, normalizeClass, TransitionGroup, useClipboard, useShare, createTextVNode } from "./vendor.es.js";
import { useGift } from "./useGifts.es.js";
import { useGuests } from "./useGuests.es.js";
import __unplugin_components_1$b from "./AccountSelect.es.js";
import { __unplugin_components_2 as __unplugin_components_2$8 } from "./UiLayer.es.js";
import { __unplugin_components_0 as __unplugin_components_0$5, __unplugin_components_1 as __unplugin_components_1$4, __unplugin_components_1$1 as __unplugin_components_1$6, __unplugin_components_1$2 as __unplugin_components_1$9, __unplugin_components_6 as __unplugin_components_6$2, __unplugin_components_3 as __unplugin_components_3$3 } from "./AccountHome.es.js";
import { __unplugin_components_3 as __unplugin_components_3$2, __unplugin_components_2 as __unplugin_components_2$5, __unplugin_components_6, __unplugin_components_4 as __unplugin_components_4$2, __unplugin_components_1 as __unplugin_components_1$a } from "./exit-outline.es.js";
import { __unplugin_components_2 as __unplugin_components_2$6 } from "./RoomCard.es.js";
import { _export_sfc } from "./plugin-vue_export-helper.es.js";
import { usePrivateChatList } from "./useZip.es.js";
import __unplugin_components_1$5 from "./AccountBadge.es.js";
import { __unplugin_components_1$1 as __unplugin_components_1$8 } from "./PostActionReact.es.js";
import { __unplugin_components_2 as __unplugin_components_2$7 } from "./times.es.js";
import { __unplugin_components_1 as __unplugin_components_1$7 } from "./check.es.js";
import { useBackground } from "./useBackground.es.js";
import __unplugin_components_0$6 from "./UserAvatar.es.js";
import __unplugin_components_0$7 from "./AccountAvatar.es.js";
import { __unplugin_components_0 as __unplugin_components_0$8, __unplugin_components_6 as __unplugin_components_6$1, __unplugin_components_8 } from "./UserAuth.es.js";
import { downloadFile } from "./useFile.es.js";
import __unplugin_components_9 from "./QrShow.es.js";
import "./useMates.es.js";
import "./trash.es.js";
import "./useMd.es.js";
const _hoisted_1$l = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$k = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M16 8C7.664 8 1.25 15.344 1.25 15.344L.656 16l.594.656s5.848 6.668 13.625 7.282c.371.046.742.062 1.125.062s.754-.016 1.125-.063c7.777-.613 13.625-7.28 13.625-7.28l.594-.657l-.594-.656S24.336 8 16 8zm0 2c2.203 0 4.234.602 6 1.406A6.89 6.89 0 0 1 23 15a6.995 6.995 0 0 1-6.219 6.969c-.02.004-.043-.004-.062 0c-.239.011-.477.031-.719.031c-.266 0-.523-.016-.781-.031A6.995 6.995 0 0 1 9 15c0-1.305.352-2.52.969-3.563h-.031C11.717 10.617 13.773 10 16 10zm0 2a3 3 0 1 0 .002 6.002A3 3 0 0 0 16 12zm-8.75.938A9.006 9.006 0 0 0 7 15c0 1.754.5 3.395 1.375 4.781A23.196 23.196 0 0 1 3.531 16a23.93 23.93 0 0 1 3.719-3.063zm17.5 0A23.93 23.93 0 0 1 28.469 16a23.196 23.196 0 0 1-4.844 3.781A8.929 8.929 0 0 0 25 15c0-.715-.094-1.398-.25-2.063z"
}, null, -1);
const _hoisted_3$j = [
  _hoisted_2$k
];
function render$l(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, _hoisted_3$j);
}
var __unplugin_components_2$4 = { name: "la-eye", render: render$l };
const _hoisted_1$k = {
  key: 0,
  class: "flex flex-col"
};
const _hoisted_2$j = /* @__PURE__ */ createBaseVNode("div", { class: "text-lg font-bold" }, "My rooms", -1);
const _hoisted_3$i = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
const _hoisted_4$8 = { class: "text-md font-bold mr-2" };
const _hoisted_5$5 = {
  key: 0,
  class: "flex flex-wrap gap-2 mb-8"
};
const _hoisted_6$4 = { class: "p-4 flex flex-wrap gap-1" };
const _hoisted_7$3 = ["onClick"];
const _hoisted_8$3 = /* @__PURE__ */ createBaseVNode("div", { class: "ml-2" }, "View", -1);
const _hoisted_9$2 = ["onClick"];
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("div", { class: "ml-2" }, "Enter", -1);
const _hoisted_11$1 = ["onClick"];
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("div", { class: "ml-2" }, "Renew", -1);
function render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_la_angle_down = __unplugin_components_0$5;
  const _component_la_angle_up = __unplugin_components_1$4;
  const _component_la_eye = __unplugin_components_2$4;
  const _component_ion_enter_outline = __unplugin_components_3$2;
  const _component_la_tools = __unplugin_components_2$5;
  const _component_room_card = __unplugin_components_2$6;
  return Object.keys($setup.rooms).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$k, [
    createBaseVNode("div", {
      class: "flex p-4 bg-light-900 rounded-xl mb-2 items-center cursor-pointer shadow-sm hover_shadow-md transition",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.open = !$setup.open)
    }, [
      _hoisted_2$j,
      _hoisted_3$i,
      createBaseVNode("div", _hoisted_4$8, toDisplayString(Object.keys($setup.rooms).length), 1),
      !$setup.open ? (openBlock(), createBlock(_component_la_angle_down, { key: 0 })) : (openBlock(), createBlock(_component_la_angle_up, { key: 1 }))
    ]),
    createVNode(Transition, {
      name: "fade",
      mode: "out-in"
    }, {
      default: withCtx(() => [
        $setup.open ? (openBlock(), createElementBlock("div", _hoisted_5$5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.rooms, (enc, room) => {
            return openBlock(), createBlock(_component_room_card, {
              style: { "flex": "1 1 200px" },
              key: room,
              pub: room
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_6$4, [
                  createBaseVNode("button", {
                    class: "button",
                    onClick: ($event) => _ctx.$emit("browse", room)
                  }, [
                    createVNode(_component_la_eye),
                    _hoisted_8$3
                  ], 8, _hoisted_7$3),
                  createBaseVNode("button", {
                    class: "button",
                    onClick: ($event) => $setup.enterRoom(room)
                  }, [
                    createVNode(_component_ion_enter_outline),
                    _hoisted_10$1
                  ], 8, _hoisted_9$2),
                  createBaseVNode("button", {
                    class: "button",
                    onClick: ($event) => $setup.recreateRoom(enc)
                  }, [
                    createVNode(_component_la_tools),
                    _hoisted_12$1
                  ], 8, _hoisted_11$1)
                ])
              ]),
              _: 2
            }, 1032, ["pub"]);
          }), 128))
        ])) : createCommentVNode("v-if", true)
      ]),
      _: 1
    })
  ])) : createCommentVNode("v-if", true);
}
const _sfc_main$c = {
  __name: "UserRooms",
  emits: ["browse"],
  setup(__props, { expose, emit }) {
    expose();
    const { user } = useUser();
    const rooms = computed(() => {
      let list = user.safe.rooms;
      if (list) {
        delete list["_"];
        return list;
      } else {
        return {};
      }
    });
    const open = ref(false);
    const __returned__ = { emit, user, rooms, open, computed, ref, useUser, createRoom, SEA, enterRoom, recreateRoom };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$c.__file = "src/user/UserRooms.vue";
var __unplugin_components_7$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", render$k], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserRooms.vue"]]);
const _hoisted_1$j = { class: "flex flex-col p-4 gap-2" };
const _hoisted_2$i = { class: "font-bold text-xl" };
const _hoisted_3$h = { class: "flex flex-wrap gap-2" };
const _hoisted_4$7 = ["onClick"];
const _hoisted_5$4 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_account_badge = __unplugin_components_1$5;
  const _component_chat_private_count = __unplugin_components_1$6;
  return openBlock(), createElementBlock("div", _hoisted_1$j, [
    createBaseVNode("div", _hoisted_2$i, toDisplayString($props.title), 1),
    createBaseVNode("div", _hoisted_3$h, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.list, (chat, pub) => {
        return openBlock(), createElementBlock("div", {
          class: "p-2 rounded-xl flex items-center bg-light-900 cursor-pointer",
          key: pub,
          onClick: ($event) => _ctx.$emit("chat", pub)
        }, [
          createVNode(_component_account_badge, { pub }, null, 8, ["pub"]),
          _hoisted_5$4,
          createVNode(_component_chat_private_count, { pub }, null, 8, ["pub"])
        ], 8, _hoisted_4$7);
      }), 128))
    ])
  ]);
}
const _sfc_main$b = {
  __name: "ChatPrivateList",
  props: {
    title: { type: String, default: "Private chats" }
  },
  emits: ["chat"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const { list } = usePrivateChatList();
    const __returned__ = { props, list, emit, usePrivateChatList };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$b.__file = "src/chat/private/ChatPrivateList.vue";
var __unplugin_components_5$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", render$j], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/chat/private/ChatPrivateList.vue"]]);
const _hoisted_1$i = { class: "p-2 flex items-center break-all" };
const _hoisted_2$h = { class: "mr-2 font-bold" };
const _hoisted_3$g = { class: "flex items-center" };
const _hoisted_4$6 = {
  key: 0,
  class: "text-md flex items-center"
};
const _hoisted_5$3 = {
  key: 0,
  class: "p-0"
};
const _hoisted_6$3 = ["href"];
const _hoisted_7$2 = {
  key: 1,
  class: "p-1 flex items-center flex-1"
};
const _hoisted_8$2 = { class: "-ml-16" };
function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_la_pen = __unplugin_components_6;
  const _component_la_check = __unplugin_components_1$7;
  const _component_la_times = __unplugin_components_2$7;
  return openBlock(), createElementBlock("div", _hoisted_1$i, [
    createBaseVNode("div", _hoisted_2$h, toDisplayString($props.field), 1),
    createBaseVNode("div", _hoisted_3$g, [
      !$setup.edit ? (openBlock(), createElementBlock("div", _hoisted_4$6, [
        !$setup.isLink($props.content) ? (openBlock(), createElementBlock("div", _hoisted_5$3, toDisplayString($props.content), 1)) : (openBlock(), createElementBlock("a", {
          key: 1,
          class: "font-bold underline",
          href: $props.content,
          target: "_blank"
        }, toDisplayString($props.content), 9, _hoisted_6$3)),
        createBaseVNode("button", {
          class: "p-1",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.edit = true)
        }, [
          createVNode(_component_la_pen)
        ])
      ])) : (openBlock(), createElementBlock("div", _hoisted_7$2, [
        withDirectives(createBaseVNode("input", {
          class: "p-2 rounded-xl pr-16",
          type: "text",
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.text = $event),
          onKeydown: _cache[2] || (_cache[2] = withKeys(($event) => $setup.update(), ["enter"]))
        }, null, 544), [
          [vModelText, $setup.text]
        ]),
        createBaseVNode("div", _hoisted_8$2, [
          createBaseVNode("button", {
            class: "p-1",
            type: "submit",
            onClick: _cache[3] || (_cache[3] = ($event) => $setup.update())
          }, [
            createVNode(_component_la_check)
          ]),
          createBaseVNode("button", {
            class: "p-1",
            onClick: _cache[4] || (_cache[4] = ($event) => {
              $setup.text = "";
              $setup.edit = false;
            })
          }, [
            createVNode(_component_la_times)
          ])
        ])
      ]))
    ])
  ]);
}
const _sfc_main$a = {
  __name: "UserProfileField",
  props: {
    field: { type: String, default: "" },
    content: { type: String, default: "" }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const edit = ref(false);
    const text = ref(props.content);
    function update() {
      updateProfile(props.field, text.value);
      edit.value = false;
      text.value = "";
    }
    function isLink(text2) {
      return urlRegex({ exact: true }).test(text2);
    }
    const __returned__ = { props, edit, text, update, isLink, updateProfile, ref, urlRegex };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$a.__file = "src/user/UserProfileField.vue";
var __unplugin_components_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", render$i], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserProfileField.vue"]]);
const _hoisted_1$h = { class: "flex flex-col" };
const _hoisted_2$g = { class: "flex flex-col p-2" };
const _hoisted_3$f = { class: "flex items-center flex-wrap" };
const _hoisted_4$5 = /* @__PURE__ */ createBaseVNode("div", { class: "p-1 text-sm" }, "Add", -1);
function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_user_profile_field = __unplugin_components_0$4;
  const _component_la_plus = __unplugin_components_1$8;
  return openBlock(), createElementBlock("div", _hoisted_1$h, [
    createBaseVNode("div", _hoisted_2$g, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.account.profile, (d, k) => {
        return openBlock(), createBlock(_component_user_profile_field, {
          key: d,
          field: k,
          content: d
        }, null, 8, ["field", "content"]);
      }), 128)),
      createBaseVNode("div", _hoisted_3$f, [
        withDirectives(createBaseVNode("input", {
          class: "p-2 rounded-lg shadow-md",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.newField = $event),
          onKeydown: _cache[1] || (_cache[1] = withKeys(($event) => $setup.addProfileField($setup.newField), ["enter"])),
          placeholder: "New profile field"
        }, null, 544), [
          [vModelText, $setup.newField]
        ]),
        createBaseVNode("button", {
          class: "m-2 button items-center",
          onClick: _cache[2] || (_cache[2] = ($event) => $setup.addProfileField($setup.newField))
        }, [
          createVNode(_component_la_plus),
          _hoisted_4$5
        ])
      ])
    ])
  ]);
}
const _sfc_main$9 = {
  __name: "UserProfile",
  setup(__props, { expose }) {
    expose();
    const { user } = useUser();
    const { account } = useAccount(user.pub);
    const newField = ref("");
    const __returned__ = { user, account, newField, useAccount, useUser, addProfileField, ref };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$9.__file = "src/user/UserProfile.vue";
var __unplugin_components_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", render$h], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserProfile.vue"]]);
const _hoisted_1$g = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$f = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M16 3c-3.035 0-5.586 1.965-6.625 4.625l1.844.75C11.977 6.434 13.836 5 16 5c2.754 0 5 2.246 5 5v3H6v16h20V13h-3v-3c0-3.844-3.156-7-7-7zM8 15h16v12H8z"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$f
];
function render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, _hoisted_3$e);
}
var __unplugin_components_2$3 = { name: "la-unlock", render: render$g };
const _hoisted_1$f = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$e = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M16 3c-3.844 0-7 3.156-7 7v3H6v16h20V13h-3v-3c0-3.844-3.156-7-7-7zm0 2c2.754 0 5 2.246 5 5v3H11v-3c0-2.754 2.246-5 5-5zM8 15h16v12H8z"
}, null, -1);
const _hoisted_3$d = [
  _hoisted_2$e
];
function render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_3$d);
}
var __unplugin_components_1$3 = { name: "la-lock", render: render$f };
function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "p-1 m-1 rounded-full transition-all duration-300 ease-in-out",
    style: normalizeStyle({ backgroundColor: $props.blink ? "white" : "black" })
  }, null, 4);
}
const _sfc_main$8 = {
  __name: "UtilPulse",
  props: {
    blink: Boolean
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$8.__file = "src/util/UtilPulse.vue";
var __unplugin_components_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", render$e], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/util/UtilPulse.vue"]]);
const _hoisted_1$e = { class: "flex items-center" };
const _hoisted_2$d = { class: "text-2xl mx-2 font-bold" };
const _hoisted_3$c = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_user_avatar = __unplugin_components_0$6;
  const _component_mate_button = __unplugin_components_1$9;
  const _component_util_pulse = __unplugin_components_2$2;
  const _component_la_lock = __unplugin_components_1$3;
  const _component_la_unlock = __unplugin_components_2$3;
  const _component_ion_exit_outline = __unplugin_components_4$2;
  return $setup.user.is ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "p-4 flex items-center",
    style: normalizeStyle({ ...$setup.bg })
  }, [
    createBaseVNode("div", _hoisted_1$e, [
      createVNode(_component_user_avatar, { size: 120 }),
      createBaseVNode("div", _hoisted_2$d, toDisplayString((_a = $setup.user) == null ? void 0 : _a.name), 1)
    ]),
    createVNode(_component_mate_button, {
      pub: $setup.user.pub
    }, null, 8, ["pub"]),
    _hoisted_3$c,
    createVNode(_component_util_pulse, {
      blink: $setup.user.blink
    }, null, 8, ["blink"]),
    createBaseVNode("button", {
      class: "p-2 text-2xl",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.user.db.get("safe").get("saved").put(!$setup.user.safe.saved))
    }, [
      $setup.user.safe.saved ? (openBlock(), createBlock(_component_la_lock, { key: 0 })) : (openBlock(), createBlock(_component_la_unlock, { key: 1 }))
    ]),
    createBaseVNode("button", {
      class: "text-2xl ml-1 p-2",
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.leave())
    }, [
      createVNode(_component_ion_exit_outline)
    ])
  ], 4)) : createCommentVNode("v-if", true);
}
const _sfc_main$7 = {
  __name: "UserPanel",
  emits: ["browse"],
  setup(__props, { expose, emit }) {
    expose();
    const { user, leave } = useUser();
    const colorDeep = useColor("deep");
    const bg = computed(() => useBackground({ pub: user.pub, size: 600, light: 0.5, draw: "circles" }));
    const __returned__ = { user, leave, colorDeep, emit, bg, computed, useUser, useColor, useBackground };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$7.__file = "src/user/UserPanel.vue";
var __unplugin_components_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", render$d], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserPanel.vue"]]);
const _hoisted_1$d = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$c = /* @__PURE__ */ createBaseVNode("g", {
  fill: "currentColor",
  "fill-rule": "evenodd"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M47.895 88.097c.001-4.416 3.064-9.837 6.854-12.117l66.257-39.858c3.785-2.277 9.915-2.277 13.707.008l66.28 39.934c3.786 2.28 6.853 7.703 6.852 12.138l-.028 79.603c-.001 4.423-3.069 9.865-6.848 12.154l-66.4 40.205c-3.781 2.29-9.903 2.289-13.69-.01l-66.167-40.185c-3.78-2.295-6.842-7.733-6.84-12.151l.023-79.72zm13.936-6.474l65.834 36.759l62.766-36.278l-62.872-36.918L61.83 81.623zM57.585 93.52c0 1.628-1.065 71.86-1.065 71.86c-.034 2.206 1.467 4.917 3.367 6.064l61.612 37.182l.567-77.413s-64.48-39.322-64.48-37.693zm76.107 114.938l60.912-38.66c2.332-1.48 4.223-4.915 4.223-7.679V93.125l-65.135 37.513v77.82z" }),
  /* @__PURE__ */ createBaseVNode("path", { d: "M77.76 132.287c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526zm32 21c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526zm-32 16c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526zm32 21c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526zm78.238-78.052c-4.783-2.762-11.122-.735-14.16 4.526c-3.037 5.261-1.623 11.765 3.16 14.526c4.783 2.762 11.123.735 14.16-4.526c3.038-5.261 1.623-11.765-3.16-14.526zm-16.238 29c-4.782-2.762-11.122-.735-14.16 4.526c-3.037 5.261-1.622 11.765 3.16 14.526c4.783 2.762 11.123.735 14.16-4.526c3.038-5.261 1.623-11.765-3.16-14.526zm-17 28c-4.782-2.762-11.122-.735-14.16 4.526c-3.037 5.261-1.622 11.765 3.16 14.526c4.783 2.762 11.123.735 14.16-4.526c3.038-5.261 1.623-11.765-3.16-14.526zM128.5 69c-6.351 0-11.5 4.925-11.5 11s5.149 11 11.5 11S140 86.075 140 80s-5.149-11-11.5-11z" })
], -1);
const _hoisted_3$b = [
  _hoisted_2$c
];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_3$b);
}
var __unplugin_components_2$1 = { name: "fad-random1dice", render: render$c };
const _hoisted_1$c = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$b = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m12.781 5.281l-8 8l-.687.719l.687.719l8 8l1.438-1.438L7.938 15H21c2.754 0 5 2.246 5 5v7h2v-7c0-3.844-3.156-7-7-7H7.937l6.282-6.281z"
}, null, -1);
const _hoisted_3$a = [
  _hoisted_2$b
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_3$a);
}
var __unplugin_components_1$2 = { name: "la-undo", render: render$b };
const _sfc_main$6 = {
  __name: "UserCreate",
  setup(__props, { expose }) {
    expose();
    const colorDeep = useColor("deep");
    const colorLight = useColor("light");
    const { user, auth, create } = useUser();
    const name = ref("");
    const newPair = ref(null);
    const { history, undo, redo } = useRefHistory(newPair);
    async function generatePair() {
      newPair.value = await SEA.pair();
    }
    generatePair();
    function createUser() {
      auth(newPair.value, () => nextTick(() => {
        updateProfile("name", name.value);
      }));
    }
    const __returned__ = { colorDeep, colorLight, user, auth, create, name, newPair, history, undo, redo, generatePair, createUser, useUser, SEA, useColor, updateProfile, useRefHistory, ref, nextTick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1$b = /* @__PURE__ */ createBaseVNode("div", { class: "text-xl font-bold" }, "Create a new account", -1);
const _hoisted_2$a = /* @__PURE__ */ createBaseVNode("div", { class: "mb-4 mt-2" }, "Tap the circle to generate a new key", -1);
const _hoisted_3$9 = { class: "flex flex-col" };
const _hoisted_4$4 = { class: "flex justify-center my-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_account_avatar = __unplugin_components_0$7;
  const _component_la_undo = __unplugin_components_1$2;
  const _component_fad_random_1dice = __unplugin_components_2$1;
  return !$setup.user.is ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "flex flex-col items-center flex-1 p-2 bg-light-700 rounded-3xl shadow-lg text-center p-4 transition duration-300ms ease-in",
    style: normalizeStyle({ backgroundColor: $setup.colorDeep.hex(((_a = $setup.newPair) == null ? void 0 : _a.pub) || "") })
  }, [
    _hoisted_1$b,
    _hoisted_2$a,
    $setup.newPair ? (openBlock(), createBlock(_component_account_avatar, {
      key: 0,
      class: "cursor-pointer shadow-xl border-8",
      pub: $setup.newPair.pub,
      size: 200,
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.generatePair()),
      style: normalizeStyle({ borderColor: $setup.colorDeep.hex($setup.newPair.pub) })
    }, null, 8, ["pub", "style"])) : createCommentVNode("v-if", true),
    createBaseVNode("div", _hoisted_3$9, [
      createBaseVNode("div", _hoisted_4$4, [
        $setup.history.length > 2 ? (openBlock(), createElementBlock("button", {
          key: 0,
          class: "m-2 button items-center",
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.undo())
        }, [
          createVNode(_component_la_undo, { class: "text-2xl" })
        ])) : createCommentVNode("v-if", true),
        createBaseVNode("button", {
          class: "m-2 button items-center",
          onClick: _cache[2] || (_cache[2] = ($event) => $setup.generatePair())
        }, [
          createVNode(_component_fad_random_1dice, { class: "text-3xl" })
        ])
      ]),
      withDirectives(createBaseVNode("input", {
        class: "p-4 rounded-2xl my-2",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.name = $event),
        placeholder: "Enter your name or nickname"
      }, null, 512), [
        [vModelText, $setup.name]
      ]),
      $setup.newPair && !$setup.user.is && $setup.name ? (openBlock(), createElementBlock("button", {
        key: 0,
        class: "button w-full flex justify-center items-center",
        onClick: _cache[4] || (_cache[4] = ($event) => $setup.createUser()),
        style: normalizeStyle({ backgroundColor: $setup.colorLight.hex($setup.newPair.pub) })
      }, "Authenticate", 4)) : createCommentVNode("v-if", true)
    ])
  ], 4)) : createCommentVNode("v-if", true);
}
_sfc_main$6.__file = "src/user/UserCreate.vue";
var __unplugin_components_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserCreate.vue"]]);
const _hoisted_1$a = { class: "flex flex-col p-4" };
const _hoisted_2$9 = {
  key: 1,
  class: "flex justify-center mt-4"
};
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_user_auth = __unplugin_components_0$8;
  const _component_user_create = __unplugin_components_1$1;
  return openBlock(), createElementBlock("div", _hoisted_1$a, [
    !$setup.generate ? (openBlock(), createElementBlock("button", {
      key: 0,
      class: "text-xl flex justify-center bg-light-900 hover_bg-light-50 p-4 rounded-2xl shadow-lg hover_shadow-xl transition duration-200 ease-out font-bold",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.generate = true)
    }, "Create a new account")) : createCommentVNode("v-if", true),
    !$setup.generate ? (openBlock(), createElementBlock("div", _hoisted_2$9, "or")) : createCommentVNode("v-if", true),
    !$setup.generate ? (openBlock(), createBlock(_component_user_auth, { key: 2 })) : (openBlock(), createBlock(_component_user_create, { key: 3 }))
  ]);
}
const _sfc_main$5 = {
  __name: "UserLogin",
  setup(__props, { expose }) {
    expose();
    const generate = ref(false);
    const __returned__ = { generate, ref };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$5.__file = "src/user/UserLogin.vue";
var __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", render$a], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserLogin.vue"]]);
const _hoisted_1$9 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$8 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M10 5v1.9l-5.992 3.903V27h23.984V10.803L22 6.898V5H10zm2 2h8v7.682l-4 2.591l-4-2.591V7zm1 2v2h6V9h-6zm-3 .285v4.102l-3.156-2.045L10 9.285zm12 0l3.156 2.057L22 13.387V9.285zM13 12v2h6v-2h-6zm-6.992 1.184L16 19.656l9.992-6.472V25H6.008V13.184z"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$8
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$8);
}
var __unplugin_components_7 = { name: "la-envelope-open-text", render: render$9 };
const _hoisted_1$8 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M21.75 4c-1.672 0-3.258.66-4.438 1.844l-1.468 1.468A6.252 6.252 0 0 0 14 11.75c0 .793.152 1.566.438 2.281l1.624-1.625A4.285 4.285 0 0 1 17.25 8.72l1.469-1.469A4.28 4.28 0 0 1 21.75 6c1.137 0 2.195.445 3 1.25a4.274 4.274 0 0 1 0 6.031l-1.469 1.469A4.28 4.28 0 0 1 20.25 16c-.223 0-.441-.023-.656-.063l-1.625 1.626A6.156 6.156 0 0 0 20.25 18c1.672 0 3.258-.66 4.438-1.844l1.468-1.468A6.252 6.252 0 0 0 28 10.25c0-1.672-.66-3.223-1.844-4.406A6.173 6.173 0 0 0 21.75 4zm-2.469 7.281l-8 8l1.438 1.438l8-8zM11.75 14c-1.672 0-3.258.66-4.438 1.844l-1.468 1.469A6.252 6.252 0 0 0 4 21.75c0 1.672.66 3.223 1.844 4.406A6.173 6.173 0 0 0 10.25 28c1.672 0 3.258-.66 4.438-1.844l1.468-1.468A6.252 6.252 0 0 0 18 20.25c0-.793-.152-1.566-.438-2.281l-1.625 1.625a4.285 4.285 0 0 1-1.187 3.687l-1.469 1.469A4.28 4.28 0 0 1 10.25 26a4.208 4.208 0 0 1-3-1.25a4.274 4.274 0 0 1 0-6.031l1.469-1.469A4.28 4.28 0 0 1 11.75 16c.223 0 .441.023.656.063l1.625-1.625A6.156 6.156 0 0 0 11.75 14z"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$7);
}
var __unplugin_components_5 = { name: "la-link", render: render$8 };
const _hoisted_1$7 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M4 4v20h7v-2H6V6h12v1h2V4zm8 4v20h16V8zm2 2h12v16H14z"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$6
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$6);
}
var __unplugin_components_4 = { name: "la-copy", render: render$7 };
const _hoisted_1$6 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M19.719 5.281L18.28 6.72L24.563 13H11c-3.855 0-7 3.145-7 7s3.145 7 7 7v-2c-2.773 0-5-2.227-5-5s2.227-5 5-5h13.563l-6.282 6.281l1.438 1.438l8-8l.687-.719l-.687-.719z"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$5);
}
var __unplugin_components_3 = { name: "la-share", render: render$6 };
const _hoisted_1$5 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m17.7 17l6.198 8.398L21.5 27L16 18.3L10.5 27l-2.3-1.602L14.397 17l-9.296-2.398L6 12l9.102 3.2L14.5 5h3L17 15.2l9-3.2l.8 2.7z"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$4);
}
var __unplugin_components_0$3 = { name: "la-asterisk", render: render$5 };
const _hoisted_1$4 = { class: "flex flex-col mt-4 bg-light-700 p-4 m-2 shadow-lg rounded-xl" };
const _hoisted_2$3 = { class: "flex items-center mb-4" };
const _hoisted_3$3 = { class: "mx-2" };
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("div", { class: "px-1" }, "Enter a passphrase to encrypt your key with", -1);
const _hoisted_5$2 = { class: "flex items-center px-4" };
const _hoisted_6$2 = { class: "ml-1 flex flex-col items-center" };
const _hoisted_7$1 = ["type", "placeholder"];
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("div", { class: "ml-2" }, "Set", -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("div", { class: "ml-2" }, "Show", -1);
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c;
  const _component_la_asterisk = __unplugin_components_0$3;
  const _component_la_check = __unplugin_components_1$7;
  const _component_la_eye = __unplugin_components_2$4;
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createBaseVNode("div", _hoisted_2$3, [
      createBaseVNode("div", _hoisted_3$3, [
        createVNode(_component_la_asterisk)
      ]),
      _hoisted_4$3
    ]),
    createBaseVNode("div", _hoisted_5$2, [
      createBaseVNode("div", _hoisted_6$2, [
        ((_a = $setup.pass.safe) == null ? void 0 : _a.enc) ? (openBlock(), createBlock(_component_la_check, {
          key: 0,
          class: "text-green-600 m-1"
        })) : createCommentVNode("v-if", true)
      ]),
      withDirectives(createBaseVNode("input", {
        class: "p-2 mx-4 rounded-xl w-full",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.pass.input = $event),
        type: $setup.pass.show ? "text" : "password",
        placeholder: `Your passphrase of ${$setup.pass.minLength} or more letters`
      }, null, 8, _hoisted_7$1), [
        [vModelDynamic, $setup.pass.input]
      ]),
      $setup.pass.input.length >= $setup.pass.minLength ? (openBlock(), createElementBlock("button", {
        key: 0,
        class: "button items-center",
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.pass.set())
      }, [
        createVNode(_component_la_check),
        _hoisted_8$1
      ])) : createCommentVNode("v-if", true),
      ((_c = (_b = $setup.pass) == null ? void 0 : _b.safe) == null ? void 0 : _c.enc) ? (openBlock(), createElementBlock("button", {
        key: 1,
        class: "button items-center",
        onClick: _cache[2] || (_cache[2] = ($event) => $setup.pass.show = !$setup.pass.show)
      }, [
        createVNode(_component_la_eye),
        _hoisted_9$1
      ])) : createCommentVNode("v-if", true)
    ])
  ]);
}
const _sfc_main$4 = {
  __name: "UserPass",
  setup(__props, { expose }) {
    expose();
    const { pass } = usePass();
    const __returned__ = { pass, usePass };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$4.__file = "src/user/UserPass.vue";
var __unplugin_components_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", render$4], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserPass.vue"]]);
const _hoisted_1$3 = {
  key: 0,
  class: "flex flex-col items-stretch pb-4 border-1 border-dark-100 border-opacity-10 max-w-120 mx-auto"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("div", { class: "mt-4 mx-6" }, "Please make sure to safely store your cryptographic keypair to be able to use it again later", -1);
const _hoisted_3$2 = {
  key: 0,
  class: "flex p-4 items-center bg-dark-100 bg-opacity-20 mt-2 shadow-inset"
};
const _hoisted_4$2 = { class: "text-sm" };
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-m" }, "Key Pair", -1);
const _hoisted_6$1 = { class: "flex flex-wrap" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "px-1" }, "Share", -1);
const _hoisted_8 = {
  key: 0,
  class: "px-2"
};
const _hoisted_9 = {
  key: 1,
  class: "px-2"
};
const _hoisted_10 = ["href"];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "px-2" }, "Link", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "px-2" }, "QR", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "px-2" }, "Text", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "px-2" }, "JSON", -1);
const _hoisted_15 = {
  key: 1,
  class: "flex w-full justify-center mt-4"
};
const _hoisted_16 = ["value"];
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "ml-2" }, "I've stored my key securely", -1);
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_user_pass = __unplugin_components_0$2;
  const _component_la_lock = __unplugin_components_1$3;
  const _component_la_unlock = __unplugin_components_2$3;
  const _component_la_share = __unplugin_components_3;
  const _component_la_copy = __unplugin_components_4;
  const _component_la_link = __unplugin_components_5;
  const _component_la_qrcode = __unplugin_components_6$1;
  const _component_la_envelope_open_text = __unplugin_components_7;
  const _component_la_file_code = __unplugin_components_8;
  const _component_qr_show = __unplugin_components_9;
  const _component_la_check = __unplugin_components_1$7;
  return $setup.user.is && !((_a = $setup.user.safe) == null ? void 0 : _a.saved) ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      _hoisted_2$2
    ]),
    createVNode(_component_user_pass),
    $setup.encPair ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
      createBaseVNode("div", {
        class: "flex flex-col w-34 items-center",
        style: normalizeStyle({ color: $setup.safePair ? "green" : "red" })
      }, [
        createBaseVNode("button", {
          class: "m-2 button text-2xl",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.safePair = !$setup.safePair)
        }, [
          $setup.safePair ? (openBlock(), createBlock(_component_la_lock, { key: 0 })) : (openBlock(), createBlock(_component_la_unlock, { key: 1 }))
        ]),
        createBaseVNode("div", _hoisted_4$2, toDisplayString($setup.safePair ? "Encrypted" : "Plain Text"), 1),
        _hoisted_5$1
      ], 4),
      createBaseVNode("div", _hoisted_6$1, [
        $setup.canShare ? (openBlock(), createElementBlock("button", {
          key: 0,
          class: normalizeClass(["m-2 button items-center", { active: $setup.current == "pass" }]),
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.share({ title: "Your key pair", text: $setup.encPair }))
        }, [
          createVNode(_component_la_share),
          _hoisted_7
        ], 2)) : createCommentVNode("v-if", true),
        $setup.canCopy ? (openBlock(), createElementBlock("button", {
          key: 1,
          class: "m-2 button items-center",
          onClick: _cache[2] || (_cache[2] = ($event) => $setup.copy($setup.encPair))
        }, [
          createVNode(_component_la_copy),
          createVNode(Transition, { name: "fade" }, {
            default: withCtx(() => [
              $setup.copied ? (openBlock(), createElementBlock("div", _hoisted_8, "Copied!")) : (openBlock(), createElementBlock("div", _hoisted_9, "Copy"))
            ]),
            _: 1
          })
        ])) : createCommentVNode("v-if", true),
        createBaseVNode("a", {
          class: "m-2 button items-center",
          onClick: _cache[3] || (_cache[3] = ($event) => $setup.show("links")),
          target: "_blank",
          href: $setup.safePair ? $setup.pass.links.pass : $setup.pass.links.pair
        }, [
          createVNode(_component_la_link),
          _hoisted_11
        ], 8, _hoisted_10),
        createBaseVNode("button", {
          class: "m-2 button items-center",
          onClick: _cache[4] || (_cache[4] = ($event) => $setup.show("qr"))
        }, [
          createVNode(_component_la_qrcode),
          _hoisted_12
        ]),
        createBaseVNode("button", {
          class: "m-2 button items-center",
          onClick: _cache[5] || (_cache[5] = ($event) => $setup.show("key"))
        }, [
          createVNode(_component_la_envelope_open_text),
          _hoisted_13
        ]),
        createBaseVNode("button", {
          class: "m-2 button items-center",
          onClick: _cache[6] || (_cache[6] = ($event) => {
            $setup.downloadFile($setup.encPair, "text/json", ($setup.user.name || "account") + ".json", false);
            $setup.current = null;
          })
        }, [
          createVNode(_component_la_file_code),
          _hoisted_14
        ])
      ])
    ])) : createCommentVNode("v-if", true),
    $setup.current ? (openBlock(), createElementBlock("div", _hoisted_15, [
      createVNode(TransitionGroup, { name: "fade" }, {
        default: withCtx(() => [
          $setup.current == "key" ? (openBlock(), createElementBlock("textarea", {
            class: "p-4 text-sm flex-1 rounded-xl",
            rows: "9",
            value: $setup.encPair,
            key: "text"
          }, null, 8, _hoisted_16)) : createCommentVNode("v-if", true),
          $setup.current == "qr" ? (openBlock(), createBlock(_component_qr_show, {
            class: "max-w-600px",
            key: "qr",
            data: $setup.safePair ? $setup.pass.links.pass : $setup.pass.links.pair
          }, null, 8, ["data"])) : createCommentVNode("v-if", true)
        ]),
        _: 1
      })
    ])) : createCommentVNode("v-if", true),
    createBaseVNode("button", {
      class: "button mx-8 justify-center",
      onClick: _cache[7] || (_cache[7] = ($event) => _ctx.$emit("close"))
    }, [
      createVNode(_component_la_check),
      _hoisted_17
    ])
  ])) : createCommentVNode("v-if", true);
}
const _sfc_main$3 = {
  __name: "UserCredentials",
  emits: ["close"],
  setup(__props, { expose, emit }) {
    expose();
    const current = ref("pass");
    const { user } = useUser();
    function show(option) {
      if (current.value != option) {
        current.value = option;
      } else {
        current.value = null;
      }
    }
    const { pass } = usePass();
    const { text, copy, copied, isSupported: canCopy } = useClipboard();
    const { share, isSupported: canShare } = useShare();
    const safePair = ref(true);
    const encPair = computed(() => {
      var _a;
      return safePair.value ? (_a = pass == null ? void 0 : pass.safe) == null ? void 0 : _a.enc : JSON.stringify(user.pair());
    });
    const __returned__ = { emit, current, user, show, pass, text, copy, copied, canCopy, share, canShare, safePair, encPair, useUser, downloadFile, usePass, ref, computed, useClipboard, useShare };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$3.__file = "src/user/UserCredentials.vue";
var __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", render$3], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserCredentials.vue"]]);
const _hoisted_1$2 = { class: "flex flex-col items-center w-full" };
const _hoisted_2$1 = {
  key: 1,
  class: "flex flex-col"
};
const _hoisted_3$1 = { class: "p-4 flex flex-col items-start" };
const _hoisted_4$1 = /* @__PURE__ */ createTextVNode(" My public profile");
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_user_credentials = __unplugin_components_0$1;
  const _component_ui_layer = __unplugin_components_2$8;
  const _component_user_login = __unplugin_components_2;
  const _component_user_panel = __unplugin_components_3$1;
  const _component_user_profile = __unplugin_components_4$1;
  const _component_chat_private_list = __unplugin_components_5$1;
  const _component_mate_list = __unplugin_components_6$2;
  const _component_user_rooms = __unplugin_components_7$1;
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createVNode(_component_ui_layer, {
      open: $setup.user.is && !((_a = $setup.user.safe) == null ? void 0 : _a.saved),
      closeButton: "",
      onClose: _cache[1] || (_cache[1] = ($event) => $setup.isSafe())
    }, {
      default: withCtx(() => [
        createVNode(_component_user_credentials, {
          onClose: _cache[0] || (_cache[0] = ($event) => $setup.isSafe())
        })
      ]),
      _: 1
    }, 8, ["open"]),
    !$setup.user.is ? (openBlock(), createBlock(_component_user_login, { key: 0 })) : (openBlock(), createElementBlock("div", _hoisted_2$1, [
      createVNode(_component_user_panel, {
        onBrowse: _cache[2] || (_cache[2] = ($event) => {
          _ctx.$emit("browse", $event);
          _ctx.$emit("close");
        })
      }),
      createBaseVNode("div", _hoisted_3$1, [
        createVNode(_component_user_profile),
        createVNode(_component_chat_private_list, {
          onChat: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("chat", $event))
        }),
        createVNode(_component_mate_list, {
          pub: $setup.user.pub,
          onBrowse: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("user", $event))
        }, null, 8, ["pub"]),
        createVNode(_component_user_rooms, {
          onBrowse: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("room", $event))
        })
      ]),
      createBaseVNode("button", {
        class: "p-4 m-4 rounded-xl font-bold text-lg shadow-md",
        onClick: _cache[6] || (_cache[6] = ($event) => {
          _ctx.$emit("user", $setup.user.pub);
          _ctx.$emit("close");
        }),
        style: normalizeStyle({ backgroundColor: $setup.user.color })
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          _hoisted_4$1
        ])
      ], 4)
    ]))
  ]);
}
const _sfc_main$2 = {
  __name: "UserHome",
  emits: ["user", "room", "close", "chat"],
  setup(__props, { expose, emit }) {
    expose();
    const { user } = useUser();
    function isSafe() {
      user.db.get("safe").get("saved").put(true);
    }
    const __returned__ = { emit, user, isSafe, computed, ref, useUser };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$2.__file = "src/user/UserHome.vue";
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", render$2], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserHome.vue"]]);
const _hoisted_1$1 = { class: "z-1000" };
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_account_avatar = __unplugin_components_0$7;
  const _component_user_home = __unplugin_components_1;
  const _component_ui_panel = __unplugin_components_1$a;
  const _component_account_home = __unplugin_components_3$3;
  const _component_ui_layer = __unplugin_components_2$8;
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode(_component_account_avatar, {
      class: "cursor-pointer",
      size: $props.size,
      border: 2,
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.user.auth = true),
      pub: $setup.user.pub
    }, null, 8, ["size", "pub"]),
    createVNode(_component_ui_panel, {
      open: $setup.user.auth,
      onClose: _cache[6] || (_cache[6] = ($event) => $setup.user.auth = false)
    }, {
      default: withCtx(() => [
        createVNode(_component_user_home, {
          class: "max-w-600px",
          onRoom: _cache[1] || (_cache[1] = ($event) => {
            _ctx.$emit("room", $event);
            $setup.user.auth = false;
          }),
          onUser: _cache[2] || (_cache[2] = ($event) => {
            _ctx.$emit("user", $event);
            $setup.user.auth = false;
          }),
          onChat: _cache[3] || (_cache[3] = ($event) => {
            _ctx.$emit("chat", $event);
            $setup.user.auth = false;
          }),
          onClose: _cache[4] || (_cache[4] = ($event) => $setup.user.auth = false),
          onPost: _cache[5] || (_cache[5] = ($event) => {
            _ctx.$emit("post", $setup.safeHash($event));
            $setup.user.auth = false;
          })
        })
      ]),
      _: 1
    }, 8, ["open"]),
    createVNode(_component_ui_layer, {
      open: $setup.selectedUser.pub,
      onClose: _cache[11] || (_cache[11] = ($event) => $setup.selectedUser.pub = null)
    }, {
      default: withCtx(() => [
        (openBlock(), createBlock(_component_account_home, {
          class: "max-w-600px",
          pub: $setup.selectedUser.pub,
          onUser: _cache[7] || (_cache[7] = ($event) => _ctx.$emit("user", $event)),
          onPost: _cache[8] || (_cache[8] = ($event) => _ctx.$emit("post", $setup.safeHash($event))),
          onChat: _cache[9] || (_cache[9] = ($event) => _ctx.$emit("chat", $setup.selectedUser.pub)),
          onClose: _cache[10] || (_cache[10] = ($event) => $setup.selectedUser.pub = null),
          key: $setup.selectedUser.pub
        }, null, 8, ["pub"]))
      ]),
      _: 1
    }, 8, ["open"])
  ]);
}
const _sfc_main$1 = {
  __name: "UserIcon",
  props: {
    size: { type: Number, default: 42 }
  },
  emits: ["room", "user", "post", "chat"],
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const { user } = useUser();
    const __returned__ = { props, user, useUser, selectedUser, safeHash };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$1.__file = "src/user/UserIcon.vue";
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserIcon.vue"]]);
const _hoisted_1 = { class: "flex" };
const _hoisted_2 = { class: "w-160px p-4 text-center" };
const _hoisted_3 = { class: "text-lg" };
const _hoisted_4 = { class: "flex-1" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "font-mono text-sm m-4 opacity-50 break-all" }, null, -1);
const _hoisted_6 = { class: "p-4 bg-light-300 bg-opacity-30 flex flex-wrap gap-4" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_user_icon = __unplugin_components_0;
  const _component_account_select = __unplugin_components_1$b;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_user_icon, {
        class: "pointer-events-none",
        size: 150
      }),
      createBaseVNode("div", _hoisted_3, toDisplayString($setup.user.name), 1)
    ]),
    createBaseVNode("div", _hoisted_4, [
      _hoisted_5,
      createVNode(_component_account_select, {
        pub: $setup.gift.to,
        "onUpdate:pub": _cache[0] || (_cache[0] = ($event) => $setup.gift.to = $event)
      }, null, 8, ["pub"]),
      createBaseVNode("div", _hoisted_6, [
        withDirectives(createBaseVNode("input", {
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.gift.qn = $event),
          placeholder: "Quantity"
        }, null, 512), [
          [vModelText, $setup.gift.qn]
        ]),
        withDirectives(createBaseVNode("input", {
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.gift.ql = $event),
          placeholder: "Quality"
        }, null, 512), [
          [vModelText, $setup.gift.ql]
        ]),
        withDirectives(createBaseVNode("textarea", {
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.gift.wish = $event),
          placeholder: "Wish"
        }, null, 512), [
          [vModelText, $setup.gift.wish]
        ])
      ]),
      createBaseVNode("button", {
        class: "button",
        onClick: _cache[4] || (_cache[4] = ($event) => $setup.propose())
      }, "Propose")
    ])
  ]);
}
const _sfc_main = {
  __name: "GiftForm",
  setup(__props, { expose }) {
    expose();
    const { user } = useUser();
    const { gift, propose } = useGift();
    const { guests, count } = useGuests();
    const __returned__ = { user, gift, propose, guests, count, useGuests, useGift, useUser };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/gift/GiftForm.vue";
var GiftForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/gift/GiftForm.vue"]]);
export { GiftForm as default };
