module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/components': './src/components',
            '@/ds': './src/components/DesignSystem',
            '@/navigation': './src/navigation',
            '@/screens': './src/screens',
            '@/src': './src',
          },
        },
      ],
    ],
  }
}
