export default {
    roots: ["<rootDir>/src"],
    collectCoverage: true,
    collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
    coverageDirectory: "coverage",
    testEnvironment: "node",
    coverageProvider: "v8",
    transform: {
        ".+\\.ts$": "ts-jest",
    },
};
