module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@src': './src',
          '@components': './src/components',
          '@api': './src/api',
          '@hooks': './src/hooks',
          '@store': './src/store',
          '@utils': './src/utils',
          '@commons': './src/commons',
          '@navigation': './src/navigation',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
