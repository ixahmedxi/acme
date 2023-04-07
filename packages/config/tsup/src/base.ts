import { Options } from 'tsup';

export const baseConfig = (args: Options): Options => ({
  format: ['esm', 'cjs'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: !args.watch,
  minify: true,
  treeshake: true,
});
