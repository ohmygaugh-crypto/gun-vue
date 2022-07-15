import { usePass, useUser } from "./useDraw.es.js";
import { openBlock, createElementBlock, createBaseVNode, createVNode, createBlock, createCommentVNode, withDirectives, vModelDynamic, renderSlot, toDisplayString, normalizeStyle, normalizeClass, withCtx, Transition, TransitionGroup, ref, useClipboard, useShare, computed } from "./vendor.es.js";
import { downloadFile } from "./useFile.es.js";
import { __unplugin_components_1 as __unplugin_components_1$1 } from "./check.es.js";
import __unplugin_components_9 from "./QrShow.es.js";
import { __unplugin_components_6, __unplugin_components_8 } from "./qrcode.es.js";
import { _export_sfc } from "./plugin-vue_export-helper.es.js";
const _hoisted_1$9 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M16 8C7.664 8 1.25 15.344 1.25 15.344L.656 16l.594.656s5.848 6.668 13.625 7.282c.371.046.742.062 1.125.062s.754-.016 1.125-.063c7.777-.613 13.625-7.28 13.625-7.28l.594-.657l-.594-.656S24.336 8 16 8zm0 2c2.203 0 4.234.602 6 1.406A6.89 6.89 0 0 1 23 15a6.995 6.995 0 0 1-6.219 6.969c-.02.004-.043-.004-.062 0c-.239.011-.477.031-.719.031c-.266 0-.523-.016-.781-.031A6.995 6.995 0 0 1 9 15c0-1.305.352-2.52.969-3.563h-.031C11.717 10.617 13.773 10 16 10zm0 2a3 3 0 1 0 .002 6.002A3 3 0 0 0 16 12zm-8.75.938A9.006 9.006 0 0 0 7 15c0 1.754.5 3.395 1.375 4.781A23.196 23.196 0 0 1 3.531 16a23.93 23.93 0 0 1 3.719-3.063zm17.5 0A23.93 23.93 0 0 1 28.469 16a23.196 23.196 0 0 1-4.844 3.781A8.929 8.929 0 0 0 25 15c0-.715-.094-1.398-.25-2.063z"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$9
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$9);
}
var __unplugin_components_2$1 = { name: "la-eye", render: render$9 };
const _hoisted_1$8 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$8 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M16 3c-3.035 0-5.586 1.965-6.625 4.625l1.844.75C11.977 6.434 13.836 5 16 5c2.754 0 5 2.246 5 5v3H6v16h20V13h-3v-3c0-3.844-3.156-7-7-7zM8 15h16v12H8z"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$8
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$8);
}
var __unplugin_components_2 = { name: "la-unlock", render: render$8 };
const _hoisted_1$7 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M16 3c-3.844 0-7 3.156-7 7v3H6v16h20V13h-3v-3c0-3.844-3.156-7-7-7zm0 2c2.754 0 5 2.246 5 5v3H11v-3c0-2.754 2.246-5 5-5zM8 15h16v12H8z"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$7);
}
var __unplugin_components_1 = { name: "la-lock", render: render$7 };
const _hoisted_1$6 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M10 5v1.9l-5.992 3.903V27h23.984V10.803L22 6.898V5H10zm2 2h8v7.682l-4 2.591l-4-2.591V7zm1 2v2h6V9h-6zm-3 .285v4.102l-3.156-2.045L10 9.285zm12 0l3.156 2.057L22 13.387V9.285zM13 12v2h6v-2h-6zm-6.992 1.184L16 19.656l9.992-6.472V25H6.008V13.184z"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$6
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$6);
}
var __unplugin_components_7 = { name: "la-envelope-open-text", render: render$6 };
const _hoisted_1$5 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M21.75 4c-1.672 0-3.258.66-4.438 1.844l-1.468 1.468A6.252 6.252 0 0 0 14 11.75c0 .793.152 1.566.438 2.281l1.624-1.625A4.285 4.285 0 0 1 17.25 8.72l1.469-1.469A4.28 4.28 0 0 1 21.75 6c1.137 0 2.195.445 3 1.25a4.274 4.274 0 0 1 0 6.031l-1.469 1.469A4.28 4.28 0 0 1 20.25 16c-.223 0-.441-.023-.656-.063l-1.625 1.626A6.156 6.156 0 0 0 20.25 18c1.672 0 3.258-.66 4.438-1.844l1.468-1.468A6.252 6.252 0 0 0 28 10.25c0-1.672-.66-3.223-1.844-4.406A6.173 6.173 0 0 0 21.75 4zm-2.469 7.281l-8 8l1.438 1.438l8-8zM11.75 14c-1.672 0-3.258.66-4.438 1.844l-1.468 1.469A6.252 6.252 0 0 0 4 21.75c0 1.672.66 3.223 1.844 4.406A6.173 6.173 0 0 0 10.25 28c1.672 0 3.258-.66 4.438-1.844l1.468-1.468A6.252 6.252 0 0 0 18 20.25c0-.793-.152-1.566-.438-2.281l-1.625 1.625a4.285 4.285 0 0 1-1.187 3.687l-1.469 1.469A4.28 4.28 0 0 1 10.25 26a4.208 4.208 0 0 1-3-1.25a4.274 4.274 0 0 1 0-6.031l1.469-1.469A4.28 4.28 0 0 1 11.75 16c.223 0 .441.023.656.063l1.625-1.625A6.156 6.156 0 0 0 11.75 14z"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
}
var __unplugin_components_5 = { name: "la-link", render: render$5 };
const _hoisted_1$4 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M4 4v20h7v-2H6V6h12v1h2V4zm8 4v20h16V8zm2 2h12v16H14z"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
var __unplugin_components_4 = { name: "la-copy", render: render$4 };
const _hoisted_1$3 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M19.719 5.281L18.28 6.72L24.563 13H11c-3.855 0-7 3.145-7 7s3.145 7 7 7v-2c-2.773 0-5-2.227-5-5s2.227-5 5-5h13.563l-6.282 6.281l1.438 1.438l8-8l.687-.719l-.687-.719z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
var __unplugin_components_3 = { name: "la-share", render: render$3 };
const _hoisted_1$2 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m17.7 17l6.198 8.398L21.5 27L16 18.3L10.5 27l-2.3-1.602L14.397 17l-9.296-2.398L6 12l9.102 3.2L14.5 5h3L17 15.2l9-3.2l.8 2.7z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
var __unplugin_components_0$2 = { name: "la-asterisk", render: render$2 };
const _hoisted_1$1 = { class: "flex flex-col mt-4 bg-light-700 p-4 m-2 shadow-lg rounded-xl" };
const _hoisted_2$1 = { class: "flex items-center mb-4" };
const _hoisted_3$1 = { class: "mx-2" };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("div", { class: "px-1" }, "Enter a passphrase to encrypt your key with", -1);
const _hoisted_5$1 = { class: "flex items-center px-4" };
const _hoisted_6$1 = { class: "ml-1 flex flex-col items-center" };
const _hoisted_7$1 = ["type", "placeholder"];
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("div", { class: "ml-2" }, "Set", -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("div", { class: "ml-2" }, "Show", -1);
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c;
  const _component_la_asterisk = __unplugin_components_0$2;
  const _component_la_check = __unplugin_components_1$1;
  const _component_la_eye = __unplugin_components_2$1;
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("div", _hoisted_3$1, [
        createVNode(_component_la_asterisk)
      ]),
      _hoisted_4$1
    ]),
    createBaseVNode("div", _hoisted_5$1, [
      createBaseVNode("div", _hoisted_6$1, [
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
const _sfc_main$1 = {
  __name: "UserPass",
  setup(__props, { expose }) {
    expose();
    const { pass } = usePass();
    const __returned__ = { pass, usePass };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$1.__file = "src/user/UserPass.vue";
var __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserPass.vue"]]);
const _hoisted_1 = {
  key: 0,
  class: "flex flex-col items-stretch pb-4 border-1 border-dark-100 border-opacity-10 max-w-120 mx-auto"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "mt-4 mx-6" }, "Please make sure to safely store your cryptographic keypair to be able to use it again later", -1);
const _hoisted_3 = {
  key: 0,
  class: "flex p-4 items-center bg-dark-100 bg-opacity-20 mt-2 shadow-inset"
};
const _hoisted_4 = { class: "text-sm" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "text-m" }, "Key Pair", -1);
const _hoisted_6 = { class: "flex flex-wrap" };
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_user_pass = __unplugin_components_0$1;
  const _component_la_lock = __unplugin_components_1;
  const _component_la_unlock = __unplugin_components_2;
  const _component_la_share = __unplugin_components_3;
  const _component_la_copy = __unplugin_components_4;
  const _component_la_link = __unplugin_components_5;
  const _component_la_qrcode = __unplugin_components_6;
  const _component_la_envelope_open_text = __unplugin_components_7;
  const _component_la_file_code = __unplugin_components_8;
  const _component_qr_show = __unplugin_components_9;
  const _component_la_check = __unplugin_components_1$1;
  return $setup.user.is && !((_a = $setup.user.safe) == null ? void 0 : _a.saved) ? (openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      _hoisted_2
    ]),
    createVNode(_component_user_pass),
    $setup.encPair ? (openBlock(), createElementBlock("div", _hoisted_3, [
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
        createBaseVNode("div", _hoisted_4, toDisplayString($setup.safePair ? "Encrypted" : "Plain Text"), 1),
        _hoisted_5
      ], 4),
      createBaseVNode("div", _hoisted_6, [
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
const _sfc_main = {
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
_sfc_main.__file = "src/user/UserCredentials.vue";
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserCredentials.vue"]]);
var UserCredentials = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": __unplugin_components_0
}, Symbol.toStringTag, { value: "Module" }));
export { UserCredentials, __unplugin_components_0, __unplugin_components_1, __unplugin_components_2$1 as __unplugin_components_2, __unplugin_components_2 as __unplugin_components_2$1 };
