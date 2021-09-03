module.exports = {
    testEnvironment: 'jsdom',
    bail: false,
    moduleFileExtensions: ['js', 'svelte'],
    transform:{
        '^.+\\.js$': 'babel-jest',
        '^.+\\.svelte$': 'svelte-jester'
    },
    verbose: true
}

// module.exports = {
//     moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
//     transform: {
//         '^.+\\.(js|jsx)?$': 'babel-jest'
//     },
//     testEnvironment: 'node',
//     moduleNameMapper: {
//         '^@/(.*)$': '<rootDir>/$1'
//     },
//     testMatch: [
//         '<rootDir>/**/*.spec.(js|jsx|ts|tsx)', '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
//     ],
//     transformIgnorePatterns: ['<rootDir>/node_modules/']
// };