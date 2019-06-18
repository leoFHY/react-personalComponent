import { resolve } from 'path';

export default {
  es5ImcompatibleVersions: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: true,
        title: 'KM',
        dll: true,
        hardSource: false,
        routes: {
          exclude: [/components/],
        },
      },
    ],
  ],
  alias: {
    components: resolve(__dirname, '../src/components'),
    utils: resolve(__dirname, '../src/utils'),
    config: resolve(__dirname, '../src/utils/config'),
    models: resolve(__dirname, '../src/models'),
    routes: resolve(__dirname, '../src/routes'),
    services: resolve(__dirname, '../src/services'),
  },
  hash: true,
  history: 'hash',
  // exportStatic: {
  //   htmlSuffix: true,
  //   dynamicRoot: true,
  // },
  publicPath: '/html/',
};
