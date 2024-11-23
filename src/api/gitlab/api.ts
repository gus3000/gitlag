import { Gitlab } from '@gitbeaker/rest'
import { useGitlabStore } from '@/stores/gitlab/gitlab'



export const gitlabApi = () => {
  const store = useGitlabStore()

  return new Gitlab({
    token: store.gitlabToken,
    host: 'https://gitlab.activinnov.net/',
  })
}
