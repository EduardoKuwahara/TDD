module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: ["exercicio1.ts", "exercicio2.ts", "exercicio3.ts"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "html", "lcovonly"],
};
