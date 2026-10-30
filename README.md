# Atividade de TDD

Implementação dos exercícios de **JUnit e TDD** usando **TypeScript** e **Jest**.

## Exercícios

| Exercício | Implementação | Testes |
|---|---|---:|
| 1. Classificação de triângulos | `exercicio1.ts` | 20 |
| 2. Validação de `Person` | `exercicio2.ts` | 14 |
| 3. Calculadora de salário | `exercicio3.ts` | 9 |
| **Total** |  | **43** |

### Exercício 1 — Triângulos

Classifica triângulos como:

- equilátero;
- isósceles;
- escaleno.

Também valida lados zero ou negativos e a condição de existência do triângulo. Os testes incluem as permutações solicitadas para os casos em que a soma de dois lados é igual ou menor que o terceiro.

### Exercício 2 — Validação de `Person`

O método `isValidToInclude()` valida:

- nome com pelo menos duas partes;
- nome composto somente por letras;
- idade no intervalo de 1 a 200;
- existência de pelo menos um email;
- formato do email: `parte@parte.parte`.

### Exercício 3 — Calculadora de salário

Calcula o salário líquido de funcionários conforme o cargo e a faixa salarial:

- `DESENVOLVEDOR`;
- `DBA`;
- `TESTADOR`;
- `GERENTE`.

## Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- Node.js 18 ou superior
- npm

## Como executar

Abra um terminal na pasta do projeto:

```bash
cd TDD
```

Instale as dependências:

```bash
npm install
```

Execute o type-check do TypeScript:

```bash
npm run build
```

Execute os testes:

```bash
npm test
```

## Cobertura de código

O comando `npm test` executa os testes e gera automaticamente o relatório em [`coverage/index.html`](coverage/index.html).

| Arquivo | Statements | Branches | Functions | Lines |
|---|---:|---:|---:|---:|
| `exercicio1.ts` | 100% | 100% | 100% | 100% |
| `exercicio2.ts` | 95,83% | 90,90% | 100% | 100% |
| `exercicio3.ts` | 95,45% | 93,75% | 100% | 95,45% |
| **Total** | **96,55%** | **95,45%** | **100%** | **98,14%** |

O arquivo [`coverage/lcov.info`](coverage/lcov.info) também é gerado no formato LCOV.

## Estrutura do projeto

```text
TDD/
├── exercicio1.ts       # Triângulos
├── exercicio2.ts       # Person, Email e validação
├── exercicio3.ts       # Funcionário e cálculo de salário
├── tdd.ts              # Exportação dos módulos
├── tdd.test.ts         # Testes Jest
├── jest.config.cjs     # Configuração do Jest e cobertura
├── tsconfig.json       # Configuração do TypeScript
├── package.json        # Scripts e dependências
└── README.md
```
