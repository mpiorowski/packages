import typescript from '@rollup/plugin-typescript';
export default {
  input: 'src/index.ts',
  output: {
    dir: 'package',
    sourcemap: true,
  },
  plugins: [typescript({ tsconfig: './tsconfig.json' })],
};
