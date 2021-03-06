const plugins = [
  [
    'css-modules-transform',
    {
      extensions: ['.styl'],
      preprocessCss: './preprocess',
      extractCss: './transpiled/react/stylesheet.css',
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    }
  ],
  ['inline-json-import', {}]
]

module.exports = {
  presets: [
    [
      'cozy-app',
      { presetEnv: { modules: false }, transformRuntime: { helpers: true } }
    ]
  ],
  env: {
    transpilation: {
      plugins: plugins,
      ignore: ['**/*.spec.jsx', '**/*.spec.js']
    },
    test: {
      presets: [['cozy-app', { transformRuntime: { helpers: true } }]],
      plugins: plugins
    }
  },
  ignore: ['examples/**/*']
}
