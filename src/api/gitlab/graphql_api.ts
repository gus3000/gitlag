import { gql, GraphQLClient } from 'graphql-request'
import 'dotenv/config'
import * as util from 'node:util'

const endpoint = 'https://gitlab.activinnov.net/api/graphql'

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GITLAB_TOKEN}`,
  },
})

const query = gql`
  {
    currentUser {
      reviewRequestedMergeRequests(state: opened) {
        nodes {
          webUrl
          sourceBranch
          targetBranch
          author {
            id
            name
          }
          assignees {
            nodes {
              id
              name
            }
          }
          approvedBy {
            nodes {
              id
              name
            }
          }
          diffStatsSummary {
            additions
            deletions
          }
          discussions {
            nodes {
              id
              createdAt
              resolved
              resolvable
              notes {
                nodes {
                  author {
                    name
                  }
                  body
                }
              }
            }
          }
        }
      }
    }
  }
`
let response = await graphQLClient.request(query)

console.log(
  util.inspect(response.currentUser.reviewRequestedMergeRequests.nodes, {
    showHidden: false,
    depth: null,
  }),
)
