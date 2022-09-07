import type { Config } from "jest";
import { defaults } from "ts-jest/presets";

const config: Config = {
  preset: "ts-jest",
  transform: {
    ...defaults.transform,
  },
  extensionsToTreatAsEsm: [".ts"],
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
};

export default config;
