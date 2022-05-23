import { babel } from '@rollup/plugin-babel';
import filesize from 'rollup-plugin-filesize';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/icons/index.ts',
  output: {
    file: 'dist/index.esm.js',
    format: 'esm',
    sourcemap: true,
  },
  external: [/@babel\/runtime/, 'react'],
  plugins: [
    typescript(),
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
    }),
    filesize(),
  ],
};
