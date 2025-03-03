<script setup>
import { usePosts, useUser, countRating } from '#composables'
import { ref, computed } from 'vue'

const { user } = useUser()

const props = defineProps({
  tag: { type: String },
  header: { type: Boolean, default: true }
})
const emit = defineEmits(['close', 'browse', 'user'])

const { posts, backlinks, countPosts, countBacklinks, downloadPosts, downloading, uploadPosts } = usePosts(props.tag)

const add = ref()



const openBacklinks = ref(false)
const showHidden = ref(false)

const filteredPosts = computed(() => {
  const list = {}
  for (let hash in posts) {
    const rating = countRating(posts[hash])
    if (showHidden.value || rating > 0) {
      list[hash] = posts[hash]
    }
  }
  return list
})


</script>

<template lang='pug'>
.flex.flex-col.z-10.items-start.justify-items-stretch
  .flex.flex-wrap.items-center.p-2.text-xl.sticky.z-100.top-0.shadow-lg.bg-light-700.w-full(v-if="header")
    .text-xl.ml-2.font-bold.cursor-pointer(style="flex: 1 100px " @click="$emit('close')") # {{ tag }} 
    .flex-1
    .p-2.font-bold.mx-2 {{ countPosts }}
  .flex.flex-col.items-center.bg-dark-50.bg-opacity-20.backdrop-filter.backdrop-blur-md.flex-1.p-2.w-full.gap-8
    .p-2.flex.flex-wrap.z-300.text-sm.bg-light-300.bg-opacity-40.rounded-2xl.m-2.flex-1(
      style="order:-2147483647; flex: 1000 100%"
      v-if="user.pub"
      )
      util-share(v-if="header")
      .flex.flex-wrap.gap-2(
        v-if="user.pub"
        )
        button.button(@click="add = !add")
          transition(name="fade" mode="out-in")
            la-plus(v-if="!add")
            la-times(v-else)
          .ml-2.mr-1 Add
        label.button(title="Upload feed" for="import-feed")
          la-file-upload
          .ml-2.mr-1 Upload
        button.button(@click="showHidden = !showHidden")
          la-eye(v-if="showHidden")
          la-eye-slash(v-else)
          .ml-2 Show hidden
        button.button(title="Download feed" @click="downloadPosts()" v-if="countPosts > 0")
          la-file-download(v-if="!downloading")
          la-redo-alt.animate-spin(v-else)
          .ml-2.mr-1 Download
        slot
      input#import-feed.hidden(
        tabindex="-1"
        type="file",
        accept=".zip",
        ref="file"
        multiple
        @change="uploadPosts($event.target.files)"
      )
      transition(name="fade")
        post-form(:tag="tag" v-if="add" @close="add = false")
    .p-2.flex.items-center.gap-2(v-if="!user.pub" style="order:-2147483647; flex: 1000 100%")
      button.button(@click="user.auth = true") Authorize to post here
      slot

    transition-group(name="list")
      post-card.max-w-3xl.w-full.shadow-xl(
        v-show="tag != hash"
        :style="{ order: -countRating(authors), opacity: countRating(authors) > 0 ? 1 : 0.3 }"
        v-for="(authors, hash) in filteredPosts" 
        :key="hash" 
        :hash="hash"
        :tag="tag"
        :authors="authors"
        @click="emit('browse', hash)"
        )
</template>

