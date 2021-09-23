module.exports = {
    testEnvironment: 'jsdom',
    bail: false,//테스트 케이스 하나만 실패해도 제스트가 테스트를 종료하지 않게 한다.
    moduleFileExtensions: ['js', 'svelte', 'ts'],
    transform:{
        '^.+\\.js$': 'babel-jest',
        '^.+\\.svelte$': 'svelte-jester'
    },
    verbose: true//제스트가 전체 테스트 결과를 요약해서 보여주지 않고 각 테스트의 결과를 보여준다.
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