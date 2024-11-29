import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://gitlab.activinnov.net/api/graphql',
  documents: ['src/**/*.ts'],
  ignoreNoDocuments: true,
  hooks: { afterOneFileWrite: ['prettier --write'] },
  generates: {
    './src/graphql/': {
      preset: 'client',
      config: {
        documentMode: 'string'
      }
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true
      }
    }
  }
}

export default config
