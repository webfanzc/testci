import { createTsdownConfig } from '../../tsdown.config.ts'

export default createTsdownConfig({
  entry: {
    index: './src/index.ts',
  },
  external: ['fast-glob', 'pkg-types', 'ts-dedent'],
})
