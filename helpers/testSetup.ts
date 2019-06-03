import { t } from "testcafe"

export default class TestSetup {

    async testInitialization() {
        await t.maximizeWindow()
    }

}