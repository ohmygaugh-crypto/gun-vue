import { __vitePreload } from "./mapping.es.js";
import { markRaw, defineComponent, ref, useFocus, watch, refDebounced, computed, openBlock, createElementBlock, createBaseVNode, createVNode, unref, Icon, withDirectives, vModelText, withKeys, withModifiers, createBlock, withCtx, Fragment, renderList, createCommentVNode, createTextVNode, flexsearch, useCssVars, toRefs, useRouter, normalizeClass, toDisplayString } from "./vendor.es.js";
import { useStoryStore } from "./story.es.js";
import { BaseEmpty } from "./BaseEmpty.es.js";
import { onKeyboardShortcut } from "./assets/bundle-main.7b5939ba.js";
import { _export_sfc, useScrollOnActive, BaseListItemLink } from "./MobileOverlay.es.js";
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"a":[0,1,26,27,28,29],"af":[0,1,28,29],"afa":[0,1,28,29],"afat":[0,1,28,29],"afata":[0,1,28,29],"afatar":[0,1,28,29],"p":[2,3,24,25,44,45,46,47,48,49],"pa":[2,3,44,45,46,47],"pat":[2,3],"patk":[2,3],"patke":[2,3],"o":[4,5,36,37],"om":[4,5,36,37],"ome":[4,5,36,37],"s":[6,7,18,19],"se":[6,7],"sel":[6,7],"sele":[6,7],"selek":[6,7],"selekt":[6,7],"r":[8,9,50,51,54,55],"ro":[8,9,50,51],"rom":[8,9,50,51],"k":[10,11,12,13,30,31,32,33,34,35,52,53],"ko":[10,11],"kom":[10,11],"komp":[10,11],"kompo":[10,11],"kompos":[10,11],"komposa":[10,11],"komposap":[10,11],"komposapl":[10,11],"komposaple":[10,11],"komposaples":[10,11],"ka":[12,13],"kar":[12,13],"kart":[12,13],"f":[14,15],"fo":[14,15],"for":[14,15],"form":[14,15],"l":[16,17,22,23,40,41,42,43],"le":[16,17,22,23,40,41],"les":[16,17,22,23,40,41],"lest":[16,17,22,23,40,41],"so":[18,19],"sof":[18,19],"e":[20,21,38,39],"ek":[20,21,38,39],"eko":[20,21,38,39],"ekom":[20,21,38,39],"pl":[24,25],"pla":[24,25],"plam":[24,25],"plame":[24,25],"ao":[26,27],"aot":[26,27],"kr":[30,31,32,33,34,35,52,53],"kre":[30,31,32,33],"krea":[30,31],"kreat":[30,31],"kreate":[30,31],"kret":[32,33],"krete":[32,33],"kretem":[32,33],"kretemt":[32,33],"kretemte":[32,33],"kretemtea":[32,33],"kretemteal":[32,33],"kretemteals":[32,33],"kra":[34,35,52,53],"kraf":[34,35,52,53],"lo":[42,43],"lok":[42,43],"loke":[42,43],"lokem":[42,43],"pam":[44,45],"pame":[44,45],"pamel":[44,45],"pas":[46,47],"pr":[48,49],"pro":[48,49],"prof":[48,49],"profe":[48,49],"profel":[48,49],"profele":[48,49],"roms":[50,51],"re":[54,55],"rel":[54,55],"rela":[54,55]},{"r":[1,3,5,7,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,53],"ro":[1,3,5,7,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,53,55],"rom":[1,3,5,7,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,53,55],"romt":[1,3,5,7,9,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55],"t":[11],"te":[11],"tef":[11],"tefa":[11],"tefao":[11],"tefaol":[11],"tefaolt":[11]},{},{},{},{},{},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-account-accountavatar-story-vue", "kind": "story" }, "1": { "id": "src-account-accountavatar-story-vue:src-account-accountavatar-story-vue-0", "kind": "variant" }, "2": { "id": "src-account-accountbadge-story-vue", "kind": "story" }, "3": { "id": "src-account-accountbadge-story-vue:src-account-accountbadge-story-vue-0", "kind": "variant" }, "4": { "id": "src-account-accounthome-story-vue", "kind": "story" }, "5": { "id": "src-account-accounthome-story-vue:src-account-accounthome-story-vue-0", "kind": "variant" }, "6": { "id": "src-account-accountselect-story-vue", "kind": "story" }, "7": { "id": "src-account-accountselect-story-vue:src-account-accountselect-story-vue-0", "kind": "variant" }, "8": { "id": "src-chat-chatroom-story-vue", "kind": "story" }, "9": { "id": "src-chat-chatroom-story-vue:src-chat-chatroom-story-vue-0", "kind": "variant" }, "10": { "id": "src-composables-composables-story-vue", "kind": "story" }, "11": { "id": "src-composables-composables-story-vue:_default", "kind": "variant" }, "12": { "id": "src-gift-giftcard-story-vue", "kind": "story" }, "13": { "id": "src-gift-giftcard-story-vue:src-gift-giftcard-story-vue-0", "kind": "variant" }, "14": { "id": "src-gift-giftform-story-vue", "kind": "story" }, "15": { "id": "src-gift-giftform-story-vue:src-gift-giftform-story-vue-0", "kind": "variant" }, "16": { "id": "src-gift-giftlist-story-vue", "kind": "story" }, "17": { "id": "src-gift-giftlist-story-vue:src-gift-giftlist-story-vue-0", "kind": "variant" }, "18": { "id": "src-qr-qrshow-story-vue", "kind": "story" }, "19": { "id": "src-qr-qrshow-story-vue:src-qr-qrshow-story-vue-0", "kind": "variant" }, "20": { "id": "src-room-roomicon-story-vue", "kind": "story" }, "21": { "id": "src-room-roomicon-story-vue:src-room-roomicon-story-vue-0", "kind": "variant" }, "22": { "id": "src-room-roomlist-story-vue", "kind": "story" }, "23": { "id": "src-room-roomlist-story-vue:src-room-roomlist-story-vue-0", "kind": "variant" }, "24": { "id": "src-space-spaceplane-story-vue", "kind": "story" }, "25": { "id": "src-space-spaceplane-story-vue:src-space-spaceplane-story-vue-0", "kind": "variant" }, "26": { "id": "src-user-userauth-story-vue", "kind": "story" }, "27": { "id": "src-user-userauth-story-vue:src-user-userauth-story-vue-0", "kind": "variant" }, "28": { "id": "src-user-useravatar-story-vue", "kind": "story" }, "29": { "id": "src-user-useravatar-story-vue:src-user-useravatar-story-vue-0", "kind": "variant" }, "30": { "id": "src-user-usercreate-story-vue", "kind": "story" }, "31": { "id": "src-user-usercreate-story-vue:src-user-usercreate-story-vue-0", "kind": "variant" }, "32": { "id": "src-user-usercredentials-story-vue", "kind": "story" }, "33": { "id": "src-user-usercredentials-story-vue:src-user-usercredentials-story-vue-0", "kind": "variant" }, "34": { "id": "src-user-usergraph-story-vue", "kind": "story" }, "35": { "id": "src-user-usergraph-story-vue:src-user-usergraph-story-vue-0", "kind": "variant" }, "36": { "id": "src-user-userhome-story-vue", "kind": "story" }, "37": { "id": "src-user-userhome-story-vue:src-user-userhome-story-vue-0", "kind": "variant" }, "38": { "id": "src-user-usericon-story-vue", "kind": "story" }, "39": { "id": "src-user-usericon-story-vue:src-user-usericon-story-vue-0", "kind": "variant" }, "40": { "id": "src-user-userlist-story-vue", "kind": "story" }, "41": { "id": "src-user-userlist-story-vue:src-user-userlist-story-vue-0", "kind": "variant" }, "42": { "id": "src-user-userlogin-story-vue", "kind": "story" }, "43": { "id": "src-user-userlogin-story-vue:src-user-userlogin-story-vue-0", "kind": "variant" }, "44": { "id": "src-user-userpanel-story-vue", "kind": "story" }, "45": { "id": "src-user-userpanel-story-vue:src-user-userpanel-story-vue-0", "kind": "variant" }, "46": { "id": "src-user-userpass-story-vue", "kind": "story" }, "47": { "id": "src-user-userpass-story-vue:src-user-userpass-story-vue-0", "kind": "variant" }, "48": { "id": "src-user-userprofile-story-vue", "kind": "story" }, "49": { "id": "src-user-userprofile-story-vue:src-user-userprofile-story-vue-0", "kind": "variant" }, "50": { "id": "src-user-userrooms-story-vue", "kind": "story" }, "51": { "id": "src-user-userrooms-story-vue:src-user-userrooms-story-vue-0", "kind": "variant" }, "52": { "id": "src-util-utilgraph-story-vue", "kind": "story" }, "53": { "id": "src-util-utilgraph-story-vue:src-util-utilgraph-story-vue-0", "kind": "variant" }, "54": { "id": "src-util-utilrelay-story-vue", "kind": "story" }, "55": { "id": "src-util-utilrelay-story-vue:src-util-utilrelay-story-vue-0", "kind": "variant" } } };
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || c === "")) {
    const b2 = a.split(c);
    return this.filter ? filter$1(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
const regex_normalize = /[\u0300-\u036f]/g;
function normalize(a) {
  return a.normalize && (a = a.normalize("NFD").replace(regex_normalize, "")), a;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter$1(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
const regex_a = regex("[\xE0\xE1\xE2\xE3\xE4\xE5]"), regex_e = regex("[\xE8\xE9\xEA\xEB]"), regex_i = regex("[\xEC\xED\xEE\xEF]"), regex_o = regex("[\xF2\xF3\xF4\xF5\xF6\u0151]"), regex_u = regex("[\xF9\xFA\xFB\xFC\u0171]"), regex_y = regex("[\xFD\u0177\xFF]"), regex_n = regex("\xF1"), regex_c = regex("[\xE7c]"), regex_s = regex("\xDF"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", \u00DF: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function encode$1(a) {
  a = encode$2.call(this, a).join(" ");
  const b = [];
  if (a) {
    const c = a.split(regex_strip), d = c.length;
    for (let e, f = 0, g = 0; f < d; f++)
      if ((a = c[f]) && (!this.filter || !this.filter[a])) {
        e = a[0];
        let c2 = soundex[e] || e, d2 = c2;
        for (let b2 = 1; b2 < a.length; b2++) {
          e = a[b2];
          const f2 = soundex[e] || e;
          f2 && f2 !== d2 && (c2 += f2, d2 = f2);
        }
        b[g++] = c2;
      }
  }
  return b;
}
var charset = { encode, rtl: false, tokenize: "" };
const regex_ae = regex("ae"), regex_oe = regex("oe"), regex_sh = regex("sh"), regex_th = regex("th"), regex_ph = regex("ph"), regex_pf = regex("pf"), pairs = [regex_ae, "a", regex_oe, "o", regex_sh, "s", regex_th, "t", regex_ph, "f", regex_pf, "f", regex("(?![aeo])h(?![aeo])"), "", regex("(?!^[aeo])h(?!^[aeo])"), ""];
function encode(a, b) {
  return a && (a = encode$1.call(this, a).join(" "), 2 < a.length && (a = replace(a, pairs)), !b && (1 < a.length && (a = collapse(a)), a && (a = a.split(" ")))), a;
}
const filter = ["a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "both", "but", "by", "can", "cannot", "can't", "come", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "dont", "down", "during", "each", "even", "few", "first", "for", "from", "further", "get", "go", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "hed", "her", "here", "here's", "hers", "herself", "hes", "him", "himself", "his", "how", "how's", "i", "id", "if", "ill", "im", "in", "into", "is", "isn't", "it", "it's", "itself", "i've", "just", "know", "let's", "like", "make", "me", "more", "most", "mustn't", "my", "myself", "new", "no", "nor", "not", "now", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "our's", "ourselves", "out", "over", "own", "same", "say", "see", "shan't", "she", "she'd", "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "time", "to", "too", "until", "up", "us", "very", "want", "was", "wasn't", "way", "we", "wed", "well", "were", "weren't", "we've", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "whom", "who's", "why", "why's", "will", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "your", "you're", "your's", "yourself", "yourselves", "you've"];
const stemmer = { ational: "ate", iveness: "ive", fulness: "ful", ousness: "ous", ization: "ize", tional: "tion", biliti: "ble", icate: "ic", ative: "", alize: "al", iciti: "ic", entli: "ent", ousli: "ous", alism: "al", ation: "ate", aliti: "al", iviti: "ive", ement: "", enci: "ence", anci: "ance", izer: "ize", alli: "al", ator: "ate", logi: "log", ical: "ic", ance: "", ence: "", ness: "", able: "", ible: "", ment: "", eli: "e", bli: "ble", ful: "", ant: "", ent: "", ism: "", ate: "", iti: "", ous: "", ive: "", ize: "", al: "", ou: "", er: "", ic: "" };
const matcher = {};
var language = { filter, stemmer, matcher };
const _hoisted_1$1 = ["data-selected"];
const _hoisted_2$1 = { class: "htw-flex-1" };
const _hoisted_3 = { class: "htw-flex" };
const _hoisted_4 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_5 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "0e1c785e": __props.result.iconColor
    }));
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      router.push(props.result.route);
      emit("close");
    });
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant"
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        createVNode(BaseListItemLink, {
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
        }, {
          default: withCtx(() => {
            var _a, _b;
            return [
              createVNode(unref(Icon), {
                icon: (_a = __props.result.icon) != null ? _a : defaultIcons[__props.result.kind],
                class: normalizeClass(["htw-w-4 htw-h-4", [
                  !unref(selected) ? [
                    __props.result.iconColor ? "bind-icon-color" : {
                      "htw-text-primary-500": __props.result.kind === "story",
                      "htw-text-gray-500": __props.result.kind === "variant"
                    }
                  ] : []
                ]])
              }, null, 8, ["icon", "class"]),
              createBaseVNode("div", _hoisted_2$1, [
                createBaseVNode("div", _hoisted_3, [
                  createTextVNode(toDisplayString(__props.result.title) + " ", 1),
                  createBaseVNode("span", _hoisted_4, toDisplayString(kindLabels[__props.result.kind]), 1)
                ]),
                ((_b = __props.result.path) == null ? void 0 : _b.length) ? (openBlock(), createElementBlock("div", _hoisted_5, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.result.path, (p, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      class: "htw-flex htw-items-center htw-gap-0.5"
                    }, [
                      index > 0 ? (openBlock(), createBlock(unref(Icon), {
                        key: 0,
                        icon: "carbon:chevron-right",
                        class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                      })) : createCommentVNode("", true),
                      createBaseVNode("span", null, toDisplayString(p), 1)
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ])
            ];
          }),
          _: 1
        }, 8, ["to", "is-active"])
      ], 8, _hoisted_1$1);
    };
  }
});
var SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7856c5b0"]]);
const searchData = markRaw(searchData$1);
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" No results ");
const _hoisted_2 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data.es.js"), true ? ["search-docs-data.es.js","vendor.es.js"] : void 0);
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new flexsearch.Document({
        preset: "match",
        document: {
          id: "id",
          index: [
            "text"
          ]
        },
        worker: true,
        charset,
        language,
        tokenize: "forward"
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const key of Object.keys(data.index)) {
        await titleSearchIndex.import(key, data.index[key]);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const key of Object.keys(data.index)) {
          await docSearchIndex.import(key, data.index[key]);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const raw = await titleSearchIndex.search(value);
      let rank = 0;
      for (const field of raw) {
        for (const id of field.result) {
          const idMapData = titleIdMap[id];
          if (!idMapData)
            continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
              rank++;
              break;
            }
            case "variant": {
              const [storyId] = idMapData.id.split(":");
              const story = storyStore.getStoryById(storyId);
              const variant = storyStore.getVariantById(idMapData.id);
              list.push(variantResultFactory(story, variant, rank));
              rank++;
              break;
            }
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const raw = await docSearchIndex.search(query);
        let rank = 0;
        for (const field of raw) {
          for (const id of field.result) {
            const idMapData = docIdMap[id];
            if (!idMapData)
              continue;
            switch (idMapData.kind) {
              case "story": {
                list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
                rank++;
                break;
              }
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank) {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor
      };
    }
    function variantResultFactory(story, variant, rank) {
      var _a;
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id
          }
        },
        path: [...(_a = story.file.path) != null ? _a : [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor
      };
    }
    const results = computed(() => {
      const list = [...titleResults.value];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const selectedIndex = ref(0);
    watch(results, () => {
      selectedIndex.value = 0;
    });
    function selectNext() {
      selectedIndex.value++;
      if (selectedIndex.value > results.value.length - 1) {
        selectedIndex.value = 0;
      }
    }
    function selectPrevious() {
      selectedIndex.value--;
      if (selectedIndex.value < 0) {
        selectedIndex.value = results.value.length - 1;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => selectNext(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => selectPrevious(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !unref(results).length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            _hoisted_1
          ]),
          _: 1
        })) : unref(results).length ? (openBlock(), createElementBlock("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === selectedIndex.value,
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export { _sfc_main as default };
