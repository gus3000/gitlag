<script setup lang="ts">
import { useGitlabStore } from '@/stores/gitlab/gitlab'

const tokenStore = useGitlabStore()
</script>

<template>
  <div>
    Token Gitlab :
    <input type="text" value="" @input="(event) => tokenStore.setToken(event.target.value)" />
  </div>
</template>

<style scoped></style>
