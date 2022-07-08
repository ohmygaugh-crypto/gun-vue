var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var _a, _b, _c, _d;
import { useStorage, reactive, computed, watch, ms, buffer, Gun, SEA, ColorHash, base32, useCycleList, toReactive, ref, markRaw, createDrauu, watchEffect, openBlock, createElementBlock, createBaseVNode, normalizeStyle, createVNode, gunAvatar } from "./vendor.es.js";
import { _export_sfc } from "./AccountAvatar.story.es.js";
import "./mapping.es.js";
const defaultPeer = "https://etogun.glitch.me/gun";
const peer = useStorage("peer", defaultPeer);
const relay = reactive({
  list: [],
  peer: peer.value,
  host: new URL(peer.value).hostname,
  status: "offline",
  started: 0,
  pulse: 0,
  lag: 0,
  diff: computed(() => relay.pulse - relay.started),
  age: computed(() => ms(relay.diff)),
  delay: computed(() => Date.now() - relay.pulse),
  blink: false
});
watch(() => relay.pulse, (next, prev) => {
  relay.blink = !relay.blink;
  relay.lag = next - prev - 500;
});
window.Buffer = buffer.Buffer;
window.setImmediate = setTimeout;
let gun;
function useGun(opts = { localStorage: false }) {
  if (!gun) {
    gun = Gun(__spreadValues({ peers: [peer.value] }, opts));
  }
  return gun;
}
(_b = (_a = Gun) == null ? void 0 : _a.node) == null ? void 0 : _b.soul;
(_d = (_c = Gun) == null ? void 0 : _c.text) == null ? void 0 : _d.random;
reactive({});
reactive({});
async function issueCert({
  pair,
  tag = "word",
  users = "*",
  personal = false
} = {}) {
  let path = { "*": `${tag}` };
  if (personal) {
    path["+"] = "*";
  }
  try {
    let cert = await SEA.certify(users, path, pair);
    return cert;
  } catch (e) {
    console.log("cert error: ", e);
  }
}
window.issueCert = issueCert;
const color = {
  light: new ColorHash({
    saturation: [0.05, 0.08, 0.22],
    lightness: [0.85, 0.87, 0.9]
  }),
  pale: new ColorHash({
    saturation: [0.05, 0.42, 0.52],
    lightness: [0.75, 0.77, 0.9]
  }),
  regular: new ColorHash({
    saturation: [0.1, 0.5, 0.7],
    lightness: [0.3, 0.5, 0.7]
  }),
  deep: new ColorHash({
    saturation: [0.5, 0.6, 0.7],
    lightness: [0.5, 0.55, 0.6]
  }),
  dark: new ColorHash({
    saturation: [0.02, 0.5, 0.6],
    lightness: [0.18, 0.2, 0.5]
  })
};
function useColor(palette = "deep") {
  if (typeof palette == "object") {
    return new ColorHash(palette);
  }
  return color[palette];
}
const colorDeep = useColor("deep");
reactive({
  pub: null
});
const user = reactive({
  initiated: false,
  auth: false,
  is: null,
  name: "",
  pub: computed(() => {
    var _a2;
    return (_a2 = user == null ? void 0 : user.is) == null ? void 0 : _a2.pub;
  }),
  color: computed(() => user.pub ? colorDeep.hex(user.pub) : "gray"),
  pulse: 0,
  pulser: null,
  blink: false,
  safe: {
    saved: null,
    password: null
  },
  pair() {
    var _a2, _b2, _c2;
    return (_c2 = (_b2 = (_a2 = gun == null ? void 0 : gun.user) == null ? void 0 : _a2.call(gun)) == null ? void 0 : _b2._) == null ? void 0 : _c2.sea;
  }
});
function useUser() {
  if (!user.initiated) {
    const gun2 = useGun();
    user.db = gun2.user();
    gun2.user().recall({ sessionStorage: true }, () => {
      console.log("user was recalled");
    });
    gun2.on("auth", () => {
      init();
      console.log("user authenticated");
    });
    user.initiated = true;
  }
  return { user, auth, leave };
}
function init() {
  user.is = gun.user().is;
  if (user.pulser) {
    clearInterval(user.pulser);
  }
  user.pulser = setInterval(() => {
    gun.user().get("pulse").put(Date.now());
  }, 1e3);
  gun.user().get("epub").put(user.is.epub);
  gun.user().get("pulse").on((d) => {
    user.blink = !user.blink;
    user.pulse = d;
  });
  gun.user().get("safe").map().on((d, k) => {
    user.safe[k] = d;
  });
  gun.user().get("profile").get("name").on((d) => user.name = d);
  user.initiated = true;
}
async function auth(pair, cb = () => {
}) {
  if (!isPair(pair)) {
    console.log("incorrect pair", pair);
    return;
  }
  gun.user().auth(pair, async () => {
    cb(pair);
    console.log("user is authenticated");
  });
}
function leave() {
  var _a2;
  let is = !!((_a2 = user.is) == null ? void 0 : _a2.pub);
  user.initiated = false;
  clearInterval(user.pulser);
  gun.user().leave();
  setTimeout(() => {
    if (is && !user.pair()) {
      user.is = null;
      console.info("User logged out");
    }
  }, 500);
}
function isPair(pair) {
  return pair && typeof pair == "object" && pair.pub && pair.epub && pair.priv && pair.epriv;
}
const pass = reactive({
  input: "",
  show: false,
  safePair: false,
  minLength: 5,
  safe: {},
  dec: {},
  links: {
    pass: computed(() => {
      var _a2;
      return genLink((_a2 = pass.safe) == null ? void 0 : _a2.enc);
    }),
    pair: computed(() => {
      return genLink(JSON.stringify(user.pair()));
    })
  },
  set() {
    setPass(pass.input);
    pass.input = "";
    pass.show = false;
  }
});
function genLink(text = "") {
  let base = base32.encode(text);
  return window.location.origin + window.location.pathname + "#/auth/" + base;
}
async function setPass(text) {
  let encPair = await SEA.encrypt(user.pair(), text);
  let encPass = await SEA.encrypt(text, user.pair());
  user.db.get("safe").get("enc").put(encPair);
  user.db.get("safe").get("pass").put(encPass);
}
useColor("deep");
const draw = reactive({
  colors: [
    "#000000",
    ...new Array(12).fill(true).map((el, i) => `hsl(${i * 30}, 100%,50%)`),
    "#ffffff"
  ],
  sizes: useCycleList([4, 8, 16, 24]),
  modes: ["line", "arrow", "stylus", "rectangle", "ellipse"],
  mode: computed({
    get() {
      return _mode.value;
    },
    set(v) {
      _mode.value = v;
      if (v === "arrow") {
        brush.mode = "line";
        brush.arrowEnd = true;
      } else {
        brush.mode = v;
        brush.arrowEnd = false;
      }
    }
  }),
  enabled: false,
  pinned: useStorage("drawing-pinned", false),
  canUndo: false,
  canRedo: false,
  canClear: false,
  ing: false,
  initiated: false,
  content: ""
});
const brush = toReactive(useStorage("drawing-brush", {
  color: draw.colors[0],
  size: 10,
  mode: "stylus"
}));
const _mode = ref("stylus");
const drauuOptions = reactive({
  brush,
  acceptsInputTypes: computed(() => draw.enabled ? void 0 : ["pen"]),
  coordinateTransform: true
});
markRaw(createDrauu(drauuOptions));
const rootRoom = {
  "pub": "OUlhoY2Eq8QkZE_iWN3l6J2vvbkX33vowcFdqFoCoEQ.a-B1ImQK4aoiEpdW-38MAPc8oi16DHY57bDJ4dEZpX0",
  "hosts": {
    "jFjrmOEaRy-GAJlOCdG4SGoaLm_4AGMPP1sfmzYPwwo.mp2H7IQuTWlFSahN6ZnXN9Za0pD3thiIYUyGCaMel-M": {
      "enc": 'SEA{"ct":"iS5GdAK2S5ViG1OFG6DAWYoFGZWyUu8d5AfcpenXX5VT8vqwBUFCJSp3OBUWon57uu6L73+Xyes2gNgLqrpHYqD03URRZlwCOcBG2jmtRi/Fe/YePvS2qcOzWhEJEHaxo22QyBveFmkhynAJXshXU/fjX9jYzFtAtw9wXo6jjKM1GVufmCeDMR79oxfODw+2M3sIy3vJIZ/8KR+INbOFVz/XMz5314f1sCQ6SgP1j0Fv1HGhLWkeeLLw+fyfRUMpeW1cstdArqIGH5H2Z5c3fBpLlOTzK6wbU1O9wEwVEddvgMZkEyNjBOFWV1NNauy2whyD3ftIoTr3br6gSsTcl7ibfFaP8jgTIENptZiK+cWmnN9ZpPUz4lwQodYSoUmhpizZfG/w2WA502QYGoWA9BGSzy/2bSoNpgXkEvw=","iv":"9z6HGfMkRKZJ84duHAVf","s":"yMjUdtjPYgP7"}',
      "profile": 'SEA{"m":{"c":"jFjrmOEaRy-GAJlOCdG4SGoaLm_4AGMPP1sfmzYPwwo.mp2H7IQuTWlFSahN6ZnXN9Za0pD3thiIYUyGCaMel-M","w":{"*":"profile"}},"s":"jygNHqfMhoEywFA1ChhkKmq177lGnADFnO+lc2eBih1p0IFxQPpdXvLhs7VQdAGxQtwVEx8/ZVimXwhNirUweA=="}',
      "features": 'SEA{"m":{"c":"jFjrmOEaRy-GAJlOCdG4SGoaLm_4AGMPP1sfmzYPwwo.mp2H7IQuTWlFSahN6ZnXN9Za0pD3thiIYUyGCaMel-M","w":{"*":"features"}},"s":"pNZ6D5HzCLXGF7vqYMwZ0bFEbd8nca6m9wC93YlO/Uhrh4TTVLyPQHTVZJKltzg8yvJLIZVeO8xGU6Hl3bYJ2A=="}',
      "hosts": 'SEA{"m":{"c":"jFjrmOEaRy-GAJlOCdG4SGoaLm_4AGMPP1sfmzYPwwo.mp2H7IQuTWlFSahN6ZnXN9Za0pD3thiIYUyGCaMel-M","w":{"*":"hosts"}},"s":"DvDu9qV5Em9vLUoqSg/IHlIhtx4P/x/Mf1mSwg1YsBvUnmVdEuge4tMGoRMrFKXCjAa7qpcKhmrqYYuPBSkKHA=="}'
    }
  },
  "features": {
    "rooms": 'SEA{"m":{"c":"*","w":{"*":"rooms","+":"*"}},"s":"hh9oHy+VE+5oQ7qiF/Qd8ic4MoqKENivVJj/jOxFnxSz7c1NIJ9m1bUgpcv0d45h/kbUbE4DMoCpmZ+eVHtKOw=="}',
    "space": 'SEA{"m":{"c":"*","w":{"*":"space","+":"*"}},"s":"+v1Ytw+DF8d9yQNmbiGVj+C1aBRAj/x6h6bJSqQm+yR/YlpXIfIM3v7AROKI1gSzz5GvuIO7BCyq2BzjW03row=="}',
    "posts": 'SEA{"m":{"c":"*","w":{"*":"posts","+":"*"}},"s":"Y5d/l9oqsOzUTKgLZtPCFqj8+JBtvJvMXb488QXWsFxeFS5Bz4Yt6Cafa6HWtr25YPMfnAzoljB6i/MPmtykFA=="}',
    "chat": 'SEA{"m":{"c":"*","w":{"*":"chat","+":"*"}},"s":"bjQq/OOWUR+Fii3QOrYyAQkpAfrWdb5Qpiex1LLP/g4uGGHk7NFh/whaRQyCGPec/by1MB3r/+YKIL1pOIc1Hg=="}',
    "dict": 'SEA{"m":{"c":"*","w":{"*":"dict","+":"*"}},"s":"GlbQNefEQasFo2MRjVqcVidDDMRsYwSLT+nbkh0QX6Ndy6hn+Mma8GveKey8XwHnVJOPvxlEEd7285707ET4UQ=="}'
  }
};
const currentRoom = reactive({
  pub: rootRoom.pub,
  isRoot: computed(() => currentRoom.pub == rootRoom.pub),
  hosts: {},
  features: {},
  profile: {}
});
watchEffect(() => {
  const gun2 = useGun();
  if (currentRoom.pub == rootRoom.pub) {
    currentRoom.hosts = rootRoom.hosts;
    currentRoom.features = rootRoom.features;
  } else {
    currentRoom.features = {};
    currentRoom.hosts = {};
    gun2.user(currentRoom.pub).get("hosts").map().once((d, k) => {
      delete d._;
      currentRoom.hosts[k] = d;
    });
    gun2.user(currentRoom.pub).get("features").map().once((d, k) => {
      currentRoom.features[k] = d;
    });
  }
});
function sortByDate(e) {
  const arr = Object.entries(e.data);
  let sorted = arr.sort((a, b) => {
    if (!a || !b)
      return 0;
    let timeA = Date.parse(a[0]);
    let timeB = Date.parse(b[0]);
    return timeB - timeA;
  });
  postMessage({ sorted, count: arr.length });
}
const newWorker = function(funcObj) {
  var blobURL = URL.createObjectURL(new Blob(["onmessage=", funcObj.toString()], {
    type: "application/javascript"
  })), worker = new Worker(blobURL);
  URL.revokeObjectURL(blobURL);
  return worker;
};
newWorker(sortByDate);
const dictRecord = reactive({
  word: null,
  def: null
});
useStorage("dict-lang", "en");
watch(dictRecord, () => {
  if (dictRecord.word && dictRecord.def) {
    addRecord(dictRecord);
  }
});
async function addRecord({ word, def } = {}) {
  var _a2;
  const gun2 = useGun();
  const { user: user2 } = useUser();
  let already = await gun2.user(currentRoom.pub).get("dict").get(`${word}:${def}@${user2.pub}`).then();
  gun2.user(currentRoom.pub).get("dict").get(`${word}:${def}@${user2.pub}`).put(!already, null, { opt: { cert: (_a2 = currentRoom.features) == null ? void 0 : _a2.dict } });
  dictRecord.word = null;
  dictRecord.def = null;
}
const _hoisted_1$1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M16 5c-3.855 0-7 3.145-7 7c0 2.41 1.23 4.55 3.094 5.813C8.527 19.343 6 22.883 6 27h2c0-4.43 3.57-8 8-8s8 3.57 8 8h2c0-4.117-2.527-7.656-6.094-9.188A7.024 7.024 0 0 0 23 12c0-3.855-3.145-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5s-5-2.227-5-5s2.227-5 5-5z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3);
}
var __unplugin_components_0 = { name: "la-user", render: render$1 };
const _hoisted_1 = { class: "flex flex-col" };
const _hoisted_2 = ["width", "height", "src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_la_user = __unplugin_components_0;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    $props.pub ? (openBlock(), createElementBlock("img", {
      key: 0,
      class: "border rounded-full overflow-hidden transition duration-500 ease-out",
      style: normalizeStyle({ borderColor: $setup.blink ? $setup.colorDeep.hex($props.pub) : "transparent", borderWidth: `${$props.border}px` }),
      width: $props.size,
      height: $props.size,
      src: $setup.avatar
    }, null, 12, _hoisted_2)) : (openBlock(), createElementBlock("div", {
      key: 1,
      class: "p-2",
      style: normalizeStyle({ fontSize: $props.size + "px" })
    }, [
      createVNode(_component_la_user)
    ], 4))
  ]);
}
const _sfc_main = {
  __name: "Avatar",
  props: {
    pub: { type: String, default: "" },
    size: { type: Number, default: 42 },
    border: { type: Number, default: 2 }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const colorDeep2 = useColor("deep");
    const gun2 = useGun();
    const avatar = ref();
    watch(() => props.pub, () => {
      avatar.value = gunAvatar({ pub: props.pub, size: props.size * 4 });
    }, { immediate: true });
    gun2.user(props.pub).get("avatar").on((hash) => {
      if (hash) {
        gun2.get("#avatars").get(hash).once((d) => {
          avatar.value = d;
        });
      } else {
        avatar.value = gunAvatar({ pub: props.pub, size: props.size * 4 });
      }
    });
    const blink = ref();
    gun2.user(props.pub).get("pulse").on((d) => {
      blink.value = !blink.value;
    });
    const __returned__ = { props, colorDeep: colorDeep2, gun: gun2, avatar, blink, useGun, useUser, gunAvatar, useColor, computed, ref, watch };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/account/Avatar.vue";
var Avatar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/account/Avatar.vue"]]);
export { Avatar as default };
//# sourceMappingURL=Avatar.es.js.map
