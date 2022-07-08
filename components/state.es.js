import { isRef, unref } from "./vendor.es.js";
const STATE_SYNC = "__histoire:state-sync";
const SANDBOX_READY = "__histoire:sandbox-ready";
const EVENT_SEND = "__histoire:event";
const PREVIEW_SETTINGS_SYNC = "__histoire:preview-settings-sync";
const isObject = (val) => val !== null && typeof val === "object";
function toRawDeep(val, seen = /* @__PURE__ */ new Set()) {
  const unwrappedValue = isRef(val) ? unref(val) : val;
  const valueType = typeof unwrappedValue;
  if (valueType === "symbol" || valueType === "function") {
    return unwrappedValue.toString();
  }
  if (!isObject(unwrappedValue)) {
    return unwrappedValue;
  }
  if (seen.has(unwrappedValue)) {
    return Array.isArray(unwrappedValue) ? [] : {};
  }
  seen.add(unwrappedValue);
  if (Array.isArray(unwrappedValue)) {
    return unwrappedValue.map((value) => toRawDeep(value, seen));
  }
  return toRawObject(unwrappedValue, seen);
}
const toRawObject = (obj, seen = /* @__PURE__ */ new Set()) => Object.keys(obj).reduce((raw, key) => {
  raw[key] = toRawDeep(obj[key], seen);
  return raw;
}, {});
export { EVENT_SEND, PREVIEW_SETTINGS_SYNC, SANDBOX_READY, STATE_SYNC, toRawDeep };
//# sourceMappingURL=state.es.js.map
