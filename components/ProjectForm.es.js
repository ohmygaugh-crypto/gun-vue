import "./useDraw.es.js";
import { openBlock, createElementBlock, withDirectives, vModelText, createBaseVNode } from "./vendor.es.js";
import { useNewProject } from "./useProject.es.js";
import { _export_sfc } from "./plugin-vue_export-helper.es.js";
const _hoisted_1 = { class: "p-2 flex flex-col gap-2" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "font-bold" }, "New project", -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    withDirectives(createBaseVNode("input", {
      class: "p-2",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.project.title = $event),
      placeholder: "Project title"
    }, null, 512), [
      [vModelText, $setup.project.title]
    ]),
    createBaseVNode("button", {
      class: "button",
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.addProject())
    }, "Add Project")
  ]);
}
const _sfc_main = {
  __name: "ProjectForm",
  setup(__props, { expose }) {
    expose();
    const { project, addProject } = useNewProject();
    const __returned__ = { project, addProject, useNewProject };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/project/ProjectForm.vue";
var ProjectForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/project/ProjectForm.vue"]]);
export { ProjectForm as default };
