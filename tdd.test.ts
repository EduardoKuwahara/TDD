import {
  TipoTriangulo,
  Triangulo,
} from "./exercicio1";
import { Email, Person, ValidadorPerson } from "./exercicio2";
import { CalculadoraSalario, Cargo, Funcionario } from "./exercicio3";

describe("Exercício 1 - triângulos", () => {
  const triangulo = new Triangulo();

  test.each([
    [[4, 5, 6], TipoTriangulo.ESCALENO],
    [[4, 4, 5], TipoTriangulo.ISOSCELES],
    [[5, 5, 5], TipoTriangulo.EQUILATERO],
    [[4, 5, 4], TipoTriangulo.ISOSCELES],
    [[5, 4, 4], TipoTriangulo.ISOSCELES],
  ])("classifica lados %p", (lados, esperado) => {
    expect(triangulo.classificar(...(lados as [number, number, number]))).toBe(
      esperado,
    );
  });

  test.each([
    [0, 3, 3],
    [-1, 3, 3],
    [0, 0, 0],
    [1, 2, 3],
    [2, 1, 3],
    [1, 3, 2],
    [3, 1, 2],
    [2, 3, 1],
    [3, 2, 1],
    [1, 2, 4],
    [2, 1, 4],
    [1, 4, 2],
    [4, 1, 2],
    [2, 4, 1],
    [4, 2, 1],
  ])("rejeita lados inválidos %p", (...lados) => {
    expect(() => triangulo.classificar(...(lados as [number, number, number]))).toThrow();
  });
});

describe("Exercício 2 - validação de Person", () => {
  const validador = new ValidadorPerson();
  const pessoaValida = () =>
    new Person("Ana Souza", 30, [new Email("ana@empresa.com")]);

  test("aceita pessoa válida", () => {
    expect(validador.isValidToInclude(pessoaValida())).toEqual([]);
  });

  test.each([
    ["Ana", "nome com uma parte"],
    ["Ana Souza2", "nome com número"],
    ["Ana Souza!", "nome com símbolo"],
    ["", "nome vazio"],
  ])("rejeita %s: %s", (nome) => {
    expect(validador.isValidToInclude(new Person(nome, 30, [new Email("a@b.c")]))).toContain(
      "Nome deve ter pelo menos duas partes e conter apenas letras",
    );
  });

  test.each([0, -1, 201])("rejeita idade %i", (idade) => {
    expect(validador.isValidToInclude(new Person("Ana Souza", idade, [new Email("a@b.c")]))).toContain(
      "Idade deve estar entre 1 e 200",
    );
  });

  test("rejeita pessoa sem email", () => {
    expect(validador.isValidToInclude(new Person("Ana Souza", 30, []))).toContain(
      "Pessoa deve ter pelo menos um email",
    );
  });

  test.each(["abc", "abc@", "@empresa.com", "ana@empresa", "ana@.com"])(
    "rejeita email %s",
    (email) => {
      expect(validador.isValidToInclude(new Person("Ana Souza", 30, [new Email(email)]))).toContain(
        "Email deve estar no formato parte@parte.parte",
      );
    },
  );
});

describe("Exercício 3 - salário líquido", () => {
  const calculadora = new CalculadoraSalario();
  const funcionario = (cargo: Cargo, salario: number) =>
    new Funcionario("Ana Souza", "ana@empresa.com", salario, cargo);

  test.each([
    [Cargo.DESENVOLVEDOR, 3000, 2400],
    [Cargo.DESENVOLVEDOR, 2999, 2699.1],
    [Cargo.DBA, 2000, 1500],
    [Cargo.DBA, 1999, 1699.15],
    [Cargo.TESTADOR, 2000, 1500],
    [Cargo.TESTADOR, 1999, 1699.15],
    [Cargo.GERENTE, 5000, 3500],
    [Cargo.GERENTE, 4999, 3999.2],
  ])("calcula %s com salário %d", (cargo, salario, esperado) => {
    expect(calculadora.calcularSalarioLiquido(funcionario(cargo, salario))).toBe(
      esperado,
    );
  });

  test("rejeita salário negativo", () => {
    expect(() =>
      calculadora.calcularSalarioLiquido(funcionario(Cargo.DBA, -1)),
    ).toThrow();
  });
});
