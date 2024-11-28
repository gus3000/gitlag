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
  query {
    currentUser {
      authoredMergeRequests(state: opened) {
        nodes {
          webUrl,
          sourceBranch,
          targetBranch
        }
      }
    }
  }
`
let response = await graphQLClient.request(query)

console.log(util.inspect(response, {showHidden: false, depth: null, colors: true}))
