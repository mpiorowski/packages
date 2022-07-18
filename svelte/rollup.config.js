import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

export default {
  input: 'src/index.ts',
  output: {
    format: 'esm',
    name: 'app',
    dir: 'package',
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({ output: 'bundle.css' }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
};
