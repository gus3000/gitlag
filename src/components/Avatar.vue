<script setup lang="ts">
import { useAvatarStore } from '@/stores/gitlab/avatar'
import { FwbAvatar } from 'flowbite-vue'

const avatarStore = useAvatarStore()
avatarStore.initAvatar()
</script>

<template>
  <!--  <div>avatar : {{ avatarStore.avatarUrl }}</div>-->
  <fwb-avatar :img="avatarStore.avatarUrl" />
</template>

<style scoped></style>
