import { useUser, useGun, currentRoom, user } from "./useDraw.es.js";
import { ref, watchEffect, reactive, GB } from "./vendor.es.js";
const rootsTags = ["rooms"];
function useReaction({ tag, hash, back } = {}) {
  const { user: user2 } = useUser();
  const reaction = ref("\u{1F44D}");
  const gun = useGun();
  const roomDb = gun.user(currentRoom.pub);
  watchEffect(() => {
    if (rootsTags.includes(tag)) {
      roomDb.get(tag).get(`${hash}@${user2.pub}`).on((d) => {
        if (d && d !== true) {
          reaction.value = d;
        }
      });
    } else {
      roomDb.get("posts").get(`${tag}:${hash}@${user2.pub}`).on((d) => {
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
  const { user: user2 } = useUser();
  const gun = useGun();
  console.log(tag, hash, reaction);
  if (tag == "rooms") {
    let myPost = gun.user(currentRoom.pub).get(tag).get(`${hash}@${user2.pub}`);
    let current = await myPost.then();
    myPost.put(!current ? reaction : null, null, {
      opt: { cert: (_a = currentRoom.features) == null ? void 0 : _a[tag] }
    });
  } else {
    let myLink = gun.user(currentRoom.pub).get("posts");
    if (!back) {
      myLink = myLink.get(`${tag}:${hash}@${user2.pub}`);
    } else {
      myLink = myLink.get(`${hash}:${tag}@${user2.pub}`);
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
  const gun = useGun();
  const posts = reactive({});
  gun.user(currentRoom.pub).get("posts").map().on((d, k) => {
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
  const gun = useGun();
  gun.user(pub).get("mates").map().once((text, matePub) => {
    if (text) {
      mates[matePub] = {
        emoji: getFirstEmoji(text),
        text
      };
      gun.user(matePub).get("mates").get(pub).on((d) => {
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
  let em = GB.break(text)[0];
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
export { countRating, getFirstEmoji, isEmoji, reactToPost, useMate, useMates, useReaction, useReactions, useUserPosts };
