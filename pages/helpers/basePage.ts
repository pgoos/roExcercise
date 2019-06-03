import { t, Selector } from 'testcafe'

export default class BasePage {
    protected baseSelector : Selector

    constructor () {
        this.baseSelector = Selector("#app")
    }

    async continue(): Promise<void> {
        await t.click(this.baseSelector.find("button").withAttribute('type', 'submit'))
    }
}