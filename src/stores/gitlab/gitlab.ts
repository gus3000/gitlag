import { defineStore } from 'pinia'
import { Gitlab } from '@gitbeaker/rest'
import router from '@/router'
import { useRoute } from 'vue-router'
import { gitlabApi } from '@/api/gitlab/api'
import type { ExpandedUserSchema } from '@gitbeaker/core'

const GITLAB_TOKEN_KEY = 'gitlab_token'

export const useGitlabStore = defineStore('gitlab.token', {
  state: () => ({
    gitlabToken: null,
    user: null as ExpandedUserSchema,
  }),
  getters: {},
  actions: {
    loadToken() {
      const token = localStorage.getItem(GITLAB_TOKEN_KEY)
      if (!token) {
        const route = useRoute()
        if (route.name != 'settings') router.push({ path: '/settings' })
      }
      this.gitlabToken = token
    },
    setToken(token: string) {
      localStorage.setItem(GITLAB_TOKEN_KEY, token)
    },

    loadUser() {
      gitlabApi()
        .Users.showCurrentUser()
        .then((user) => {
          this.user = user
        })
    },
  },
})
