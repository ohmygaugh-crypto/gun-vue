<script setup>
import { ref, watch } from 'vue'
const link = ref()

const emit = defineEmits(['update', 'close']);

const props = defineProps({
  id: { type: String },
})

const add = ref()

watch(link, lnk => {
  if (lnk) {
    emit('update', youtubeLinkParser(lnk))
  } else {
    emit('update', null)
  }
})


function youtubeLinkParser(url) {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[2].length == 11) {
    return match[2];
  } else {
    return null;
  }
}



</script>

<template lang='pug'>
.flex.flex-wrap
  button.button.m-1(
    @click="add = !add" 
    :class="{ active: link }"
    )
    la-youtube
  ui-layer(:open="add" @close="add = false" :offset="'12vh'")
    .p-4.text-lg
      .flex.items-center.mb-2.gap-2
        la-youtube.text-2xl
        .text-xl.ml-2 Add a youtube video
        .flex-1
        button.button.text-xl
          la-check(@click="add = false")
        button.button.text-xl
          la-trash-alt(@click="link = null; add = false")
      input.p-4.my-4.w-full.border-1.border-dark-300(v-model="link" autofocus placeholder="Paste a Youtube video link")
      embed-youtube.min-w-80vw.mt-2(v-if="id" :video="id")
</template>

<style lang="postcss" scoped>
input,
textarea {
  @apply p-2 rounded-xl m-1;
}

.active {
  @apply bg-fuchsia-500;
}
</style>