var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { genUUID, useGun, useUser, hashObj, gun, currentRoom, hashText, safeHash, user, useAccount, newWorker } from "./useDict.es.js";
export { addHashedPersonal, addPersonal, addProfileField, auth, brush, createRoom, currentRoom, decFrom, defaultPeer, dictLang, dictRecord, drauu, drauuOptions, draw, encFor, enterRoom, genUUID, generateCerts, getHashedPersonal, getShortHash, gun, gun2, hasPass, hashObj, hashText, isHash, isMine, isPair, issueCert, joinRoom, leave, leaveRoom, letterFilter, listPersonal, loadCanvas, loadRelays, newWorker, parseHashLink, parseLink, pass, peer, recreateRoom, relay, renderStress, rootRoom, safeHash, safeJSONParse, selectedUser, sortDate, soul, submitRoom, unsafeHash, updateProfile, updateRoomProfile, updateState, useAccount, useColor, useDefs, useDictAuthors, useDictLangs, useDictRecordsBy, useDictRecordsFor, useDraw, useGun, useGun2, usePass, usePassLink, useRelay, useRelays, useRoom, useRooms, useUser, useWord, useWords, user } from "./useDict.es.js";
import { reactive, YAML, markdownIt, lib, JSZip, ref, computed, ms, slugify, Fuse, watchEffect, exports, useMousePressed, onMounted, useMouseInElement, watch, onBeforeUnmount, gunAvatar, useElementBounding, useClamp, getArrow, SEA, DateTree, useNow } from "./vendor.es.js";
export { SEA, gunAvatar, mountClass, mountElement, ms, slugify } from "./vendor.es.js";
function downloadFile(text, fileType, fileName, isBlob = true) {
  const a = document.createElement("a");
  a.download = fileName;
  if (isBlob) {
    a.href = URL.createObjectURL(new Blob([text], { type: fileType }));
    setTimeout(function() {
      URL.revokeObjectURL(a.href);
    }, 1500);
  } else {
    a.href = `data:${fileType};,${text}`;
  }
  a.dataset.downloadurl = [fileType, a.download, a.href].join(":");
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
function uploadText(event, callback = (r) => console.log(r)) {
  let file = event.target.files[0];
  const maxBytes = 2e7;
  if (file.size > maxBytes) {
    console.error("File is bigger than " + niceBytes(maxBytes)) + " limit";
    return;
  }
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    callback(reader.result);
  };
}
function usePictureUpload({
  preserveRatio = false,
  picSize = 100,
  maxSize = 1024e4
} = {}) {
  const state = reactive({
    errors: [],
    status: null,
    output: {}
  });
  function handleChange(event) {
    const fileList = event.target.files;
    reset();
    if (!fileList.length)
      return;
    state.status = "loading";
    [...fileList].map((file) => processFile(file));
  }
  function processFile(file) {
    fileToBase64(file).then((res) => {
      state.output = {
        name: sanitizeFileName(file.name),
        content: res,
        size: niceBytes(Math.round(res.length * 3 / 4))
      };
      state.status = "success";
    });
    return null;
  }
  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader(), readerBase64 = new FileReader(), blob = file.slice(0, 4);
      reader.readAsArrayBuffer(blob);
      reader.onloadend = (e) => {
        let isValidMimeType = checkMimetype(getMimeTypeSignature(e.target.result));
        if (bytesToMegabytes(file.size) > bytesToMegabytes(maxSize)) {
          state.errors.push({
            message: "File size is too large!"
          });
        }
        if (isValidMimeType === false) {
          state.errors.push({
            message: "File type is not supported!"
          });
        }
        if (state.errors.length > 0) {
          flashErrors(state.errors);
          reset();
          return;
        } else {
          readerBase64.readAsDataURL(file);
        }
      };
      readerBase64.onloadend = () => {
        const img = new Image();
        img.src = readerBase64.result;
        img.onload = () => {
          const naturalAspect = preserveRatio ? img.naturalWidth / img.naturalHeight : 1;
          const canvas = document.createElement("canvas");
          canvas.width = picSize;
          canvas.height = picSize / naturalAspect;
          const context = canvas.getContext("2d");
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL());
        };
      };
      reader.onerror = (error) => reject(error);
      readerBase64.onerror = (error) => reject(error);
    });
  }
  function reset() {
    state.status = "";
    state.errors = [];
    state.output = {};
  }
  function bytesToMegabytes(bytes) {
    const value = bytes * Math.pow(10, -6);
    return value;
  }
  function checkMimetype(signature) {
    const signatures2 = [
      "89504E47",
      "47494638",
      "FFD8FFDB",
      "FFD8FFE0",
      "FFD8FFE1",
      "FFD8FFE2",
      "FFD8FFE3",
      "FFD8FFE8",
      "FFD8FFED",
      "3C3F786D",
      "3C737667"
    ];
    return signatures2.includes(signature);
  }
  function getMimeTypeSignature(data2) {
    const uint = new Uint8Array(data2);
    let bytes = [];
    uint.forEach((byte) => {
      bytes.push(byte.toString(16));
    });
    return bytes.join("").toUpperCase();
  }
  function sanitizeFileName(name) {
    return name.replace(/\.[^/.]+$/, "").toLowerCase();
  }
  function flashErrors(errors) {
    if (errors.length === 2) {
      console.error("File upload failed due to size and type!");
    } else {
      console.error(errors[0].message + errors[0].type);
    }
  }
  return {
    state,
    handleChange
  };
}
const units = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
function niceBytes(x) {
  let l = 0, n = parseInt(x, 10) || 0;
  while (n >= 1024 && ++l) {
    n = n / 1024;
  }
  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
}
function base64MimeType(encoded) {
  var result = null;
  if (typeof encoded !== "string") {
    return result;
  }
  var mime = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
  if (mime && mime.length) {
    result = mime[1];
  }
  return result;
}
function base64FileType(encoded) {
  var _a;
  return (_a = encoded.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)) == null ? void 0 : _a[0];
}
function base64Extension(encoded) {
  return encoded.substring(encoded.indexOf("/") + 1, encoded.indexOf(";base64"));
}
var signatures = {
  JVBERi0: "application/pdf",
  R0lGODdh: "image/gif",
  R0lGODlh: "image/gif",
  iVBORw0KGgo: "image/png",
  "/9j/": "image/jpg"
};
function detectMimeType(b64) {
  for (var s in signatures) {
    if (b64.indexOf(s) === 0) {
      return signatures[s];
    }
  }
}
function createMd({ frontmatter = null, text = "" } = md) {
  let front = "";
  if (typeof frontmatter == "object") {
    let yml = YAML.stringify(frontmatter);
    front = `---
${yml}---
 `;
    return front + text;
  }
}
function parseMd(file) {
  const yamlBlockPattern = /^(?:\-\-\-)(.*?)(?:\-\-\-|\.\.\.)(?:\n*\s*)(.*)/s;
  const yml = yamlBlockPattern.exec(file.trim());
  let frontmatter, content;
  if (yml) {
    frontmatter = yml[1];
    content = yml == null ? void 0 : yml[2];
    try {
      frontmatter = YAML.parse(frontmatter);
    } catch {
      frontmatter = {};
    }
    return { frontmatter, content };
  } else {
    return { frontmatter: {}, content: file.trim() };
  }
}
function useMd() {
  const md2 = new markdownIt({
    linkify: true,
    typographer: true
  });
  md2.use(lib, {
    externalTarget: "_blank"
  });
  return md2;
}
function useZip() {
  const zip = new JSZip();
  async function addFile({ title, file, folder = "." } = {}) {
    const fileType = base64FileType(file);
    const extension = base64Extension(file);
    const blob = await fetch(file).then((res) => res.blob());
    const fileName = `${title}.${extension}`;
    zip.file(`${folder}/${fileName}`, blob, fileType);
    return fileName;
  }
  function addMd({ md: md2, title } = {}) {
    zip.file(`${title}/index.md`, createMd(md2), "text/markdown");
  }
  async function zipPost(post = {}) {
    let { icon, cover, text, title, statement } = post;
    post == null ? true : delete post.text;
    if (!title) {
      title = statement ? statement.split(0, 12) : genUUID();
    }
    const files = ["cover", "icon"];
    for (let type of files) {
      let file = await loadFromHash(type, post[type]);
      if (file) {
        const fileName = await addFile({
          title: type,
          file,
          folder: title
        });
        post[type] = fileName;
      }
    }
    text = await loadFromHash("text", text);
    addMd({
      title,
      md: {
        frontmatter: post,
        text
      }
    });
  }
  async function downloadZip({ title = "", addDate = true } = {}) {
    let now = new Date();
    const offset = now.getTimezoneOffset();
    now = new Date(now.getTime() - offset * 60 * 1e3);
    const date = now.toISOString().split("T")[0];
    const blob = await zip.generateAsync({
      type: "blob",
      comment: `Exported from ${title} at ${location} on ${date}`,
      compression: "DEFLATE",
      compressionOptions: {
        level: 9
      }
    });
    const fileName = `${title}-${date}.zip`;
    downloadFile(blob, "application/zip", fileName);
    return true;
  }
  return { zip, zipPost, addMd, addFile, downloadZip };
}
function usePost({ hash = "", loadMedia = true } = {}) {
  const gun3 = useGun();
  const post = reactive({});
  gun3.get("posts").get(`#index`).get(hash).on(async (d, k) => {
    try {
      Object.assign(post, JSON.parse(d));
    } catch (e) {
      post.raw = d;
    }
    if (loadMedia) {
      ["icon", "cover", "text"].forEach((file) => {
        if (post[file]) {
          gun3.get("posts").get(`#${file}`).get(post[file]).on((data2) => {
            post[file] = data2;
          });
        }
      });
    }
  });
  const downloading = ref(false);
  async function download() {
    downloading.value = true;
    await downloadPost(post);
    downloading.value = false;
  }
  return { post, download, downloading };
}
async function addPost(to, post) {
  var _a;
  const { user: user3 } = useUser();
  post.icon = await saveToHash("icon", post.icon);
  post.cover = await saveToHash("cover", post.cover);
  post.text = await saveToHash("text", post.text);
  const { hashed, hash } = await hashObj(post);
  console.log(hash, post, to);
  gun.get("posts").get(`#index`).get(`${hash}`).put(hashed);
  gun.user(currentRoom.pub).get("posts").get(`${to}:${hash}@${user3.pub}`).put(true, null, { opt: { cert: (_a = currentRoom.features) == null ? void 0 : _a.posts } });
}
async function downloadPost(post) {
  let { title } = post;
  const { zipPost, addFile, downloadZip } = useZip();
  if (title && !post.raw) {
    await zipPost(__spreadValues({}, post));
  } else {
    title = "file";
    const hash = await hashText(post.raw);
    await addFile({
      title: safeHash(hash),
      file: post.raw
    });
  }
  await downloadZip({ title });
  return true;
}
async function loadFromHash(category, hash) {
  if (category && hash && typeof hash == "string" && hash.length == 44 && hash.slice(0, 5) != "data:") {
    return await gun.get("posts").get(`#${category}`).get(hash).then();
  }
  return hash;
}
async function saveToHash(category, text) {
  if (category && text) {
    const hash = await hashText(text);
    gun.get("posts").get(`#${category}`).get(`${hash}`).put(text);
    return hash;
  } else {
    return text;
  }
}
async function parsePost(data2) {
  let post;
  try {
    post = JSON.parse(data2);
  } catch (e) {
    post = { base64: data2 };
  }
  return post;
}
function usePostTimestamp({ tag, hash } = {}) {
  const timestamp = ref(0);
  const msTime = computed(() => ms(Date.now() - timestamp.value || 1e3));
  gun.get("posts").get(`#index`).get(hash).on(function(d, k, g) {
    timestamp.value = g.put[">"];
  });
  async function refresh() {
    let data2 = await gun.get("posts").get(`#index`).get(hash).then();
    gun.get("posts").get(`#index`).get(hash).put(data2);
  }
  return { timestamp, msTime, refresh };
}
function usePosts(tag) {
  if (!tag)
    return;
  const gun3 = useGun();
  const posts = reactive({});
  const backlinks = reactive({});
  gun3.user(currentRoom.pub).get("posts").map().on(function(data2, key) {
    let index = key.indexOf(tag);
    if (index == -1)
      return;
    let author = key.slice(-87);
    let from = key.slice(0, 44);
    let to = key.slice(45, 89);
    if (index == 0) {
      posts[to] = posts[to] || {};
      posts[to][author] = data2;
    } else {
      backlinks[from] = backlinks[from] || {};
      backlinks[from][author] = data2;
    }
  });
  const countPosts = computed(() => {
    let count = 0;
    for (let hash in posts) {
      inner_loop:
        for (let author in posts[hash]) {
          if (posts[hash][author]) {
            count++;
            break inner_loop;
          }
        }
    }
    return count;
  });
  const countBacklinks = computed(() => {
    let count = 0;
    for (let hash in backlinks) {
      inner_loop:
        for (let author in backlinks[hash]) {
          if (backlinks[hash][author]) {
            count++;
            break inner_loop;
          }
        }
    }
    return count;
  });
  const downloading = ref(false);
  async function downloadPosts() {
    downloading.value = true;
    downloading.value = !await downloadFeed(tag, posts);
  }
  function uploadPosts(ev) {
    uploadFeed(tag, ev);
  }
  return {
    posts,
    backlinks,
    countPosts,
    countBacklinks,
    downloadPosts,
    downloading,
    uploadPosts
  };
}
async function downloadFeed(tag, posts) {
  if (!posts)
    return;
  const { zip, zipPost, downloadZip } = useZip();
  const fullPosts = {};
  for (let hash in posts) {
    fullPosts[hash] = usePost({ tag, hash }).post;
    await zipPost(__spreadValues({}, fullPosts[hash]));
  }
  await downloadZip({ title: `#${tag}` });
  return true;
}
function uploadFeed(tag, files) {
  [...files].forEach(async (file) => {
    const zip = await JSZip.loadAsync(file);
    if (zip.comment) {
      console.info("Zip file comment: " + zip.comment);
    }
    zip.forEach(async (path, entry) => {
      var _a;
      if (path.endsWith("index.md")) {
        let title = path.slice(0, -9);
        let md2 = await entry.async("string");
        let { frontmatter, content } = parseMd(md2);
        frontmatter = frontmatter || {};
        frontmatter.title = (frontmatter == null ? void 0 : frontmatter.title) || title;
        if (frontmatter.icon) {
          const icon = await zip.file(`${title}/${frontmatter.icon}`).async("base64");
          const iconMime = detectMimeType(icon);
          frontmatter.icon = `data:${iconMime};base64,${icon}`;
        }
        if (frontmatter.cover) {
          const cover = await ((_a = zip == null ? void 0 : zip.file(`${title}/${frontmatter.cover}`)) == null ? void 0 : _a.async("base64"));
          const coverMime = detectMimeType(cover);
          frontmatter.cover = `data:${coverMime};base64,${cover}`;
        }
        let post = __spreadProps(__spreadValues({}, frontmatter), { content });
        addPost(tag, post);
      }
    });
  });
}
function useTagList() {
  const gun3 = useGun();
  const search = ref();
  const slug = computed(() => slugify(search.value));
  const tags = reactive({
    list: {},
    all: computed(() => {
      const arr = [];
      for (let t in tags.list) {
        arr.push({
          hash: t,
          tag: tags.list[t]
        });
      }
      return arr.sort((a, b) => a && b && a.tag.toLowerCase() < b.tag.toLowerCase() ? -1 : 1);
    }),
    count: computed(() => tags.all.length),
    fuse: computed(() => {
      return new Fuse(tags.all, {
        includeScore: true,
        keys: ["tag"]
      });
    }),
    results: computed(() => {
      if (!search.value)
        return [];
      let res = tags.fuse.search(slug.value);
      return res;
    }),
    minScore: computed(() => {
      let min = 100;
      tags.results.forEach((res) => {
        if (res.score < min) {
          min = res.score;
        }
      });
      return min;
    })
  });
  gun3.get("#tags").map().on((d, k) => {
    if (!d)
      return;
    try {
      data = JSON.parse(d);
    } catch (e) {
      tags.list[k] = d;
    }
  });
  async function addTag(tag = slug.value) {
    if (!tag)
      return;
    let safe = slugify(tag);
    const hash = await hashText(safe);
    gun3.get(`#tags`).get(`${hash}`).put(safe);
  }
  return { search, slug, tags, addTag };
}
const rootsTags = ["rooms"];
function useReaction({ tag, hash, back } = {}) {
  const { user: user3 } = useUser();
  const reaction = ref("\u{1F44D}");
  const gun3 = useGun();
  const roomDb = gun3.user(currentRoom.pub);
  watchEffect(() => {
    if (rootsTags.includes(tag)) {
      roomDb.get(tag).get(`${hash}@${user3.pub}`).on((d) => {
        if (d && d !== true) {
          reaction.value = d;
        }
      });
    } else {
      roomDb.get("posts").get(`${tag}:${hash}@${user3.pub}`).on((d) => {
        if (d && d !== true) {
          reaction.value = d;
        }
      });
    }
  });
  function react(r) {
    reactToPost({ tag, hash, back, reaction: getFirstEmoji(r ? r : reaction.value) });
  }
  return { reaction, react };
}
async function reactToPost({ tag, hash, back, reaction = true } = {}) {
  var _a, _b;
  const { user: user3 } = useUser();
  const gun3 = useGun();
  console.log(tag, hash, reaction);
  if (tag == "rooms") {
    let myPost = gun3.user(currentRoom.pub).get(tag).get(`${hash}@${user3.pub}`);
    let current = await myPost.then();
    myPost.put(!current ? reaction : null, null, {
      opt: { cert: (_a = currentRoom.features) == null ? void 0 : _a[tag] }
    });
  } else {
    let myLink = gun3.user(currentRoom.pub).get("posts");
    if (!back) {
      myLink = myLink.get(`${tag}:${hash}@${user3.pub}`);
    } else {
      myLink = myLink.get(`${hash}:${tag}@${user3.pub}`);
    }
    let current = await myLink.then();
    myLink.put(!current ? reaction : null, null, {
      opt: { cert: (_b = currentRoom.features) == null ? void 0 : _b.posts }
    });
  }
}
function useReactions(authors) {
  const reactions = {};
  for (let pub in authors) {
    let reaction = authors[pub];
    if (reaction) {
      reactions[reaction] = reactions[reaction] || [];
      reactions[reaction].push(pub);
    }
  }
  return reactions;
}
function countRating(authors) {
  let count = 0;
  for (let author in authors) {
    if (authors[author] && authors[author] != "\u{1F5D1}") {
      count++;
    } else if (authors[author] == "\u{1F5D1}") {
      count--;
    }
  }
  return count;
}
function useUserPosts(pub) {
  const gun3 = useGun();
  const posts = reactive({});
  gun3.user(currentRoom.pub).get("posts").map().on((d, k) => {
    var _a;
    let author = k.slice(90);
    let from = k.substring(0, 44);
    let to = k.substring(45, 89);
    if (author == pub) {
      if (d) {
        posts[d] = posts[d] || {};
        posts[d][to] = from;
      } else {
        (_a = posts == null ? void 0 : posts[d]) == null ? true : delete _a[to];
      }
    }
  });
  return posts;
}
function useMates(pub) {
  if (!pub) {
    pub = user.pub;
  }
  const mates = reactive({});
  const gun3 = useGun();
  gun3.user(pub).get("mates").map().once((text, matePub) => {
    if (text) {
      mates[matePub] = {
        emoji: getFirstEmoji(text),
        text
      };
      gun3.user(matePub).get("mates").get(pub).on((d) => {
        if (d) {
          mates[matePub].back = getFirstEmoji(d);
        } else {
          delete mates[matePub].back;
        }
      });
    } else {
      delete mates[matePub];
    }
  });
  return mates;
}
function getFirstEmoji(text, def = "\u{1F44B}") {
  if (!text || typeof text != "string")
    return;
  let em = exports.break(text)[0];
  if (isEmoji(em)) {
    return em;
  } else {
    return def;
  }
}
function isEmoji(text) {
  return /\p{Extended_Pictographic}/u.test(text);
}
function useMate(pub) {
  const emoji = ref("\u{1F44B}");
  const isMate = ref(false);
  const dbMate = user.db.get("mates").get(pub);
  dbMate.on((d) => {
    isMate.value = getFirstEmoji(d);
  });
  function toggleMate() {
    dbMate.put(isMate.value ? false : getFirstEmoji(emoji.value));
  }
  return { emoji, isMate, toggleMate };
}
function useSvgMouse(area = ref(null)) {
  const { pressed } = useMousePressed();
  const mouse = reactive({
    x: 0,
    y: 0,
    normX: 0,
    normY: 0,
    pressed,
    inside: false
  });
  onMounted(() => {
    document.addEventListener("mousemove", getCursorPosition);
    const { isOutside } = useMouseInElement(area);
    watch(isOutside, (out) => {
      mouse.inside = !out;
    });
  });
  onBeforeUnmount(() => {
    document.removeEventListener("mousemove", getCursorPosition);
  });
  function getCursorPosition(event, rect = area.value) {
    const svgElement = rect.closest("svg");
    if (!svgElement)
      return;
    var svgPoint = svgElement.createSVGPoint();
    svgPoint.x = event.clientX;
    svgPoint.y = event.clientY;
    let correct = svgPoint.matrixTransform(svgElement.getScreenCTM().inverse());
    {
      mouse.x = correct.x;
      mouse.y = correct.y;
    }
  }
  return {
    area,
    mouse
  };
}
function useBackground({
  pub,
  size = 200,
  light = 0.5,
  overlay = 0.5,
  draw: draw2 = "squares",
  attachment = "fixed"
} = {}) {
  if (!pub)
    return;
  return {
    background: `linear-gradient(hsla(255,0%,${light * 100}%,${overlay}), hsla(255,0%,${light * 100}%,${overlay})), url(${gunAvatar({
      pub,
      draw: draw2,
      reflect: false,
      size
    })})`,
    backgroundSize: "cover, cover",
    backgroundAttachment: `${attachment},${attachment}`
  };
}
function useSpace({
  spaceName = "space",
  TIMEOUT = 1e4,
  randomness = 0.1
} = {}) {
  const plane = ref();
  const { area, mouse } = useSvgMouse(plane);
  const { width, height } = useElementBounding(plane);
  const position = reactive([0, 0]);
  const zoom = useClamp(1, 0.5, 2);
  const gun3 = useGun();
  const space = reactive({
    title: spaceName,
    joined: false,
    db: computed(() => gun3.user(currentRoom.pub).get(spaceName)),
    cert: computed(() => {
      var _a;
      return (_a = currentRoom.features) == null ? void 0 : _a.space;
    }),
    my: {
      mouse: computed(() => ({ x: mouse.x, y: mouse.y })),
      pos: null
    }
  });
  async function join() {
    space.joined = true;
  }
  function place({ x = mouse.x, y = mouse.y } = {}) {
    var _a;
    if (!user.pub)
      return;
    if (!space.joined)
      join();
    position[0] = x;
    position[1] = y;
    space.db.get(user.pub).put(JSON.stringify({ x, y }), null, {
      opt: { cert: (_a = currentRoom.features) == null ? void 0 : _a.space }
    });
  }
  const allGuests = reactive({});
  const mates = reactive({});
  const links = reactive({});
  const guests = computed(() => {
    var _a;
    const obj = {};
    for (let g in allGuests) {
      if (Date.now() - ((_a = allGuests[g]) == null ? void 0 : _a.pulse) < TIMEOUT) {
        obj[g] = allGuests[g];
      }
    }
    return obj;
  });
  const guestCount = computed(() => Object.keys(guests.value).length);
  space.db.get(user.pub).on((pos) => {
    space.my.pos = typeof pos == "string" ? JSON.parse(pos) : pos;
  });
  space.db.map().once(async (pos, pub) => {
    if (pub == user.pub) {
      space.joined = true;
    }
    allGuests[pub] = {
      pub,
      blink: false,
      pulse: 0,
      hasPos: false,
      pos: {
        x: 0,
        y: 0
      }
    };
    space.db.get(pub).on((d, k) => {
      allGuests[pub].hasPos = true;
      allGuests[pub].pos = typeof d == "string" ? JSON.parse(d) : d;
    });
    gun3.user(pub).get("pulse").on((d) => {
      allGuests[pub].pulse = d;
      allGuests[pub].blink = !allGuests[pub].blink;
    }).back().get("mates").map().on((d, k) => {
      mates[pub] = mates[pub] || {};
      mates[pub][k] = d;
    });
    gun3.user(pub).get("draw").get("space").on((d) => {
      if (!d)
        return;
      allGuests[pub].draw = d;
    });
  });
  const seeds = {};
  watchEffect(() => {
    for (let pub1 in mates) {
      seeds[pub1] = seeds[pub1] || {};
      for (let pub2 in mates[pub1]) {
        let seed = seeds[pub1][pub2] = seeds[pub1][pub2] || Math.random() * randomness;
        if (mates[pub1][pub2]) {
          const linkData = mates[pub1][pub2];
          let g1 = allGuests[pub1];
          let g2 = allGuests[pub2];
          let age = Date.now() * 2 - (g1 == null ? void 0 : g1.pulse) - (g2 == null ? void 0 : g2.pulse);
          if (g1 && g2 && (g1 == null ? void 0 : g1.hasPos) && (g2 == null ? void 0 : g2.hasPos) && age < TIMEOUT) {
            links[pub1 + pub2] = {
              user: pub1,
              mate: pub2,
              emoji: getFirstEmoji(linkData),
              from: g1.pos,
              to: g2.pos,
              arrow: generateArrow(g1.pos, g2.pos, seed)
            };
          }
        } else {
          delete links[pub1 + pub2];
        }
      }
    }
  });
  return {
    space,
    allGuests,
    guests,
    guestCount,
    links,
    plane,
    width,
    height,
    position,
    zoom,
    area,
    join,
    place
  };
}
function generateArrow(pos1, pos2, seed = 0) {
  let arrowArray = getArrow(pos1.x, pos1.y, pos2.x, pos2.y, {
    padEnd: 20,
    padStart: 10
  });
  const [sx, sy, c1x, c1y, c2x, c2y, ex, ey, ae, as] = arrowArray;
  let arrow = {
    sx,
    sy,
    c1x: c1x * (1 - seed + 2 * seed),
    c1y: c1y * (1 - seed + 2 * seed),
    c2x: c2x * (1 - seed + 2 * seed),
    c2y: c2y * (1 - seed + 2 * seed),
    ex,
    ey,
    ae,
    as
  };
  return arrow;
}
function useChat() {
  const gun3 = useGun();
  const { user: user3 } = useUser();
  const currentChat = ref("general");
  const chats = reactive({
    general: {}
  });
  const chatDb = gun3.user(currentRoom.pub).get("chat");
  chatDb.map().on((d, k) => {
    var _a;
    const [title, author] = k.split("@");
    chats[title] = chats[title] || {};
    if (d) {
      chats[title][author] = d;
    } else {
      (_a = chats == null ? void 0 : chats[title]) == null ? true : delete _a[author];
    }
  });
  function addChat(title) {
    chatDb.get(`${slugify(title) || title}@${user3.pub}`).put(true, null, { opt: { cert: currentRoom.features.chat } });
  }
  const topicDb = computed(() => gun3.user(currentRoom.pub).get("chat/" + currentChat.value));
  const messages = computed(() => {
    const msgs = reactive({});
    topicDb.value.map().on((text, k) => {
      const timestamp = k.substring(0, 13);
      const author = k.substring(14);
      msgs[k] = {
        timestamp,
        author,
        text
      };
    });
    return msgs;
  });
  function send(message) {
    if (!message)
      return;
    let now = Date.now();
    topicDb.value.get(`${now}@${user3.pub}`).put(message, null, { opt: { cert: currentRoom.features.chat } });
  }
  return {
    send,
    addChat,
    currentChat,
    chats,
    messages
  };
}
function usePrivateChat(pub, { parse = true } = {}) {
  const gun3 = useGun();
  const { user: user3 } = useUser();
  const messages = reactive({});
  const epub = ref();
  gun3.user(pub).get("epub").once((d) => epub.value = d);
  gun3.user(pub).get("chat").get(user3.pub).map().once(function(d, k) {
    parseMessages(d, k, pub, this);
  });
  gun3.user().get("chat").get(pub).map().once(function(d, k) {
    parseMessages(d, k, user3.pub, this);
  });
  function parseMessages(data2, today, author, that) {
    that.map().on(async (d, k) => {
      if (d && d.startsWith("SEA")) {
        const secret = await SEA.secret(epub.value, user3.pair());
        const work = await SEA.work(secret, today);
        const dec = await SEA.decrypt(d, work);
        if (!dec || typeof dec != "object")
          return;
        messages[k] = {
          timestamp: dec.timestamp,
          author,
          text: dec.text
        };
      }
    });
  }
  async function send(message) {
    if (!message)
      return;
    const theDate = new Date();
    const toSend = {
      timestamp: theDate.getTime(),
      text: message
    };
    const today = theDate.toLocaleDateString("en-CA");
    const secret = await SEA.secret(epub.value, user3.pair());
    const work = await SEA.work(secret, today);
    const enc = await SEA.encrypt(toSend, work);
    gun3.user().get("chat").get(pub).get(today).set(enc);
  }
  return {
    send,
    messages
  };
}
function usePrivateChatCount(pub) {
  const gun3 = useGun();
  const { user: user3 } = useUser();
  const messages = reactive({});
  const available = ref(false);
  gun3.user(pub).get("epub").on((d) => available.value = d);
  gun3.user(pub).get("chat").get(user3.pub).map().map().on((d, k) => {
    if (d && !d.startsWith("SEA"))
      return;
    messages[k] = d;
  });
  gun3.user().get("chat").get(pub).map().map().on((d, k) => {
    if (d && !d.startsWith("SEA"))
      return;
    messages[k] = d;
  });
  const count = computed(() => {
    return Object.keys(messages).length;
  });
  return { count, available };
}
function usePrivateChatList() {
  const gun3 = useGun();
  const { user: user3 } = useUser();
  const list = reactive({});
  if (user3.is) {
    gun3.user().get("chat").map().on((d, k) => {
      list[k] = d;
    });
    gun3.user().get("mates").map().on(async (d, k) => {
      const mutual = await gun3.user(k).get("mates").get(user3.pub);
      const epub = await gun3.user(k).get("epub");
      if (mutual && epub) {
        list[k] = d;
      }
    });
  }
  return { list };
}
let startTime = Date.now();
function useGuests({ TIMEOUT = 1e4 } = {}) {
  const gun3 = useGun();
  const guests = reactive({});
  const online = reactive({});
  const offline = reactive({});
  const count = reactive({
    total: computed(() => Object.keys(guests).length),
    online: computed(() => Object.keys(online).length),
    offline: computed(() => Object.keys(offline).length)
  });
  gun3.user(currentRoom.pub).get("space").map().once((pos, pub) => {
    const { account } = useAccount(pub);
    guests[pub] = account;
    guests[pub].order = computed(() => startTime - account.value.pulse < TIMEOUT ? 1 : startTime - account.value.pulse);
    guests[pub].online = computed(() => {
      return startTime - account.value.pulse < TIMEOUT;
    });
  });
  watchEffect(() => {
    for (let pub in guests) {
      if (guests[pub].online) {
        online[pub] = guests[pub];
        delete offline[pub];
      } else {
        offline[pub] = guests[pub];
        delete online[pub];
      }
    }
  });
  return { guests, online, offline, count };
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
function useLog({
  name = "logs",
  after = "2021-01-01",
  before = "2023-01-01"
} = {}) {
  const gun3 = useGun();
  const treeRoot = gun3.get(name);
  const tree = new DateTree(treeRoot, "minute");
  const dateTree = reactive({});
  const sorted = ref([]);
  const count = ref(0);
  let query;
  onMounted(() => {
    var w = newWorker(sortByDate);
    query = tree.on(function(d, date) {
      if (!(d == null ? void 0 : d.event))
        return;
      dateTree[date] = d;
    }, { gte: after, lt: before });
    watchEffect(() => {
      w.postMessage(JSON.parse(JSON.stringify(dateTree)));
    });
    w.onmessage = (e) => {
      sorted.value = e.data.sorted;
      count.value = e.data.count;
    };
  });
  onBeforeUnmount(() => {
    query.off();
  });
  function putNow(data2) {
    if (!data2)
      return;
    tree.get(new Date()).put({ event: "now", data: data2 });
  }
  return { dateTree, sorted, count, putNow };
}
function logEvent(event = "text", data2) {
  if (!data2) {
    console.log("No data to log");
    return;
  }
  const tree = new DateTree(gun.get("logs"), "minute");
  let theData = __spreadValues({ event }, data2);
  tree.get(new Date()).put(theData);
}
function formatDate(date) {
  if (!date)
    return;
  let theDate = new Date(date);
  return {
    date: theDate.toLocaleDateString("en-CA"),
    time: theDate.toLocaleTimeString("ru-RU"),
    ms: ms(Date.now() - theDate.getTime())
  };
}
const langParts = {
  noun: {
    en: "noun",
    ru: "\u0441\u0443\u0449",
    underline: "solid"
  },
  adj: {
    en: "adjective",
    ru: "\u043F\u0440\u0438\u043B",
    underline: "wavy"
  },
  verb: {
    en: "verb",
    ru: "\u0433\u043B\u0430\u0433",
    underline: "double"
  },
  adv: {
    en: "adverb",
    ru: "\u043D\u0430\u0440\u0435\u0447",
    underline: "dotted"
  }
};
const languages = [
  {
    "code": "aa",
    "name": "Afar",
    "native": "Afar"
  },
  {
    "code": "ab",
    "name": "Abkhazian",
    "native": "\u0410\u04A7\u0441\u0443\u0430"
  },
  {
    "code": "af",
    "name": "Afrikaans",
    "native": "Afrikaans"
  },
  {
    "code": "ak",
    "name": "Akan",
    "native": "Akana"
  },
  {
    "code": "am",
    "name": "Amharic",
    "native": "\u12A0\u121B\u122D\u129B"
  },
  {
    "code": "an",
    "name": "Aragonese",
    "native": "Aragon\xE9s"
  },
  {
    "code": "ar",
    "name": "Arabic",
    "native": "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
    "rtl": 1
  },
  {
    "code": "as",
    "name": "Assamese",
    "native": "\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE"
  },
  {
    "code": "av",
    "name": "Avar",
    "native": "\u0410\u0432\u0430\u0440"
  },
  {
    "code": "ay",
    "name": "Aymara",
    "native": "Aymar"
  },
  {
    "code": "az",
    "name": "Azerbaijani",
    "native": "Az\u0259rbaycanca / \u0622\u0630\u0631\u0628\u0627\u064A\u062C\u0627\u0646"
  },
  {
    "code": "ba",
    "name": "Bashkir",
    "native": "\u0411\u0430\u0448\u04A1\u043E\u0440\u0442"
  },
  {
    "code": "be",
    "name": "Belarusian",
    "native": "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F"
  },
  {
    "code": "bg",
    "name": "Bulgarian",
    "native": "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"
  },
  {
    "code": "bh",
    "name": "Bihari",
    "native": "\u092D\u094B\u091C\u092A\u0941\u0930\u0940"
  },
  {
    "code": "bi",
    "name": "Bislama",
    "native": "Bislama"
  },
  {
    "code": "bm",
    "name": "Bambara",
    "native": "Bamanankan"
  },
  {
    "code": "bn",
    "name": "Bengali",
    "native": "\u09AC\u09BE\u0982\u09B2\u09BE"
  },
  {
    "code": "bo",
    "name": "Tibetan",
    "native": "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42 / Bod skad"
  },
  {
    "code": "br",
    "name": "Breton",
    "native": "Brezhoneg"
  },
  {
    "code": "bs",
    "name": "Bosnian",
    "native": "Bosanski"
  },
  {
    "code": "ca",
    "name": "Catalan",
    "native": "Catal\xE0"
  },
  {
    "code": "ce",
    "name": "Chechen",
    "native": "\u041D\u043E\u0445\u0447\u0438\u0439\u043D"
  },
  {
    "code": "ch",
    "name": "Chamorro",
    "native": "Chamoru"
  },
  {
    "code": "co",
    "name": "Corsican",
    "native": "Corsu"
  },
  {
    "code": "cr",
    "name": "Cree",
    "native": "Nehiyaw"
  },
  {
    "code": "cs",
    "name": "Czech",
    "native": "\u010Cesky"
  },
  {
    "code": "cu",
    "name": "Old Church Slavonic / Old Bulgarian",
    "native": "\u0441\u043B\u043E\u0432\u0463\u043D\u044C\u0441\u043A\u044A / slov\u011Bn\u012Dsk\u016D"
  },
  {
    "code": "cv",
    "name": "Chuvash",
    "native": "\u0427\u0103\u0432\u0430\u0448"
  },
  {
    "code": "cy",
    "name": "Welsh",
    "native": "Cymraeg"
  },
  {
    "code": "da",
    "name": "Danish",
    "native": "Dansk"
  },
  {
    "code": "de",
    "name": "German",
    "native": "Deutsch"
  },
  {
    "code": "dv",
    "name": "Divehi",
    "native": "\u078B\u07A8\u0788\u07AC\u0780\u07A8\u0784\u07A6\u0790\u07B0",
    "rtl": 1
  },
  {
    "code": "dz",
    "name": "Dzongkha",
    "native": "\u0F47\u0F7C\u0F44\u0F0B\u0F41"
  },
  {
    "code": "ee",
    "name": "Ewe",
    "native": "\u0190\u028B\u025B"
  },
  {
    "code": "el",
    "name": "Greek",
    "native": "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"
  },
  {
    "code": "en",
    "name": "English",
    "native": "English"
  },
  {
    "code": "eo",
    "name": "Esperanto",
    "native": "Esperanto"
  },
  {
    "code": "es",
    "name": "Spanish",
    "native": "Espa\xF1ol"
  },
  {
    "code": "et",
    "name": "Estonian",
    "native": "Eesti"
  },
  {
    "code": "eu",
    "name": "Basque",
    "native": "Euskara"
  },
  {
    "code": "fa",
    "name": "Persian",
    "native": "\u0641\u0627\u0631\u0633\u06CC",
    "rtl": 1
  },
  {
    "code": "ff",
    "name": "Peul",
    "native": "Fulfulde"
  },
  {
    "code": "fi",
    "name": "Finnish",
    "native": "Suomi"
  },
  {
    "code": "fj",
    "name": "Fijian",
    "native": "Na Vosa Vakaviti"
  },
  {
    "code": "fo",
    "name": "Faroese",
    "native": "F\xF8royskt"
  },
  {
    "code": "fr",
    "name": "French",
    "native": "Fran\xE7ais"
  },
  {
    "code": "fy",
    "name": "West Frisian",
    "native": "Frysk"
  },
  {
    "code": "ga",
    "name": "Irish",
    "native": "Gaeilge"
  },
  {
    "code": "gd",
    "name": "Scottish Gaelic",
    "native": "G\xE0idhlig"
  },
  {
    "code": "gl",
    "name": "Galician",
    "native": "Galego"
  },
  {
    "code": "gn",
    "name": "Guarani",
    "native": "Ava\xF1e'\u1EBD"
  },
  {
    "code": "gu",
    "name": "Gujarati",
    "native": "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0"
  },
  {
    "code": "gv",
    "name": "Manx",
    "native": "Gaelg"
  },
  {
    "code": "ha",
    "name": "Hausa",
    "native": "\u0647\u064E\u0648\u064F\u0633\u064E",
    "rtl": 1
  },
  {
    "code": "he",
    "name": "Hebrew",
    "native": "\u05E2\u05D1\u05E8\u05D9\u05EA",
    "rtl": 1
  },
  {
    "code": "hi",
    "name": "Hindi",
    "native": "\u0939\u093F\u0928\u094D\u0926\u0940"
  },
  {
    "code": "ho",
    "name": "Hiri Motu",
    "native": "Hiri Motu"
  },
  {
    "code": "hr",
    "name": "Croatian",
    "native": "Hrvatski"
  },
  {
    "code": "ht",
    "name": "Haitian",
    "native": "Kr\xE8yol ayisyen"
  },
  {
    "code": "hu",
    "name": "Hungarian",
    "native": "Magyar"
  },
  {
    "code": "hy",
    "name": "Armenian",
    "native": "\u0540\u0561\u0575\u0565\u0580\u0565\u0576"
  },
  {
    "code": "hz",
    "name": "Herero",
    "native": "Otsiherero"
  },
  {
    "code": "ia",
    "name": "Interlingua",
    "native": "Interlingua"
  },
  {
    "code": "id",
    "name": "Indonesian",
    "native": "Bahasa Indonesia"
  },
  {
    "code": "ie",
    "name": "Interlingue",
    "native": "Interlingue"
  },
  {
    "code": "ig",
    "name": "Igbo",
    "native": "Igbo"
  },
  {
    "code": "ii",
    "name": "Sichuan Yi",
    "native": "\uA187\uA259 / \u56DB\u5DDD\u5F5D\u8BED"
  },
  {
    "code": "ik",
    "name": "Inupiak",
    "native": "I\xF1upiak"
  },
  {
    "code": "io",
    "name": "Ido",
    "native": "Ido"
  },
  {
    "code": "is",
    "name": "Icelandic",
    "native": "\xCDslenska"
  },
  {
    "code": "it",
    "name": "Italian",
    "native": "Italiano"
  },
  {
    "code": "iu",
    "name": "Inuktitut",
    "native": "\u1403\u14C4\u1483\u144E\u1450\u1466"
  },
  {
    "code": "ja",
    "name": "Japanese",
    "native": "\u65E5\u672C\u8A9E"
  },
  {
    "code": "jv",
    "name": "Javanese",
    "native": "Basa Jawa"
  },
  {
    "code": "ka",
    "name": "Georgian",
    "native": "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8"
  },
  {
    "code": "kg",
    "name": "Kongo",
    "native": "KiKongo"
  },
  {
    "code": "ki",
    "name": "Kikuyu",
    "native": "G\u0129k\u0169y\u0169"
  },
  {
    "code": "kj",
    "name": "Kuanyama",
    "native": "Kuanyama"
  },
  {
    "code": "kk",
    "name": "Kazakh",
    "native": "\u049A\u0430\u0437\u0430\u049B\u0448\u0430"
  },
  {
    "code": "kl",
    "name": "Greenlandic",
    "native": "Kalaallisut"
  },
  {
    "code": "km",
    "name": "Cambodian",
    "native": "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A"
  },
  {
    "code": "kn",
    "name": "Kannada",
    "native": "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"
  },
  {
    "code": "ko",
    "name": "Korean",
    "native": "\uD55C\uAD6D\uC5B4"
  },
  {
    "code": "kr",
    "name": "Kanuri",
    "native": "Kanuri"
  },
  {
    "code": "ks",
    "name": "Kashmiri",
    "native": "\u0915\u0936\u094D\u092E\u0940\u0930\u0940 / \u0643\u0634\u0645\u064A\u0631\u064A",
    "rtl": 1
  },
  {
    "code": "ku",
    "name": "Kurdish",
    "native": "Kurd\xEE / \u0643\u0648\u0631\u062F\u06CC",
    "rtl": 1
  },
  {
    "code": "kv",
    "name": "Komi",
    "native": "\u041A\u043E\u043C\u0438"
  },
  {
    "code": "kw",
    "name": "Cornish",
    "native": "Kernewek"
  },
  {
    "code": "ky",
    "name": "Kirghiz",
    "native": "K\u0131rg\u0131zca / \u041A\u044B\u0440\u0433\u044B\u0437\u0447\u0430"
  },
  {
    "code": "la",
    "name": "Latin",
    "native": "Latina"
  },
  {
    "code": "lb",
    "name": "Luxembourgish",
    "native": "L\xEBtzebuergesch"
  },
  {
    "code": "lg",
    "name": "Ganda",
    "native": "Luganda"
  },
  {
    "code": "li",
    "name": "Limburgian",
    "native": "Limburgs"
  },
  {
    "code": "ln",
    "name": "Lingala",
    "native": "Ling\xE1la"
  },
  {
    "code": "lo",
    "name": "Laotian",
    "native": "\u0EA5\u0EB2\u0EA7 / Pha xa lao"
  },
  {
    "code": "lt",
    "name": "Lithuanian",
    "native": "Lietuvi\u0173"
  },
  {
    "code": "lu",
    "name": "Luba-Katanga",
    "native": "Tshiluba"
  },
  {
    "code": "lv",
    "name": "Latvian",
    "native": "Latvie\u0161u"
  },
  {
    "code": "mg",
    "name": "Malagasy",
    "native": "Malagasy"
  },
  {
    "code": "mh",
    "name": "Marshallese",
    "native": "Kajin Majel / Ebon"
  },
  {
    "code": "mi",
    "name": "Maori",
    "native": "M\u0101ori"
  },
  {
    "code": "mk",
    "name": "Macedonian",
    "native": "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"
  },
  {
    "code": "ml",
    "name": "Malayalam",
    "native": "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02"
  },
  {
    "code": "mn",
    "name": "Mongolian",
    "native": "\u041C\u043E\u043D\u0433\u043E\u043B"
  },
  {
    "code": "mo",
    "name": "Moldovan",
    "native": "Moldoveneasc\u0103"
  },
  {
    "code": "mr",
    "name": "Marathi",
    "native": "\u092E\u0930\u093E\u0920\u0940"
  },
  {
    "code": "ms",
    "name": "Malay",
    "native": "Bahasa Melayu"
  },
  {
    "code": "mt",
    "name": "Maltese",
    "native": "bil-Malti"
  },
  {
    "code": "my",
    "name": "Burmese",
    "native": "\u1019\u103C\u1014\u103A\u1019\u102C\u1005\u102C"
  },
  {
    "code": "na",
    "name": "Nauruan",
    "native": "Dorerin Naoero"
  },
  {
    "code": "nb",
    "name": "Norwegian Bokm\xE5l",
    "native": "Norsk bokm\xE5l"
  },
  {
    "code": "nd",
    "name": "North Ndebele",
    "native": "Sindebele"
  },
  {
    "code": "ne",
    "name": "Nepali",
    "native": "\u0928\u0947\u092A\u093E\u0932\u0940"
  },
  {
    "code": "ng",
    "name": "Ndonga",
    "native": "Oshiwambo"
  },
  {
    "code": "nl",
    "name": "Dutch",
    "native": "Nederlands"
  },
  {
    "code": "nn",
    "name": "Norwegian Nynorsk",
    "native": "Norsk nynorsk"
  },
  {
    "code": "no",
    "name": "Norwegian",
    "native": "Norsk"
  },
  {
    "code": "nr",
    "name": "South Ndebele",
    "native": "isiNdebele"
  },
  {
    "code": "nv",
    "name": "Navajo",
    "native": "Din\xE9 bizaad"
  },
  {
    "code": "ny",
    "name": "Chichewa",
    "native": "Chi-Chewa"
  },
  {
    "code": "oc",
    "name": "Occitan",
    "native": "Occitan"
  },
  {
    "code": "oj",
    "name": "Ojibwa",
    "native": "\u140A\u14C2\u1511\u14C8\u142F\u14A7\u140E\u14D0 / Anishinaabemowin"
  },
  {
    "code": "om",
    "name": "Oromo",
    "native": "Oromoo"
  },
  {
    "code": "or",
    "name": "Oriya",
    "native": "\u0B13\u0B21\u0B3C\u0B3F\u0B06"
  },
  {
    "code": "os",
    "name": "Ossetian / Ossetic",
    "native": "\u0418\u0440\u043E\u043D\u0430\u0443"
  },
  {
    "code": "pa",
    "name": "Panjabi / Punjabi",
    "native": "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40 / \u092A\u0902\u091C\u093E\u092C\u0940 / \u067E\u0646\u062C\u0627\u0628\u064A"
  },
  {
    "code": "pi",
    "name": "Pali",
    "native": "P\u0101li / \u092A\u093E\u0934\u093F"
  },
  {
    "code": "pl",
    "name": "Polish",
    "native": "Polski"
  },
  {
    "code": "ps",
    "name": "Pashto",
    "native": "\u067E\u069A\u062A\u0648",
    "rtl": 1
  },
  {
    "code": "pt",
    "name": "Portuguese",
    "native": "Portugu\xEAs"
  },
  {
    "code": "qu",
    "name": "Quechua",
    "native": "Runa Simi"
  },
  {
    "code": "rm",
    "name": "Raeto Romance",
    "native": "Rumantsch"
  },
  {
    "code": "rn",
    "name": "Kirundi",
    "native": "Kirundi"
  },
  {
    "code": "ro",
    "name": "Romanian",
    "native": "Rom\xE2n\u0103"
  },
  {
    "code": "ru",
    "name": "Russian",
    "native": "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
  },
  {
    "code": "rw",
    "name": "Rwandi",
    "native": "Kinyarwandi"
  },
  {
    "code": "sa",
    "name": "Sanskrit",
    "native": "\u0938\u0902\u0938\u094D\u0915\u0943\u0924\u092E\u094D"
  },
  {
    "code": "sc",
    "name": "Sardinian",
    "native": "Sardu"
  },
  {
    "code": "sd",
    "name": "Sindhi",
    "native": "\u0938\u093F\u0928\u0927\u093F"
  },
  {
    "code": "se",
    "name": "Northern Sami",
    "native": "S\xE1megiella"
  },
  {
    "code": "sg",
    "name": "Sango",
    "native": "S\xE4ng\xF6"
  },
  {
    "code": "sh",
    "name": "Serbo-Croatian",
    "native": "Srpskohrvatski / \u0421\u0440\u043F\u0441\u043A\u043E\u0445\u0440\u0432\u0430\u0442\u0441\u043A\u0438"
  },
  {
    "code": "si",
    "name": "Sinhalese",
    "native": "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD"
  },
  {
    "code": "sk",
    "name": "Slovak",
    "native": "Sloven\u010Dina"
  },
  {
    "code": "sl",
    "name": "Slovenian",
    "native": "Sloven\u0161\u010Dina"
  },
  {
    "code": "sm",
    "name": "Samoan",
    "native": "Gagana Samoa"
  },
  {
    "code": "sn",
    "name": "Shona",
    "native": "chiShona"
  },
  {
    "code": "so",
    "name": "Somalia",
    "native": "Soomaaliga"
  },
  {
    "code": "sq",
    "name": "Albanian",
    "native": "Shqip"
  },
  {
    "code": "sr",
    "name": "Serbian",
    "native": "\u0421\u0440\u043F\u0441\u043A\u0438"
  },
  {
    "code": "ss",
    "name": "Swati",
    "native": "SiSwati"
  },
  {
    "code": "st",
    "name": "Southern Sotho",
    "native": "Sesotho"
  },
  {
    "code": "su",
    "name": "Sundanese",
    "native": "Basa Sunda"
  },
  {
    "code": "sv",
    "name": "Swedish",
    "native": "Svenska"
  },
  {
    "code": "sw",
    "name": "Swahili",
    "native": "Kiswahili"
  },
  {
    "code": "ta",
    "name": "Tamil",
    "native": "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"
  },
  {
    "code": "te",
    "name": "Telugu",
    "native": "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"
  },
  {
    "code": "tg",
    "name": "Tajik",
    "native": "\u0422\u043E\u04B7\u0438\u043A\u04E3"
  },
  {
    "code": "th",
    "name": "Thai",
    "native": "\u0E44\u0E17\u0E22 / Phasa Thai"
  },
  {
    "code": "ti",
    "name": "Tigrinya",
    "native": "\u1275\u130D\u122D\u129B"
  },
  {
    "code": "tk",
    "name": "Turkmen",
    "native": "\u0422\u0443\u0440\u043A\u043C\u0435\u043D / \u062A\u0631\u0643\u0645\u0646"
  },
  {
    "code": "tl",
    "name": "Tagalog / Filipino",
    "native": "Tagalog"
  },
  {
    "code": "tn",
    "name": "Tswana",
    "native": "Setswana"
  },
  {
    "code": "to",
    "name": "Tonga",
    "native": "Lea Faka-Tonga"
  },
  {
    "code": "tr",
    "name": "Turkish",
    "native": "T\xFCrk\xE7e"
  },
  {
    "code": "ts",
    "name": "Tsonga",
    "native": "Xitsonga"
  },
  {
    "code": "tt",
    "name": "Tatar",
    "native": "Tatar\xE7a"
  },
  {
    "code": "tw",
    "name": "Twi",
    "native": "Twi"
  },
  {
    "code": "ty",
    "name": "Tahitian",
    "native": "Reo M\u0101`ohi"
  },
  {
    "code": "ug",
    "name": "Uyghur",
    "native": "Uy\u01A3urq\u0259 / \u0626\u06C7\u064A\u063A\u06C7\u0631\u0686\u06D5"
  },
  {
    "code": "uk",
    "name": "Ukrainian",
    "native": "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"
  },
  {
    "code": "ur",
    "name": "Urdu",
    "native": "\u0627\u0631\u062F\u0648",
    "rtl": 1
  },
  {
    "code": "uz",
    "name": "Uzbek",
    "native": "\u040E\u0437\u0431\u0435\u043A"
  },
  {
    "code": "ve",
    "name": "Venda",
    "native": "Tshiven\u1E13a"
  },
  {
    "code": "vi",
    "name": "Vietnamese",
    "native": "Ti\u1EBFng Vi\u1EC7t"
  },
  {
    "code": "vo",
    "name": "Volap\xFCk",
    "native": "Volap\xFCk"
  },
  {
    "code": "wa",
    "name": "Walloon",
    "native": "Walon"
  },
  {
    "code": "wo",
    "name": "Wolof",
    "native": "Wollof"
  },
  {
    "code": "xh",
    "name": "Xhosa",
    "native": "isiXhosa"
  },
  {
    "code": "yi",
    "name": "Yiddish",
    "native": "\u05D9\u05D9\u05B4\u05D3\u05D9\u05E9",
    "rtl": 1
  },
  {
    "code": "yo",
    "name": "Yoruba",
    "native": "Yor\xF9b\xE1"
  },
  {
    "code": "za",
    "name": "Zhuang",
    "native": "Cuengh / T\xF4\xF4 / \u58EE\u8BED"
  },
  {
    "code": "zh",
    "name": "Chinese",
    "native": "\u4E2D\u6587"
  },
  {
    "code": "zu",
    "name": "Zulu",
    "native": "isiZulu"
  }
];
const giftPath = "#gifts2023";
function useGift() {
  const { user: user3 } = useUser();
  const gift = reactive({
    from: computed(() => user3 == null ? void 0 : user3.pub),
    to: "",
    qn: 0,
    ql: "",
    wish: "",
    date: useNow()
  });
  const gun3 = useGun();
  async function propose() {
    const { hash, hashed } = await hashObj(gift);
    gun3.get(giftPath).get(hash).put(hashed);
    gun3.user().get(giftPath).get(hash).put(true);
  }
  return { gift, propose };
}
async function acceptGift(hash) {
  const { user: user3 } = useUser();
  user3.db.get(giftPath).get(hash).put(true);
}
function useGifts() {
  const { user: user3 } = useUser();
  const gun3 = useGun();
  const my = reactive({});
  const proposed = reactive({});
  const gifts = reactive({});
  gun3.get(giftPath).map().once(async (d, k) => {
    try {
      const obj = JSON.parse(d);
      obj.sent = await gun3.user(obj.from).get(giftPath).get(k);
      obj.received = await gun3.user(obj.to).get(giftPath).get(k);
      if (d.includes(user3 == null ? void 0 : user3.pub)) {
        my[k] = obj;
      }
      if (obj.sent) {
        if (!obj.received)
          proposed[k] = obj;
        else
          gifts[k] = obj;
      }
    } catch (e) {
    }
  });
  return { my, proposed, gifts };
}
export { acceptGift, addPost, base64Extension, base64FileType, base64MimeType, countRating, createMd, detectMimeType, downloadFeed, downloadFile, downloadPost, formatDate, getFirstEmoji, giftPath, isEmoji, langParts, languages, loadFromHash, logEvent, parseMd, parsePost, reactToPost, uploadFeed, uploadText, useBackground, useChat, useGift, useGifts, useGuests, useLog, useMate, useMates, useMd, usePictureUpload, usePost, usePostTimestamp, usePosts, usePrivateChat, usePrivateChatCount, usePrivateChatList, useReaction, useReactions, useSpace, useSvgMouse, useTagList, useUserPosts, useZip };
//# sourceMappingURL=index.es.js.map
