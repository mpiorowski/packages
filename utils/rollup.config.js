import typescript from '@rollup/plugin-typescript';
export default {
  input: 'src/index.ts',
  output: {
    dir: 'package',
    format: 'iife',
    name: 'index',
  },
  plugins: [typescript()],
};
