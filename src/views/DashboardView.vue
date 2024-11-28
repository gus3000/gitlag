<script setup lang="ts">
import { useGitlabStore } from '@/stores/gitlab/gitlab'
import { gitlabApi } from '@/api/gitlab/api'

// const projectsStore = useProjectStore()

const gitlabStore = useGitlabStore()
gitlabStore.loadToken()
gitlabStore.loadUser()
</script>

<template>
  <!--  <div>token : {{ gitlabStore.gitlabToken }}</div>-->
  <div>user mail : {{ gitlabStore.user?.email }}</div>
</template>

<style scoped></style>
