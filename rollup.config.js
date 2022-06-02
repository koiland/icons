import { babel } from '@rollup/plugin-babel';
import filesize from 'rollup-plugin-filesize';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default ['esm', 'cjs'].map((format = '') => ({
  input: 'src/icons/index.ts',
  output: {
    ...(format === 'esm' && { file: 'dist/index.esm.js' }),
    ...(format === 'cjs' && { file: 'dist/index.js' }),
    format,
    sourcemap: true,
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript(),
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
    }),
    filesize(),
  ].concat(format === 'cjs' ? commonjs() : []),
}));
