import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import svelte from 'rollup-plugin-svelte';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'package',
  },
  plugins: [
    svelte({
      include: 'src/**/*.svelte',
    }),
    css({ output: 'bundle.css' }),
    resolve({
      browser: true,
    }),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
};
