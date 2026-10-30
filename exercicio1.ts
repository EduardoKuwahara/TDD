export enum TipoTriangulo {
  EQUILATERO = "EQUILATERO",
  ISOSCELES = "ISOSCELES",
  ESCALENO = "ESCALENO",
}

export class Triangulo {
  classificar(a: number, b: number, c: number): TipoTriangulo {
    if (
      ![a, b, c].every(Number.isInteger) ||
      a <= 0 ||
      b <= 0 ||
      c <= 0 ||
      a + b <= c ||
      a + c <= b ||
      b + c <= a
    ) {
      throw new Error("Os lados não formam um triângulo válido");
    }

    if (a === b && b === c) return TipoTriangulo.EQUILATERO;
    if (a === b || a === c || b === c) return TipoTriangulo.ISOSCELES;
    return TipoTriangulo.ESCALENO;
  }
}
