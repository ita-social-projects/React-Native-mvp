module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['babel-preset-expo', '@babel/eslint-parser'],
    plugins: [['module-resolver', { alias: { '~': './src' } }]]
  }
}
