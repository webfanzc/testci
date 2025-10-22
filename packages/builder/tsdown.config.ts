import { createTsdownConfig } from '../../tsdown.config'

export default createTsdownConfig({
  entry: {
    'index': './src/index.ts',
    'plugins/index': './src/plugins/index.ts',
  },
  external: ['fast-glob', 'pkg-types', 'ts-dedent'],
})
