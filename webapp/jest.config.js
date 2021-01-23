module.exports = {
    setupFiles: [
        "../test.setup.js"
    ],
    setupFilesAfterEnv: [
        "../jest.config.framework.js"
    ],
    globals: {
        "__DivvyEnvironment": true
    },
    testRegex: "(/__tests__/.*?(\\.|/)(tests?|spec))\\.jsx?$",
    moduleDirectories: [
        "node_modules"
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/assetMock.js"
    },
    snapshotSerializers: [
        "jest-emotion/serializer"
    ],
    moduleFileExtensions: [
        "js",
        "jsx",
        "json"
    ],
    transform: {
        "\\.(gql|graphql)$": "jest-transform-graphql",
        ".jsx?$": "babel-jest"
    }
}