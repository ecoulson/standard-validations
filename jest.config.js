module.exports = {
    transform: {
        '^.+\\.(t|j)sx?$': ['@swc/jest'],
    },
    setupFilesAfterEnv: [`${__dirname}/test/jest-setup.ts`],
    coveragePathIgnorePatterns: ['/node_modules/', '/lib/'],
    testPathIgnorePatterns: ['/node_modules/', '/lib/'],
};
