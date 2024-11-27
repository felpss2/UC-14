const globals = require('globals');

module.exports = [
  {
    files: ['**/*.js'], 
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module', 
      globals: {
        ...globals.browser, 
        ...globals.node,
      },
    },
    rules: {
      'indent': ['error', 2], // Requer indentação de 2 espaços
      'semi': ['error', 'always'], // Requer ponto e vírgula no final
      'quotes': ['error', 'single'], // Aspas simples obrigatórias
      'eol-last': ['error', 'always'], // Exige nova linha no final do arquivo
      'no-trailing-spaces': 'error', // Proíbe espaços em branco no final da linha
      'no-multiple-empty-lines': ['error', { max: 1 }], // No máximo uma linha vazia

      // Regras de boas práticas
      'eqeqeq': 'error', // Obriga o uso de === e !==
      'curly': 'error', // Exige chaves mesmo em blocos de uma linha
      'no-eval': 'error', // Proíbe o uso de eval()
      'no-alert': 'warn', // Emite alerta para uso de alert(), confirm(), etc.
      'no-console': 'warn', // Gera aviso para console.log
      'consistent-return': 'error', // Exige retorno consistente nas funções
      'default-case': 'warn', // Requer caso padrão em switch

      // Regras de variáveis
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used' }], // Proíbe variáveis não utilizadas
      'no-undef': 'error', // Proíbe uso de variáveis indefinidas
      'prefer-const': 'error', // Sugere usar const quando possível
      'no-var': 'error', // Proíbe o uso de var
      'no-shadow': 'error', // Proíbe declaração de variáveis com mesmo nome

      // Regras de estilo de código
      'array-bracket-spacing': ['error', 'never'], // Proíbe espaços em arrays
      'block-spacing': 'error', // Exige espaçamento ao redor de blocos
      'camelcase': 'warn', // Sugere o uso de camelCase para variáveis e funções
      'comma-dangle': ['error', 'always-multiline'], // Exige vírgula final em objetos e arrays multilinha
      'key-spacing': ['error', { beforeColon: false, afterColon: true }], // Controla espaço em objetos

      // Regras para funções
      'func-names': 'warn', // Emite aviso para funções anônimas
      'arrow-spacing': ['error', { before: true, after: true }], // Espaços ao redor de =>
      'no-param-reassign': 'warn', // Evita reatribuir parâmetros de funções

      // Regras de performance e segurança
      'no-new-object': 'error', // Proíbe o uso de Object() em vez de {}
      'no-prototype-builtins': 'error', // Proíbe chamadas diretas a métodos de protótipos
      'no-return-await': 'error', // Evita uso de return await
      'no-useless-return': 'error', // Proíbe retornos redundantes

      // Regras extras para garantir qualidade
      'no-duplicate-imports': 'error', // Proíbe importações duplicadas
      'no-self-compare': 'error', // Proíbe comparações do tipo x === x
      'no-unreachable': 'error', // Proíbe código inatingível após return ou throw
      'no-mixed-operators': 'error', // Evita confusão com operadores mistos
      'radix': 'error', // Obriga usar parâmetro radix em parseInt
  
    
   
    },
  },
];
