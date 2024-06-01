import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  unocss: true,
  rules: {
    'antfu/top-level-function': 'off',
    'curly': 'off',
  }
})
