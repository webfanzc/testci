import { createTsdownConfig } from '../../tsdown.config'

export default createTsdownConfig({
  entry: {
    'index': './src/index.ts',
  },
  external: ['fast-glob', 'pkg-types', 'ts-dedent'],
})
