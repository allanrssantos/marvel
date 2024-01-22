module.exports = {
    "rootDir": ".",
    "preset": "ts-jest",
    "testEnvironment": "node",
    "transformIgnorePatterns": ["node_modules/(?!axios)"],
    "transform": {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
      '^.+\\.(jpg|jpeg|png|gif|svg)$': 'jest-transform-stub',
    },
    "collectCoverage": true,
    "collectCoverageFrom": ["src/**/*.{ts,tsx}", "!src/**/*.test.{ts,tsx}"],
    "coverageDirectory": "coverage",
    "coverageReporters": ["lcov", "text-summary"],
    "clearMocks": true
};
