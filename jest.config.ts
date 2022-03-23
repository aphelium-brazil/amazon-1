import { pathsToModuleNameMapper } from "ts-jest/utils";

import { compilerOptions } from "./tsconfig.json";

export default {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ["<rootDir>/src/modules/**/useCases/**/*.ts"],
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    coverageReporters: ["text-summary", "lcov"],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: "<rootDir>/src/",
    }),
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/*.spec.ts"],
    // A list of paths to modules that run some code to configure or set up the testing framework before each test
setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
