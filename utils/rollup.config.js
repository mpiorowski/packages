import typescript from '@rollup/plugin-typescript';
export default {
  input: 'src/index.ts',
  output: {
    dir: 'package',
    format: 'cjs',
  },
  plugins: [typescript()],
};
