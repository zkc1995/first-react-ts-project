module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  ignorePatterns: ['node_modules/'],
  rules: {
    // 强制数组方法的回调函数中有 return 语句
    'array-callback-return': 'error',
    // 不能使用++运算
    'no-plusplus': 0,
    // 不能出现相同的case
    'no-duplicate-case': 'error',
    // 操作符换行风格
    'operator-linebreak': 0,
    // 在对象的括号后加','符号
    '@typescript-eslint/comma_dangle': 0,
    // 导入配置
    'import/no-extraneous-dependencies': 0,
    // 偏向于使用default导出
    'import/prefer-default-export': 0,
    // "import/extensions": "off",
    // 无法解决的导入
    'import/no-unresolved': 0,
    //对象属性换行
    'object-curly-newline': 0,
    // 禁止出现多行空行
    'no-multiple-empty-lines': 1,
    // 禁用出现未使用过的标
    'no-unused-labels': 1,
    // 禁用不必要的转义字符
    'no-useless-escape': 1,
    // 要求在注释周围有空行
    'lines-around-comment': 1,
    // 要求箭头函数的参数使用圆括号
    'arrow-parens': 0,
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': 1,
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 1,
    // 要求使用 let 或 const 而不是 var
    'no-var': 1,
    // const 函数必须有return 返回值
    'consistent-return': 0,
    // 禁用不必要的构造函数
    'no-useless-constructor': 1,
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': 1,
    // 要求使用模板字面量而非字符串连接
    'prefer-template': 1,
    // 强制所有控制语句使用一致的括号风格
    curly: 1,
    // 强制剩余和扩展运算符及其表达式之间有空格
    'rest-spread-spacing': 1,
    // 强制在点号之前和之后一致的换行
    'dot-location': 1,
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 1,
    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 'error',
    // 禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': 1,
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': 'error',
    // 禁止自我赋值
    'no-self-assign': 1,
    // 不能出现未使用的变量(与jsx语法冲突)
    'no-unused-vars': 0,
    // 禁止对原生对象或只读的全局对象进行赋值
    'no-global-assign': 'error',
    // 禁用 alert、confirm 和 prompt
    'no-alert': 1,
    // 禁止条件表达式中出现赋值操作符
    'no-cond-assign': 1,
    // 禁止打印控制台日志
    'no-console': 0,
    //缩进2个字符
    indent: ['error', 2],
    //要求使用===和!==
    eqeqeq: 1,
    //补全代码最后缺失的';'符号
    semi: 1,
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': 1,
    //在对象的括号后加','符号
    'comma-dangle': 0,
    // 强制在逗号前后使用一致的空格
    'comma-spacing': 1,
    //双引号
    quotes: [1, 'single'],
    // 强制在函数括号内使用一致的换行
    'function-paren-newline': 0,
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': [
      'error',
      'interface'
    ],
    // any声明警告关闭
    '@typescript-eslint/no-explicit-any': 0,
    // 防止react组件没有进行prop校验
    'react/prop-types': 0
  },
  settings: {
    // 使用webpack中配置的resolve路径
    'import/resolver': 'webpack',
  },
};
