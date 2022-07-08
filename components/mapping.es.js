import { defineAsyncComponent, useDark, useToggle, markRaw } from "./vendor.es.js";
const scriptRel = "modulepreload";
const seen = {};
const base = "/components/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./AccountAvatar.story.es.js"), true ? ["AccountAvatar.story.es.js","vendor.es.js","plugin-vue_export-helper.es.js"] : void 0));
const Comp1 = defineAsyncComponent(() => __vitePreload(() => import("./AccountBadge.story.es.js"), true ? ["AccountBadge.story.es.js","vendor.es.js","plugin-vue_export-helper.es.js"] : void 0));
let files = [
  { "id": "src-account-accountavatar-story-vue", "path": ["Account", "Avatar"], "story": { "id": "src-account-accountavatar-story-vue", "title": "Avatar", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-account-accountavatar-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "framework": "vue3", "index": 0, component: Comp0 },
  { "id": "src-account-accountbadge-story-vue", "path": ["Account", "Badge"], "story": { "id": "src-account-accountbadge-story-vue", "title": "Badge", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-account-accountbadge-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "framework": "vue3", "index": 1, component: Comp1 }
];
let tree = [{ "title": "Account", "children": [{ "title": "Avatar", "index": 0 }, { "title": "Badge", "index": 1 }] }];
var Logo_square = "/components/gun-vue-logo.svg";
var Logo_dark = "/components/components.svg";
const config = { "plugins": [{ "name": "tailwind-tokens" }], "outDir": "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/app/public/components", "storyMatch": ["**/*.story.vue"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "tree": { "file": "title", "order": "asc" }, "theme": { "title": "Gun-Vue components", "colors": { "primary": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "logo": { "square": "/gun-vue-logo.svg", "light": "/components.svg", "dark": "/components.svg" }, "logoHref": "/" }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent" }, { "label": "White", "color": "#fff" }, { "label": "Light gray", "color": "#aaa" }, { "label": "Dark gray", "color": "#333" }, { "label": "Black", "color": "#000" }], "sandboxDarkClass": "dark", "routerMode": "hash", "vite": { "build": { "lib": false }, "server": { "fs": { "allow": ".." } }, "base": "/components/" }, "setupFile": "histoire.setup.js" };
const logos = { square: Logo_square, light: Logo_dark, dark: Logo_dark };
const histoireConfig = config;
const customLogos = logos;
const isDark = useDark({ valueDark: "htw-dark" });
const toggleDark = useToggle(isDark);
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
const copiedFromExistingVariant = [
  "state",
  "slots",
  "initState",
  "source",
  "responsiveDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file) {
      if (key === "story") {
        Object.assign(result.story, __spreadProps(__spreadValues({}, file.story), {
          file: markRaw(result),
          variants: file.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        }));
      } else if (key !== "component") {
        result[key] = file[key];
      }
    }
  } else {
    result = __spreadProps(__spreadValues({}, file), {
      component: markRaw(file.component),
      story: __spreadProps(__spreadValues({}, file.story), {
        title: file.story.title,
        file: markRaw(file),
        variants: file.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      })
    });
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = __spreadProps(__spreadValues({}, variant), {
      state: null,
      initState: null,
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    });
  }
  return result;
}
export { __vitePreload, customLogos, files, histoireConfig, isDark, mapFile, toggleDark, tree };
//# sourceMappingURL=mapping.es.js.map
