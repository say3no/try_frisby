module.exports = {
    projects: [{
            bail: true,
            verbose: false,
            displayName: 'tests',
            testMatch: [
                '<rootDir>/tests/*.js',
                '<rootDir>/tests/**/*.js',
            ],
        },
        {
            displayName: 'ES lint',
            runner: 'jest-runner-eslint',
            testPathIgnorePatterns: [
                '/examples/',
                '/node_modules/',
                '/__eslint__/',
                '/__fixtures__/',
            ],
            testMatch: [
                '<rootDir>/tests/*.js',
                '<rootDir>/tests/**/*.js',
            ],
        },
    ],
}