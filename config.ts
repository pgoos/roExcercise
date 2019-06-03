export default class Config {

    getEnvVariable(envVarName: string) {
      const envVariable = process.env[envVarName]
      if (envVariable !== undefined) {
        return envVariable
      } else {
        throw new Error(`Environment variable: "${envVarName}" not set`)
      }
    }

    get buildUrl(): string {
        return this.getEnvVariable("UiTestsUrl")
    }
    get buildLogin() {
        return this.getEnvVariable("UiTestsLogin")
    }
    get buildPassword() {
        return this.getEnvVariable("UiTestsPassword")
    }
}