<script setup>
import { computed } from 'vue'
import { selectedUser, useUser, getFirstEmoji } from '..';

const props = defineProps({
  source: {
    type: Object,
    default: {
      author: '',
      timestamp: '',
      text: 'empty'
    }
  }
})

const dateTime = computed(() => {
  return formatDate(Number(props.source.timestamp))
})

const { user } = useUser()

const isMe = computed(() => props.source.author == user.pub)

function formatDate(timestamp) {
  if (!timestamp) return
  const theDate = new Date(timestamp)
  const date = theDate.toLocaleDateString('en-CA')
  const time = theDate.toLocaleTimeString('ru-RU')
  return {
    full: date + ' ' + time,
    date,
    time,
    // ms: ms(Date.now() - theDate.getTime()),
  }
}
</script>

<template lang='pug'>
.p-1.flex.flex-col.w-full.gap-1(:style="{ alignItems: isMe ? 'end' : 'start' }")
  .flex.items-center.w-full(:style="{ flexDirection: isMe ? 'row-reverse' : 'row' }")
    account-badge.opacity-50.hover_opacity-90.transition(:pub="source.author" :showName="true" :size="20" @click="selectedUser.pub = source.author")
    .ml-2.text-sm.opacity-20.hover_opacity-80.transition.cursor-default.text-light-200  {{ dateTime?.time }}
    .flex-1
    .ml-2.text-sm.opacity-20.hover_opacity-80.transition.cursor-default.text-dark-200 {{ dateTime?.date }} 
  .px-2.py-1.bg-light-300.bg-opacity-80.rounded-b-xl.max-w-max.break-all.overflow-hidden(:style="{ borderTopLeftRadius: isMe ? '12px' : '0px', borderTopRightRadius: isMe ? '0px' : '12px', fontSize: source.text == getFirstEmoji(source.text) ? '4em' : '1em' }")
    slot {{ source.text }}
</template>