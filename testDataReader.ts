var fs = require('fs')

function parseJsonFile(filePath: string): any {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

export function loadOnboardingData() {
    const path = "./config/testData/onboardingData.json"
    const object = parseJsonFile(path)
    return object
}