import { reactive } from "./vendor.es.js";
import { useGun, useUser, currentRoom } from "./useDraw.es.js";
function useNewProject() {
  const project = reactive({
    title: ""
  });
  async function addProject() {
    var _a;
    const gun = useGun();
    const { user } = useUser();
    gun.user(currentRoom.pub).get("projects").get(project.title + "@" + user.pub).put(project, null, {
      opt: { cert: (_a = currentRoom.features) == null ? void 0 : _a.projects }
    });
  }
  return { project, addProject };
}
export { useNewProject };
