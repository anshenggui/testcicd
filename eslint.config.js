import js from '@eslint/js';
import globals from 'globals';
import vue from 'eslint-plugin-vue';

export default [
  // 基础 JS 推荐规则
  js.configs.recommended,
  // Vue 推荐规则（flat config 模式）
  ...vue.configs['flat/recommended'],
  {
    // 匹配的文件类型
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2020,
        process: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // 可以根据项目需求调整规则
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    // 忽略的目录（和 .eslintignore 作用一样）
    ignores: ['dist/**', 'node_modules/**', 'build/**'],
  },
];
