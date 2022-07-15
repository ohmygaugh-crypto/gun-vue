import { useGun, currentRoom, useColor, useUser, useAccount } from "./useDraw.es.js";
import { openBlock, createElementBlock, createBaseVNode, toDisplayString, createVNode, createCommentVNode, ref, computed, reactive, normalizeStyle, createBlock, renderSlot, pushScopeId, popScopeId, watchEffect, withCtx, Fragment, renderList, TransitionGroup, Transition, urlRegex, toRef } from "./vendor.es.js";
import { useBackground } from "./useBackground.es.js";
import { useUserPosts, reactToPost } from "./useReactions.es.js";
import { isEmoji } from "./useMates.es.js";
import { usePost } from "./useZip.es.js";
import { __unplugin_components_1 as __unplugin_components_1$1 } from "./PostActionReact.es.js";
import { _export_sfc } from "./plugin-vue_export-helper.es.js";
import { __unplugin_components_2 } from "./trash.es.js";
import { __unplugin_components_1 as __unplugin_components_1$2, __unplugin_components_0 as __unplugin_components_0$4 } from "./angle-up.es.js";
import { __unplugin_components_1 as __unplugin_components_1$4, __unplugin_components_6 } from "./ChatPrivateCount.es.js";
import { __unplugin_components_1 as __unplugin_components_1$3 } from "./MateButton.es.js";
import __unplugin_components_0$5 from "./AccountAvatar.es.js";
import "./useFile.es.js";
import "./useMd.es.js";
import "./AccountBadge.es.js";
import "./times.es.js";
import "./plus.es.js";
import "./usePrivate.es.js";
const _hoisted_1$9 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$8 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M18 5v2h5.563L11.28 19.281l1.438 1.438L25 8.437V14h2V5zM5 9v18h18V14l-2 2v9H7V11h9l2-2z"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$8
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$7);
}
var __unplugin_components_0$3 = { name: "la-external-link-alt", render: render$9 };
const _hoisted_1$8 = ["href"];
const _hoisted_2$7 = { class: "mr-1px ml-8px" };
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_la_external_link_alt = __unplugin_components_0$3;
  return $setup.domain ? (openBlock(), createElementBlock("a", {
    key: 0,
    class: "underline flex items-center bg-light-300 rounded-xl p-1 shadow-sm hover_shadow-lg transition duration-200ms hover_bg-light-5",
    href: $setup.valid,
    target: "_blank"
  }, [
    createBaseVNode("div", _hoisted_2$7, toDisplayString($setup.domain), 1),
    createVNode(_component_la_external_link_alt, { class: "mx-1" })
  ], 8, _hoisted_1$8)) : createCommentVNode("v-if", true);
}
const _sfc_main$6 = {
  __name: "UiLink",
  props: {
    url: { type: String, default: "" },
    icon: { type: [Boolean, String], default: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const valid = ref(false);
    const domain = computed(() => {
      if (props.url) {
        try {
          let url = new URL(props.url);
          valid.value = url;
          return url.hostname;
        } catch {
          valid.value = null;
          return "incorrect link";
        }
      } else {
        return "";
      }
    });
    const __returned__ = { props, valid, domain, computed, ref };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$6.__file = "src/ui/UiLink.vue";
var __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", render$8], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/ui/UiLink.vue"]]);
const _hoisted_1$7 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M4 5h16v2H4V5m0 4h16v2H4V9m0 4h16v2H4v-2m0 4h10v2H4v-2Z"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$6
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$6);
}
var __unplugin_components_1 = { name: "mdi-text-long", render: render$7 };
const _hoisted_1$6 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M16 6c-3.766 0-7.094.39-9.125.688c-1.68.246-3.035 1.511-3.344 3.187C3.27 11.301 3 13.387 3 16s.27 4.7.531 6.125c.309 1.676 1.664 2.945 3.344 3.188c2.04.296 5.379.687 9.125.687c3.746 0 7.086-.39 9.125-.688c1.68-.242 3.035-1.511 3.344-3.187c.261-1.43.531-3.52.531-6.125s-.266-4.695-.531-6.125c-.309-1.676-1.664-2.941-3.344-3.188C23.094 6.391 19.765 6 16 6zm0 2c3.633 0 6.879.371 8.844.656A1.966 1.966 0 0 1 26.5 10.25c.242 1.32.5 3.277.5 5.75c0 2.469-.258 4.43-.5 5.75a1.957 1.957 0 0 1-1.656 1.594C22.87 23.629 19.609 24 16 24c-3.61 0-6.875-.371-8.844-.656A1.962 1.962 0 0 1 5.5 21.75C5.258 20.43 5 18.477 5 16c0-2.48.258-4.43.5-5.75a1.962 1.962 0 0 1 1.656-1.594C9.117 8.371 12.367 8 16 8zm-3 2.281V21.72l1.5-.844l7-4L23 16l-1.5-.875l-7-4zm2 3.438L18.969 16L15 18.281z"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$5);
}
var __unplugin_components_0$2 = { name: "la-youtube", render: render$6 };
const _hoisted_1$5 = {
  key: 0,
  class: "m-1 flex items-center items-center px-2 py-1 bg-light-700 dark_bg-dark-50 rounded-lg"
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.count > 0 ? (openBlock(), createElementBlock("button", _hoisted_1$5, toDisplayString($setup.count), 1)) : createCommentVNode("v-if", true);
}
const _sfc_main$5 = {
  __name: "PostLink",
  props: {
    hash: { type: String, default: "" }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const gun = useGun();
    const comments = reactive({});
    gun.user(currentRoom.pub).get("posts").map().once((d, k) => {
      if (k.indexOf(props.hash) == 0 && d) {
        comments[k.substring(45, 87)] = d;
      } else {
        delete comments[k];
      }
    });
    const count = computed(() => Object.keys(comments).length);
    const __returned__ = { props, gun, comments, count, useGun, currentRoom, reactive, computed };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$5.__file = "src/post/PostLink.vue";
var __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", render$5], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/post/PostLink.vue"]]);
const _withScopeId = (n) => (pushScopeId("data-v-13e9a414"), n = n(), popScopeId(), n);
const _hoisted_1$4 = {
  class: "flex flex-wrap items-center max-w-full w-full backdrop-blur-lg rounded-2xl bg-light-100 backdrop-blur-sm backdrop-filter shadow-md",
  style: { "flex": "14 1 620px" }
};
const _hoisted_2$4 = {
  key: 0,
  class: "p-0",
  style: { "flex": "1 1 40px" }
};
const _hoisted_3$4 = ["src"];
const _hoisted_4$4 = {
  class: "flex flex-col p-2 overflow-hidden",
  style: { "flex": "10 1 280px" }
};
const _hoisted_5$4 = { class: "px-2" };
const _hoisted_6$1 = { class: "flex items-center" };
const _hoisted_7 = {
  key: 0,
  class: "text-xl font-bold my-2"
};
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1));
const _hoisted_9 = {
  key: 0,
  class: "statement"
};
const _hoisted_10 = { class: "flex items-center flex-wrap items-center mt-2 gap-2" };
const _hoisted_11 = {
  key: 1,
  class: "flex gap-1 rounded-xl p-1 bg-dark-50 bg-opacity-20 flex-wrap items-center",
  style: { "flex": "1 1 130px" }
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const _component_post_link = __unplugin_components_0$1;
  const _component_la_youtube = __unplugin_components_0$2;
  const _component_mdi_text_long = __unplugin_components_1;
  const _component_ui_link = __unplugin_components_4;
  const _component_post_action_react = __unplugin_components_1$1;
  return openBlock(), createElementBlock("div", {
    class: "card",
    style: normalizeStyle({ backgroundImage: `url(${((_a = $setup.post) == null ? void 0 : _a.cover) || ((_b = $setup.post) == null ? void 0 : _b.raw)})`, backgroundColor: $setup.colorDeep.hex($props.hash) })
  }, [
    createBaseVNode("div", {
      class: "p-0",
      style: normalizeStyle([{ "flex": "12 1 120px" }, { paddingTop: ((_c = $setup.post) == null ? void 0 : _c.cover) || ((_d = $setup.post) == null ? void 0 : _d.raw) ? "18em" : "0" }])
    }, null, 4),
    createBaseVNode("div", _hoisted_1$4, [
      ((_e = $setup.post) == null ? void 0 : _e.icon) ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
        createBaseVNode("img", {
          class: "w-20 max-h-20 rounded-full m-2",
          src: $setup.post.icon,
          width: "40px"
        }, null, 8, _hoisted_3$4)
      ])) : createCommentVNode("v-if", true),
      createBaseVNode("div", _hoisted_4$4, [
        createBaseVNode("div", _hoisted_5$4, [
          createBaseVNode("div", _hoisted_6$1, [
            ((_f = $setup.post) == null ? void 0 : _f.title) ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString($setup.post.title), 1)) : createCommentVNode("v-if", true),
            _hoisted_8,
            createVNode(_component_post_link, { hash: $props.hash }, null, 8, ["hash"])
          ]),
          ((_g = $setup.post) == null ? void 0 : _g.statement) ? (openBlock(), createElementBlock("div", _hoisted_9, toDisplayString($setup.post.statement), 1)) : createCommentVNode("v-if", true)
        ]),
        createBaseVNode("div", _hoisted_10, [
          ((_h = $setup.post) == null ? void 0 : _h.youtube) ? (openBlock(), createBlock(_component_la_youtube, {
            key: 0,
            class: "mx-1"
          })) : createCommentVNode("v-if", true),
          ((_i = $setup.post) == null ? void 0 : _i.text) ? (openBlock(), createBlock(_component_mdi_text_long, {
            key: 1,
            class: "mx-1"
          })) : createCommentVNode("v-if", true),
          ((_j = $setup.post) == null ? void 0 : _j.link) ? (openBlock(), createBlock(_component_ui_link, {
            key: 2,
            url: (_k = $setup.post) == null ? void 0 : _k.link
          }, null, 8, ["url"])) : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ]),
      $props.actions ? (openBlock(), createElementBlock("div", _hoisted_11, [
        createVNode(_component_post_action_react, {
          authors: $props.authors,
          onUser: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("user", $event)),
          hash: $props.hash,
          tag: $props.tag,
          back: $props.back
        }, null, 8, ["authors", "hash", "tag", "back"])
      ])) : createCommentVNode("v-if", true)
    ])
  ], 4);
}
var PostCard_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = {
  __name: "PostCard",
  props: {
    hash: { type: String, default: "" },
    authors: Object,
    tag: [String, Boolean],
    back: Boolean,
    actions: { type: Boolean, default: true }
  },
  emits: ["user"],
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const colorLight = useColor("light");
    const colorDeep = useColor("deep");
    const { post } = usePost({ hash: props.hash });
    const __returned__ = { colorLight, colorDeep, props, post, useColor, usePost, computed, ref, watchEffect };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$4.__file = "src/post/PostCard.vue";
var __unplugin_components_9 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", render$4], ["__scopeId", "data-v-13e9a414"], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/post/PostCard.vue"]]);
const _hoisted_1$3 = { class: "p-2 flex flex-wrap bg-light-800 shadow-md rounded-xl gap-2" };
const _hoisted_2$3 = ["onClick"];
const _hoisted_3$3 = { class: "text-4xl" };
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1 w-4" }, null, -1);
const _hoisted_5$3 = { class: "text-lg ml-1" };
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_la_angle_up = __unplugin_components_1$2;
  const _component_la_angle_down = __unplugin_components_0$4;
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createVNode(TransitionGroup, { name: "fade" }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.reactions, (hashes, reaction) => {
          return openBlock(), createElementBlock("div", {
            class: "flex py-2 items-center cursor-pointer bg-light-100 rounded-xl shadow-lg px-4",
            style: normalizeStyle([{ "flex": "1 1 10px" }, { backgroundColor: $props.current == reaction ? "#999" : "" }]),
            key: reaction,
            onClick: ($event) => $setup.emit("update:current", reaction)
          }, [
            createBaseVNode("div", _hoisted_3$3, toDisplayString($setup.isEmoji(reaction) ? reaction : "\u{1F44B}"), 1),
            _hoisted_4$3,
            $props.current == reaction ? (openBlock(), createBlock(_component_la_angle_up, { key: 0 })) : (openBlock(), createBlock(_component_la_angle_down, { key: 1 })),
            createBaseVNode("div", _hoisted_5$3, toDisplayString(Object.keys(hashes).length), 1)
          ], 12, _hoisted_2$3);
        }), 128))
      ]),
      _: 1
    })
  ]);
}
const _sfc_main$3 = {
  __name: "PostReactionTabs",
  props: {
    reactions: Object,
    current: String
  },
  emits: ["update:current"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const __returned__ = { props, emit, isEmoji };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$3.__file = "src/post/reaction/PostReactionTabs.vue";
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", render$3], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/post/reaction/PostReactionTabs.vue"]]);
const _hoisted_1$2 = { class: "flex flex-col" };
const _hoisted_2$2 = { class: "text-xl font-bold mb-2" };
const _hoisted_3$2 = { class: "flex flex-col gap-4" };
const _hoisted_4$2 = {
  key: 0,
  class: "flex flex-col bg-light-800 rounded-2xl gap-4"
};
const _hoisted_5$2 = ["onClick"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_post_reaction_tabs = __unplugin_components_0;
  const _component_la_trash = __unplugin_components_2;
  const _component_post_card = __unplugin_components_9;
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("div", _hoisted_2$2, toDisplayString($setup.isMe ? "My " : "") + " Posts", 1),
    createBaseVNode("div", _hoisted_3$2, [
      createVNode(_component_post_reaction_tabs, {
        reactions: $setup.userPosts,
        current: $setup.postReaction,
        "onUpdate:current": _cache[0] || (_cache[0] = ($event) => $setup.postReaction = $event)
      }, null, 8, ["reactions", "current"]),
      createVNode(Transition, { name: "fade" }, {
        default: withCtx(() => [
          $setup.postReaction ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
            createVNode(TransitionGroup, { name: "fade" }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.postList, (from, hash) => {
                  return openBlock(), createElementBlock("div", {
                    class: "p-0 relative",
                    key: hash
                  }, [
                    $setup.isMe ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: "absolute top-2 left-2 button p-2 z-100 text-2xl opacity-30 hover_opacity-100 transition cursor-pointer",
                      onClick: ($event) => $setup.reactToPost({ tag: from, hash, reaction: $setup.postReaction })
                    }, [
                      createVNode(_component_la_trash)
                    ], 8, _hoisted_5$2)) : createCommentVNode("v-if", true),
                    createVNode(_component_post_card, {
                      style: { "flex": "1 1 100px" },
                      hash,
                      onClick: ($event) => $setup.emit("post", hash),
                      actions: false
                    }, null, 8, ["hash", "onClick"])
                  ]);
                }), 128))
              ]),
              _: 1
            })
          ])) : createCommentVNode("v-if", true)
        ]),
        _: 1
      })
    ])
  ]);
}
const _sfc_main$2 = {
  __name: "AccountReactions",
  props: {
    pub: String
  },
  emits: ["post"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const { user } = useUser();
    const isMe = computed(() => props.pub == user.pub);
    const postReaction = ref();
    const userPosts = useUserPosts(props.pub);
    const postList = computed(() => {
      return userPosts[postReaction.value] || [];
    });
    const __returned__ = { props, user, isMe, emit, postReaction, userPosts, postList, useGun, currentRoom, isEmoji, useUser, reactToPost, useUserPosts, reactive, ref, computed };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$2.__file = "src/account/AccountReactions.vue";
var __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", render$2], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/account/AccountReactions.vue"]]);
const _hoisted_1$1 = { class: "flex flex-col break-all" };
const _hoisted_2$1 = {
  class: "mr-2 font-bold",
  style: { "flex": "1 1 60px" }
};
const _hoisted_3$1 = {
  class: "flex items-center ml-1",
  style: { "flex": "1 1 180px" }
};
const _hoisted_4$1 = {
  key: 0,
  class: "p-0"
};
const _hoisted_5$1 = ["href"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.account.profile, (content, field) => {
      return openBlock(), createElementBlock("div", {
        class: "p-2 flex items-center",
        key: field
      }, [
        createBaseVNode("div", _hoisted_2$1, toDisplayString(field), 1),
        createBaseVNode("div", _hoisted_3$1, [
          !$setup.isLink(content) ? (openBlock(), createElementBlock("div", _hoisted_4$1, toDisplayString(content), 1)) : (openBlock(), createElementBlock("a", {
            key: 1,
            class: "font-bold underline",
            href: content,
            target: "_blank"
          }, toDisplayString(content), 9, _hoisted_5$1))
        ])
      ]);
    }), 128))
  ]);
}
const _sfc_main$1 = {
  __name: "AccountProfile",
  props: {
    pub: { type: String, default: "" }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const { account } = useAccount(props.pub);
    function isLink(text) {
      return urlRegex({ exact: true }).test(text);
    }
    const __returned__ = { props, account, isLink, useAccount, urlRegex };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$1.__file = "src/account/AccountProfile.vue";
var __unplugin_components_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/account/AccountProfile.vue"]]);
const _hoisted_1 = { class: "flex flex-col rounded-3xl overflow-hidden shadow-xl" };
const _hoisted_2 = { class: "flex flex-col ml-4 mx-4" };
const _hoisted_3 = { class: "text-2xl font-bold" };
const _hoisted_4 = { class: "mt-2" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
const _hoisted_6 = { class: "p-4 flex flex-col" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b;
  const _component_account_avatar = __unplugin_components_0$5;
  const _component_mate_button = __unplugin_components_1$3;
  const _component_chat_private_count = __unplugin_components_1$4;
  const _component_account_profile = __unplugin_components_3$1;
  const _component_mate_list = __unplugin_components_6;
  const _component_account_reactions = __unplugin_components_5;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", {
      class: "p-4 flex items-center bg-cover border-b-6",
      style: normalizeStyle({ borderColor: $setup.account.color, ...$setup.bg })
    }, [
      createVNode(_component_account_avatar, {
        pub: $props.pub,
        size: 120
      }, null, 8, ["pub"]),
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, toDisplayString((_a = $setup.account.profile) == null ? void 0 : _a.name), 1),
        createBaseVNode("div", _hoisted_4, toDisplayString((_b = $setup.account) == null ? void 0 : _b.lastSeen), 1)
      ]),
      _hoisted_5,
      createVNode(_component_mate_button, {
        class: "m-4",
        pub: $props.pub
      }, null, 8, ["pub"]),
      $setup.user.is ? (openBlock(), createBlock(_component_chat_private_count, {
        key: 0,
        pub: $props.pub,
        onChat: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("chat"))
      }, null, 8, ["pub"])) : createCommentVNode("v-if", true)
    ], 4),
    createVNode(_component_account_profile, {
      class: "p-4",
      pub: $props.pub
    }, null, 8, ["pub"]),
    createBaseVNode("div", _hoisted_6, [
      createVNode(_component_mate_list, {
        pub: $props.pub,
        onBrowse: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("browse", $event))
      }, null, 8, ["pub"]),
      createVNode(_component_account_reactions, {
        class: "m-2",
        pub: $props.pub,
        onPost: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("post", $event))
      }, null, 8, ["pub"])
    ])
  ]);
}
const _sfc_main = {
  __name: "AccountHome",
  props: {
    pub: { type: String, default: "" }
  },
  emits: ["browse", "feed", "post", "chat"],
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const { account } = useAccount(toRef(props, "pub"));
    const { user } = useUser();
    const bg = computed(() => useBackground({ pub: props.pub, size: 600, light: 0.5, draw: "circles" }));
    const __returned__ = { props, account, user, bg, useAccount, useUser, useBackground, computed, toRef };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/account/AccountHome.vue";
var __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/account/AccountHome.vue"]]);
export { __unplugin_components_3 as default };
