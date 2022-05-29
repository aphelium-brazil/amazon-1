import { InitialOptionsTsJest, pathsToModuleNameMapper } from "ts-jest";

import JSON5 from "json5";
import fs from "fs";

const tsconfigRaw = fs.readFileSync("tsconfig.json").toString();
const { compilerOptions } = JSON5.parse(tsconfigRaw);

const config: InitialOptionsTsJest = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ["<rootDir>/src/modules/**/useCases/**/*.ts"],
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    coverageReporters: ["text-summary", "lcov"],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: "<rootDir>/",
    }),
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/*.spec.ts"],
    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

    globals: {
        "ts-jest": {
            // ignore ts errors
            isolatedModules: true,
        },
    },
};

export default config;

