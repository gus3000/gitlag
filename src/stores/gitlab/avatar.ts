import { defineStore } from 'pinia'

const GITLAB_AVATAR_KEY = 'gitlab_avatar'

export const useAvatarStore = defineStore('gitlab.avatar', {
  state: () => ({
    avatarUrl: null,
  }),

  getters: {},

  actions: {
    initAvatar() {
      if (this.avatarUrl !== null) return
      const savedAvatar = localStorage.getItem(GITLAB_AVATAR_KEY)
      if (savedAvatar !== null) {
        console.log('fetching avatar from local storage')
        this.avatarUrl = savedAvatar
      }
      console.log('setting avatar default value')
      this.avatarUrl = 'abcd'
      localStorage.setItem(GITLAB_AVATAR_KEY, this.avatarUrl)
    },
  },
})
