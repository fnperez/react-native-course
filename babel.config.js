module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/src': './src',
            '@/components': './src/components',
            '@/navigation': './src/navigation',
            '@/screens': './src/screens',
            '@/styles': './src/styles',
            '@/theme': './src/theme.ts',
          },
        },
      ],
    ],
  }
}
