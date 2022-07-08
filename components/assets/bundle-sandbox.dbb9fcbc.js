import { reactive, parseQuery, ref, createApp, computed, watch, onMounted, h, _sfc_main, _sfc_main$1, createPinia, applyStateToVariant } from "../vendor.es.js";
import { mapFile, files, histoireConfig, isDark } from "../mapping.es.js";
import { STATE_SYNC, PREVIEW_SETTINGS_SYNC, SANDBOX_READY, toRawDeep } from "../state.es.js";
var sandbox = /* @__PURE__ */ (() => ".htw-range-input::-webkit-slider-thumb {\n  height: .75rem;\n  width: .75rem;\n  -webkit-appearance: none;\n  appearance: none;\n  border-radius: 9999px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #00000040;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.htw-dark .htw-range-input::-webkit-slider-thumb {\n  border-color: #ffffff40;\n  --tw-bg-opacity: 1;\n  background-color: rgb(63 63 70 / var(--tw-bg-opacity));\n}\n.htw-range-input:hover::-webkit-slider-thumb {\n  --tw-border-opacity: 1 !important;\n  border-color: rgb(16 185 129 / var(--tw-border-opacity)) !important;\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(16 185 129 / var(--tw-bg-opacity)) !important;\n}\n.htw-range-input::-moz-range-thumb {\n  height: .75rem;\n  width: .75rem;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 9999px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #00000040;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.htw-dark .htw-range-input::-moz-range-thumb {\n  border-color: #ffffff40;\n  --tw-bg-opacity: 1;\n  background-color: rgb(63 63 70 / var(--tw-bg-opacity));\n}\n.htw-range-input:hover::-moz-range-thumb {\n  --tw-border-opacity: 1 !important;\n  border-color: rgb(16 185 129 / var(--tw-border-opacity)) !important;\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(16 185 129 / var(--tw-bg-opacity)) !important;\n}\n.v-popper {\n  line-height: 0;\n}\n.htw-dark .v-popper--theme-dropdown .v-popper__inner {\n  --tw-border-opacity: 1;\n  border-color: rgb(31 31 33 / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgb(63 63 70 / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgb(244 244 245 / var(--tw-text-opacity));\n}\n.htw-dark .v-popper--theme-dropdown .v-popper__arrow-inner {\n  --tw-border-opacity: 1;\n  border-color: rgb(63 63 70 / var(--tw-border-opacity));\n}\n.htw-dark .v-popper--theme-dropdown .v-popper__arrow-outer {\n  --tw-border-opacity: 1;\n  border-color: rgb(31 31 33 / var(--tw-border-opacity));\n}\n.v-popper--theme-dropdown.v-popper__popper--show-from .v-popper__wrapper {\n  transform: scale(.75);\n}\n.v-popper--theme-dropdown.v-popper__popper--show-to .v-popper__wrapper {\n  transform: none;\n  transition: transform .15s cubic-bezier(0,1,.5,1);\n}\n.v-popper__popper:focus-visible {\n  outline: none;\n}\n.htw-bind-col-size {\n  grid-template-columns: repeat(auto-fill,minmax(var(--histoire-col-size),1fr));\n}\nhtml, body {\n  background: transparent !important;\n}\nbody {\n  margin: 0;\n}\nhtml {\n  font-size: .875rem;\n  font-family: 'Lato', sans-serif;\n}\n.htw-sandbox-hidden {\n  display: none;\n}")();
const receivedSettings = reactive({});
function applyPreviewSettings(settings) {
  Object.assign(receivedSettings, settings);
}
const query = parseQuery(window.location.search);
const file = ref(mapFile(files.find((f) => f.id === query.storyId)));
const app = createApp({
  name: "SandboxApp",
  setup() {
    const story = computed(() => file.value.story);
    const variant = computed(() => {
      var _a;
      return (_a = story.value) == null ? void 0 : _a.variants.find((v) => v.id === query.variantId);
    });
    let synced = false;
    let mounted = false;
    window.addEventListener("message", (event) => {
      var _a, _b;
      if (((_a = event.data) == null ? void 0 : _a.type) === STATE_SYNC) {
        if (!mounted)
          return;
        synced = true;
        applyStateToVariant(variant.value, event.data.state);
      } else if (((_b = event.data) == null ? void 0 : _b.type) === PREVIEW_SETTINGS_SYNC) {
        applyPreviewSettings(event.data.settings);
      }
    });
    watch(() => variant.value.state, (value) => {
      var _a;
      if (synced && mounted) {
        synced = false;
        return;
      }
      (_a = window.parent) == null ? void 0 : _a.postMessage({
        type: STATE_SYNC,
        state: toRawDeep(value)
      });
    }, {
      deep: true
    });
    onMounted(() => {
      mounted = true;
    });
    return {
      story,
      variant
    };
  },
  render() {
    return [
      h("div", { class: "htw-sandbox-hidden" }, [
        h(_sfc_main, {
          story: file.value.story
        })
      ]),
      this.story && this.variant ? h(_sfc_main$1, {
        story: this.story,
        variant: this.variant,
        onReady: () => {
          var _a;
          (_a = window.parent) == null ? void 0 : _a.postMessage({
            type: SANDBOX_READY
          });
        }
      }) : null
    ];
  }
});
app.use(createPinia());
app.mount("#app");
watch(isDark, (value) => {
  if (value) {
    document.documentElement.classList.add(histoireConfig.sandboxDarkClass);
  } else {
    document.documentElement.classList.remove(histoireConfig.sandboxDarkClass);
  }
}, {
  immediate: true
});
//# sourceMappingURL=bundle-sandbox.dbb9fcbc.js.map
