import { defineStore } from 'pinia'
import { Gitlab } from '@gitbeaker/rest'

export const useProjectStore = defineStore('gitlab.projects', {
  state: () => {
    return {
      projects: [],
    }
  },

  actions: {
    async load() {

      this.projects = await api.Projects.all({ maxPages: 2 })
    },
  },
})
