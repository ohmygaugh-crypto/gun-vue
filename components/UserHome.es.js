import { openBlock, createElementBlock, createBaseVNode, toDisplayString, createBlock, createVNode, withCtx, Fragment, renderList, createCommentVNode, Transition, computed, ref, SEA, withDirectives, vModelText, withKeys, urlRegex, normalizeStyle, renderSlot, createTextVNode } from "./vendor.es.js";
import { useUser, createRoom, enterRoom, recreateRoom, updateProfile, useAccount, addProfileField, useColor } from "./useDraw.es.js";
import { __unplugin_components_2 as __unplugin_components_2$4 } from "./RoomCard.es.js";
import { __unplugin_components_3 as __unplugin_components_3$1, __unplugin_components_2 as __unplugin_components_2$3, __unplugin_components_6, __unplugin_components_4 as __unplugin_components_4$1 } from "./exit-outline.es.js";
import { __unplugin_components_2 as __unplugin_components_2$2, __unplugin_components_1 as __unplugin_components_1$6, __unplugin_components_2$1 as __unplugin_components_2$7, __unplugin_components_0 as __unplugin_components_0$4 } from "./UserCredentials.es.js";
import { __unplugin_components_0 as __unplugin_components_0$1, __unplugin_components_1 as __unplugin_components_1$1, __unplugin_components_1$2, __unplugin_components_1$1 as __unplugin_components_1$5, __unplugin_components_6 as __unplugin_components_6$1 } from "./MateButton.es.js";
import { _export_sfc } from "./plugin-vue_export-helper.es.js";
import { usePrivateChatList } from "./usePrivate.es.js";
import __unplugin_components_2$5 from "./AccountBadge.es.js";
import { __unplugin_components_1 as __unplugin_components_1$4 } from "./plus.es.js";
import { __unplugin_components_2 as __unplugin_components_2$6 } from "./times.es.js";
import { __unplugin_components_1 as __unplugin_components_1$3 } from "./check.es.js";
import { useBackground } from "./useBackground.es.js";
import __unplugin_components_0$2 from "./UserAvatar.es.js";
import __unplugin_components_1$7 from "./UserCreate.es.js";
import __unplugin_components_0$3 from "./UserAuth.es.js";
import { __unplugin_components_2 as __unplugin_components_2$8 } from "./UiLayer.es.js";
import "./AccountAvatar.es.js";
import "./useFile.es.js";
import "./QrShow.es.js";
import "./qrcode.es.js";
import "./useMates.es.js";
const _hoisted_1$6 = {
  key: 0,
  class: "flex flex-col"
};
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("div", { class: "text-lg font-bold" }, "My rooms", -1);
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
const _hoisted_4$4 = { class: "text-md font-bold mr-2" };
const _hoisted_5$2 = {
  key: 0,
  class: "flex flex-wrap gap-2 mb-8"
};
const _hoisted_6$1 = { class: "p-4 flex flex-wrap gap-1" };
const _hoisted_7$1 = ["onClick"];
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("div", { class: "ml-2" }, "View", -1);
const _hoisted_9 = ["onClick"];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "ml-2" }, "Enter", -1);
const _hoisted_11 = ["onClick"];
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "ml-2" }, "Renew", -1);
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_la_angle_down = __unplugin_components_0$1;
  const _component_la_angle_up = __unplugin_components_1$1;
  const _component_la_eye = __unplugin_components_2$2;
  const _component_ion_enter_outline = __unplugin_components_3$1;
  const _component_la_tools = __unplugin_components_2$3;
  const _component_room_card = __unplugin_components_2$4;
  return Object.keys($setup.rooms).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
    createBaseVNode("div", {
      class: "flex p-4 bg-light-900 rounded-xl mb-2 items-center cursor-pointer shadow-sm hover_shadow-md transition",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.open = !$setup.open)
    }, [
      _hoisted_2$6,
      _hoisted_3$5,
      createBaseVNode("div", _hoisted_4$4, toDisplayString(Object.keys($setup.rooms).length), 1),
      !$setup.open ? (openBlock(), createBlock(_component_la_angle_down, { key: 0 })) : (openBlock(), createBlock(_component_la_angle_up, { key: 1 }))
    ]),
    createVNode(Transition, {
      name: "fade",
      mode: "out-in"
    }, {
      default: withCtx(() => [
        $setup.open ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.rooms, (enc, room) => {
            return openBlock(), createBlock(_component_room_card, {
              style: { "flex": "1 1 200px" },
              key: room,
              pub: room
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_6$1, [
                  createBaseVNode("button", {
                    class: "button",
                    onClick: ($event) => _ctx.$emit("browse", room)
                  }, [
                    createVNode(_component_la_eye),
                    _hoisted_8$1
                  ], 8, _hoisted_7$1),
                  createBaseVNode("button", {
                    class: "button",
                    onClick: ($event) => $setup.enterRoom(room)
                  }, [
                    createVNode(_component_ion_enter_outline),
                    _hoisted_10
                  ], 8, _hoisted_9),
                  createBaseVNode("button", {
                    class: "button",
                    onClick: ($event) => $setup.recreateRoom(enc)
                  }, [
                    createVNode(_component_la_tools),
                    _hoisted_12
                  ], 8, _hoisted_11)
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
const _sfc_main$7 = {
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
_sfc_main$7.__file = "src/user/UserRooms.vue";
var __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", render$7], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserRooms.vue"]]);
const _hoisted_1$5 = { class: "flex flex-col p-4 gap-2" };
const _hoisted_2$5 = { class: "font-bold text-xl" };
const _hoisted_3$4 = { class: "flex flex-wrap gap-2" };
const _hoisted_4$3 = ["onClick"];
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_account_badge = __unplugin_components_2$5;
  const _component_chat_private_count = __unplugin_components_1$2;
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    createBaseVNode("div", _hoisted_2$5, toDisplayString($props.title), 1),
    createBaseVNode("div", _hoisted_3$4, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.list, (chat, pub) => {
        return openBlock(), createElementBlock("div", {
          class: "p-2 rounded-xl flex items-center bg-light-900 cursor-pointer",
          key: pub,
          onClick: ($event) => _ctx.$emit("chat", pub)
        }, [
          createVNode(_component_account_badge, { pub }, null, 8, ["pub"]),
          _hoisted_5$1,
          createVNode(_component_chat_private_count, { pub }, null, 8, ["pub"])
        ], 8, _hoisted_4$3);
      }), 128))
    ])
  ]);
}
const _sfc_main$6 = {
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
_sfc_main$6.__file = "src/chat/private/ChatPrivateList.vue";
var __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", render$6], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/chat/private/ChatPrivateList.vue"]]);
const _hoisted_1$4 = { class: "p-2 flex items-center break-all" };
const _hoisted_2$4 = { class: "mr-2 font-bold" };
const _hoisted_3$3 = { class: "flex items-center" };
const _hoisted_4$2 = {
  key: 0,
  class: "text-md flex items-center"
};
const _hoisted_5 = {
  key: 0,
  class: "p-0"
};
const _hoisted_6 = ["href"];
const _hoisted_7 = {
  key: 1,
  class: "p-1 flex items-center flex-1"
};
const _hoisted_8 = { class: "-ml-16" };
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_la_pen = __unplugin_components_6;
  const _component_la_check = __unplugin_components_1$3;
  const _component_la_times = __unplugin_components_2$6;
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createBaseVNode("div", _hoisted_2$4, toDisplayString($props.field), 1),
    createBaseVNode("div", _hoisted_3$3, [
      !$setup.edit ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
        !$setup.isLink($props.content) ? (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString($props.content), 1)) : (openBlock(), createElementBlock("a", {
          key: 1,
          class: "font-bold underline",
          href: $props.content,
          target: "_blank"
        }, toDisplayString($props.content), 9, _hoisted_6)),
        createBaseVNode("button", {
          class: "p-1",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.edit = true)
        }, [
          createVNode(_component_la_pen)
        ])
      ])) : (openBlock(), createElementBlock("div", _hoisted_7, [
        withDirectives(createBaseVNode("input", {
          class: "p-2 rounded-xl pr-16",
          type: "text",
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.text = $event),
          onKeydown: _cache[2] || (_cache[2] = withKeys(($event) => $setup.update(), ["enter"]))
        }, null, 544), [
          [vModelText, $setup.text]
        ]),
        createBaseVNode("div", _hoisted_8, [
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
const _sfc_main$5 = {
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
_sfc_main$5.__file = "src/user/UserProfileField.vue";
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", render$5], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserProfileField.vue"]]);
const _hoisted_1$3 = { class: "flex flex-col" };
const _hoisted_2$3 = { class: "flex flex-col p-2" };
const _hoisted_3$2 = { class: "flex items-center flex-wrap" };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("div", { class: "p-1 text-sm" }, "Add", -1);
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_user_profile_field = __unplugin_components_0;
  const _component_la_plus = __unplugin_components_1$4;
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("div", _hoisted_2$3, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.account.profile, (d, k) => {
        return openBlock(), createBlock(_component_user_profile_field, {
          key: d,
          field: k,
          content: d
        }, null, 8, ["field", "content"]);
      }), 128)),
      createBaseVNode("div", _hoisted_3$2, [
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
          _hoisted_4$1
        ])
      ])
    ])
  ]);
}
const _sfc_main$4 = {
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
_sfc_main$4.__file = "src/user/UserProfile.vue";
var __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", render$4], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserProfile.vue"]]);
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "p-1 m-1 rounded-full transition-all duration-300 ease-in-out",
    style: normalizeStyle({ backgroundColor: $props.blink ? "white" : "black" })
  }, null, 4);
}
const _sfc_main$3 = {
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
_sfc_main$3.__file = "src/util/UtilPulse.vue";
var __unplugin_components_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", render$3], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/util/UtilPulse.vue"]]);
const _hoisted_1$2 = { class: "flex items-center" };
const _hoisted_2$2 = { class: "text-2xl mx-2 font-bold" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_user_avatar = __unplugin_components_0$2;
  const _component_mate_button = __unplugin_components_1$5;
  const _component_util_pulse = __unplugin_components_2$1;
  const _component_la_lock = __unplugin_components_1$6;
  const _component_la_unlock = __unplugin_components_2$7;
  const _component_ion_exit_outline = __unplugin_components_4$1;
  return $setup.user.is ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "p-4 flex items-center",
    style: normalizeStyle({ ...$setup.bg })
  }, [
    createBaseVNode("div", _hoisted_1$2, [
      createVNode(_component_user_avatar, { size: 120 }),
      createBaseVNode("div", _hoisted_2$2, toDisplayString((_a = $setup.user) == null ? void 0 : _a.name), 1)
    ]),
    createVNode(_component_mate_button, {
      pub: $setup.user.pub
    }, null, 8, ["pub"]),
    _hoisted_3$1,
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
const _sfc_main$2 = {
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
_sfc_main$2.__file = "src/user/UserPanel.vue";
var __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", render$2], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserPanel.vue"]]);
const _hoisted_1$1 = { class: "flex flex-col p-4" };
const _hoisted_2$1 = {
  key: 1,
  class: "flex justify-center mt-4"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_user_auth = __unplugin_components_0$3;
  const _component_user_create = __unplugin_components_1$7;
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    !$setup.generate ? (openBlock(), createElementBlock("button", {
      key: 0,
      class: "text-xl flex justify-center bg-light-900 hover_bg-light-50 p-4 rounded-2xl shadow-lg hover_shadow-xl transition duration-200 ease-out font-bold",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.generate = true)
    }, "Create a new account")) : createCommentVNode("v-if", true),
    !$setup.generate ? (openBlock(), createElementBlock("div", _hoisted_2$1, "or")) : createCommentVNode("v-if", true),
    !$setup.generate ? (openBlock(), createBlock(_component_user_auth, { key: 2 })) : (openBlock(), createBlock(_component_user_create, { key: 3 }))
  ]);
}
const _sfc_main$1 = {
  __name: "UserLogin",
  setup(__props, { expose }) {
    expose();
    const generate = ref(false);
    const __returned__ = { generate, ref };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$1.__file = "src/user/UserLogin.vue";
var __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserLogin.vue"]]);
const _hoisted_1 = { class: "flex flex-col items-center w-full" };
const _hoisted_2 = {
  key: 1,
  class: "flex flex-col"
};
const _hoisted_3 = { class: "p-4 flex flex-col items-start" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" My public profile");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_user_credentials = __unplugin_components_0$4;
  const _component_ui_layer = __unplugin_components_2$8;
  const _component_user_login = __unplugin_components_2;
  const _component_user_panel = __unplugin_components_3;
  const _component_user_profile = __unplugin_components_4;
  const _component_chat_private_list = __unplugin_components_5;
  const _component_mate_list = __unplugin_components_6$1;
  const _component_user_rooms = __unplugin_components_7;
  return openBlock(), createElementBlock("div", _hoisted_1, [
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
    !$setup.user.is ? (openBlock(), createBlock(_component_user_login, { key: 0 })) : (openBlock(), createElementBlock("div", _hoisted_2, [
      createVNode(_component_user_panel, {
        onBrowse: _cache[2] || (_cache[2] = ($event) => {
          _ctx.$emit("browse", $event);
          _ctx.$emit("close");
        })
      }),
      createBaseVNode("div", _hoisted_3, [
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
          _hoisted_4
        ])
      ], 4)
    ]))
  ]);
}
const _sfc_main = {
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
_sfc_main.__file = "src/user/UserHome.vue";
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserHome.vue"]]);
export { __unplugin_components_1 as default };
