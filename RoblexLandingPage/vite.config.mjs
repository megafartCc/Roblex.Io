import { defineConfig } from 'vite';
import path from 'node:path';

const bufferUtilsPath = path.resolve(
  __dirname,
  'node_modules/three/examples/jsm/utils/BufferGeometryUtils.js',
);

export default defineConfig({
  preview: {
    allowedHosts: true,
  },
  resolve: {
    alias: {
      'three/examples/jsm/utils/BufferGeometryUtils.js':
        path.resolve(__dirname, 'src/shims/BufferGeometryUtils.js'),
      'three/examples/jsm/utils/BufferGeometryUtils.js?real': bufferUtilsPath,
    },
  },
});
