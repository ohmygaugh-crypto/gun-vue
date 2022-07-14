var _a, _b, _c, _d;
import { ColorHash, ref, computed, reactive, ms, useStorage, watch, buffer, Gun, urlRegex, SEA, Fuse, watchEffect, base32, useCycleList, toReactive, markRaw, createDrauu, onMounted, nextTick } from "./vendor.es.js";
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
const colorDeep$1 = useColor("deep");
function useAccount(pub = ref(), { TIMEOUT = 1e4 } = {}) {
  const gun3 = useGun();
  pub = ref(pub);
  const account = computed(() => {
    const obj = reactive({
      pub,
      color: computed(() => pub.value ? colorDeep$1.hex(pub.value) : "gray"),
      profile: {
        name: ""
      },
      pulse: 0,
      lastSeen: computed(() => {
        let time = Date.now() - obj.pulse;
        if (time > TIMEOUT) {
          return ms(time);
        } else {
          return "online";
        }
      }),
      blink: false,
      db: gun3.user(pub.value)
    });
    gun3.user(pub.value).get("pulse").on((d) => {
      obj.blink = !obj.blink;
      obj.pulse = d;
    }).back().get("profile").map().on((data, key) => {
      obj.profile[key] = data;
    });
    return obj;
  });
  return { account };
}
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
function setPeer(url) {
  peer.value = url;
  window.location.reload();
}
function resetPeer() {
  peer.value = defaultPeer;
  window.location.reload();
}
function useRelay() {
  const gun3 = useGun();
  if (relay.pulse == 0) {
    gun3.get(relay.host).map().on((d, k) => {
      relay[k] = d;
    });
  }
  return { relay, setPeer, resetPeer };
}
window.Buffer = buffer.Buffer;
window.setImmediate = setTimeout;
let gun;
let gun2;
function useGun(opts = { localStorage: false }) {
  if (!gun) {
    gun = Gun({ peers: [peer.value], ...opts });
  }
  return gun;
}
function useGun2(opts = { localStorage: false }) {
  if (!gun2) {
    gun2 = Gun({ peers: [peer.value], ...opts });
  }
  return gun2;
}
const soul = (_b = (_a = Gun) == null ? void 0 : _a.node) == null ? void 0 : _b.soul;
const genUUID = (_d = (_c = Gun) == null ? void 0 : _c.text) == null ? void 0 : _d.random;
const relays = reactive({});
const errors = reactive({});
async function loadRelays({
  source = "https://raw.githubusercontent.com/wiki/amark/gun/volunteer.dht.md"
} = {}) {
  let res = await fetch(source);
  let data = await res.text();
  let urls = data.match(urlRegex());
  urls.push(relay.peer);
  urls = Array.from(urls);
  urls.forEach((u) => {
    let testUrl = new URL(u);
    if (testUrl.pathname === "/gun" && testUrl.pathname.indexOf("~~") === -1) {
      let startMoment = performance.now();
      fetch(testUrl.href, {
        method: "HEAD",
        mode: "cors",
        redirect: "follow",
        referrerPolicy: "no-referrer"
      }).then((response) => {
        let endMoment = performance.now();
        if (response.ok) {
          relays[testUrl.hostname] = {
            host: testUrl.hostname,
            ping: (endMoment - startMoment).toFixed(),
            url: testUrl.href
          };
        } else {
          errors[testUrl.hostname] = response;
        }
      }).catch((e) => {
        errors[testUrl.hostname] = e;
      });
    }
  });
  return relays;
}
function useRelays() {
  return { relays, errors, loadRelays };
}
function isHash(str) {
  return str.length == 44 && str.charAt(43) == "=";
}
async function encFor(data, receiver, sender) {
  const secret = await SEA.secret(receiver.epub, sender);
  const encryptedData = await SEA.encrypt(data, secret);
  return encryptedData;
}
async function decFrom(data, sender, receiver) {
  const secret = await SEA.secret(sender.epub, receiver);
  const decryptedData = await SEA.decrypt(data, secret);
  return decryptedData;
}
async function hashText(text) {
  let hash = await SEA.work(text, null, null, { name: "SHA-256" });
  return hash;
}
async function hashObj(obj) {
  let hashed = typeof obj == "string" ? obj : JSON.stringify(obj);
  let hash = await hashText(hashed);
  return { hashed, hash };
}
async function getShortHash(text, seed) {
  return await SEA.work(text, seed, null, { name: "SHA-1", encode: "hex" });
}
function safeHash(unsafe) {
  if (!unsafe)
    return;
  const encode_regex = /[\+=\/]/g;
  return unsafe.replace(encode_regex, encodeChar);
}
function encodeChar(c) {
  switch (c) {
    case "+":
      return "-";
    case "=":
      return ".";
    case "/":
      return "_";
  }
}
function unsafeHash(safe) {
  if (!safe)
    return;
  const decode_regex = /[\._\-]/g;
  return safe.replace(decode_regex, decodeChar);
}
function decodeChar(c) {
  switch (c) {
    case "-":
      return "+";
    case ".":
      return "=";
    case "_":
      return "/";
  }
}
function safeJSONParse(input, def) {
  if (!input) {
    return def || {};
  } else if (Object.prototype.toString.call(input) === "[object Object]") {
    return input;
  }
  try {
    return JSON.parse(input);
  } catch (e) {
    return def || {};
  }
}
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
async function generateCerts({ pair, list = [] } = {}) {
  const all = {};
  for (let opt of list) {
    all[opt.tag] = await issueCert({ ...opt, pair });
  }
  return all;
}
const dictRecord = reactive({
  word: null,
  def: null
});
const dictLang = useStorage("dict-lang", "en");
watch(dictRecord, () => {
  if (dictRecord.word && dictRecord.def) {
    addRecord(dictRecord);
  }
});
function useWords() {
  const gun3 = useGun();
  useUser();
  const input = ref("");
  const word = computed(() => letterFilter(input.value));
  async function addWord() {
    const hash = await hashText(word.value);
    gun3.get("dict").get("#word").get(hash).put(word.value);
    dictRecord.word = hash;
    input.value = "";
  }
  const linked = reactive({});
  gun3.user(currentRoom.pub).get("dict").map().on(async (d, k) => {
    if (!d)
      return;
    let hash = k.slice(0, 44);
    let defHash = k.slice(45, 89);
    let def = await gun3.get("dict").get("#def").get(defHash).then();
    if (!def)
      return;
    try {
      def = JSON.parse(def);
    } catch (e) {
      console.log(e, def);
      return;
    }
    if ((def == null ? void 0 : def.lang) != dictLang.value)
      return;
    linked[hash] = linked[hash] || await gun3.get("dict").get("#word").get(hash).then();
  });
  const words = reactive({});
  gun3.get("dict").get("#word").map().once((d, k) => {
    if (d.includes(" "))
      return;
    words[k] = d;
  });
  const fuse = computed(() => {
    let arr = Object.entries(words).map((entry) => {
      return { text: entry[1], hash: entry[0] };
    });
    return new Fuse(arr, {
      keys: ["text"],
      includeScore: true
    });
  });
  const found = computed(() => fuse.value.search(input.value));
  return { input, found, words, linked, word, addWord };
}
function useWord(hash) {
  const gun3 = useGun();
  const word = ref();
  gun3.get("dict").get("#word").get(hash).once((d, k) => {
    word.value = letterFilter(d);
  });
  return { word };
}
function useDefs() {
  const gun3 = useGun();
  const def = reactive({
    text: "",
    lang: dictLang,
    part: "noun"
  });
  async function addDef() {
    const { hash, hashed } = await hashObj(def);
    gun3.get("dict").get("#def").get(hash).put(hashed);
    dictRecord.def = hash;
    def.text = "";
    def.part = null;
  }
  const linked = reactive({});
  gun3.user(currentRoom.pub).get("dict").map().on(async (d, k) => {
    if (!d)
      return;
    let hash = k.slice(45, 89);
    let record = await gun3.get("dict").get("#def").get(hash).then();
    if (!record)
      return;
    try {
      record = JSON.parse(record);
      if ((record == null ? void 0 : record.lang) != dictLang.value)
        return;
      linked[hash] = linked[hash] || record;
    } catch (e) {
      console.log(e, record);
    }
  });
  const defs = reactive({});
  gun3.get("dict").get("#def").map().once((d, k) => {
    defs[k] = JSON.parse(d);
  });
  const fuse = computed(() => {
    let defList = [];
    for (let hash in defs) {
      defList.push({ hash, ...defs[hash] });
    }
    return new Fuse(defList, {
      keys: ["text"],
      includeScore: true
    });
  });
  const found = computed(() => fuse.value.search(def.text));
  return { def, addDef, defs, found, linked };
}
async function addRecord({ word, def } = {}) {
  var _a2;
  const gun3 = useGun();
  const { user: user2 } = useUser();
  let already = await gun3.user(currentRoom.pub).get("dict").get(`${word}:${def}@${user2.pub}`).then();
  gun3.user(currentRoom.pub).get("dict").get(`${word}:${def}@${user2.pub}`).put(!already, null, { opt: { cert: (_a2 = currentRoom.features) == null ? void 0 : _a2.dict } });
  dictRecord.word = null;
  dictRecord.def = null;
}
function useDictRecordsFor(hash) {
  const gun3 = useGun();
  const links = reactive({});
  gun3.user(currentRoom.pub).get("dict").map().on((data, key) => {
    var _a2;
    let index = key.indexOf(hash);
    if (index == -1)
      return;
    const { from, to, author } = parseHashLink(key);
    let linked = from == hash ? to : from;
    links[linked] = links[linked] || {};
    if (data) {
      links[linked][author] = data;
    } else {
      (_a2 = links == null ? void 0 : links[linked]) == null ? true : delete _a2[author];
      if (Object.keys(links == null ? void 0 : links[linked]).length == 0) {
        links == null ? true : delete links[linked];
      }
    }
  });
  return links;
}
function useDictRecordsBy(pub) {
  const gun3 = useGun();
  const records = reactive({});
  gun3.user(currentRoom.pub).get("dict").map().on((data, key) => {
    var _a2;
    const { from, to, author } = parseHashLink(key);
    if (author != pub)
      return;
    records[from] = records[from] || {};
    if (data) {
      records[from][to] = data;
    } else {
      (_a2 = records == null ? void 0 : records[from]) == null ? true : delete _a2[to];
      if (Object.keys(records[from]).length == 0) {
        records == null ? true : delete records[from];
      }
    }
  });
  return records;
}
function useDictAuthors() {
  const gun3 = useGun();
  const authors = reactive({});
  gun3.user(currentRoom.pub).get("dict").map().once(async (data, key) => {
    const { from, to, author } = parseHashLink(key);
    authors[author] = authors[author] || {};
    authors[author][from] = authors[author][from] || {};
    authors[author][from][to] = data;
  });
  return authors;
}
function useDictLangs() {
  const gun3 = useGun();
  const langs = reactive({});
  gun3.user(currentRoom.pub).get("dict").map().once(async (data, key) => {
    let hash = key.slice(45, 89);
    let def = await gun3.get("dict").get("#def").get(hash).then();
    if (!def)
      return;
    try {
      def = JSON.parse(def);
    } catch (e) {
      console.log(def, e);
    }
    if (!(def == null ? void 0 : def.lang))
      return;
    langs[def == null ? void 0 : def.lang] = langs[def == null ? void 0 : def.lang] || 0;
    langs[def == null ? void 0 : def.lang]++;
  });
  return langs;
}
function parseHashLink(link) {
  return {
    from: link.slice(0, 44),
    to: link.slice(45, 89),
    author: link.slice(-87)
  };
}
function renderStress({ text, stress } = {}) {
  const stressMark = "&#x301;";
  if (!text)
    return;
  let str = text.slice(0, stress + 1) + stressMark + text.slice(stress + 1);
  return str[0].toUpperCase() + str.slice(1);
}
function letterFilter(str) {
  if (!str)
    return "";
  let clean = str.toLowerCase().matchAll(/\p{L}/gu, "");
  return Array.from(clean).map((el) => el[0]).join("");
}
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
const sortDate = newWorker(sortByDate);
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
  const gun3 = useGun();
  if (currentRoom.pub == rootRoom.pub) {
    currentRoom.hosts = rootRoom.hosts;
    currentRoom.features = rootRoom.features;
  } else {
    currentRoom.features = {};
    currentRoom.hosts = {};
    gun3.user(currentRoom.pub).get("hosts").map().once((d, k) => {
      delete d._;
      currentRoom.hosts[k] = d;
    });
    gun3.user(currentRoom.pub).get("features").map().once((d, k) => {
      currentRoom.features[k] = d;
    });
  }
});
function useRoom(pub = currentRoom.pub) {
  const room = reactive({
    pub,
    isRoot: pub != rootRoom.pub,
    hosts: {},
    features: {},
    profile: {}
  });
  const gun3 = useGun();
  gun3.user(pub).get("profile").map().on((d, k) => {
    room.profile[k] = d;
  });
  gun3.user(pub).get("hosts").map().once((d, k) => {
    if (d)
      delete d._;
    room.hosts[k] = d;
  });
  gun3.user(pub).get("features").map().once((d, k) => {
    room.features[k] = d;
  });
  return {
    room,
    submitRoom,
    enterRoom,
    createRoom,
    leaveRoom,
    updateRoomProfile
  };
}
function useRooms() {
  const rooms = computed(() => {
    return listPersonal("rooms", currentRoom.pub);
  });
  return { rooms, createRoom };
}
function updateRoomProfile(field, content) {
  var _a2, _b2;
  const gun3 = useGun();
  const { user: user2 } = useUser();
  let certificate = (_b2 = (_a2 = currentRoom.hosts) == null ? void 0 : _a2[user2.pub]) == null ? void 0 : _b2.profile;
  gun3.user(currentRoom.pub).get("profile").get(field).put(content, null, { opt: { cert: certificate } });
}
async function createRoom({ pair, name } = {}) {
  var _a2;
  const { user: user2 } = useUser();
  if (!pair)
    return;
  const certs = await generateCerts({
    pair,
    list: [
      { tag: "profile", users: [user2.pub] },
      { tag: "features", users: [user2.pub] },
      { tag: "hosts", users: [user2.pub] }
    ]
  });
  const features = await generateCerts({
    pair,
    list: [
      { tag: "rooms", personal: true },
      { tag: "space", personal: true },
      { tag: "posts", personal: true },
      { tag: "chat", personal: true },
      { tag: "dict", personal: true }
    ]
  });
  const enc = await SEA.encrypt(pair, user2.pair());
  const dec = await SEA.decrypt(enc, user2.pair());
  console.log("COPY THIS ROOM INFO TO USE IT AS A ROOT", {
    pub: dec.pub,
    hosts: { [user2.pub]: { enc, ...certs } },
    features
  }, "STORE THIS KEY PAIR IN A SAFE PLACE", dec);
  const gun3 = useGun();
  gun3.user().get("safe").get("rooms").get(dec.pub).put(enc);
  gun3.user(currentRoom.pub).get("rooms").get(`${dec.pub}@${user2.pub}`).put(true, null, { opt: { cert: (_a2 = currentRoom == null ? void 0 : currentRoom.features) == null ? void 0 : _a2.rooms } });
  const roomDb = gun3.user(dec.pub);
  roomDb.get("hosts").get(user2.pub).put({
    enc,
    ...certs
  }, null, { opt: { cert: certs.hosts } });
  roomDb.get("features").put(features, null, { opt: { cert: certs.features } });
  if (name) {
    roomDb.get("profile").put({ name }, null, { opt: { cert: certs.profile } });
  }
}
async function recreateRoom(enc) {
  const dec = await SEA.decrypt(enc, user.pair());
  createRoom({
    pair: dec
  });
}
async function submitRoom(pub) {
  var _a2;
  const gun3 = useGun();
  const already = await gun3.user(currentRoom.pub).get("rooms").get(`${pub}@${user.pub}`).then();
  gun3.user(currentRoom.pub).get("rooms").get(`${pub}@${user.pub}`).put(!already, null, { opt: { cert: (_a2 = currentRoom.features) == null ? void 0 : _a2.rooms } });
}
function joinRoom() {
  var _a2;
  const gun3 = useGun();
  gun3.user(currentRoom.pub).get("space").get(user.pub).put(JSON.stringify({ x: Math.random(), y: Math.random() }), null, {
    opt: { cert: (_a2 = currentRoom.features) == null ? void 0 : _a2.space }
  });
}
function enterRoom(pub) {
  currentRoom.pub = pub;
}
function leaveRoom() {
  currentRoom.pub = rootRoom.pub;
}
async function addPersonal({
  tag,
  key,
  text,
  pub = currentRoom.pub,
  cert
} = {}) {
  var _a2;
  if (!cert)
    cert = await gun.user(pub).get("features").get(tag).then();
  if (!cert) {
    cert = (_a2 = currentRoom.features) == null ? void 0 : _a2[`${tag}`];
  }
  if (!cert && pub != user.pub) {
    console.log("No certificate found");
    return;
  }
  gun.user(pub).get(`${tag}`).get(`${key}@${user.pub}`).put(text, null, { opt: { cert } });
}
function listPersonal(tag, pub = currentRoom.pub) {
  const gun3 = useGun();
  const records = reactive({});
  gun3.user(pub).get(`${tag}`).map().on(function(data, key) {
    let k = key.substring(0, 87);
    records[k] = records[k] || {};
    records[k][key.substring(88)] = data;
  });
  return records;
}
async function addHashedPersonal(tag, obj, pub = currentRoom.pub, cert) {
  var _a2;
  if (!cert)
    cert = await gun.get(`~${pub}`).get("features").get(tag).then();
  if (!cert && pub == rootRoom.pub) {
    cert = (_a2 = rootRoom.features) == null ? void 0 : _a2[`#${tag}`];
  }
  if (!cert && pub != user.pub) {
    console.log("No certificate found");
    return;
  }
  const { hashed, hash } = await hashObj(obj);
  gun.get(`~${pub}`).get(`#${tag}`).get(`${hash}@${user.pub}`).put(hashed, null, { opt: { cert } });
}
function getHashedPersonal(tag, hash, pub = currentRoom.pub) {
  const record = reactive({});
  gun.get(`~${pub}`).get(`#${tag}`).map().once(function(data, key) {
    if (key.includes(hash)) {
      record.hash = hash;
      record.tag = tag;
      record.data = safeJSONParse(data);
      record.authors = record.authors || {};
      record.authors[key.slice(-87)] = true;
    }
  });
  return { record };
}
const colorDeep = useColor("deep");
const selectedUser = reactive({
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
    const gun3 = useGun();
    user.db = gun3.user();
    gun3.user().recall({ sessionStorage: true }, () => {
      console.log("user was recalled");
    });
    gun3.on("auth", () => {
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
function isMine(soul2) {
  if (!soul2)
    return;
  return soul2.slice(1, 88) == user.pub;
}
function addProfileField(title) {
  gun.user().get("profile").get(title).put("");
}
function updateProfile(field, data) {
  if (field && data !== void 0) {
    gun.user().get("profile").get(field).put(data);
  }
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
function parseLink(link) {
  let index = link.indexOf("#/auth/");
  let base = link.substr(index + 7);
  return base32.decode(base);
}
let initiated = false;
function usePass() {
  if (!initiated) {
    const gun3 = useGun();
    gun3.user().get("safe").map().on((d, k) => {
      pass.safe[k] = d;
    });
    watchEffect(async () => {
      var _a2, _b2;
      if (!pass.show) {
        pass.dec = {};
        return;
      }
      if ((pass == null ? void 0 : pass.show) && ((_a2 = pass == null ? void 0 : pass.safe) == null ? void 0 : _a2.pass)) {
        pass.dec.pass = await SEA.decrypt(pass.safe.pass, user.pair());
        pass.input = pass.dec.pass;
      }
      if (pass.show && ((_b2 = pass == null ? void 0 : pass.safe) == null ? void 0 : _b2.enc)) {
        pass.dec.pair = await SEA.decrypt(pass.safe.enc, pass.dec.pass);
      }
    });
  }
  initiated = true;
  return { pass, setPass, logWithPass };
}
async function hasPass(pub) {
  return await gun.get(`~${pub}`).get("safe").get("enc").then();
}
async function logWithPass(pub, passphrase) {
  let encPair = await gun.get(`~${pub}`).get("safe").get("enc").then();
  let pair = await SEA.decrypt(encPair, passphrase);
  auth(pair);
}
async function setPass(text) {
  let encPair = await SEA.encrypt(user.pair(), text);
  let encPass = await SEA.encrypt(text, user.pair());
  user.db.get("safe").get("enc").put(encPair);
  user.db.get("safe").get("pass").put(encPass);
}
function usePassLink(data, passPhrase) {
  if (!data)
    return;
  const decoded = base32.decode(data);
  if (decoded.substring(0, 3) == "SEA") {
    if (passPhrase) {
      logEncPass(decoded, passPhrase);
    }
    return "encrypted";
  } else {
    try {
      let d = JSON.parse(decoded);
      if (isPair(d)) {
        auth(d);
      }
      return "success";
    } catch (e) {
      return "incorrect link";
    }
  }
}
async function logEncPass(encPair, passphrase) {
  let pair = await SEA.decrypt(encPair, passphrase);
  auth(pair);
}
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
let disableDump = false;
const drauuOptions = reactive({
  brush,
  acceptsInputTypes: computed(() => draw.enabled ? void 0 : ["pen"]),
  coordinateTransform: true
});
const drauu = markRaw(createDrauu(drauuOptions));
function loadCanvas(page) {
  disableDump = true;
  if (draw.content != null)
    drauu.load(draw.content);
  else
    drauu.clear();
  disableDump = false;
}
function updateState() {
  var _a2;
  draw.canRedo = drauu.canRedo();
  draw.canUndo = drauu.canUndo();
  draw.canClear = !!((_a2 = drauu.el) == null ? void 0 : _a2.children.length);
}
function useDraw() {
  if (!draw.initiated) {
    const gun3 = useGun();
    const drawing = gun3.user().get("draw").get("space");
    drawing.on((d) => {
      if (draw.ing)
        return;
      draw.content = d;
      loadCanvas();
    });
    drauu.on("changed", () => {
      updateState();
      if (!disableDump) {
        let content = drauu.dump();
        draw.content = content;
        drawing.put(content);
      }
    });
    onMounted(() => {
      nextTick(() => {
        loadCanvas();
      });
    });
    drauu.on("start", () => draw.ing = true);
    drauu.on("end", () => draw.ing = false);
    draw.clear = () => {
      drauu.clear();
      draw.content = "";
      drawing.put("");
    };
    window.addEventListener("keydown", (e) => {
      if (!draw.enabled)
        return;
      const noModifier = !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey;
      let handled = true;
      if (e.code === "KeyZ" && (e.ctrlKey || e.metaKey)) {
        if (e.shiftKey)
          drauu.redo();
        else
          drauu.undo();
      } else if (e.code === "Escape") {
        draw.enabled = false;
      } else if (e.code === "KeyC" && (e.ctrlKey || e.metaKey)) {
        draw.clear();
      } else if (e.code.startsWith("Digit") && noModifier && +e.code[5] <= brushColors.length) {
        brush.color = brushColors[+e.code[5] - 1];
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, false);
  }
  draw.initiated = true;
  return {
    brush,
    draw,
    drauu,
    loadCanvas
  };
}
export { addHashedPersonal, addPersonal, addProfileField, auth, brush, createRoom, currentRoom, decFrom, defaultPeer, dictLang, dictRecord, drauu, drauuOptions, draw, encFor, enterRoom, genUUID, generateCerts, getHashedPersonal, getShortHash, gun, gun2, hasPass, hashObj, hashText, isHash, isMine, isPair, issueCert, joinRoom, leave, leaveRoom, letterFilter, listPersonal, loadCanvas, loadRelays, newWorker, parseHashLink, parseLink, pass, peer, recreateRoom, relay, renderStress, rootRoom, safeHash, safeJSONParse, selectedUser, sortDate, soul, submitRoom, unsafeHash, updateProfile, updateRoomProfile, updateState, useAccount, useColor, useDefs, useDictAuthors, useDictLangs, useDictRecordsBy, useDictRecordsFor, useDraw, useGun, useGun2, usePass, usePassLink, useRelay, useRelays, useRoom, useRooms, useUser, useWord, useWords, user };
