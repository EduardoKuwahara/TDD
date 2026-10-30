export class Email {
  constructor(public readonly endereco: string) {}
}

export class Person {
  constructor(
    public readonly nome: string,
    public readonly idade: number,
    public readonly emails: Email[],
  ) {}
}

export class ValidadorPerson {
  isValidToInclude(person: Person | null): string[] {
    if (person === null) return ["Pessoa não pode ser nula"];

    const erros: string[] = [];
    if (!this.nomeValido(person.nome)) {
      erros.push("Nome deve ter pelo menos duas partes e conter apenas letras");
    }
    if (!Number.isInteger(person.idade) || person.idade < 1 || person.idade > 200) {
      erros.push("Idade deve estar entre 1 e 200");
    }
    if (person.emails.length === 0) {
      erros.push("Pessoa deve ter pelo menos um email");
    } else if (person.emails.some((email) => !this.emailValido(email.endereco))) {
      erros.push("Email deve estar no formato parte@parte.parte");
    }
    return erros;
  }

  private nomeValido(nome: string): boolean {
    const partes = nome.trim().split(/\s+/);
    return (
      partes.length >= 2 &&
      partes.every((parte) => /^\p{L}+$/u.test(parte))
    );
  }

  private emailValido(endereco: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(endereco);
  }
}
