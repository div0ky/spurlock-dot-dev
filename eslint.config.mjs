// @ts-check
import stylistic from '@stylistic/eslint-plugin'
import perfectionist from 'eslint-plugin-perfectionist'

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  stylistic.configs.recommended,
  perfectionist.configs['recommended-natural'],
)
