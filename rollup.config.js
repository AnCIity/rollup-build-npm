import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel'
import jsx from 'acorn-jsx'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss-modules'
// import autoprefixer from 'autoprefixer'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/index.ts',
  acornInjectPlugins: [jsx()],
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extract: true // extracts to `${basename(dest)}.css`
      // plugins: [autoprefixer()],
    }),
    typescript({ jsx: 'preserve' }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx', '.css', '.less']
    }),
    uglify()
  ],
  output: [
    // {
    //   file: 'dist/index.js',
    //   format: 'cjs'
    // },
    {
      file: 'lib/index.esm.js',
      format: 'esm'
    }
    // {
    //   file: 'dist/index.umd.js',
    //   format: 'umd',
    //   name: 'libName',
    //   plugins: [
    //     getBabelOutputPlugin({
    //       presets: ['@babel/preset-env', { modules: 'umd' }]
    //     })
    //   ]
    // }
  ],
  external: ['antd', 'react', 'react-dom']
}
