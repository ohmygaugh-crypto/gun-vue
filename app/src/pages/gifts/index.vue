<script setup>
import { safeHash } from '#composables';


</script>

<template lang='pug'>
gift-list(@open="$router.push(`/gifts/${safeHash($event)}`)")
</template>