import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve' // used to add lottie-player to the bundle

const { MAIN_BUILD_FILENAME } = require('./conf')

export default {
  input: 'src/ts/index.ts',
  output: {
    file: `dist/${MAIN_BUILD_FILENAME}.min.js`,
    sourcemap: true,
    format: 'iife',
    name: 'fl'
  },
  plugins: [
    typescript(),
    nodeResolve()
  ],
}
