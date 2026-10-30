export enum Cargo {
  DESENVOLVEDOR = "DESENVOLVEDOR",
  DBA = "DBA",
  TESTADOR = "TESTADOR",
  GERENTE = "GERENTE",
}

export class Funcionario {
  constructor(
    public readonly nome: string,
    public readonly email: string,
    public readonly salarioBase: number,
    public readonly cargo: Cargo,
  ) {}
}

export class CalculadoraSalario {
  calcularSalarioLiquido(funcionario: Funcionario): number {
    if (
      !Number.isFinite(funcionario.salarioBase) ||
      funcionario.salarioBase < 0
    ) {
      throw new Error("Salário deve ser um número não negativo");
    }

    let percentual: number;
    switch (funcionario.cargo) {
      case Cargo.DESENVOLVEDOR:
        percentual = funcionario.salarioBase >= 3000 ? 0.2 : 0.1;
        break;
      case Cargo.DBA:
      case Cargo.TESTADOR:
        percentual = funcionario.salarioBase >= 2000 ? 0.25 : 0.15;
        break;
      case Cargo.GERENTE:
        percentual = funcionario.salarioBase >= 5000 ? 0.3 : 0.2;
        break;
      default:
        throw new Error("Cargo não suportado");
    }

    return Number((funcionario.salarioBase * (1 - percentual)).toFixed(2));
  }
}
